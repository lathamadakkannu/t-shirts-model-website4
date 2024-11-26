"use client"

import Navbar from '@/app/component/Navbar/page'
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const Searchpage = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const products = [
    { id: 1, name: "Crew neck T-shirt", imgSrc: "/image/tshirt-1.jpg" },
    { id: 2, name: "Long sleeve T-shirt", imgSrc: "/image/tshirt-2.jpg" },
    { id: 3, name: "Polo T-shirt", imgSrc: "/image/tshirt-3.jpg" },
    { id: 4, name: "V neck T-shirt", imgSrc: "/image/tshirt-4.jpg" },
  ];

  // Filter the products based on the searchTerm
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='searchPage'>
      <Navbar />
      <div className="searchPageContainer">
        <div className="searchPageContent">
          <div className="searchPageInput">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="searchIcon">
              <FaSearch />
            </span>
          </div>
        </div>

        <div className="searchImage">
          <div className="searchImageCards">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="searchImageCard">
                  <img src={product.imgSrc} alt={product.name} />
                  <h2>{product.name}</h2>
                </div>
              ))
            ) : (
              <p>No products found</p> 
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchpage;
