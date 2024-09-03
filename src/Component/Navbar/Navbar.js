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
    </nav>
  );
};

export default Navbar;
