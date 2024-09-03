
import './App.css';
import Course from './Component/CourseSection/Course';
import Hero from './Component/HeroSection/Hero';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Course/>
      
    </div>
  );
}

export default App;
