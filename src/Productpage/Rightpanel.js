import React , { useState , useEffect }from 'react';
import Productlist from  "./Productlist";
const Rightpanel = () => 
{
  const[listofproduct,setlistofproduct] = useState([]);

   useEffect(() =>
   {
        let list = 
        [
          { rating : "11111111" ,   price : "9999999" ,    name : "iphone 13"  },
          { rating : "2222222"  ,   price : "88888" ,      name : "iphone 12"  },
          { rating : "3333333"  ,   price  : "777777" ,    name : "iphone 11"  },
          { rating : "44444444" ,   price : "6666666666" , name : "iphone 10"  }
        ]
          //  setlistofproduct(list);
          // console.log(listofproduct);
   });

  return (
          <div className='inside'>
        {
            listofproduct.map((item) =>
              {
               <Productlist rating = {item.rating} price = {item.price} name = {item.name} />
              })
        }
         </div>
  )
};

export default Rightpanel;
