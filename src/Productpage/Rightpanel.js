import React , { useState , useEffect } from 'react';
import Productlist from  "./Productlist";
import  { Link } from "react-router-dom";

const Rightpanel = () => 
{
  const[listofproduct,setlistofproduct] = useState([]);

   useEffect(() =>
   {
           let list = 
        [
          {   id : 1111111   ,  rating : "8888888"  ,   price : "9999999"  ,  name : "iphone 13"  , image : "/images/iPhone 13.jpg" },
          {   id : 22222222  ,  rating : "2222222"  ,   price : "8888888"  ,  name : "iphone 11"  , image : "/images/iPhone  11.jpg" },
          {   id : 33333333  ,  rating : "3333333"  ,   price : "7777767"  ,  name : "iphone 12"  , image : "/images/iPhone 12.jpg" },
          {   id : 4444444   ,  rating : "444444"   ,   price : "6666666"  ,  name : "iphone 10" , image : "/images/iPhone 10.png" },
          {   id : 5555555   ,  rating : "5555555"  ,   price : "5555555"  ,  name :  "iphone 8" , image : "/images/iPhone 8.png" },
          {    id : 6666666  ,  rating : "6666666"  ,   price : "4444444"  ,  name :  "iphone 7"  , image : "/images/iPhone 7.jpg" },
        ] 
           setlistofproduct(list);
   },[]);

  return (
      <div className = "content"> 
          {
              listofproduct.map((item) =>
                  (
                    /* return   <Productlist rating = {item.rating} price = {item.price} name = {item.name} image = {item.image}/> */
                          <Link to = {`/order/` + item.id} >
                             return    <Productlist  definition = {item} />
                          </Link>
               
                  ))
          }
      </div>
    
  );
}

export default Rightpanel;
