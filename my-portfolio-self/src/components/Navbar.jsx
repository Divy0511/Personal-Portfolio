import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <a href="#HeroSection">
          <img src="hero.png" alt="Home" />
        </a>
        <a href="#AboutMe">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a>
      </div>

      {/* Social Icons and CTA */}
      <div className="icons">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/divy-parikh/" target="_blank" rel="noopener noreferrer">
            <img src="/linkdin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Divy0511" target="_blank" rel="noopener noreferrer">
            <img src="/github2.png" alt="GitHub" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/logotwiiter.png" alt="Twitter" />
          </a>
        </div>
        
        {/* Resume Link */}
        <a href="/resume.pdf" className="cta full-rounded" target="_blank" rel="noopener noreferrer">
          <span>Resume</span>
          <div className="border"></div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
