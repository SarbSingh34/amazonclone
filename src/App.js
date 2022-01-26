import react from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import  Mainpage from "./Components/Mainpage";
import Productpg from "./Components/Productpg";
import Placeorder from "./Components/Placeorder";
import Checkout from "./Components/Checkout";
import  { BrowserRouter as Router , Route,Routes } from "react-router-dom";
import CartContextProvider from "./Components/CartContext";


function App() {
  return (
      <Router>
             <div>
             
             <CartContextProvider>
             <Navbar />
                  <Routes>
                        <Route  path ="/display"     element={ <Productpg />}>  </Route>
                        <Route  path ="/order/:id"   element={ <Placeorder />}> </Route>
                        <Route  path ="/checkout"   element={  <Checkout /> }>  </Route>
                        <Route  path =""            element={  <Mainpage/>}>   </Route>
                  </Routes>
              </CartContextProvider>
      </div>
       </Router>
  )
}

export default App;
