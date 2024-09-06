import { useState, useRef } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './Payment.css'; // Import your CSS file
import Swal from 'sweetalert2';
import {clearPaymentCart} from "../../redux/CartSlice"
import { useDispatch, useSelector } from 'react-redux';
import jsPDF from "jspdf";
const Payment = () => {
  const cart = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const form = useRef(null);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    if (name === 'number') {
      if (/^\d*$/.test(value) && value.length <= 16) {
        setState((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setState((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const validateForm = () => {
    const { number, expiry, cvc, name } = state;

    if (number.length !== 16) {
     
      return false;
    }

    if (name.trim() === '') {
     
      return false;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
     
      return false;
    }

    if (cvc.length < 3 || cvc.length > 4) {
    
      return false;
    }

    return true;
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        title: 'Payment Successful',
        text: 'Your payment has been processed successfully! A payment invoice will be downloaded to your device',
        icon: 'success',
      }).then(() => {
        
        setState({
            number: '',
            expiry: '',
            cvc: '',
            name: '',
            focus: '',
          });
       
        if (form.current) {
          form.current.reset();
        }

      });
      handleGenerateInvoice();
    }
  };
  const handleGenerateInvoice = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    const columns = ["Product", "Quantity", "Unit price", "Total"];
    const columnWidths = [80, 30, 40, 30];
    const startX = 10;
    const startY = 20;
    const rowHeight = 10;
    const maxProductNameWidth = 80;
    const headerColor = [222, 145, 145];
    const rowColor = [240, 240, 240];
    const borderColor = [0, 0, 0];
    doc.setFillColor(...headerColor);
    doc.rect(startX, startY - 5, columnWidths.reduce((a, b) => a + b, 0), rowHeight, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    columns.forEach((col, i) => {
      doc.text(col, startX + columnWidths.slice(0, i).reduce((a, b) => a + b, 0), startY);
    });
    doc.setDrawColor(...borderColor);
    doc.rect(startX, startY - 5, columnWidths.reduce((a, b) => a + b, 0), rowHeight);
    cart.forEach((product, index) => {
      const y = startY + rowHeight * (index + 1);
      const productText = doc.splitTextToSize(product.productName, maxProductNameWidth);
      doc.setFillColor(...rowColor);
      doc.rect(startX, y - 5, columnWidths.reduce((a, b) => a + b, 0), rowHeight, 'F');
      productText.forEach((line, lineIndex) => {
        doc.text(line, startX, y + lineIndex * 10);
      });
      doc.text(product.quantity.toString(), startX + columnWidths[0], y);
      doc.text(`$${product.price} `, startX + columnWidths[0] + columnWidths[1], y);
      doc.text(`$${(product.quantity * product.price).toFixed(2)} `, startX + columnWidths[0] + columnWidths[1] + columnWidths[2], y);
      doc.setDrawColor(...borderColor);
      doc.rect(startX, y - 5, columnWidths.reduce((a, b) => a + b, 0), rowHeight);
    });
    const totalY = startY + rowHeight * (cart.length + 1);
    doc.setFillColor(...headerColor);
    doc.rect(startX, totalY - 5, columnWidths.reduce((a, b) => a + b, 0), rowHeight, 'F');
    doc.setTextColor(0, 0, 0);
    doc.text("Total", startX, totalY);
    doc.text(`$${total.toFixed(2)} `, startX + columnWidths.reduce((a, b) => a + b, 0) - 30, totalY);
    doc.setDrawColor(...borderColor)
    doc.rect(startX, totalY - 5, columnWidths.reduce((a, b) => a + b, 0), rowHeight);
    doc.save("facture.pdf");
    dispatch(clearPaymentCart(cart))
  };


  return (
    <div className='cridt-card'>
      <div className="payment-form">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form ref={form} onSubmit={handlePayment}>
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            maxLength="16"
            pattern="\d{16}"
            required
          />

          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru (MM/YY)"
                pattern="\d\d/\d\d"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                maxLength="4"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>

          <div className="form-actions">
            <button className="btn btn-primary btn-block" type="submit"  >
              Pay
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
