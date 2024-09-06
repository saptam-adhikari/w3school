import React from "react";
import "./Navbar.css";
import { GoTriangleDown } from "react-icons/go";
import { TiAdjustContrast } from "react-icons/ti";
import { BsCodeSlash } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserLarge } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="nav_bar">
      <div className="left_side">
        <a href="#logo">
          <div className="w3_logo">
            <img
              src="https://avatars.githubusercontent.com/u/77673807?v=4"
              alt="logo"
            />
          </div>
        </a>
        <a href="#Tutorilas">
          Tutorials <GoTriangleDown />
        </a>
        <a href="#Exercises">
          Exercises
          <GoTriangleDown />
        </a>
        <a href="#Cirtificates">
          Cirtificates
          <GoTriangleDown />
        </a>
        <a href="#Services">
          Services
          <GoTriangleDown />
        </a>
        <input placeholder="Search..." />
        <div className="toggleLightDrk">
          <TiAdjustContrast />
        </div>
      </div>

      <div className="right_side">
        <button>Plus</button>
        <button>
          <BsCodeSlash />
          Spaces
        </button>
        <button>
          <FiShoppingCart />
          Get Certified
        </button>
        <button>My W3School</button>
        <a href="#user">
          <FaUserLarge />
        </a>
      </div>
      <div className="second_navbar">
        <ul className="link_list">
          <li><a href="#HTML">HTML</a></li>
          <li><a href="#CSS">CSS</a></li>
          <li><a href="#JavaScript">JAVASCRIPT</a></li>
          <li><a href="#SQL">SQL</a></li>
          <li><a href="#Python">PYTHON</a></li>
          <li><a href="#Java">JAVA</a></li>
          <li><a href="#PHP">PHP</a></li>
          <li><a href="#React">HOW TO</a></li>
          <li><a href="#HTML">W3.CSS</a></li>
          <li><a href="#CSS">C</a></li>
          <li><a href="#JavaScript">C++</a></li>
          <li><a href="#SQL">C#</a></li>
          <li><a href="#Python">BOOTSTRAP</a></li>
          <li><a href="#Java">REACT</a></li>
          <li><a href="#PHP">MYSQL</a></li>
          <li><a href="#React">JQUERY</a></li>
          <li><a href="#HTML">EXCEL</a></li>
          <li><a href="#CSS">XML</a></li>
          <li><a href="#JavaScript">DJANGO</a></li>
          <li><a href="#SQL">NUMPY</a></li>
          <li><a href="#Python">PANDAS</a></li>
          <li><a href="#Java">NODEJS</a></li>
          <li><a href="#PHP">R</a></li>
          <li><a href="#React">TYPESCRIPT</a></li>
          <li><a href="#HTML">ANGULAR</a></li>
          <li><a href="#CSS">GIT</a></li>
          <li><a href="#JavaScript">POSTGRESQL</a></li>
          <li><a href="#SQL">MONGODB</a></li>
          <li><a href="#Python">ASP</a></li>
          <li><a href="#Java">AI</a></li>
          <li><a href="#PHP">GO</a></li>
          <li><a href="#React">KOTLIN</a></li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;
