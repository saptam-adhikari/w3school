import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import './AuthPage.css';  // Importing the CSS

const AuthPage = () => {
  return (
    <Router>
      <div className="container">
        <h1>W3Schools</h1>
        <nav className="nav">
          <Link to="/login" className="link">Login</Link>
          <Link to="/signup" className="link">Signup</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AuthPage;
