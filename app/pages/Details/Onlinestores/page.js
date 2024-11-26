import Footer from "@/app/component/Footer/page";
import Navbar from "@/app/component/Navbar/page";
import Details from "../page";
import React from "react";

const Onlinestores = () => {
  return (
    <div>
      <Navbar />
      <div className="maincontent-container">
        <div className="sidefilter-container">
          <Details />
        </div>

        <div className="content-area">
          <h1>Online stores</h1>

          <div className="onlinestores-container">
          <div className="onlinestores-content">
              <p>
              You haven't created any stores.
              </p>
          </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Onlinestores;
