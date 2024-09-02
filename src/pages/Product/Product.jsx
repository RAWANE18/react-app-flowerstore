import { useParams } from "react-router-dom";
import flower from "../../Flowers.js";
import { addTocart } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";
import './Product.css'


export default function Product() {
  
  const { id } = useParams();
  
  console.log("id::::", id);
  const product = flower.products.find((item) => 
    item.productId == id
  );
  console.log("product:::", product);
  const dispatch = useDispatch();
  return <>
  <div className="product-container">
 <div className="product"
       
      >
        <img src={product.image} alt="product image" />
        <div className="text">
        <h3>{product.productName}</h3>
        <p>{product.description}</p>
        <p className="price">Price : ${product.price}</p>
        <form>
        <h4>Write a note here ...</h4>
        <textarea></textarea>
        </form>
        <button onClick={() => dispatch(addTocart(product))}>Add to cart</button>
      </div>
      </div>
      </div>
  </>;
}
