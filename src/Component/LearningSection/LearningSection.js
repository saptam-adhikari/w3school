import React from "react";
import "./LearningSection.css";


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
        <img src="https://www.w3schools.com/images/colorpicker.webp" alt="color"/>
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
        </div>
      </div>
    </div>
  );
};

export default LearningSection;
