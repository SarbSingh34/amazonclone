import  { useState , useEffect } from 'react'; 
import { Link, useParams } from  "react-router-dom";

const Placeorder = () => 
{
    const[productdetails,setproductdetails] = useState([]);
    let { id } = useParams();

    useEffect(() =>
    {
            let list = 
         [
           {   id : 1111111   ,  rating : "8888888"  ,   price : "9999999" , name : "iphone 13" , image : "images/Img6.webp" },
           {   id : 22222222  ,  rating : "2222222"  ,   price : "8888888" , name : "iphone 12" , image : "images/Img5.webp" },
           {   id : 33333333  ,  rating : "3333333"  ,   price : "7777767" , name : "iphone 11" , image : "images/Img3.webp" },
           {   id : 4444444  ,   rating : "4444444"  ,   price : "6666666" , name : "iphone 10" , image : "images/Img9.webp" },
           {   id : 5555555  ,  rating : "5555555"  ,   price : "5555555" , name :  "iphone 8"  , image : "images/Img4.webp" },
           {   id : 6666666  ,  rating : "6666666"  ,   price : "4444444" , name :  "iphone 7"  , image : "images/Img7.webp" },
         ] 

         let item = list.filter(item =>
         {
               if(item.id == id)
               return item;
         })
         console.log(item);
            setproductdetails(list);
    },[]);


  return (
      <>
         <div className = "placeorder_pg" style = {{width:'100%',display:'flex'}}>
             <div className="first_part" style= {{width:'40%'}} >
                     <img src = "/images/Img6.webp" style = {{width:'55%',margin:'5% 22%'}} /> 
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
                    <Link to ="/checkout">
                        <button type ="submit" > Add to Cart </button>
                    </Link>
                  
                    <button type ="submit">  Buy Now   </button>
             </div>
         </div>
      </>
  )
};

export default Placeorder;
