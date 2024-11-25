import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>I'm Divy.</h1>
        <h2>I Code * Create * Innovate.</h2>
        <p>Empowering Ideas Through End-to-End Development</p>
        <p>Expertise and Seamless User Interfaces</p>
      </div>
      <div className="hero-image">
        {/* Replace with your actual image */}
        <img src="hero.png"/>
      </div>
    </section>
  );
};

export default HeroSection;
