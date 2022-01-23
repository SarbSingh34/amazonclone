import react from "react";
const Advertisementimgdivide = () => 
{
  return (
    <>
          <div className = "main_advertisement">
                <div className="add_header">
                     <span style = {{fontSize:'22px', fontWeight:'bolder',color:'black'}}>   Upgrade your home | Amazon Brands & more   </span>  
                </div>
                <div className="add_body">
                          <img src = "/images/smartled1.jpg"/>
                         <img src = "/images/smartled2.jpg"/>
                         <img src = "/images/smartled3.jpg"/>
                         <img src = "/images/smartled4.jpg"/>
                </div>
                <div className = "add_footer">
                       <span style = {{fontSize:'18px',color:'black'}}> See More   </span> 
                </div>
           </div>
    </>
  )
};

export default  Advertisementimgdivide;