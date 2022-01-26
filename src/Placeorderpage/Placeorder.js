import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Placeorder = () => 
{
  const [productdetails, setproductdetails] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    let list = [
      {
         "id": "11111111",
        "name" : "New Apple iPhone 13",
        "rating" : "555555" ,
        "image": "/images/iPhone 13.jpg",
        "review": "10000",
        "emi": "2401",
        "delivery ": "Wednesday 18, Aug",
        "price": "60999",
        "status ": "In Stock",
        "soldby": "Drshitaa Electronics",
        // "about": [
        //   "Aaaaaaaaaaaaaaa",
        // ],
      },
      {
        "id": "2222222",
        "name" : " New Apple iPhone 12",
        "rating" : "99999" ,
        "image" : "images/iPhone 12.jpg",
        "review": "20000",
        "emi": "2402",
        "delivery ": "Wednesday 19, Aug",
        "price": "50999",
        "status ": "In Stock",
        "soldby": "Jenny Electronics",
        "about": [
          "Bbbbbbbbbbbbbbbbbbbbbbb",
        ],
      },
      {
        "id": "33333333",
        "name" : "New Apple  iPhone 11",
        "rating" : "99999" ,
        "review": "30000",
        "emi": "2403",
        "image": "/images/iPhone  11.jpg",
        "delivery ": "Wednesday 19, Aug",
        "price": "70999",
        "status ": "In Stock",
        "soldby": "Amrita Electronics",
        "about": [
          "Cccccccccccccccc",
        ],  
      },
      {
        "id": "44444444",
        "name" : " New Apple  iPhone 10",
        "rating" : "99999" ,
        "review": "40000",
        "emi": "2404",
        "image" : "/images/iPhone 10.png",
        "delivery ": "Wednesday 19, Aug",
        "price": "40999",
        "status ": "In Stock",
        "soldby": "Suman Electronics",
        "about": [
          "Ddddddddddddddddd",
        ], 
      },
      {
        "id": "5555555",
        "name" : " New Apple iPhone 8",
        "rating" : "99999" ,
        "review": "50000",
        "emi": "2405",
        "image" : "/images/iPhone 8.png",
        "delivery ": "Wednesday 19, Aug",
        "price": "50999",
        "status ": "In Stock",
        "soldby": "Deoll Electronics",
        "about": [
          "Eeeeeeeeeeeeeeee",
        ],
      },
      {
        "id": "666666",
        "name" : "New Apple iPhone 7",
        "rating" : "99999" ,
        "review": "60000",
        "emi": "2406",
        "image": "/images/iPhone 7.jpg",
        "delivery ": "Wednesday 19, Aug",
        "price": "609999",
        "status ": "In Stock",
        "soldby": "Simmu Electronics",
        "about": [
          "Fffffffffff",
        ],
      },
    ];

    let item = list.filter((item) => 
    {
      if (item.id == id) 
      return item;
    });
          // console.log(list[1]);
            console.log(item[0].name);
          // setproductdetails(item);
            //  console.log(list[0].name);
             setproductdetails(item[0]); 
  }, []);

  return (
    <>
      <div className="placeorder_pg" style={{ width: "100%", display: "flex" }}>
            <div className="first_part"  style={{ width: "40%" }}>
              <img src = {productdetails.image}
                style = {{ width: "55%", margin: "5% 22%"}}  /> 
            </div>
            <div  className = "second_part"
              style = {{ width: "40%", backgroundColor: "lightblue" }}>

              <div className="second_header">
                        {productdetails.name} 
                      <br></br>
                  {productdetails.rating} 35,990 ratings | 1000+ answered questions  
              </div>
              <div className="second_main">

                        Price :- {productdetails.price}    <br></br>
                      Free delivery :- {productdetails.delivery}     <br></br> 
                        EMI starts at  :- {productdetails.delivery}  No Cost EMI available  <br></br>
                          {productdetails.status}  
                          Sold by  {productdetails.soldby} and Fulfilled by Amazon   <br></br>
                      {productdetails.about}    
              </div>
        </div>

          <div  className="third_part"
              style={{ width: "20%", backgroundColor: "lightgreen" }}>
              
            <Link to="/checkout">
              <button type="submit"> Add to Cart </button>
            </Link>
            <button type="submit"> Buy Now </button>
          </div>
      </div>
    </>
  );
};

export default Placeorder;
