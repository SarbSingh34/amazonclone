import React from 'react';
import Rightpanel from './Rightpanel';

const Productlist = (props) =>
 {
  return (
   <>
    <div className= "main_right">
            <div className="phone_card" 
                  style = {{backgroundColor:'brown'}}>
                  <div className="product_image" style = {{width:'100%'}}>
                        <img src = {props.img} 
                    style = {{width:'45%',borderRadius:'24px',margin:'3% 3%'}}/>
                  </div>
                  <div className="product_name"  style = {{fontSize:'24px',fontWeight:'bolder'}}>
                        {/* New Apple iPhone 11  */} {props.name}
                  </div>
                  <div className="product_rating"  style = {{fontSize:'21px',fontWeight:'bolder'}}>
                       {/* 5 Star  */}  {props.rating}
                  </div>
                  <div className="product_price"  style = {{fontSize:'21px',fontWeight:'bolder'}}>
                        {/* Price: 50,999 */}  {props.price}
                  </div>
           </div>
        </div>
   </> 
    )
};

export default Productlist;
