import React from 'react';

const Checkout = () => 
{
  return (
     <div className="main_checkout" style = {{width:'100%',display:'flex',backgroundColor:'cadetblue'}}>
          <div className="first_checkout" style = {{width:'75%', backgroundColor:'lightblue',margin:'2%'}}>
                 <h3> Shopping  Cart   </h3>
                   <div className="checkout_items"> 
                     
                   </div>
          </div>
          <div className="second_checkout"   style = {{width:'25%' , backgroundColor:'lightgreen', margin:'2%'}}>
               Subtotal(2 items):
               <button> Proceed to Buy   </button> 
           </div>
     </div>
  )
};

export default Checkout;
