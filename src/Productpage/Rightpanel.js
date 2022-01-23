import React from 'react';
import Productlist from  "./Productlist";
const Rightpanel = () => 
{
  return (
      <>
        <Productlist  rating = "11111111" price = "9999999" 
                  name = "iphone 13"     img  = "/images/Img1.webp"/>
        <Productlist   rating = "22222222" price = "8888888" 
                  name = "iphone 12"    img  = "/images/Img7.webp" />
        <Productlist  rating = "33333333" price = "7777777"
                   name = "iphone 11"   img  = "/images/Img3.webp"  />
        <Productlist  rating = "44444444" price = "6666666"
                   name = "iphone 10"   img  = "/images/Img4.webp" />

      </>
  )
};

export default Rightpanel;
