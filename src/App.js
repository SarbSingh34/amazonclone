import react from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import  Mainpage from "./Components/Mainpage";
import Productpg from "./Productpage/Productpg";
import Placeorder from "./Placeorderpage/Placeorder";
import Checkout from "./Placeorderpage/Checkout";
import  { BrowserRouter as Router , Route,Routes } from "react-router-dom";

function App() {
  return (
      <Router>
             <div>
             <Navbar />
                  <Routes>
                        <Route  path ="/display"    element={ <Productpg />}>  </Route>
                        <Route  path ="/order"      element={ <Placeorder />}> </Route>
                        <Route  path ="/checkout"   element={  <Checkout /> }>  </Route>
                        <Route  path =""            element={  <Mainpage/>}>   </Route>
                  </Routes>
      </div>
       </Router>
  )
}

export default App;
