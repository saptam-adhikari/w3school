
import './App.css';
import CourseLists from './Component/CourseLIsts/CourseLists';
import Course from './Component/CourseSection/Course';
import Features from './Component/Features/Features';
import Hero from './Component/HeroSection/Hero';
import LearningSection from './Component/LearningSection/LearningSection';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Course/>
      <CourseLists/>
      <Features/>
      <LearningSection/>
      
    </div>
  );
}

export default App;
