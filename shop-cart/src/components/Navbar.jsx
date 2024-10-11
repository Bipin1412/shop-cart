// import { IoBagHandleSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import logo from "../image/logo.jpg"


const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return (
    <div >

        <div className="flex justify-between items-center h-20 max-w-6xl mx-auto ">
         
         <NavLink to ="/">
         <div className="w-12 ">
          <img src={logo} alt="ecommerce" />
        </div>


         </NavLink>
        
      
          
          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 ">
          <NavLink to="/">
          <p>Home</p>

          </NavLink>

            <NavLink to="/cart">
           <div className="relative">
           <FaCartShopping className="text-2xl"/>
           {
            cart.length>0 && 
            <spam className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center
            animate-bounce rounded-full text-white"
            >{cart.length}</spam>
           }
           
           </div>

            </NavLink>
            
          </div>

        </div>

    </div>
  )
};

export default Navbar;
