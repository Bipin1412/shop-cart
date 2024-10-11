import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import item from "./Home"

const Cart = () => {

  const {cart}=useSelector((state)=>state)
  const [totalAmount,setTotalAmount]=useState(0)

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2));
  },[cart])

  return (
    <div>
      {
        cart.length>0 ?
        (
          <div>
            <div>
              {
                cart.map((item,index)=>(
                   <CartItem key={item.id} item={item} itemIndex={index}/>
                ))
              }
            </div>


<div className="flex flex-col w-full">
  {/* Left section with item list */}


  {/* Right section with summary */}
  <div className="flex flex-col items-end p-6 fixed top-20 right-10 w-1/3 ">
    <div className="text-green-600 font-bold text-3xl">YOUR CART</div>
    <div className="text-green-700 text-5xl font-bold mt-4">SUMMARY</div>
    <p className="text-lg mt-2">
      <span>Total item: {cart.length}</span>
    </p>

    <div className="mt-6 text-right">
      <p className="text-xl bg-green-700 text-white rounded-lg p-3">
      Total Amount:${totalAmount}
      </p>
      
      <NavLink to="/Thank">
      <button className="bg-blue-500 text-white rounded-lg p-3 mt-5 hover:bg-blue-700">
        Checkout Now
      </button>

      </NavLink>
     
    </div>
  </div>
</div>






          </div>
        ) :
        (
          <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="text-xl">Cart is Empty</h1>
            <NavLink to="/">
            <button className="text-xl mt-10 bg-blue-500 p-5 rounded">Shop Now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
  
};

export default Cart;
