import React from 'react';

const Rightpanel = () => 
{
  return (
      <>
       <div className= "main_right">
            <div className="phone_card" 
                  style = {{backgroundColor:'brown'}}>
                  <div className="product_image" style = {{width:'100%'}}>
                        <img src= "/images/Img1.webp" 
                    style = {{width:'45%',borderRadius:'24px',margin:'3% 3%'}}/>
                  </div>
                  <div className="product_name">
                        New Apple iPhone 11 (64GB) - Green 
                  </div>
                  <div className="product_rating">
                       5 Star 
                  </div>
                  <div className="product_price">
                        Price: 50,999
                  </div>
           </div>
        </div>
      </>
  )
};

export default Rightpanel;
