import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/cartSlice"

const Product = ({post}) => {

  const {cart} =useSelector((state)=>state)
  const dispatch=useDispatch();
  const addToCart =()=>{
    dispatch(add(post))
    toast.success("Item added to cart");

  }

  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.success("Item remove from cart")
  }

  return (

    <div className="flex flex-col items-center justify-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline  
    shadow-[0_3px_10px_rgb(0,0,0,0.2)] pl-0 ">
      <div>
      <p className="text-gray-700 font-semibold  text-lg text-left truncate w-40 mt-1">{post.title}</p>
    </div>
    
    <div>
      <p className="pl-2">
        
        {post.description.split(" ").slice(0,10).join(" ")+ "..."}
      </p>
    </div>

    <div className="h-[180px]">
      <img src={post.image} className="h-full w-full" alt="api" />
    </div>

    <div>
      <p className="text-green-500">
        ${post.price}
      </p>
    </div>
      {
        cart.some((p)=>p.id===post.id) ?
        <button
        className="text-gray-700 border-2 border-gray-700 rounded-full p-1 hover:bg-gray-500"
        onClick={removeFromCart}
        >
          remove Item
        </button> :
        (
          <button
          className="text-gray-700 border-2 border-gray-700 rounded-full p-1 hover:bg-gray-500"
          onClick={addToCart}
          >
            Add TO Cart
          </button>
        )
      }
     
    </div>

   

    
  )
};

export default Product;
