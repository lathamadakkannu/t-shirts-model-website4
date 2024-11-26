import Footer from "@/app/component/Footer/page";
import Navbar from "@/app/component/Navbar/page";
import Details from "../page";
import React from "react";
import Link from "next/link";

const Grouporders = () => {
  return (
    <div>
      <Navbar />
      <div className="maincontent-container">
        <div className="sidefilter-container">
          <Details />
        </div>

        <div className="content-area">
          <h1>Group Orders</h1>
 
          <div className="grouporders-container">
            <div className="grouporders-content">
              <p>
              You don’t have any Group Orders yet. Gather sizes and payments effortlessly when you start one!
              </p>
              <Link href="/pages/Help">
                <button className="sidefilter-btn">Learn More</button>
              </Link>
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Grouporders;
