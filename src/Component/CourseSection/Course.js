import React from "react";
import "./Course.css"

const Course = () => {
  return (
    <div>
      <div className="section_html">
        <div className="section_left">
          <h1>HTML</h1>
          <p>The language for building web pages</p>
          <a href="https://www.w3schools.com/html/default.asp">Learn HTML</a>
          <a href="https://www.w3schools.com/videos/index.php">Video Tutorial</a>
          <a href="https://www.w3schools.com/tags/default.asp">HTML Reference</a>
          <a href="https://campus.w3schools.com/en-in/collections/certifications/products/html-certificate">Get Certifate</a>
        </div>
        <div className="section_right">
            <div className="editor_container">
                <h1>HTML Example :</h1>
                <div className="editor">
                  
                </div>
                <button className="editor_btn"><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default_default">Try it Yourself</a></button>
            </div>
        </div>
      </div>

      <div className="section_css">
        <div className="section_left_css">
          <h1>CSS</h1>
          <p>The language for styling web pages</p>
          <a href="https://www.w3schools.com/css/default.asp">Learn CSS</a>
          <a href="https://www.w3schools.com/cssref/index.php">CSS Reference</a>
          <a href="https://campus.w3schools.com/collections/certifications/products/css-certificate">Get Certifate</a>
        </div>
        <div className="section_right_css">
            <div className="editor_container_css">
                <h1>CSS Example :</h1>
                <div className="editor_css">
                </div>
                <button className="editor_btn"><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default_default">Try it Yourself</a></button>
            </div>
        </div>
      </div>

      <div className="section_javascript">
        <div className="section_left_javascript">
          <h1>JavaScript</h1>
          <p>The language for programming web pages</p>
          <a href="https://www.w3schools.com/js/default.asp">Learn JavaScript</a>
          <a href="https://www.w3schools.com/jsref/default.asp">JavaScript Reference</a>
          <a href="https://campus.w3schools.com/collections/certifications/products/javascript-certificate">Get Certifate</a>
        </div>
        <div className="section_right_javascript">
            <div className="editor_container_javascript">
                <h1>JavaScript Example :</h1>
                <div className="editor_javascript">
                </div>
                <button className="editor_btn"><a href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_default">Try it Yourself</a></button>
            </div>
        </div>
      </div>

      <div className="section_python">
        <div className="section_left_python">
          <h1>Python</h1>
          <p>A popular programming language</p>
          <a href="https://www.w3schools.com/python/default.asp">Learn Python</a>
          <a href="https://www.w3schools.com/python/python_reference.asp">Python Reference</a>
          <a href="https://campus.w3schools.com/collections/certifications/products/python-certificate">Get Certifate</a>
        </div>
        <div className="section_right_python">
            <div className="editor_container_python">
                <h1>Python Example :</h1>
                <div className="editor_python">
                </div>
                <button className="editor_btn"><a href="https://www.w3schools.com/python/trypython.asp?filename=demo_indentation">Try it Yourself</a></button>
            </div>
        </div>
      </div>

      <div className="section_sql">
        <div className="section_left_sql">
          <h1>SQL</h1>
          <p>A language for accessing databases</p>
          <a href="https://www.w3schools.com/sql/default.asp">Learn SQL</a>
          <a href="https://www.w3schools.com/sql/sql_ref_keywords.asp">SQL Reference</a>
          <a href="https://campus.w3schools.com/collections/certifications/products/sql-certificate">Get Certifate</a>
        </div>
        <div className="section_right_sql">
            <div className="editor_container_sql">
                <h1>SQL Example :</h1>
                <div className="editor_sql">
                </div>
                <button className="editor_btn"><a href="https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where">Try it Yourself</a></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
