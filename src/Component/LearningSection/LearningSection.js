import React from "react";
import "./LearningSection.css";
import "./HowtoSection.js"
import HowtoSection from "./HowtoSection.js";


const LearningSection = () => {
  return (
    <div>
      <div className="learning_section">
        <h1>My Learning</h1>
        <p>Track your progress with our free "My Learning" program.</p>
        <p>Log in to your account, and start earning points!</p>
        <img src="https://www.w3schools.com/myl-green-off.webp" alt="img" />
        <a href="https://pathfinder.w3schools.com/">Sign Up for Free</a>
      </div>

      <div className="become_prouser">
        <h1>Become a Plus User</h1>
        <h3>And unlock powerful features:</h3>
        <div className="feature_item">
          <div className="feature_list">
            <img
              src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg"
              alt="tick"
            />
            <p>Browse W3Schools without ads</p>
          </div>
          <div className="feature_list">
            <img
              src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg"
              alt="tick"
            />
            <p>Build and host Websites</p>
          </div>
          <div className="feature_list">
            <img
              src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg"
              alt="tick"
            />
            <p>Get extra credits</p>
          </div>
          <div className="feature_list">
            <img
              src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg"
              alt="tick"
            />
            <p>Priority support</p>
          </div>
        </div>
        <a href="https://www.w3schools.com/plus/index.php">Learn More</a>
      </div>

      <div className="color_picker">
        <h1>Color Picker</h1>
        <p>W3Schools' famous color picker:</p>
        <a href="https://www.w3schools.com/colors/colors_picker.asp"><img src="https://www.w3schools.com/images/colorpicker.webp" alt="color"/></a>
      </div>

      <div className="code_game">
        <h1 className="freckle-face-regular">Code Game</h1>
        <p className="freckle-face-regular">Help the Lynx collect pine cones!</p>
        <img src="https://www.w3schools.com/images/w3lynx_200.webp" alt="color"/>
        <a href="https://www.w3schools.com/codegame/index.html">Play Game</a>
      </div>

      <div className="section_exercise">
        <div className="section_exercise_container">
            <h1>Exercises and Quizzes</h1>
            <p>Test your skills!</p>
            <div className="exercise_btn"> 
              <a href="https://www.w3schools.com/exercises/index.php" className="exercise_green">Exercises</a>
              <a href="https://www.w3schools.com/quiztest/default.asp" className="quizzes_yellow">Quizzes</a>
            </div>
        </div>
      </div>

      <div className="Webtemplates">
        <h1 className="">Web Templates</h1>
        <p className="">Browse our selection of free responsive HTML Templates</p>
        <img src="https://www.w3schools.com/w3css_templates.webp" alt="color"/>
        <a href="https://www.w3schools.com/w3css/w3css_templates.asp">Browse Templates</a>
      </div>

      <div className="kickstart_section">
        <div className="kickstart_container">
          <h1>Kickstart your career</h1>
          <h2>Get certified by completing a course</h2>
          <a href="https://campus.w3schools.com/en-in/collections/course-catalog">Get Started</a>
        </div>
        <div></div>
      </div>

      <HowtoSection/>

    </div>
  );
};

export default LearningSection;
