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
                <button className="btn">Learn PHP</button>
            </div>
            <div className='jquery'>
                <h2>jQuery</h2>
                <p>A JS library for developing web pages</p>
                <button className="btn">Learn jQuery</button>
            </div>
            <div className='java'>
                <h2>Java</h2>
                <p>A programming language</p>
                <button className="btn">Learn Java</button>
            </div>
            <div className='c'>
                <h2>C++</h2>
                <p>A programming language</p>
                <button className="btn">Learn C++</button>
            </div>
            <div className='w3css'>
                <h2>W3.CSS</h2>
                <p>A CSS framework for faster and better responsive web pages</p>
                <button className="btn">Learn W3.CSS</button>
            </div>
            <div className='bootstrap'>
                <h2>Bootstrap</h2>
                <p>A CSS framework for designing better web pages</p>
                <button className="btn">Learn Bootstrap</button>
            </div>
        </div>
        <div className='courses_midCard'>
          <div className='firstc'>
            <h2>C</h2>
          </div>
          <div className='secondc'>
            <h2>C#</h2>
          </div>
        </div>
        <div className='courses_smallCard'>
          <a className='firstclr' href="#course">R</a>
          <a className='secondclr' href="#course">Kotlin</a>
          <a className='thirdclr' href="#course">Node.js</a>
          <a className='fourthclr' href="#course">React</a>
          <a className='fifthclr' href="#course">JSON</a>
          <a className='firstclr' href="#course">Vue</a>
          <a className='secondclr' href="#course">MySQL</a>
          <a className='thirdclr' href="#course">XML</a>
          <a className='fourthclr' href="#course">Sass</a>
          <a className='fifthclr' href="#course">Icons</a>
          <a className='firstclr' href="#course">RWD</a>
          <a className='secondclr' href="#course">Graphics</a>
          <a className='thirdclr' href="#course">SVG</a>
          <a className='fourthclr' href="#course">Canvas</a>
          <a className='fifthclr' href="#course">Raspberry Pi</a>
          <a className='firstclr' href="#course">Cyber Security</a>
          <a className='secondclr' href="#course">Colors</a>
          <a className='thirdclr' href="#course">Git</a>
          <a className='fourthclr' href="#course">Matplotlib</a>
          <a className='fifthclr' href="#course">NumPy</a>
          <a className='firstclr' href="#course">Pandas</a>
          <a className='secondclr' href="#course">SciPy</a>
          <a className='thirdclr'  href="#course">ASP</a>
          <a className='fourthclr' href="#course">AngularJS</a>
          <a className='fifthclr' href="#course">AppML</a>
          <a className='firstclr' href="#course">Go</a>
          <a className='secondclr' href="#course">TypeScript</a>
          <a className='thirdclr' href="#course">Django</a>
          <a className='fourthclr' href="#course">MongoDB</a>
          <a className='fifthclr' href="#course">Statistics</a>
          <a className='firstclr' href="#course">Data Science</a>
          <a className='secondclr' href="#course">Typing Speed</a>
          <a className='thirdclr' href="#course">HowTo</a>
          <a className='fourthclr' href="#course">Code Game</a>
          <a className='fifthclr' href="#course">Spaces</a>
          <a className='firstclr' href="#course">PostgreSQL</a>
        </div>

        <div className='courses_midCard'>
          <div className='thirdclr'>
            <h2>Excel</h2>
          </div>
          <div className='fifthclr'>
            <h2>DSA - Data Structure and Alogrithms</h2>
          </div>
          <div className='fourthclr'>
            <h2>MachineLearning</h2>
          </div>
          <div className='firstclr'>
            <h2>Artificial Intelligence</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseLists
