import react from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import  Mainpage from "./Components/Mainpage";
import Productpg from "./Productpage/Productpg";
import Placeorder from "./Placeorderpage/Placeorder";
import Checkout from "./Placeorderpage/Checkout";


function App() {
  return (
   <>
           <Navbar />
          {/* <Mainpage/> */}
          {/* <Productpg /> */}
          {/* <Placeorder /> */}
          <Checkout />
   </>
  );
}

export default App;
