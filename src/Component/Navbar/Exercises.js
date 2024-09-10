import React from "react";
import "./Exercises.css";
import Searchbar from "./Searchbar";

const Exercises = () => {
  return (
    <div className="Exercises">
      <div className="header_section">
        <h1>Exercises</h1>
        <Searchbar />
      </div>
      <div className="learning_list">
        <div className="title_section">
          <h1>HTML and CSS</h1>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/html/html_exercises.asp"
            >
              <span>HTML</span>
            </a>
            <a href="https://www.w3schools.com/html/html_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/html/html_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/css/css_exercises.asp"
            >
              <span>CSS</span>
            </a>
            <a href="https://www.w3schools.com/css/css_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/css/css_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/bootstrap/bootstrap_exercises.asp"
            >
              <span>Bootstrap 3</span>
            </a>
            <a href="https://www.w3schools.com/bootstrap/bootstrap_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/bootstrap/bootstrap_exercises.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/bootstrap4/bootstrap_exercises.asp"
            >
              <span>Bootstrap 4</span>
            </a>
            <a href="https://www.w3schools.com/bootstrap4/bootstrap_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/bootstrap4/bootstrap_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/bootstrap5/bootstrap_exercises.php"
            >
              <span>Bootstrap 5</span>
            </a>
            <a href="https://www.w3schools.com/bootstrap5/bootstrap_exercises.php">Exercise</a>
            <a href="https://www.w3schools.com/bootstrap5/bootstrap_quiz.php">Quiz</a>
          </div>
        </div>

        <div className="title_section">
          <h1>JavaScript</h1>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/js/js_exercises.asp"
            >
              <span>JavaScript</span>
            </a>
            <a href="https://www.w3schools.com/js/js_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/js/js_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/react/react_exercises.asp"
            >
              <span>React</span>
            </a>
            <a href="https://www.w3schools.com/react/react_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/react/react_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/jquery/jquery_exercises.asp"
            >
              <span>JQuery</span>
            </a>
            <a href="https://www.w3schools.com/jquery/jquery_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/jquery/jquery_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/vue/vue_exercises.php"
            >
              <span>Vue</span>
            </a>
            <a href="https://www.w3schools.com/vue/vue_exercises.php">Exercise</a>
            <a href="https://www.w3schools.com/vue/vue_quiz.php">Quiz</a>
          </div>
        </div>

        <div className="title_section">
          <h1>Backend</h1>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/python/python_exercises.asp"
            >
              <span>Python</span>
            </a>
            <a href="https://www.w3schools.com/python/python_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/python/python_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/sql/sql_exercises.asp"
            >
              <span>SQL</span>
            </a>
            <a href="https://www.w3schools.com/sql/sql_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/sql/sql_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/mysql/mysql_exercises.asp"
            >
              <span>MySQL</span>
            </a>
            <a href="https://www.w3schools.com/mysql/mysql_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/mysql/mysql_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/php/php_exercises.asp"
            >
              <span>PHP</span>
            </a>
            <a href="https://www.w3schools.com/php/php_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/php/php_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/java/java_exercises.asp"
            >
              <span>Java</span>
            </a>
            <a href="https://www.w3schools.com/java/java_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/java/java_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/c/c_exercises.php"
            >
              <span>C</span>
            </a>
            <a href="https://www.w3schools.com/c/c_exercises.php">Exercise</a>
            <a href="https://www.w3schools.com/c/c_quiz.php">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/cpp/cpp_exercises.asp"
            >
              <span>C++</span>
            </a>
            <a href="https://www.w3schools.com/cpp/cpp_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/cpp/cpp_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/cs/cs_exercises.php"
            >
              <span>C#</span>
            </a>
            <a href="https://www.w3schools.com/cs/cs_exercises.php">Exercise</a>
            <a href="https://www.w3schools.com/cs/cs_quiz.php">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/r/r_exercises.asp"
            >
              <span>R</span>
            </a>
            <a href="https://www.w3schools.com/r/r_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/r/r_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/kotlin/kotlin_exercises.php"
            >
              <span>Kotlin</span>
            </a>
            <a href="https://www.w3schools.com/kotlin/kotlin_exercises.php">Exercise</a>
            <a href="https://www.w3schools.com/kotlin/kotlin_quiz.php">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/django/django_exercises.php"
            >
              <span>Django</span>
            </a>
            <a href="https://www.w3schools.com/django/django_exercises.php">Exercise</a>
            <a href="https://www.w3schools.com/django/django_quiz.php">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/postgresql/postgresql_exercises.php"
            >
              <span>PostgreSQL</span>
            </a>
            <a href="https://www.w3schools.com/postgresql/postgresql_exercises.php">Exercise</a>
            <a href="https://www.w3schools.com/postgresql/postgresql_quiz.php">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/typescript/typescript_exercises.php"
            >
              <span>TypeScript</span>
            </a>
            <a href="https://www.w3schools.com/typescript/typescript_exercises.php">Exercise</a>
            <a href="https://www.w3schools.com/typescript/typescript_quiz.php">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/git/git_exercises.asp"
            >
              <span>Git</span>
            </a>
            <a href="https://www.w3schools.com/git/git_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/git/git_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/go/go_exercises.php"
            >
              <span>Go</span>
            </a>
            <a href="https://www.w3schools.com/go/go_exercises.php">Exercise</a>
            <a href="https://www.w3schools.com/go/go_exercises.php">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/mongodb/mongodb_exercises.php"
            >
              <span>MongoDB</span>
            </a>
            <a href="https://www.w3schools.com/mongodb/mongodb_exercises.php">Exercise</a>
            
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/aws/aws_exercises.php"
            >
              <span>AWS Cloud</span>
            </a>
            <a href="https://www.w3schools.com/aws/aws_exercises.php">Exercise</a>
            <a href="https://www.w3schools.com/aws/aws_quiz.php">Quiz</a>
          </div>
        </div>

        <div className="title_section">
          <h1>Data Analytics</h1>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/dsa/dsa_exercises.php"
            >
              <span>DSA</span>
            </a>
            <a href="https://www.w3schools.com/dsa/dsa_exercises.php">Exercise</a>
            <a href="https://www.w3schools.com/dsa/dsa_quiz.php">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/python/numpy/numpy_exercises.asp"
            >
              <span>NumPy</span>
            </a>
            <a href="https://www.w3schools.com/python/numpy/numpy_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/python/numpy/numpy_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/python/pandas/pandas_exercises.asp"
            >
              <span>Pandas</span>
            </a>
            <a href="https://www.w3schools.com/python/pandas/pandas_exercises.asp">Exercise</a>
            <a href="https://www.w3schools.com/python/pandas/pandas_quiz.asp">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/python/scipy/scipy_exercises.php"
            >
              <span>SciPy</span>
            </a>
            <a href="https://www.w3schools.com/python/scipy/scipy_exercises.php">Exercise</a>
            <a href="https://www.w3schools.com/python/scipy/scipy_quiz.php">Quiz</a>
          </div>
          <div className="courses">
            <a
              className="learn_btn"
              href="https://www.w3schools.com/excel/excel_exercises.php"
            >
              <span>Excel</span>
            </a>
            <a href="https://www.w3schools.com/excel/excel_exercises.php">Exercise</a>
        
          </div>
        </div>

      </div>
    </div>
  );
};

export default Exercises;
