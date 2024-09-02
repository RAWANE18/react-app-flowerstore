import { useDispatch, useSelector } from "react-redux";
import { removeFromCart ,addTocart,decrementFromCart } from "../../redux/CartSlice";
import "./ShoppingCart.css";
import { LiaChevronDownSolid, LiaChevronUpSolid } from "react-icons/lia";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
export default function ShoppingCard() {
  const cart = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  
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
                  onClick={() => dispatch(addTocart(flower))}
                />
                <p>{flower.quantity}</p>
                <LiaChevronDownSolid
                  className="amount-btn"
                  onClick={() => dispatch(decrementFromCart(flower))}
                />
              </div>
            </div>
          ))}
          <div className="bottom">
            <p>Total : <br /><span>${total.toFixed(2)}</span> </p>
          <Link to={"/payment"} >  <button>Buy</button></Link>
          </div>
        </div>
      )}
    </>
  );
}
