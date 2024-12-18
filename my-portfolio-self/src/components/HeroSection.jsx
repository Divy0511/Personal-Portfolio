import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>I'm Divy.</h1>
        <h2>I love to innovate and analyze.</h2>
        <p>I am a Computer Science student at York University with a passion for software development and data analytics. My goal is to leverage my skills in programming and data-driven decision-making to create innovative solutions and drive impactful results</p>
      </div>
      <div className="hero-image">
        {/* Replace with your actual image */}
        <img src="hero.png"/>
      </div>
    </section>
  );
};

export default HeroSection;
