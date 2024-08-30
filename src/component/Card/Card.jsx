import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/CartSlice";
import "./Card.css";
import { TbShoppingCartPlus } from "react-icons/tb";


export default function Card({ flower }) {
  const dispatch = useDispatch();
  return (
    <div className="products-card">
      <TbShoppingCartPlus
        onClick={() => dispatch(addTocart(flower))}
        className="products-icon"
      />
      <img src={flower.image} alt="flower image" className="products-img" />
      <div className="products-info">
        <h3>{flower.productName}</h3>
        <p >Price: ${flower.price}</p>
      </div>
    </div>
  );
}
