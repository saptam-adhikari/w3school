import React, { useState } from "react";
import "./HowtoSection.css";

const HowtoSection = () => {
  const images = [
    {
      url: "https://www.w3schools.com/howto/img_nature_wide.jpg",
      caption: "Caption Text",
    },
    {
      url: "https://www.w3schools.com/howto/img_snow_wide.jpg",
      caption: "Caption Two",
    },
    {
      url: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      caption: "Caption Three",
    },
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next click
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="howto_section">
      <h1>How To Section</h1>
      <h3>Code snippets for HTML, CSS and JavaScript</h3>
      <p>For example, how to create a slideshow:</p>
      <div className="browser-container">
        <div className="browser-header">
          <div className="controls">
            <span className="control red"></span>
            <span className="control yellow"></span>
            <span className="control green"></span>
          </div>
          <div className="url-bar">www.w3schools.com/howto</div>
        </div>

        {/* Carousel */}
        <div className="carousel-container">
          <div className="carousel-slide">
            {/* Image */}
            <img src={images[currentIndex].url} alt="carousel" />

            {/* Caption */}
            <div className="carousel-caption">
              <p>{images[currentIndex].caption}</p>
            </div>

            {/* Image count */}
            <div className="carousel-count">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Previous and Next buttons */}
            <button onClick={handlePrev} className="carousel-btn prev">
              &#8249;
            </button>
            <button onClick={handleNext} className="carousel-btn next">
              &#8250;
            </button>
          </div>

          {/* Carousel dots */}
          <div className="carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="howto_btn">
        <div className="vertical_box"></div>
        <a href="https://www.w3schools.com/howto/default.asp">Learn How To </a>
      </div>
    </div>
  );
};

export default HowtoSection;
