import React from "react";
import "./Hero.css";
import { IoSearch } from "react-icons/io5";
// import SearchOption from "../Navbar/SearchOption";

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="section_container">
        <h1>Learn to Code</h1>
        <p>With the world's largest web developer site.</p>
        <div className="search_section">
          {/* <SearchOption/> */}
          <input type="text" placeholder="Search our tutorials, e.g. HTML" />
          <IoSearch />
        </div>
        <a href="https://www.w3schools.com/where_to_start.asp">Not Sure Where To Begin?</a>
        <div className="side_img">
          <img
            src="https://www.w3schools.com/images/lynx_in_space.webp"
            alt="img"
          />
        </div>
      </div>

      <svg style={{ backgroundColor: "#D9EEE1" }}width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#282A35"></path> </svg>
    </div>
  );
};

export default Hero;
