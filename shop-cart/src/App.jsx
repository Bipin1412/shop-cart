import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import Thank from "./components/Thank";

const App = () => {
  return (

    <div>
       <div className="bg-slate-900">
      <Navbar/>
    </div>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/Thank" element={<Thank/>}></Route>

    </Routes>


    </div>


   
  )
};

export default App;
