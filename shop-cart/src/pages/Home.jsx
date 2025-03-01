import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoding]=useState(false);
  const[posts,setPosts]=useState([])

  async function fetchProductData(params) {
    setLoding(true)

    try{
        const result=await fetch(API_URL);
        const data=await result.json();
        setPosts(data);

    }
    catch(Error){
        console.log("error aagaya ji");
        setPosts([]);
    }
    setLoding(false)
  }
  useEffect(()=>{
    fetchProductData();
  },[])


  return (
    <div>
     {
       loading ? <Spinner/>:
       posts.length> 0 ? 
       (<div className="grid grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 ">
          {
          posts.map((post)=>(
            <Product key={post.id} post={post}/>
          ))
        }
        </div>
        
        ) :
       <div className="flex justify-center items-center">
        <p> no data found</p>
       </div>

     }
    </div>
  );
};

export default Home;
