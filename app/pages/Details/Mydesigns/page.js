"use client"

import Footer from "@/app/component/Footer/page";
import Navbar from "@/app/component/Navbar/page";
import Details from "../page";
import React, { useState, useRef } from "react";
import { IoIosCloudUpload } from "react-icons/io";

const Mydesigns = () => {
  const [selectedOption, setSelectedOption] = useState("designs");
  const [uploadedFiles, setUploadedFiles] = useState([]);  // Tracks the files
  const fileInputRef = useRef(null);
  const dropzoneRef = useRef(null);

  // Handle selection between Designs and Uploads
  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  // Handle file drop functionality
  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    handleFiles(files);
  };

  // Handle file input change (from the file picker)
  const handleFileInput = (event) => {
    const files = Array.from(event.target.files);
    handleFiles(files);
  };

  // Handle adding files to the uploaded files list
  const handleFiles = (files) => {
    // Add files to the uploaded files list
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // Prevent the default behavior of the dragover event
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Trigger file input click when the dropzone is clicked
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <Navbar />
      <div className="maincontent-container">
        <div className="sidefilter-container">
          <Details />
        </div>
        <div className="content-area">
          <h1>My Designs</h1>

          {/* Design and Uploads options */}
          <div className="design-options-container">
            <div
              className={`design-option-item ${selectedOption === "designs" ? "active" : ""}`}
              onClick={() => handleSelection("designs")}
            >
              Designs
            </div>
            <div
              className={`design-option-item ${selectedOption === "uploads" ? "active" : ""}`}
              onClick={() => handleSelection("uploads")}
            >
              Uploads
            </div>
          </div>

          {/* Conditional Rendering of Content */}
          <div className="design-content-display">
            {selectedOption === "designs" && (
              <div className="designs-content">
                <h2>Designs</h2>
                <p>This section displays all your designs.</p>
              </div>
            )}


              {selectedOption === "uploads" && (
                <div className="uploads-content">
                  <h2>Uploads</h2>
                  <p>This section displays all your uploads.</p>

                  {/* Drag-and-Drop File Upload */}
                  <div
                    ref={dropzoneRef}
                    className="upload-dropzone"
                    onDrop={(event) => {
                      event.preventDefault();
                      const files = Array.from(event.dataTransfer.files);
                      console.log("Files uploaded via drag and drop:", files);
                      handleFiles(files); 
                    }}
                    onDragOver={(event) => event.preventDefault()}
                    onClick={() => fileInputRef.current.click()}
                  >
                    <IoIosCloudUpload size={50} />
                    <p>Drag & Drop your files here, or click to upload</p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(event) => {
                        const files = Array.from(event.target.files);
                        console.log("Files uploaded via file input:", files);
                        handleFiles(files);
                      }}
                      className="file-input"
                    />
                  </div>
                </div>
              )}



          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mydesigns;
