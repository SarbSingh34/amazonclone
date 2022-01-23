import React from 'react';
import Leftpanel from './Leftpanel';
import Rightpanel from "./Rightpanel";

const Productpg = () => 
{
  return (
       <div className = "main_productpg"     style =  {{display:'flex'}}>
           <div className = "left_product"    style =  {{width:'30%',backgroundColor:'lightgreen'}}>
                <Leftpanel />
            </div> 
            <div className = "right_product"  style =  {{width:'70%',backgroundColor:'lightblue'}}>
                <Rightpanel />
            </div> 
       </div>
  )
};

export default Productpg;
