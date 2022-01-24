import React from 'react';

const Placeorder = () => 
{
  return (
      <>
         <div className = "placeorder_pg" style = {{width:'100%',display:'flex'}}>
             <div className="first_part" style= {{width:'40%'}} >
                     <img src = "images//Img2.webp" style = {{width:'55%',margin:'5% 22%'}} /> 
             </div>
             <div className="second_part" style= {{width:'40%',backgroundColor:'blue'}}>
                   <div className="second_header">
                        <span>New Apple iPhone 11 (64GB) - Green  </span>
                        <span>  35,990  ratings | 1000+ answered questions </span>
                   </div>
                   <div className="second_main">
                       <span> Price: 50,999.00 </span>
                   </div>
             </div>
             <div className="third_part" style= {{width:'20%', backgroundColor:'lightblue'}}>
                    <span> Content  </span>
                    <button type ="submit" > Add to Cart </button>
                    <button type ="submit">  Buy Now   </button>
             </div>
         </div>
      </>
  )
};

export default Placeorder;
