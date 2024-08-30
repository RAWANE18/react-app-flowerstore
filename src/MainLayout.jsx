import { Outlet } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";



export default function MainLayout() {
  return (
    <div>
    <NavBar/>
    <Outlet />
    <Footer/>
  </div>
  )
}


