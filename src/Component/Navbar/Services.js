import React from 'react';
import './Services.css'; 
import "./Searchbar.js";
import Searchbar from './Searchbar.js';
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// Array of services with link for each
const servicesData = [
  {
    title: 'Free Tutorials',
    description: 'Enjoy our free tutorials like millions of other internet users since 1999',
    link: 'https://www.w3schools.com/tutorials/index.php' 
  },
  {
    title: 'References',
    description: 'Explore our selection of references covering all popular coding languages',
    link: 'https://www.w3schools.com/references/index.php' 
  },
  {
    title: 'Create a Website',
    description: 'Create your own website with W3Schools Spaces - no setup required',
    link: 'https://www.w3schools.com/spaces/index.php' 
  },
  {
    title: 'Exercises',
    description: 'Test your skills with different exercises',
    link: 'https://www.w3schools.com/exercises/index.php' 
  },
  {
    title: 'Quizzes',
    description: 'Test yourself with multiple choice questions',
    link: 'https://www.w3schools.com/quiztest/default.asp' 
  },
  {
    title: 'Get Certified',
    description: 'Document your knowledge',
    link: 'https://campus.w3schools.com/collections/certifications' 
  },
  {
    title: 'Log in/Sign Up',
    description: 'Create a free W3School Account to Improve Ypur Learning Experience',
    link: 'https://profile.w3schools.com/sign-up' // Example external link
  },
  {
    title: 'Get Certified',
    description: 'Document your knowledge',
    link: 'https://campus.w3schools.com/collections/certifications' 
  },
  {
    title: 'Pathfinder & My Learning',
    description: 'Track your learning progress at W3Schools and collect rewards',
    link: 'https://profile.w3schools.com/sign-up' 
  },
  {
    title: 'Upgrade',
    description: 'Become a PLUS user and unlock powerful features (ad-free, hosting, support,..)',
    link: 'https://www.w3schools.com/plus/index.php' 
  },
  {
    title: 'Where To Start',
    description: 'Not sure where you want to start? Follow our guided path',
    link: 'https://www.w3schools.com/where_to_start.asp' 
  },
  {
    title: 'Code Editor (Try it)',
    description: 'With our online code editor, you can edit code and view the result in your browser',
    link: 'https://www.w3schools.com/tryit/default.asp' 
  },
  {
    title: 'Videos',
    description: 'Learn the basics of HTML in a fun and engaging video tutorial',
    link: 'https://www.w3schools.com/videos/index.php' 
  },
  {
    title: 'Templates',
    description: 'We have created a bunch of responsive website templates you can use - for free!',
    link: 'https://www.w3schools.com/w3css/w3css_templates.asp' 
  },
  {
    title: 'Web Hosting',
    description: 'Host your own website, and share it to the world with W3Schools Spaces',
    link: 'https://www.w3schools.com/spaces/index.php' 
  },
  {
    title: 'Create a Server',
    description: 'Create your own server using Python, PHP, React.js, Node.js, Java, C#, etc.',
    link: 'https://www.w3schools.com/spaces/index.php' 
  },
  {
    title: 'How To',
    description: 'Large collection of code snippets for HTML, CSS and JavaScript',
    link: 'https://www.w3schools.com/howto/default.asp' 
  },
  {
    title: 'CSS Framework',
    description: 'Build fast and responsive sites using our free W3.CSS framework',
    link: 'https://www.w3schools.com/w3css/default.asp' 
  },
  {
    title: 'Browser Statistics',
    description: 'Read long term trends of browser usage',
    link: 'https://www.w3schools.com/browsers/default.asp' 
  },
  {
    title: 'Typing Speed',
    description: 'Test your typing speed',
    link: 'https://www.w3schools.com/typingspeed/default.asp' 
  },
  {
    title: 'AWS Training',
    description: 'Learn Amazon Web Services',
    link: 'https://www.w3schools.com/training/aws/home/' 
  },
  {
    title: 'Color Picker',
    description: 'Use our color picker to find different RGB, HEX and HSL colors.',
    link: 'https://www.w3schools.com/colors/colors_picker.asp' 
  },
  {
    title: 'Code Game',
    description: 'W3Schools Coding Game! Help the lynx collect pine conesLynx logo',
    link: 'https://www.w3schools.com/codegame/index.html' 
  },
  {
    title: 'Set Goal',
    description: 'Get personalized learning journey based on your current skills and goals',
    link: 'https://www.w3schools.com/pathfinder/pathfinder_goals.php' 
  },
  {
    title: 'Newsletter',
    description: 'Join our newsletter and get access to exclusive content every month',
    link: 'https://campus.w3schools.com/pages/newsletter' 
  },
  {
    title: 'For Teachers',
    description: 'Contact us about W3Schools Academy for educational institutions',
    link: 'https://93d08a94.sibforms.com/serve/MUIFAL7VLqgr8nEWysDptuWiUJ0DEebkO51K6W-AD9fn1feCp90H2ZG9qLpbFOLns5x12uB9nzdotA0mKAoqqB9hpveHgfrYDpx8wDrHMs42_WrfsHNWXwMKlzaXWo1P8XmO2wUepgCfXgGQI11iUAInSi0ImpWbmz7J7_AcxWUCjMlVhF-SFqugUKkplNzXFESL1C9FYBImJCCL' 
  },
  {
    title: 'For Businesses',
    description: 'Contact us about W3Schools Academy for your organization',
    link: 'https://93d08a94.sibforms.com/serve/MUIFAL7VLqgr8nEWysDptuWiUJ0DEebkO51K6W-AD9fn1feCp90H2ZG9qLpbFOLns5x12uB9nzdotA0mKAoqqB9hpveHgfrYDpx8wDrHMs42_WrfsHNWXwMKlzaXWo1P8XmO2wUepgCfXgGQI11iUAInSi0ImpWbmz7J7_AcxWUCjMlVhF-SFqugUKkplNzXFESL1C9FYBImJCCL' 
  },
  {
    title: 'Contact Us',
    description: 'About sales:sales@w3schools.com About errors:help@w3schools.com',
    link: 'https://campus.w3schools.com/pages/newsletter' 
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h1>All Our Services</h1>
        <p>
          W3Schools offers a wide range of services and products for beginners and professionals,<br/>
          helping millions of people every day to learn and master new skills.
        </p>
        <div className="filter-container">
           <Searchbar/>
          <button className="filter-clear">×</button>
        </div>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <a 
            href={service.link} 
            className="service-card" 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </a>
        ))}
        
      </div>
      
      <div className="bottom_part">
        <div className="footer-social-links_part">
          <a href="#youtube" ><IoLogoYoutube /></a>
          <a href="#linkdin" ><FaLinkedin /></a>
          <a href="#discord"><FaDiscord /></a>
          <a href="#facebook"><FaFacebookSquare /></a>
          <a href="#instagram"><FaInstagram /></a>
        </div>
        </div>
      
    </section>
  );
};

export default Services;
