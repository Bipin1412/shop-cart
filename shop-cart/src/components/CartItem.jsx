import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";
const CartItem = ({item,itemIndex}) => {

  const dispatch=useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("item remove");
  }


  return (
    <div className="flex items-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-10 w-2/3 rounded-xl  
    shadow-[0_3px_10px_rgb(0,0,0,0.2)]
     ">
        <div className="">
          <img src={item.image} className="h-[180px] w-auto object-cover rounded-md"></img>
        </div>

        <div className="flex items-center justify-center ">
        <div >
          <h1 className="text-gray-700 font-semibold  text-lg text-left  w-40  ml-10" >
            {item.title}
            
          </h1>
          <h1 className="ml-10 mt-5 turncate" >
          {item.description.split(" ").slice(0,8).join(" ")+ "..."}
          </h1>
          <div className="flex justify-between ml-10 mt-5">
            <p>{item.price}</p>
            <div
            onClick={removeFromCart}
            >
            <MdDelete/>
            </div>
          </div>
        </div>


        </div>
       
    </div>
  )
};

export default CartItem;
