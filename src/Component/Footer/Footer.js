import React from "react";
import "./Footer.css";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img
          src="https://www.w3schools.com/images/w3schools_logo_436_2.png"
          alt="W3Schools Logo"
          className="footer-logo"
        />

        <div className="footer-nav">
          <ul>
            <li><a href="https://www.w3schools.com/plus/index.php">PLUS</a></li>
            <li><a href="https://www.w3schools.com/spaces/index.php">SPACES</a></li>
            <li><a href="https://campus.w3schools.com/en-in/collections/certifications">GET CERTIFIED</a></li>
            <li><a href="https://93d08a94.sibforms.com/serve/MUIFAL7VLqgr8nEWysDptuWiUJ0DEebkO51K6W-AD9fn1feCp90H2ZG9qLpbFOLns5x12uB9nzdotA0mKAoqqB9hpveHgfrYDpx8wDrHMs42_WrfsHNWXwMKlzaXWo1P8XmO2wUepgCfXgGQI11iUAInSi0ImpWbmz7J7_AcxWUCjMlVhF-SFqugUKkplNzXFESL1C9FYBImJCCL">FOR TEACHERS</a></li>
            <li><a href="https://93d08a94.sibforms.com/serve/MUIFAL7VLqgr8nEWysDptuWiUJ0DEebkO51K6W-AD9fn1feCp90H2ZG9qLpbFOLns5x12uB9nzdotA0mKAoqqB9hpveHgfrYDpx8wDrHMs42_WrfsHNWXwMKlzaXWo1P8XmO2wUepgCfXgGQI11iUAInSi0ImpWbmz7J7_AcxWUCjMlVhF-SFqugUKkplNzXFESL1C9FYBImJCCL<a></a>">FOR BUSINESS</a></li>
            <li><a href="">CONTACT US</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>Top Tutorials</h3>
          <ul>
            <li><a href="https://www.w3schools.com/html/default.asp">HTML Tutorial</a></li>
            <li><a href="https://www.w3schools.com/css/default.asp">CSS Tutorial</a></li>
            <li><a href="https://www.w3schools.com/js/default.asp">JavaScript Tutorial</a></li>
            <li><a href="https://www.w3schools.com/howto/default.asp">How To Tutorial</a></li>
            <li><a href="https://www.w3schools.com/sql/default.asp">SQL Tutorial</a></li>
            <li><a href="https://www.w3schools.com/python/default.asp">Python Tutorial</a></li>
            <li><a href="https://www.w3schools.com/w3css/default.asp">W3.CSS Tutorial</a></li>
            <li><a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp">Bootstrap Tutorial</a></li>
            <li><a href="https://www.w3schools.com/php/default.asp">PHP Tutorial</a></li>
            <li><a href="https://www.w3schools.com/java/default.asp">Java Tutorial</a></li>
            <li><a href="https://www.w3schools.com/cpp/default.asp">C++ Tutorial</a></li>
            <li><a href="https://www.w3schools.com/jquery/default.asp">jQuery Tutorial</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Top References</h3>
          <ul>
            <li><a href="https://www.w3schools.com/tags/default.asp">HTML Reference</a></li>
            <li><a href="https://www.w3schools.com/cssref/index.php">Css</a></li>
            <li><a href="https://www.w3schools.com/jsref/default.asp">JavaScript Reference</a></li>
            <li><a href="https://www.w3schools.com/sql/sql_ref_keywords.asp">SQL Reference</a></li>
            <li><a href="https://www.w3schools.com/python/python_reference.asp">Python Reference</a></li>
            <li><a href="https://www.w3schools.com/w3css/w3css_references.asp">W3.CSS Reference</a></li>
            <li><a href="https://www.w3schools.com/bootstrap/bootstrap_ref_all_classes.asp">Bootstrap Reference</a></li>
            <li><a href="https://www.w3schools.com/php/default.asp">PHP Reference</a></li>
            <li><a href="https://www.w3schools.com/colors/colors_names.asp">HTML Colors</a></li>
            <li><a href="https://www.w3schools.com/java/java_ref_keywords.asp">Java Reference</a></li>
            <li><a href="https://www.w3schools.com/angular/angular_ref_directives.asp">Angular Reference</a></li>
            <li><a href="https://www.w3schools.com/jquery/jquery_ref_overview.asp">jQuery Reference</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Top Examples</h3>
          <ul>
            <li><a href="https://www.w3schools.com/html/html_examples.asp">HTML Examples</a></li>
            <li><a href="https://www.w3schools.com/css/css_examples.asp">CSS Examples</a></li>
            <li><a href="https://www.w3schools.com/js/js_examples.asp">JavaScript Examples</a></li>
            <li><a href="https://www.w3schools.com/howto/default.asp">How To Examples</a></li>
            <li><a href="https://www.w3schools.com/sql/sql_examples.asp">SQL Examples</a></li>
            <li><a href="https://www.w3schools.com/python/python_examples.asp">Python Examples</a></li>
            <li><a href="https://www.w3schools.com/w3css/w3css_examples.asp">W3.CSS Examples</a></li>
            <li><a href="https://www.w3schools.com/bootstrap/bootstrap_examples.asp">Bootstrap Examples</a></li>
            <li><a href="https://www.w3schools.com/php/php_examples.asp">PHP Examples</a></li>
            <li><a href="https://www.w3schools.com/java/java_examples.asp">Java Examples</a></li>
            <li><a href="https://www.w3schools.com/xml/xml_examples.asp">XML Examples</a></li>
            <li><a href="https://www.w3schools.com/jquery/jquery_examples.asp">jQuery Examples</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Get Certified</h3>
          <ul>
            <li><a href="https://campus.w3schools.com/en-in/collections/certifications/products/html-certificate">HTML Certificate</a></li>
            <li><a href="https://campus.w3schools.com/en-in/collections/certifications/products/css-certificate">CSS Certificate</a></li>
            <li><a href="https://campus.w3schools.com/en-in/collections/certifications/products/javascript-certificate">JavaScript Certificate</a></li>
            <li><a href="https://campus.w3schools.com/en-in/collections/certifications/products/front-end-certificate">Front End Certificate</a></li>
            <li><a href="https://campus.w3schools.com/en-in/collections/certifications/products/sql-certificate">SQL Certificate</a></li>
            <li><a href="https://campus.w3schools.com/en-in/collections/certifications/products/python-certificate">Python Certificate</a></li>
            <li><a href="https://campus.w3schools.com/en-in/collections/certifications/products/php-certificate">PHP Certificate</a></li>
            <li><a href="https://campus.w3schools.com/en-in/collections/certifications/products/jquery-certificate">jQuery Certificate</a></li>
            <li><a href="https://campus.w3schools.com/en-in/collections/certifications/products/jquery-certificate">Java Certificate</a></li>
            <li><a href="https://campus.w3schools.com/en-in/collections/certifications/products/c-certificate">C++ Certificate</a></li>
            <li><a href="https://campus.w3schools.com/en-in/collections/certifications/products/c-certificate-1">C# Certificate</a></li>
            <li><a href="https://campus.w3schools.com/en-in/collections/certifications/products/xml-certificate">XML Certificate</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social-links">
          <a href="https://www.youtube.com/@w3schools" ><IoLogoYoutube /></a>
          <a href="https://www.linkedin.com/company/w3schools.com/" ><FaLinkedin /></a>
          <a href="https://discord.com/invite/w3schools"><FaDiscord /></a>
          <a href="https://www.facebook.com/w3schoolscom/"><FaFacebookSquare /></a>
          <a href="https://www.instagram.com/w3schools.com_official/"><FaInstagram /></a>
          <a href="https://w3schools.invisionzone.com/" className="social">FORUM</a>
          <a href="https://www.w3schools.com/about/default.asp" className="social">ABOUT</a>
          <a href="https://93d08a94.sibforms.com/serve/MUIFAL7VLqgr8nEWysDptuWiUJ0DEebkO51K6W-AD9fn1feCp90H2ZG9qLpbFOLns5x12uB9nzdotA0mKAoqqB9hpveHgfrYDpx8wDrHMs42_WrfsHNWXwMKlzaXWo1P8XmO2wUepgCfXgGQI11iUAInSi0ImpWbmz7J7_AcxWUCjMlVhF-SFqugUKkplNzXFESL1C9FYBImJCCL" className="social">ACADEMY</a>
        </div>
        <div className="footer-disclaimer">
          <p>
            W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.<br/> 
            Tutorials, references,and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness<br/> 
            of all content. While using W3Schools, you agree to have read and accepted our <a href="https://www.w3schools.com/about/about_copyright.asp">terms of use</a>,{" "}<a href="https://www.w3schools.com/about/about_privacy.asp">cookie and privacy policy</a>.
          </p>
          <p>
            Copyright 1999-2024 by Refsnes Data. All Rights Reserved.{" "} <a href="https://www.w3schools.com/w3css/default.asp">W3Schools is Powered by W3.CSS.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
