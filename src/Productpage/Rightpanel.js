import React , { useState , useEffect } from 'react';
import Productlist from  "./Productlist";

const Rightpanel = () => 
{
  const[listofproduct,setlistofproduct] = useState([]);

   useEffect(() =>
   {
           let list = 
        [
          { rating : "8888888"  ,   price : "9999999" , name : "iphone 13" , image : "images/Img6.webp" },
          { rating : "2222222"  ,   price : "8888888" , name : "iphone 12" , image : "images/Img5.webp" },
          { rating : "3333333"  ,   price : "7777767" , name : "iphone 11" , image : "images/Img3.webp" },
          { rating : "44444444" ,   price : "6666666" , name : "iphone 10" , image : "images/Img9.webp" }
        ]
           setlistofproduct(list);
   },[]);

  return (
          <div className='inside'>
        {
            listofproduct.map((item) =>
              {
                 return   <Productlist rating = {item.rating} price = {item.price} name = {item.name} image = {item.image}/>
              })
        }
         </div>
  )
};

export default Rightpanel;
