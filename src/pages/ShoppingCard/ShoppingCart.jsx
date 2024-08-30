import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/CartSlice";
import "./ShoppingCart.css";
import { LiaChevronDownSolid, LiaChevronUpSolid } from "react-icons/lia";
import { useState } from "react";
import Swal from "sweetalert2";
export default function ShoppingCard() {
  const cart = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  console.log(cart);
  const upaddtocart = () => {
    setCount(count + 1);
  };
  const downremovecart = () => {
    setCount(count - 1);
  };
  function handleButtonClick() {
  const { value: text } = Swal.fire({
    input: "textarea",
    inputLabel: "Write your note here...",
    inputPlaceholder: "Type your message here",
    inputAttributes: {
      "aria-label": "Type your message here"
    },
    showCancelButton: true,
    customClass: {
      popup: 'swal2-popup',
      title: 'swal2-title',
      input: 'swal2-input',
      confirmButton: 'swal2-confirm',
      cancelButton: 'swal2-cancel'
    }
  });
  if (text) {
    Swal.fire(text);
  }}
  return (
    <>
      {cart.length === 0 ? (
        <div className="empty-card">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="shoppingcards">
          {cart.map((flower) => (
            <div key={flower.productId} className="item">
              <img
                src={flower.image}
                style={{ width: "150px", height: "150px" }}
              />
              <div className="content">
                <h3>{flower.productName}</h3>
                <p>${flower.price}</p>
                <div className="buttons">
                <button onClick={() => dispatch(removeFromCart(flower))}>
                  remove
                </button>
                <button onClick={handleButtonClick}>Add Note</button>
                </div>
              </div>
              <div className="count">
                <LiaChevronUpSolid
                  className="amount-btn"
                  onClick={upaddtocart}
                />
                <p>{count}</p>
                <LiaChevronDownSolid
                  className="amount-btn"
                  onClick={downremovecart}
                />
              </div>
            </div>
          ))}
          <div className="bottom">
            <p>Total : <br /><span>${total.toFixed(2)}</span> </p>
            <button>Buy</button>
          </div>
        </div>
      )}
    </>
  );
}
