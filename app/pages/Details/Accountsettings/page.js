"use client"

import Footer from "@/app/component/Footer/page";
import Navbar from "@/app/component/Navbar/page";
import Details from "../page";
import React, { useState } from "react";

const Accountsettings = () => {
  const [selectedOption, setSelectedOption] = useState("profile");

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Navbar />
      <div className="maincontent-container">
        <div className="sidefilter-container">
          <Details />
        </div>
        <div className="content-area">
          <h1>Account Settings</h1>

          <div className="settings-options-container">
            <div
              className={`settings-option-item ${selectedOption === "profile" ? "active" : ""}`}
              onClick={() => handleSelection("profile")}
            >
              Profile
            </div>
            <div
              className={`settings-option-item ${selectedOption === "tax" ? "active" : ""}`}
              onClick={() => handleSelection("tax")}
            >
              Tax Exemption
            </div>
            <div
              className={`settings-option-item ${selectedOption === "addresses" ? "active" : ""}`}
              onClick={() => handleSelection("addresses")}
            >
              Addresses
            </div>
          </div>

          {/* Conditional Rendering of Content */}
          <div className="settings-content-display">
            {selectedOption === "profile" && (
              <div className="settings-profile-content">
                <div className="user-details">
                  <h3>Name</h3>
                 
                  <h3>Email Id</h3> 
                </div>
                <div className="user-info">
                 <p>John</p>
                  <p>John@gmail.com</p>
                </div>
              </div>
            )}

            {selectedOption === "tax" && (
              <div className="settings-tax-content">
                <p>
                After your tax-exempt status is verified, you’ll be able to apply it to eligible purchases at checkout.
                </p>
                <button className="common-btn">Verify Tax Exempt Status</button>
              </div>
            )}

            {selectedOption === "addresses" && (
              <div className="settings-address-content">
                <p>Easily save your addresses here for quick access in the future, 
                  making it more convenient to use them whenever needed.
                </p>
                <button className="common-btn">Add a New Addresses</button>
              </div>
            )}

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accountsettings;
