import { useState, useRef } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import './Payment.css'; // Import your CSS file
import Swal from 'sweetalert2';

const Payment = () => {
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
      Swal.fire({
        icon: 'error',
        title: 'Invalid Card Number',
        text: 'Card number must be 16 digits long.',
      });
      return false;
    }

    if (name.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Name',
        text: 'Name field cannot be empty.',
      });
      return false;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Expiry Date',
        text: 'Expiry date must be in MM/YY format.',
      });
      return false;
    }

    if (cvc.length < 3 || cvc.length > 4) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid CVC',
        text: 'CVC must be 3 or 4 digits long.',
      });
      return false;
    }

    return true;
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        title: 'Payment Successful',
        text: 'Your payment has been processed successfully!',
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
     
    }
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
            <button className="btn btn-primary btn-block" type="submit">
              PAY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
