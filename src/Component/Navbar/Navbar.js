import React, { useRef, useState } from "react";
import "./Navbar.css";
import { GoTriangleDown } from "react-icons/go";
import { TiAdjustContrast } from "react-icons/ti";
import { BsCodeSlash } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { FaUserLarge } from "react-icons/fa6";
import SearchOption from "./SearchOption";
import Tutorials from "./Tutorials";
import Exercises from "./Exercises";
import Certificates from "./Certificates";
import Services from "./Services";
import AuthPage from "../LoginPage/AuthPage";

const Navbar = () => {
  const scrollContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAuthPage, setShowAuthPage] = useState(false); // State to show/hide AuthPage

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

  // Function to toggle the AuthPage visibility
  const handleShowAuthPage = () => {
    setShowAuthPage(true);
  };

  // Function to hide the AuthPage
  const handleCloseAuthPage = () => {
    setShowAuthPage(false);
  };

  return (
    <>
      <nav className="nav_bar">
        <div className="left_side">
          <a href="#logo" >
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
         
            <a href="https://www.w3schools.com/plus/index.php"> Plus</a>
            <a href="https://spaces.w3schools.com/space/">
            <BsCodeSlash />
            Spaces</a> 
            <a href="https://campus.w3schools.com/en-in/collections/course-catalog">
            <FiShoppingCart />
            Get Certified</a>
        
          <button onClick={handleShowAuthPage} >My W3School</button>
          <button href="#user" onClick={handleShowAuthPage}>
            <FaUserLarge />
          </button>
        </div>
      </nav>

      {activeSection && (
        <div className="overlay">
          <button className="close_overlay" onClick={handleCloseOverlay}>
            &times;
          </button>
          <div className="overlay_content">
            {activeSection === 'Tutorials' && <div><Tutorials/></div>}
            {activeSection === 'Exercises' && <div><Exercises/></div>}
            {activeSection === 'Certificates' && <div><Certificates/></div>}
            {activeSection === 'Services' && <div><Services/></div>}
          </div>
        </div>
      )}

      <div className="second_navbar">
        <button className="scroll_btn left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="link_list_container" ref={scrollContainerRef}>
          <ul className="link_list">
            <li><a href="https://www.w3schools.com/html/default.asp">HTML</a></li>
            <li><a href="https://www.w3schools.com/css/default.asp">CSS</a></li>
            <li><a href="https://www.w3schools.com/js/default.asp">JavaScript</a></li>
            <li><a href="https://www.w3schools.com/sql/default.asp">SQL</a></li>
            <li><a href="https://www.w3schools.com/python/default.asp">Python</a></li>
            <li><a href="https://www.w3schools.com/java/default.asp">Java</a></li>
            <li><a href="https://www.w3schools.com/php/default.asp">PHP</a></li>
            <li><a href="https://www.w3schools.com/react/default.asp">React</a></li>
            <li><a href="https://www.w3schools.com/w3css/default.asp">W3.CSS</a></li>
            <li><a href="https://www.w3schools.com/c/index.php">C</a></li>
            <li><a href="https://www.w3schools.com/cpp/default.asp">C++</a></li>
            <li><a href="https://www.w3schools.com/cs/index.php">C#</a></li>
            <li><a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp">Bootstrap</a></li>
            <li><a href="https://www.w3schools.com/mysql/default.asp">MySQL</a></li>
            <li><a href="https://www.w3schools.com/jquery/default.asp">jQuery</a></li>
            <li><a href="https://www.w3schools.com/excel/index.php">Excel</a></li>
            <li><a href="https://www.w3schools.com/xml/default.asp">XML</a></li>
            <li><a href="https://www.w3schools.com/django/index.php">Django</a></li>
            <li><a href="https://www.w3schools.com/python/numpy/default.asp">NumPy</a></li>
            <li><a href="https://www.w3schools.com/python/pandas/default.asp">Pandas</a></li>
            <li><a href="https://www.w3schools.com/nodejs/default.asp">NodeJS</a></li>
            <li><a href="https://www.w3schools.com/r/default.asp">R</a></li>
            <li><a href="https://www.w3schools.com/typescript/index.php">TypeScript</a></li>
            <li><a href="https://www.w3schools.com/angular/default.asp">Angular</a></li>
            <li><a href="https://www.w3schools.com/git/default.asp">Git</a></li>
            <li><a href="https://www.w3schools.com/postgresql/index.php">PostgreSQL</a></li>
            <li><a href="https://www.w3schools.com/mongodb/index.php">MongoDB</a></li>
            <li><a href="https://www.w3schools.com/ai/default.asp">AI</a></li>
            <li><a href="https://www.w3schools.com/kotlin/index.php">Kotlin</a></li>
            <li><a href="https://www.w3schools.com/sass/default.asp">SASS</a></li>
            <li><a href="https://www.w3schools.com/vue/index.php">Vue</a></li>
            <li><a href="https://www.w3schools.com/dsa/index.php">DSA</a></li>
            <li><a href="https://www.w3schools.com/gen_ai/index.php">GenAI</a></li>
            <li><a href="https://www.w3schools.com/python/scipy/index.php">SciPy</a></li>
            <li><a href="https://www.w3schools.com/aws/index.php">AWS</a></li>
            <li><a href="https://www.w3schools.com/cybersecurity/index.php">Cybersecurity</a></li>
            <li><a href="https://www.w3schools.com/datascience/default.asp">DataScience</a></li>
          </ul>
        </div>
        <button className="scroll_btn right" onClick={scrollRight}>
          &gt;
        </button>
      </div>

      {showAuthPage && (
        <div className="auth_page_container">
          <button className="close_auth_page" onClick={handleCloseAuthPage}>
            &times;
          </button>
          <AuthPage />
        </div>
      )}
    </>
  );
};

export default Navbar;
