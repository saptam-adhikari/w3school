import React from "react";
import "./Course.css"

const Course = () => {
  return (
    <div>
      <div className="section_html">
        <div className="section_left">
          <h1>HTML</h1>
          <p>The language for building web pages</p>
          <a href="#w3school">Learn HTML</a>
          <a href="#w3school">Video Tutorial</a>
          <a href="#w3school">HTML Reference</a>
          <a href="#w3school">Get Certifate</a>
        </div>
        <div className="section_right">
            <div className="editor_container">
                <h1>HTML Example :</h1>
                <div className="editor">
                  
                </div>
                <button className="editor_btn">Try it Yourself</button>
            </div>
        </div>
      </div>

      <div className="section_css">
        <div className="section_left_css">
          <h1>CSS</h1>
          <p>The language for styling web pages</p>
          <a href="#w3school">Learn CSS</a>
          <a href="#w3school">CSS Reference</a>
          <a href="#w3school">Get Certifate</a>
        </div>
        <div className="section_right_css">
            <div className="editor_container_css">
                <h1>CSS Example :</h1>
                <div className="editor_css">
                </div>
                <button className="editor_btn">Try it Yourself</button>
            </div>
        </div>
      </div>

      <div className="section_javascript">
        <div className="section_left_javascript">
          <h1>JavaScript</h1>
          <p>The language for programming web pages</p>
          <a href="#w3school">Learn JavaScript</a>
          <a href="#w3school">JavaScript Reference</a>
          <a href="#w3school">Get Certifate</a>
        </div>
        <div className="section_right_javascript">
            <div className="editor_container_javascript">
                <h1>JavaScript Example :</h1>
                <div className="editor_javascript">
                </div>
                <button className="editor_btn">Try it Yourself</button>
            </div>
        </div>
      </div>

      <div className="section_python">
        <div className="section_left_python">
          <h1>Python</h1>
          <p>A popular programming language</p>
          <a href="#w3school">Learn Python</a>
          <a href="#w3school">Python Reference</a>
          <a href="#w3school">Get Certifate</a>
        </div>
        <div className="section_right_python">
            <div className="editor_container_python">
                <h1>Python Example :</h1>
                <div className="editor_python">
                </div>
                <button className="editor_btn">Try it Yourself</button>
            </div>
        </div>
      </div>

      <div className="section_sql">
        <div className="section_left_sql">
          <h1>SQL</h1>
          <p>A language for accessing databases</p>
          <a href="#w3school">Learn SQL</a>
          <a href="#w3school">SQL Reference</a>
          <a href="#w3school">Get Certifate</a>
        </div>
        <div className="section_right_sql">
            <div className="editor_container_sql">
                <h1>SQL Example :</h1>
                <div className="editor_sql">
                </div>
                <button className="editor_btn">Try it Yourself</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
