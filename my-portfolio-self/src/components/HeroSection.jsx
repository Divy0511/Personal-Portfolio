import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hey I'm Divy</h1>
        <p>"Computer Science student at York University passionate about solving real-world problems through software development
         and data analysis, leveraging innovative technologies to uncover insights, optimize processes, 
         and create impactful solutions to make people's lives easier and contribute to making the world a better place."</p>
        
      </div>
      <div className="hero-image">
       
        <img src="hero.png"/>
      </div>
    </section>
  );
};

export default HeroSection;
