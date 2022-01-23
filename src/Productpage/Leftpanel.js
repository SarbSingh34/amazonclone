import React from 'react';

const Leftpanel = () => 
{
  return (
    <div className = "left_panel">
         <div className = "leftside_header" style = {{fontSize:'25px',fontWeight:'bolder'}}>
               Brand 
         </div>
            <div className="leftside_brandname">
                <label> 
                   <input type = "checkbox" value  = "Apple" /> Apple 
                </label>  
            </div>
            <div className="leftside_brandname">
                <label> 
                   <input type = "checkbox" value  = "Samsung" /> Samsung  
                </label>  
            </div>
            <div className="leftside_brandname">
                <label> 
                   <input type = "checkbox" value  = "Iphone" /> Iphone
                </label>  
            </div>
    </div>
  )
};

export default Leftpanel;
