import React, { useRef, useState } from "react";
import "./Navbar.css";
import { GoTriangleDown } from "react-icons/go";
import { TiAdjustContrast } from "react-icons/ti";
import { BsCodeSlash } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserLarge } from "react-icons/fa6";
import SearchOption from "./SearchOption";
import Tutorials from "./Tutorials";

const Navbar = () => {
  const scrollContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleCloseOverlay = () => {
    setActiveSection(null);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <>
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
          <a href="#Tutorials" onClick={() => handleSectionClick('Tutorials')}>
            Tutorials <GoTriangleDown />
          </a>
          <a href="#Exercises" onClick={() => handleSectionClick('Exercises')}>
            Exercises <GoTriangleDown />
          </a>
          <a href="#Certificates" onClick={() => handleSectionClick('Certificates')}>
            Certificates <GoTriangleDown />
          </a>
          <a href="#Services" onClick={() => handleSectionClick('Services')}>
            Services <GoTriangleDown />
          </a>
          <div className="search_input">
            <SearchOption />
          </div>
          <div className="toggleLightDrk">
          <button onClick={handleToggleDarkMode}>
              <TiAdjustContrast />
            </button>
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

      {activeSection && (
        <div className="overlay">
          <button className="close_overlay" onClick={handleCloseOverlay}>
            &times;
          </button>
          <div className="overlay_content">
            {activeSection === 'Tutorials' && <div><Tutorials/></div>}
            {activeSection === 'Exercises' && <div><h2>Exercises Content</h2></div>}
            {activeSection === 'Certificates' && <div><h2>Certificates Content</h2></div>}
            {activeSection === 'Services' && <div><h2>Services Content</h2></div>}
          </div>
        </div>
      )}

      <div className="second_navbar">
        <button className="scroll_btn left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="link_list_container" ref={scrollContainerRef}>
          <ul className="link_list">
            <li><a href="#HTML">HTML</a></li>
            <li><a href="#CSS">CSS</a></li>
            <li><a href="#JavaScript">JavaScript</a></li>
            <li><a href="#SQL">SQL</a></li>
            <li><a href="#Python">Python</a></li>
            <li><a href="#Java">Java</a></li>
            <li><a href="#PHP">PHP</a></li>
            <li><a href="#React">React</a></li>
            <li><a href="#W3.CSS">W3.CSS</a></li>
            <li><a href="#C">C</a></li>
            <li><a href="#C++">C++</a></li>
            <li><a href="#C#">C#</a></li>
            <li><a href="#Bootstrap">Bootstrap</a></li>
            <li><a href="#MySQL">MySQL</a></li>
            <li><a href="#jQuery">jQuery</a></li>
            <li><a href="#Excel">Excel</a></li>
            <li><a href="#XML">XML</a></li>
            <li><a href="#Django">Django</a></li>
            <li><a href="#NumPy">NumPy</a></li>
            <li><a href="#Pandas">Pandas</a></li>
            <li><a href="#NodeJS">NodeJS</a></li>
            <li><a href="#R">R</a></li>
            <li><a href="#TypeScript">TypeScript</a></li>
            <li><a href="#Angular">Angular</a></li>
            <li><a href="#Git">Git</a></li>
            <li><a href="#PostgreSQL">PostgreSQL</a></li>
            <li><a href="#MongoDB">MongoDB</a></li>
            <li><a href="#AI">AI</a></li>
            <li><a href="#Kotlin">Kotlin</a></li>
            <li><a href="#SASS">SASS</a></li>
            <li><a href="#Vue">Vue</a></li>
            <li><a href="#DSA">DSA</a></li>
            <li><a href="#GenAI">GenAI</a></li>
            <li><a href="#SciPy">SciPy</a></li>
            <li><a href="#AWS">AWS</a></li>
            <li><a href="#Cybersecurity">Cybersecurity</a></li>
            <li><a href="#DataScience">DataScience</a></li>
          </ul>
        </div>
        <button className="scroll_btn right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </>
  );
};

export default Navbar;
