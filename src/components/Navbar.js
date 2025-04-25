// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // Assuming you have the navbar.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">🩸 BloodCare</Link>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/Donors">Donors</Link>
          <Link to="/RequestBlood">Request Blood</Link>
          <Link to="/Statistics">Statistics</Link>
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
