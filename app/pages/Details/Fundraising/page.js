import Footer from "@/app/component/Footer/page";
import Navbar from "@/app/component/Navbar/page";
import Details from "../page";
import React from "react";
import { FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";  

const Fundraising = () => {
  return (
    <div>
      <Navbar />
      <div className="maincontent-container">
        <div className="sidefilter-container">
          <Details />
        </div>

        <div className="content-area">
          <h1>Fundraising</h1>
          <div className="fundraise-container">
            <div className="fundraise-row">
              {/* Fundraising Cards */}
              <div className="fundraise-col">
                <div className="cards">
                  <FaShoppingCart size={40} />
                  <p>0</p>
                  <p>Items Sold</p>
                  <p>Today 0</p>
                </div>
              </div>

              <div className="fundraise-col">
                <div className="cards">
                  <FaUsers size={40} />
                  <p>0</p>
                  <p>Supporters</p>
                  <p>Today 0</p>
                </div>
              </div>

              <div className="fundraise-col">
                <div className="cards">
                  <FaDollarSign size={40} />
                  <p>0</p>
                  <p>Funds Raised</p>
                  <p>Today 0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fundraising;
