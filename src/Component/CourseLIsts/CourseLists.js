import React from 'react'
import "./CourseLists.css"

const CourseLists = () => {
  return (
    <div>
      <div className='coursesCard_container'>
        <div className='courses_bigCard'>
            <div className='php'>
                <h2>PHP</h2>
                <p>A web server programming language</p>
                <button className="btn"><a href='https://www.w3schools.com/php/default.asp'>Learn PHP</a></button>
            </div>
            <div className='jquery'>
                <h2>jQuery</h2>
                <p>A JS library for developing web pages</p>
                <button className="btn"><a href='https://www.w3schools.com/jquery/default.asp'>Learn jQuery</a></button>
            </div>
            <div className='java'>
                <h2>Java</h2>
                <p>A programming language</p>
                <button className="btn"><a href='https://www.w3schools.com/java/default.asp'>Learn Java</a></button>
            </div>
            <div className='c'>
                <h2>C++</h2>
                <p>A programming language</p>
                <button className="btn"><a href='https://www.w3schools.com/cpp/default.asp'>Learn C++</a></button>
            </div>
            <div className='w3css'>
                <h2>W3.CSS</h2>
                <p>A CSS framework for faster and better responsive web pages</p>
                <button className="btn"><a href='https://www.w3schools.com/w3css/default.asp'>Learn W3.CSS</a></button>
            </div>
            <div className='bootstrap'>
                <h2>Bootstrap</h2>
                <p>A CSS framework for designing better web pages</p>
                <button className="btn"><a href='https://www.w3schools.com/bootstrap/bootstrap_ver.asp'>Learn Bootstrap</a></button>
            </div>
        </div>
        <div className='courses_midCard'>
          <div className='firstc'>
            <h2><a href='https://www.w3schools.com/c/index.php'>C</a></h2>
          </div>
          <div className='secondc'>
            <h2><a href='https://www.w3schools.com/cs/index.php'>C#</a></h2>
          </div>
        </div>
        <div className='courses_smallCard'>
          <a className='firstclr' href="https://www.w3schools.com/r/default.asp">R</a>
          <a className='secondclr' href="https://www.w3schools.com/kotlin/index.php">Kotlin</a>
          <a className='thirdclr' href="https://www.w3schools.com/nodejs/default.asp">Node.js</a>
          <a className='fourthclr' href="https://www.w3schools.com/react/default.asp">React</a>
          <a className='fifthclr' href="https://www.w3schools.com/js/js_json.asp">JSON</a>
          <a className='firstclr' href="https://www.w3schools.com/vue/index.php">Vue</a>
          <a className='secondclr' href="https://www.w3schools.com/mysql/default.asp">MySQL</a>
          <a className='thirdclr' href="https://www.w3schools.com/xml/default.asp">XML</a>
          <a className='fourthclr' href="https://www.w3schools.com/sass/default.php">Sass</a>
          <a className='fifthclr' href="https://www.w3schools.com/icons/default.asp">Icons</a>
          <a className='firstclr' href="https://www.w3schools.com/css/css_rwd_intro.asp">RWD</a>
          <a className='secondclr' href="https://www.w3schools.com/graphics/default.asp">Graphics</a>
          <a className='thirdclr' href="https://www.w3schools.com/graphics/svg_intro.asp">SVG</a>
          <a className='fourthclr' href="https://www.w3schools.com/graphics/canvas_intro.asp">Canvas</a>
          <a className='fifthclr' href="https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp">Raspberry Pi</a>
          <a className='firstclr' href="https://www.w3schools.com/cybersecurity/index.php">Cyber Security</a>
          <a className='secondclr' href="https://www.w3schools.com/colors/default.asp">Colors</a>
          <a className='thirdclr' href="https://www.w3schools.com/git/default.asp">Git</a>
          <a className='fourthclr' href="https://www.w3schools.com/python/matplotlib_intro.asp">Matplotlib</a>
          <a className='fifthclr' href="https://www.w3schools.com/python/numpy/default.asp">NumPy</a>
          <a className='firstclr' href="https://www.w3schools.com/python/pandas/default.asp">Pandas</a>
          <a className='secondclr' href="https://www.w3schools.com/python/scipy/index.php">SciPy</a>
          <a className='thirdclr'  href="https://www.w3schools.com/asp/default.asp">ASP</a>
          <a className='fourthclr' href="https://www.w3schools.com/angular/default.asp">AngularJS</a>
          <a className='fifthclr' href="https://www.w3schools.com/appml/default.asp">AppML</a>
          <a className='firstclr' href="https://www.w3schools.com/go/index.php">Go</a>
          <a className='secondclr' href="https://www.w3schools.com/typescript/index.php">TypeScript</a>
          <a className='thirdclr' href="https://www.w3schools.com/django/index.php">Django</a>
          <a className='fourthclr' href="https://www.w3schools.com/mongodb/index.php">MongoDB</a>
          <a className='fifthclr' href="https://www.w3schools.com/statistics/index.php">Statistics</a>
          <a className='firstclr' href="https://www.w3schools.com/datascience/default.asp">Data Science</a>
          <a className='secondclr' href="https://www.w3schools.com/typingspeed/default.asp">Typing Speed</a>
          <a className='thirdclr' href="https://www.w3schools.com/howto/default.asp">HowTo</a>
          <a className='fourthclr' href="https://www.w3schools.com/codegame/index.html">Code Game</a>
          <a className='fifthclr' href="https://www.w3schools.com/spaces/index.php">Spaces</a>
          <a className='firstclr' href="https://www.w3schools.com/postgresql/index.php">PostgreSQL</a>
        </div>

        <div className='courses_midCard'>
          <div className='thirdclr'>
            <h2><a href='https://www.w3schools.com/excel/index.php'>Excel</a></h2>
          </div>
          <div className='fifthclr'>
            <h2><a href='https://www.w3schools.com/dsa/index.php'>DSA - Data Structure and Alogrithms</a></h2>
          </div>
          <div className='fourthclr'>
            <h2><a href='https://www.w3schools.com/python/python_ml_getting_started.asp'>MachineLearning</a></h2>
          </div>
          <div className='firstclr'>
            <h2><a href='https://www.w3schools.com/ai/default.asp'>Artificial Intelligence</a></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseLists
