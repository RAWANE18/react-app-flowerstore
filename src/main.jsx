
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  './index.css'
import MainLayout from './MainLayout.jsx';
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Account from './pages/Account/Account.jsx'

import Products from './pages/Products/Products.jsx';
import Product from './pages/Product/Product.jsx'
import { Provider } from 'react-redux';
import { store } from './redux/Store.js';
import ShoppingCard from './pages/ShoppingCard/ShoppingCart.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path:"home",
        element:<Home/>
      },
      {
        path:"products",
        element:<Products/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path: "/shoppingcard",
        element: <ShoppingCard/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
    ]
  },
  {
    path:"account",
    element:<Account/>
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>,
)
