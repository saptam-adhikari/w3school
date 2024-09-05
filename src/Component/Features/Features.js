import React, { useState } from "react";
import "./Features.css";

const Features = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="codeEditor_part">
        <h1>Code Editor</h1>
        <p>With our online code editor, you can edit code and view the result in your browser</p>
        <div className="codeEditor_part_container">
          <div className="codeEditor_part_top">
            <div className="codeEditor_part_left">
              <div className="codeEditor_dot red"></div>
              <div className="codeEditor_dot yellow"></div>
              <div className="codeEditor_dot green"></div>
            </div>
            <div className="codeEditor_part_right">www.w3schools.com/tryit/</div>
          </div>

          <div className="codeEditor_condition">
            <div
              className={`tab_button ${activeTab === "frontend" ? "active" : ""}`}
              onClick={() => handleTabClick("frontend")}
            >
              Frontend
            </div>
            <div
              className={`tab_button ${activeTab === "backend" ? "active" : ""}`}
              onClick={() => handleTabClick("backend")}
            >
              Backend
            </div>
          </div>

          <div className="codeEditor_content">
            {activeTab === "frontend" && (
              <img
                src="https://www.w3schools.com/codeeditor.webp"
                alt="Frontend"
                className="codeEditor_image"
              />
            )}
            {activeTab === "backend" && (
              <img
                src="https://www.w3schools.com/tryit/best2.webp"
                alt="Backend"
                className="codeEditor_image"
              />
            )}
          </div>
        </div>
        <div className="codeEditor_btn">
        <a href="https://www.w3schools.com/tryit/tryit.asp?filename=tryhtml_hello" className="btn_below green">Try Frontend Editor (HTML/CSS/JS)</a>
        <a href="https://www.w3schools.com/tryit/trycompiler.asp?filename=demo_python" className="btn_below yellow">Try Backend Editor (Python/PHP/Java/c..)</a>
        </div>
      </div>

      <div className="w3school_space_container">
        <h1>W3Schools Spaces</h1>
        <p>If you want to create your own website, check out <span>W3Schools Spaces.</span></p>
        <p>It is free to use, and does not require any setup:</p>
        <img src="https://www.w3schools.com/spaces/dynamicspaces.webp" className="w3school_space_img" alt="w3schl"/>
        <a href="https://www.w3schools.com/spaces/index.php">Learn More</a>
      </div>
    </div>
  );
};

export default Features;
