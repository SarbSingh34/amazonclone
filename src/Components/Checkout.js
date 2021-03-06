import React, { useContext } from 'react';
import Checkoutpg from "./Checkoutpg";
import { CartContext } from "./CartContext";

const Checkout = (props) => 
{
  const {item,size,increment} = useContext(CartContext);

  return (
     <div className="main_checkout" style = {{width:'100%',display:'flex',backgroundColor:'cadetblue'}}>
          <div className="first_checkout" style = {{width:'75%', backgroundColor:'lightblue',margin:'2%'}}>
                 <h3> Shopping  Cart   </h3>
                 
                    {
                         item.map((value) =>
                          {
                              return (
                                <Checkoutpg  />
                              )
                           })
                    }
                   
                    
                  {/* </div> */}
          </div>
          <div className="second_checkout"   style = {{width:'25%' , backgroundColor:'lightgreen', margin:'2%'}}>
               Subtotal(2 items):
               <button> Proceed to Buy   </button> 
           </div>
     </div>
  )
};

export default Checkout;
