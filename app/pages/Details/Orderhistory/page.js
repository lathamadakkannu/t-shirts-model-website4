import Footer from "@/app/component/Footer/page";
import Navbar from "@/app/component/Navbar/page";
import Details from "../page";
import Link from "next/link";

import React from "react";

const Orderhistory = () => {
  return (
    <div>
      <Navbar />
      <div className="maincontent-container">
        <div className="sidefilter-container">
          <Details />
        </div>
        <div className="content-area">
          <h1>Order History</h1>

          <div className="orderhistory-container">
            <div className="orderhistory-content">
              <p>
                You haven't placed any orders yet. Create a design to begin!
              </p>
              <Link href="/pages/Design">
                <button className="sidefilter-btn">Get Started</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orderhistory;
