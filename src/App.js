import react from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import  Mainpage from "./Components/Mainpage";
import Productpg from "./Productpage/Productpg";

function App() {
  return (
   <>
           <Navbar />
          {/* <Mainpage/> */}
          <Productpg />
   </>
  );
}

export default App;
