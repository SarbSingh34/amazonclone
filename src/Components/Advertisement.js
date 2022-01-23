import React from 'react';
import Mainadvertisementstyle from "./Mainadvertisementstyle.css";

const Advertisement = () => 
{
  return (
    <>
          <div className = "main_advertisement">
                <div className="add_header">
                      <span style = {{fontSize:'22px', fontWeight:'bolder',color:'black'}}>   Upgrade your home | Amazon Brands & more   </span>  
                </div>
                <div className="add_body">
                        <img src = "images/add_body.jpg"/>
                </div>
                <div className = "add_footer">
                       <span style = {{fontSize:'18px',color:'black'}}> See More   </span> 
                </div>
           </div>
    </>
  )
};



export default Advertisement;
