import { useState } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
export default function NavBar() {
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }
  const cartlenght = useSelector((state) => state.cart.products.length);
  return (

    <div>
      <nav>
        <ul id="MenuItems">
        <li >
        <Link to="/" className='logo' >
          
           Lily Lane
          </Link>
          </li>
          <li className="hideOnmobile">
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li className="hideOnmobile">
            <Link to="/products">Products</Link>
          </li>
          <li className="hideOnmobile">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hideOnmobile">
            <Link to="/account">Account</Link>
          </li>
          <li>
          <Link to="/shoppingcard" className='shoppingcard'>
          
            <FaShoppingCart id='icon-card'/>
        
          {cartlenght > 0 && <div className="cart-length">{cartlenght}</div>}
        </Link>
        </li>
          <li className="menuButton" onClick={toggleSidebar}>
          <IoIosMenu />
          </li>
        </ul>
      

      <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <div className="close-btn" onClick={toggleSidebar}>
         <IoMdClose style={{color: "rgb(209, 164, 164)"}}/>
        </div>

        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
      </nav>
    </div>
  );
}