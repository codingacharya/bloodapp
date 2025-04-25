// src/components/HeroSection.js

import React from 'react';
import '../styles/herosection.css'; // Importing the custom CSS

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Save Lives, Donate Blood</h1>
        <p>Join our mission to provide life-saving blood donations to those in need.</p>
        <a href="#donate" className="cta-button">Donate Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
