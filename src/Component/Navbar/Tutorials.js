import React from "react";
import SearchOption from "./SearchOption";
import "./Tutorials.css";

const Tutorials = () => {
  return (
    <div className="tutorials">
      <div className="header_section">
        <h1>Tutorials</h1>
        <SearchOption />
      </div>
      <div className="learning_list">
        <div className="title_section">
          <h1>HTML and CSS</h1>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/html/default.asp"
            >
              Learn<span>HTML</span>
            </a>
            <a href="https://www.w3schools.com/html/default.asp">Tutorials</a>
            <a href="https://www.w3schools.com/tags/default.asp">Reference</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/css/default.asp"
            >
              Learn<span>CSS</span>
            </a>
            <a href="https://www.w3schools.com/css/default.asp">Tutorials</a>
            <a href="https://www.w3schools.com/cssref/default.asp">Reference</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/css/css_rwd_intro.asp"
            >
              Learn<span>RWD</span>
            </a>
            <a href="https://www.w3schools.com/html/default.asp">Tutorials</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp"
            >
              Learn<span>Bootstrap</span>
            </a>
            <a href="https://www.w3schools.com/bootstrap/bootstrap_ver.asp">
              Overview
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/w3css/default.asp"
            >
              Learn<span>W3.CSS</span>
            </a>
            <a href="https://www.w3schools.com/w3css/default.asp">Tutorials</a>
            <a href="https://www.w3schools.com/w3css/w3css_references.asp">
              Reference
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/sass/default.php"
            >
              Learn<span>Sass</span>
            </a>
            <a href="https://www.w3schools.com/sass/default.php">Tutorials</a>
            <a href="https://www.w3schools.com/sass/sass_functions_string.php">
              Reference
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/colors/default.asp"
            >
              Learn<span>Colors</span>
            </a>
            <a href="https://www.w3schools.com/colors/default.asp">Tutorials</a>
            <a href="https://www.w3schools.com/colors/colors_fs595.asp">
              Reference
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/icons/default.asp"
            >
              Learn<span>Icons</span>
            </a>
            <a href="https://www.w3schools.com/icons/default.asp">Tutorials</a>
            <a href="https://www.w3schools.com/icons/icons_reference.asp">
              Reference
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/graphics/svg_intro.asp"
            >
              Learn<span>SVG</span>
            </a>
            <a href="https://www.w3schools.com/graphics/svg_intro.asp">
              Tutorials
            </a>
            <a href="https://www.w3schools.com/graphics/svg_reference.asp">
              Reference
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/graphics/canvas_intro.asp"
            >
              Learn<span>Canvas</span>
            </a>
            <a href="https://www.w3schools.com/graphics/canvas_intro.asp">
              Tutorials
            </a>
            <a href="https://www.w3schools.com/graphics/canvas_reference.asp">
              Reference
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/graphics/default.asp"
            >
              Learn<span>Graphics</span>
            </a>
            <a href="https://www.w3schools.com/graphics/default.asp">
              Tutorials
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/charsets/default.asp"
            >
              Learn<span>Character Sets</span>
            </a>
            <a href="https://www.w3schools.com/charsets/default.asp">
              Tutorials
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/howto/default.asp"
            >
              Learn<span>How To</span>
            </a>
            <a href="https://www.w3schools.com/howto/default.asp">Tutorials</a>
          </div>
        </div>

        <div className="title_section">
          <h1>JavaScript</h1>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/js/default.asp"
            >
              Learn<span>JavaScript</span>
            </a>
            <a href="https://www.w3schools.com/js/default.asp">Tutorials</a>
            <a href="https://www.w3schools.com/jsref/default.asp">Reference</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/react/default.asp"
            >
              Learn<span>React</span>
            </a>
            <a href="https://www.w3schools.com/react/default.asp">Tutorials</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/jquery/default.asp"
            >
              Learn<span>jQuery</span>
            </a>
            <a href="https://www.w3schools.com/jquery/jquery_ref_overview.asp">
              References
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/vue/index.php"
            >
              Learn<span>Vue</span>
            </a>
            <a href="https://www.w3schools.com/vue/index.php">Tutorials</a>
            <a href="https://www.w3schools.com/vue/vue_ref_builtin-attributes.php">
              Reference
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/angular/default.asp"
            >
              Learn<span>AngularJs</span>
            </a>
            <a href="https://www.w3schools.com/angular/default.asp">
              Tutorials
            </a>
            <a href="https://www.w3schools.com/angular/angular_ref_directives.asp">
              Reference
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/js/js_json_intro.asp"
            >
              Learn<span>JSON</span>
            </a>
            <a href="https://www.w3schools.com/js/js_json_intro.asp">
              Tutorials
            </a>
            <a href="https://www.w3schools.com/jsref/jsref_obj_json.asp">
              Reference
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/js/js_ajax_intro.asp"
            >
              Learn<span>AJAX</span>
            </a>
            <a href="https://www.w3schools.com/js/js_ajax_intro.asp">
              Tutorials
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/appml/default.asp"
            >
              Learn<span>AppML</span>
            </a>
            <a href="https://www.w3schools.com/appml/default.asp">Tutorials</a>
            <a href="https://www.w3schools.com/appml/appml_reference.asp">
              Reference
            </a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/w3js/default.asp"
            >
              Learn<span>W3JS</span>
            </a>
            <a href="https://www.w3schools.com/w3js/default.asp">Tutorials</a>
            <a href="https://www.w3schools.com/w3js/w3js_references.asp">
              Reference
            </a>
          </div>
        </div>
        <div className='title_section'>
            <h1>Backend</h1>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/python/default.asp'>Learn<span>Python</span></a>
                <a href="https://www.w3schools.com/python/default.asp">Tutorials</a>
                <a href="https://www.w3schools.com/python/python_reference.asp">Reference</a>
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/sql/default.asp'>Learn<span>SQL</span></a>
                <a href="https://www.w3schools.com/sql/default.asp">Tutorials</a>
                <a href="https://www.w3schools.com/sql/sql_ref_keywords.asp">Reference</a>
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/mysql/default.asp'>Learn<span>MySQL</span></a>
                <a href="https://www.w3schools.com/mysql/default.asp">Tutorials</a>
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/php/default.asp'>Learn<span>PHP</span></a>
                <a href="https://www.w3schools.com/php/default.asp">Overview</a>

            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/java/default.asp'>Learn<span>JAVA</span></a>
                <a href="https://www.w3schools.com/java/default.asp">Tutorials</a>
                <a href="https://www.w3schools.com/java/java_ref_reference.asp">Reference</a>
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/c/index.php'>Learn<span>C</span></a>
                <a href="https://www.w3schools.com/c/index.php">Tutorials</a>
                <a href="https://www.w3schools.com/c/c_ref_reference.php">Reference</a>
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/cpp/default.asp'>Learn<span>C++</span></a>
                <a href="https://www.w3schools.com/cpp/default.asp">Tutorials</a>
                <a href="https://www.w3schools.com/cpp/cpp_ref_reference.asp">Reference</a>
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/cs/index.php'>Learn<span>C#</span></a>
                <a href="https://www.w3schools.com/cs/index.php">Tutorials</a>
                
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/r/default.asp'>Learn<span>SVG</span></a>
                <a href="https://www.w3schools.com/r/default.asp">Tutorials</a>
                </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/kotlin/index.php'>Learn<span>Kotlin</span></a>
                <a href="https://www.w3schools.com/kotlin/index.php">Tutorials</a>
               
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/go/index.php'>Learn<span>Go</span></a>
                <a href="https://www.w3schools.com/go/index.php">Tutorials</a>
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/django/index.php'>Learn<span>Django</span></a>
                <a href="https://www.w3schools.com/django/index.php">Tutorials</a>
               
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/postgresql/index.php'>Learn<span>PostgreSQL</span></a>
                <a href="https://www.w3schools.com/postgresql/index.php">Tutorials</a>
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/typescript/index.php'>Learn<span>TypeScript</span></a>
                <a href="https://www.w3schools.com/typescript/index.php">Tutorials</a>
               
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/asp/default.asp'>Learn<span>ASP</span></a>
                <a href="https://www.w3schools.com/asp/default.asp">Tutorials</a>
                
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/nodejs/default.asp'>Learn<span>Node.Js</span></a>
                <a href="https://www.w3schools.com/r/default.asp">Tutorials</a>
                </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp'>Learn<span>Rasberry pi</span></a>
                <a href="https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp">Tutorials</a>
               
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/git/default.asp'>Learn<span>Git</span></a>
                <a href="https://www.w3schools.com/git/default.asp">Tutorials</a>
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/mongodb/index.php'>Learn<span>MongoDb</span></a>
                <a href="https://www.w3schools.com/mongodb/index.php">Tutorials</a>
               
            </div>
            <div className='courses'>
                <a className='learn_btn' href='https://www.w3schools.com/xml/default.asp'>Learn<span>XML</span></a>
                <a href="https://www.w3schools.com/xml/default.asp">Tutorials</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
