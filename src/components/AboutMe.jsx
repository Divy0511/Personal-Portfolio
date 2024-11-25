import React from 'react';
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="container">
      

      {/* Stack Section */}
      <div className="stack-section">
        <h3>My Skills</h3>
        <div className="stack-grid">
          <div className="stack-item">
            <img src="java.png" />
            <p>Java</p>
            
          </div>
          <div className="stack-item">
            <img src="python.png" />
            <p>Python</p>
            
          </div>
          <div className="stack-item">
          <img src="react.png" />
          <p>React.js</p>
            
          </div>
          <div className="stack-item">
          <img src="c.png" />
          <p>C</p>
            
          </div>
          <div className="stack-item">
          <img src="mySQL.png" />
          <p>MySQL</p>
            
          </div>
          <div className="stack-item">
          <img src="javascript.png" />
          <p>HTML/CSS/JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
