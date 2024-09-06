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
            <li>PLUS</li>
            <li>SPACES</li>
            <li>GET CERTIFIED</li>
            <li>FOR TEACHERS</li>
            <li>FOR BUSINESS</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>Top Tutorials</h3>
          <ul>
            <li>HTML Tutorial</li>
            <li>CSS Tutorial</li>
            <li>JavaScript Tutorial</li>
            <li>How To Tutorial</li>
            <li>SQL Tutorial</li>
            <li>Python Tutorial</li>
            <li>W3.CSS Tutorial</li>
            <li>Bootstrap Tutorial</li>
            <li>PHP Tutorial</li>
            <li>Java Tutorial</li>
            <li>C++ Tutorial</li>
            <li>jQuery Tutorial</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Top References</h3>
          <ul>
            <li>HTML Reference</li>
            <li>CSS Reference</li>
            <li>JavaScript Reference</li>
            <li>SQL Reference</li>
            <li>Python Reference</li>
            <li>W3.CSS Reference</li>
            <li>Bootstrap Reference</li>
            <li>PHP Reference</li>
            <li>HTML Colors</li>
            <li>Java Reference</li>
            <li>Angular Reference</li>
            <li>jQuery Reference</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Top Examples</h3>
          <ul>
            <li>HTML Examples</li>
            <li>CSS Examples</li>
            <li>JavaScript Examples</li>
            <li>How To Examples</li>
            <li>SQL Examples</li>
            <li>Python Examples</li>
            <li>W3.CSS Examples</li>
            <li>Bootstrap Examples</li>
            <li>PHP Examples</li>
            <li>Java Examples</li>
            <li>XML Examples</li>
            <li>jQuery Examples</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Get Certified</h3>
          <ul>
            <li>HTML Certificate</li>
            <li>CSS Certificate</li>
            <li>JavaScript Certificate</li>
            <li>Front End Certificate</li>
            <li>SQL Certificate</li>
            <li>Python Certificate</li>
            <li>PHP Certificate</li>
            <li>jQuery Certificate</li>
            <li>Java Certificate</li>
            <li>C++ Certificate</li>
            <li>C# Certificate</li>
            <li>XML Certificate</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social-links">
          <a href="#youtube" ><IoLogoYoutube /></a>
          <a href="#linkdin" ><FaLinkedin /></a>
          <a href="#discord"><FaDiscord /></a>
          <a href="#facebook"><FaFacebookSquare /></a>
          <a href="#instagram"><FaInstagram /></a>
          <a href="#forum" className="social">FORUM</a>
          <a href="#about" className="social">ABOUT</a>
          <a href="#academy" className="social">ACADEMY</a>
        </div>
        <div className="footer-disclaimer">
          <p>
            W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.<br/> 
            Tutorials, references,and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness<br/> 
            of all content. While using W3Schools, you agree to have read and accepted our <a href="#terms">terms of use</a>,{" "}<a href="#policy">cookie and privacy policy</a>.
          </p>
          <p>
            Copyright 1999-2024 by Refsnes Data. All Rights Reserved.{" "} <a href="#w3school">W3Schools is Powered by W3.CSS.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
