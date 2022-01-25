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
        "name" : "New Apple iPhone 11",
        "rating" : "555555" ,
        "review": "10000",
        "emi": "2401",
        "delivery ": "Wednesday 18, Aug",
        "price": "60999",
        "status ": "In Stock",
        "soldby": "Drshitaa Electronics",
        "about": [
          "About this Camera: Sony IMX 766 50MP+8MP+2MP AI Triple Camera with 4K@30FPS|1080p video at 30/60 fps | 32MP Front camera with 1080p video at 30/60 fps | Super Slow Motion: 1080p video at 120 fps, 720p video at 240 fps | Time-Lapse: 1080p 120fps;720p 240fps Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever:",
        ],
        "image": "/images/iPhone 13.jpg",
      },
      {
        "id": "2222222",
        "name" : " New Apple iPhone 10",
        "rating" : "99999" ,
        "review": "20000",
        "emi": "2402",
        "delivery ": "Wednesday 19, Aug",
        "price": "50999",
        "status ": "In Stock",
        "soldby": "Jenny Electronics",
        "about": [
          "About this Camera: Sony IMX 766 50MP+8MP+2MP AI Triple Camera with 4K@30FPS|1080p video at 30/60 fps | 32MP Front camera with 1080p video at 30/60 fps | Super Slow Motion: 1080p video at 120 fps, 720p video at 240 fps | Time-Lapse: 1080p 120fps;720p 240fps Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever:",
        ],

        "image" : "/images/iPhone  11.jpg",
      },
      {
        "id": "33333333",
        "name" : "New Apple  iPhone 9",
        "rating" : "99999" ,
        "review": "30000",
        "emi": "2403",
        "delivery ": "Wednesday 19, Aug",
        "price": "70999",
        "status ": "In Stock",
        "soldby": "Amrita Electronics",
        "about": [
          "About this Camera: Sony IMX 766 50MP+8MP+2MP AI Triple Camera with 4K@30FPS|1080p video at 30/60 fps | 32MP Front camera with 1080p video at 30/60 fps | Super Slow Motion: 1080p video at 120 fps, 720p video at 240 fps | Time-Lapse: 1080p 120fps;720p 240fps Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever:",
        ],

        "image": "/images/iPhone 10.png",
      },
      {
        "id": "44444444",
        "name" : " New Apple  iPhone 8",
        "rating" : "99999" ,
        "review": "40000",
        "emi": "2404",
        "delivery ": "Wednesday 19, Aug",
        "price": "40999",
        "status ": "In Stock",
        "soldby": "Suman Electronics",
        "about": [
          "About this Camera: Sony IMX 766 50MP+8MP+2MP AI Triple Camera with 4K@30FPS|1080p video at 30/60 fps | 32MP Front camera with 1080p video at 30/60 fps | Super Slow Motion: 1080p video at 120 fps, 720p video at 240 fps | Time-Lapse: 1080p 120fps;720p 240fps Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever:",
        ],

         "image" : "/images/iPhone 10.png",
      },
      {
        "id": "5555555",
        "name" : " New Apple iPhone 7",
        "rating" : "99999" ,
        "review": "50000",
        "emi": "2405",
        "delivery ": "Wednesday 19, Aug",
        "price": "50999",
        "status ": "In Stock",
        "soldby": "Deoll Electronics",
        "about": [
          "About this Camera: Sony IMX 766 50MP+8MP+2MP AI Triple Camera with 4K@30FPS|1080p video at 30/60 fps | 32MP Front camera with 1080p video at 30/60 fps | Super Slow Motion: 1080p video at 120 fps, 720p video at 240 fps | Time-Lapse: 1080p 120fps;720p 240fps Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever:",
        ],

        "image" : "/images/iPhone 8.png",
      },
      {
        "id": "666666",
        "name" : "New Apple iPhone 6",
        "rating" : "99999" ,
        "review": "60000",
        "emi": "2406",
        "delivery ": "Wednesday 19, Aug",
        "price": "609999",
        "status ": "In Stock",
        "soldby": "Simmu Electronics",
        "about": [
          "About this Camera: Sony IMX 766 50MP+8MP+2MP AI Triple Camera with 4K@30FPS|1080p video at 30/60 fps | 32MP Front camera with 1080p video at 30/60 fps | Super Slow Motion: 1080p video at 120 fps, 720p video at 240 fps | Time-Lapse: 1080p 120fps;720p 240fps Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever:",
        ],

        "image": "/images/iPhone 7.jpg",
      },
    ];

    let item = list.filter((item) => 
    {
      if (item.id == id) 
      return item;
    });
             console.log(list[0].name);
             setproductdetails(list[0]); 
  }, []);

  return (
    <>
      <div className="placeorder_pg" style={{ width: "100%", display: "flex" }}>
        <div className="first_part"  style={{ width: "40%" }}>
          <img
            src={productdetails.image}
            style={{ width: "55%", margin: "5% 22%" }}
          />
        </div>
        <div
          className="second_part"
          style={{ width: "40%", backgroundColor: "lightblue" }}>
          <div className="second_header">
          <ul style = {{listStyleType:'none'}}>
            <li style = {{color:'black',fontWeight:'bolder'}}>  {productdetails.name}  </li>
            <li> {productdetails.rating} 35,990 ratings | 1000+ answered questions   </li>
          </ul>
          </div>
          <div className="second_main">
            <ul style = {{listStyleType:'none'}}>
              <li>   Price :- {productdetails.price}    </li>
             <li>   Free delivery :- {productdetails.delivery}    </li>  
             <li>   EMI starts at  :- {productdetails.delivery}  No Cost EMI available  </li>
              <li>    {productdetails.status}    </li>
             <li>   Sold by  {productdetails.soldby} and Fulfilled by Amazon  </li>
             <li>    {productdetails.about}    </li>
             </ul>
          </div>
        </div>
        <div
          className="third_part"
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
