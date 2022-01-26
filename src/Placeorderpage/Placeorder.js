
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const  Placeorder = () =>
{
  const [productdetails,setproductdetails] = useState([]);
  let {id} = useParams();

  useEffect(() =>
  {
   let list = 
   [
      { 
        "id" : "1111111",
      "name" : "New Apple iPhone 13",
      "rating" : "55555",
      "review" : "100000",
        "emi" : "2401",
        "image" : "/images/iPhone 13.jpg",
        "delivery" : "Wed,18,2021",
        "price" : "60999",
          "status" : "In Stock",
        "soldby"  :"Drshita Electronics",
        "about": ["New Apple iPhone 13"],
      },
      { 
        "id" : "2222222",
      "name" : "New Apple iPhone 12",
      "rating" : "444444",
      "review" : "200000",
      "emi" : "2402",
        "image" : "/images/iPhone 12.jpg ",
        "delivery" : "Wed,20,2021",
        "price" : "70999",
        "status" : "Out of Stock",
        "soldby"  :"Army Electronics",
        "about": ["New Apple iPhone 12"],
      },
      { 
        "id" : "3333333",
      "name" : "New Apple iPhone 11",
      "rating" : "333333",
      "review" : "300000",
      "emi" : "2403",
        "image" : "/images/iPhone  11.jpg ",
        "delivery" : "Wed,22,2021",
        "price" : "80999",
        "status" : "Out of Stock",
        "soldby"  :"Seva  Electronics",
        "about": ["New Apple iPhone 11"],
      },
      { 
        "id" : "4444444",
      "name" : "New Apple iPhone 10",
      "rating" : "2222222",
      "review" : "400000",
      "emi" : "2404",
        "image" : "/images/iPhone 10.png",
        "delivery" : "Wed,24,2021",
        "price" : "90999",
        "status" : "Out of Stock",
        "soldby"  :"Skill Electronics",
        "about": ["New Apple iPhone 10"],
      },
      { 
        "id" : "5555555",
      "name" : "New Apple iPhone 8",
      "rating" : "111111",
      "review" : "500000",
      "emi" : "2405",
        "image" : "/images/iPhone 8.png",
        "delivery" : "Wed,26,2021",
        "price" : "100999",
        "status" : "Out of Stock",
        "soldby"  :"Slefie Electronics",
        "about": ["New Apple iPhone 8 "],
      },
      { 
        "id" : "6666666",
       "name" : "New Apple iPhone 7",
       "rating" : "000000",
       "review" : "600000",
        "emi" : "2406",
        "image" : "/images/iPhone 7.jpg",
        "delivery" : "Wed,28,2021",
        "price" : "110999",
        "status" : "Out of Stock",
        "soldby"  :"Jasii Electronics",
        "about": ["New Apple iPhone 7"],
      },
   ]

   let item = list.filter((item)=>
   {
      if(item.id == id)
      return item ;
   });

    console.log(item);
    setproductdetails(item[0]);
  },[]);

return (
       <>
       <div className="placeorder_pg" style = {{width:"100%",display:"flex"}}>
                <div className="first_part" style = {{width:"40%"}}>
                    <img src = {productdetails.image}
                      style = {{width:"55%",margin:"5% 22%"}} /> 
                </div>
            <div className="second_part" style = {{width:"40%",backgroundColor:"lightblue"}}>
                      <div className="second_header">
                          {productdetails.name}
                          <br></br>
                          {productdetails.rating} 35,000 ratings | 100+ answered questions

                      </div>
                      <div className="second_main">
                          Price :- {productdetails.price} <br></br>
                          Free delivery :- {productdetails.delivery} <br></br>
                          EMI starts at :- {productdetails.delivery} No Cost EMI available <br></br>
                          {productdetails.status}
                          Sold by {productdetails.soldby} and Fulfilled by Amazon <br></br>
                          {productdetails.about}
                      </div>
                  </div>
                      <div className="third_part"
                      style = {{width:"20%",backgroundColor:"lightgray"}}>
                        <Link to = "/checkout">
                          <button type = "submit">
                            Add to Cart 
                          </button>
                        </Link>
                        <button type = "submit"> Buy Now 
                        </button>
                      </div>
          </div>
       
      </>
)


}

export default Placeorder;
