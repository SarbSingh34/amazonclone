import React  from 'react';
import Leftpanel from './Leftpanel';
import Rightpanel from "./Rightpanel";

const Productpg = () => 
{
  
  return (
       <div className =   "main_productpg"        style =  {{display:'flex'}}>
             <div className = "left_product"    style =  {{width:'30%',backgroundColor:'lightgreen'}}>
                <Leftpanel />
             </div> 
            <div className = "right_product"       style =  {{width:'70%',backgroundColor:'lightblue'}}>
               <div className = "main_rightpanel"  style = {{display:'flex',flexDirection:'row',
               flexWrap:'wrap'}}>
                
                  <Rightpanel  rating = "11111111" price = "9999999" 
                  name = "iphone 13"     img  = "/images/Img1.webp" />
                  <Rightpanel  rating = "22222222" price = "8888888" 
                  name = "iphone 12"    img  = "/images/Img7.webp" />
                  <Rightpanel  rating = "33333333" price = "7777777"
                   name = "iphone 11"   img  = "/images/Img3.webp"/>
                  <Rightpanel  rating = "44444444" price = "6666666"
                   name = "iphone 10"   img  = "/images/Img4.webp"/>
               </div>
            
            </div> 
       </div>
  )
};

export default Productpg;
