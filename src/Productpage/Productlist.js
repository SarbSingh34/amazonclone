import React from 'react';
import Rightpanel from './Rightpanel';

const Productlist = (props) =>
 {
  return (
   <>
    
            <div className="phone_card" style= {{width:'29%'}}>
                  <div className="product_image" style = {{width:'100%'}}>
                        <img src = {props.definition.image} 
                    style = {{width:'92%',borderRadius:'24px',margin:'3%'}}/>
                  </div>
                  <div className="product_name"  style = {{fontSize:'24px',fontWeight:'bolder'}}>
                        {/* New Apple iPhone 11  */} {props.definition.name}
                  </div>
                  <div className="product_rating"  style = {{fontSize:'21px',fontWeight:'bolder'}}>
                       {/* 5 Star  */}  {props.definition.rating}
                  </div>
                  <div className="product_price"  style = {{fontSize:'21px',fontWeight:'bolder'}}>
                        {/* Price: 50,999 */}  {props.definition.price}
                  </div>
       
        </div>
   </> 
    )
};

export default Productlist;
