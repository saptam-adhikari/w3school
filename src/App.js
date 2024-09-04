
import './App.css';
import CourseLists from './Component/CourseLIsts/CourseLists';
import Course from './Component/CourseSection/Course';
import Hero from './Component/HeroSection/Hero';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Course/>
      <CourseLists/>
      
    </div>
  );
}

export default App;
