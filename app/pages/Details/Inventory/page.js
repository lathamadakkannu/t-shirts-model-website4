import Footer from "@/app/component/Footer/page";
import Navbar from "@/app/component/Navbar/page";
import Details from "../page";
import React from "react";

const Inventory = () => {
  const inventoryData = [
    { img: "/image/tshirt4.jpg", title: "Demo 1", inStock: 25, inProduction: 350 },
    { img: "/image/tshirt2.jpg", title: "Demo 2", inStock: 40, inProduction: 200 },
    { img: "/image/tshirt7.jpg", title: "Demo 3", inStock: 30, inProduction: 150 },
  ];

  return (
    <div>
      <Navbar />
      <div className="maincontent-container">
        <div className="sidefilter-container">
          <Details />
        </div>
        <div className="content-area">
          <h1>Inventory</h1>
          <div className="inventory-container">
            {inventoryData.map((item, index) => (
              <div className="inventory-card" key={index}>
                <div className="inventory-img">
                  <img src={item.img} alt="Inventory" />
                </div>
                <div className="inventory-details">
                  <h4>{item.title}</h4>
                  <p>In Stock: {item.inStock}</p>
                  <p>In Production: {item.inProduction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inventory;
