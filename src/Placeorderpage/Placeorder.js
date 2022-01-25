import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Placeorder = () => {
  const [productdetails, setproductdetails] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    let list = [
      {
        "id": "11111111",
          name : "iPhone 11",
        "rating" : "99999" ,
        "review": "10000",
        "emi": "24000",
        "delivery ": "Wed 18, Aug",
        "price": "55555",
        "status ": "In Stock",
        "soldby": "Drshitaa",
        "about": [
          "About this Camera: Sony IMX 766 50MP+8MP+2MP AI Triple Camera with 4K@30FPS|1080p video at 30/60 fps | 32MP Front camera with 1080p video at 30/60 fps | Super Slow Motion: 1080p video at 120 fps, 720p video at 240 fps | Time-Lapse: 1080p 120fps;720p 240fps Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever:",
        ],
        image: "images/Img6.webp",
      },
      {
        "id": "2222222",
        "name" : "iPhone 10",
        "rating" : "99999" ,
        "review": "10000",
        "emi": "24000",
        "delivery ": "Wed 18, Aug",
        "price": "55555",
        "status ": "In Stock",
        "soldby": "Drshitaa",
        "about": [
          "About this Camera: Sony IMX 766 50MP+8MP+2MP AI Triple Camera with 4K@30FPS|1080p video at 30/60 fps | 32MP Front camera with 1080p video at 30/60 fps | Super Slow Motion: 1080p video at 120 fps, 720p video at 240 fps | Time-Lapse: 1080p 120fps;720p 240fps Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever:",
        ],

        image: "images/Img6.webp",
      },
      {
        "id": "33333333",
        "name" : "iPhone 9",
        "rating" : "99999" ,
        "review": "10000",
        "emi": "24000",
        "delivery ": "Wed 18, Aug",
        "price": "55555",
        "status ": "In Stock",
        "soldby": "Drshitaa",
        "about": [
          "About this Camera: Sony IMX 766 50MP+8MP+2MP AI Triple Camera with 4K@30FPS|1080p video at 30/60 fps | 32MP Front camera with 1080p video at 30/60 fps | Super Slow Motion: 1080p video at 120 fps, 720p video at 240 fps | Time-Lapse: 1080p 120fps;720p 240fps Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever:",
        ],

        image: "images/Img6.webp",
      },
      {
        "id": "44444444",
        "name" : "iPhone 8",
        "rating" : "99999" ,
        "review": "10000",
        "emi": "24000",
        "delivery ": "Wed 18, Aug",
        "price": "55555",
        "status ": "In Stock",
        "soldby": "Drshitaa",
        "about": [
          "About this Camera: Sony IMX 766 50MP+8MP+2MP AI Triple Camera with 4K@30FPS|1080p video at 30/60 fps | 32MP Front camera with 1080p video at 30/60 fps | Super Slow Motion: 1080p video at 120 fps, 720p video at 240 fps | Time-Lapse: 1080p 120fps;720p 240fps Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever:",
        ],

        image: "images/Img6.webp",
      },
      {
        "id": "5555555",
        "name" : "iPhone 7",
        "rating" : "99999" ,
        "review": "10000",
        "emi": "24000",
        "delivery ": "Wed 18, Aug",
        "price": "55555",
        "status ": "In Stock",
        "soldby": "Drshitaa",
        "about": [
          "About this Camera: Sony IMX 766 50MP+8MP+2MP AI Triple Camera with 4K@30FPS|1080p video at 30/60 fps | 32MP Front camera with 1080p video at 30/60 fps | Super Slow Motion: 1080p video at 120 fps, 720p video at 240 fps | Time-Lapse: 1080p 120fps;720p 240fps Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever:",
        ],

        image: "images/Img6.webp",
      },
      {
        "id": "666666",
        "name" : "iPhone 6",
        "rating" : "99999" ,
        "review": "10000",
        "emi": "24000",
        "delivery ": "Wed 18, Aug",
        "price": "55555",
        "status ": "In Stock",
        "soldby": "Drshitaa",
        "about": [
          "About this Camera: Sony IMX 766 50MP+8MP+2MP AI Triple Camera with 4K@30FPS|1080p video at 30/60 fps | 32MP Front camera with 1080p video at 30/60 fps | Super Slow Motion: 1080p video at 120 fps, 720p video at 240 fps | Time-Lapse: 1080p 120fps;720p 240fps Chipset: MediaTek Dimensity 1200-AI - The octa-core Dimensity 1200-AI features one of the fastest smartphone CPUs ever:",
        ],

        image: "images/Img6.webp",
      },
    ];

    let item = list.filter((item) => {
      if (item.id == id) return item;
    });
         console.log(item);
         setproductdetails(item[0]);
  }, []);

  return (
    <>
      <div className="placeorder_pg" style={{ width: "100%", display: "flex" }}>
        <div className="first_part" style={{ width: "40%" }}>
          <img
            src="/images/Img6.webp"
            style={{ width: "55%", margin: "5% 22%" }}
          />
        </div>
        <div
          className="second_part"
          style={{ width: "40%", backgroundColor: "blue" }}>
          <div className="second_header">
            <span> {productdetails.name} </span>
            <span> 35,990 ratings | 1000+ answered questions </span>
          </div>
          <div className="second_main">
            <span> Price: 50,999.00 </span>
          </div>
        </div>
        <div
          className="third_part"
          style={{ width: "20%", backgroundColor: "lightblue" }}
        >
          <span> Content </span>
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
