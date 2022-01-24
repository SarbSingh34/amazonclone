import React , { useState , useEffect } from 'react';
import Productlist from  "./Productlist";

const Rightpanel = () => 
{
  return (
          <div className='inside'>
            <Productlist  rating = "1111111" price = "999999" name = "iPhone 13"  img = "images/Img2.webp"/>
            <Productlist  rating = "1111111" price = "999999" name = "iPhone 12"  img = "images/Img9.webp" />
            <Productlist  rating = "1111111" price = "999999" name = "iPhone 11"  img = "images/Img4.webp"/>
            <Productlist  rating = "1111111" price = "999999" name = "iPhone 10" img = "images/Img5.webp" />
            <Productlist  rating = "1111111" price = "999999" name = "iPhone 7" img = "images/Img7.webp" />
         </div>
  )
};

export default Rightpanel;
