import React from "react";
import './Projects.css';

function Projects() {

  const cards = [
    {
      title: "Schedule Generator",
      subtitle: "Burger's Priest",
      description: "Automated_Schedule_Generator",
      tag: "Freelance/Project",
      bgColor: "#131313",
      imgSrc: "project1.jpg",
        },
    {
      title: "Airport Log",
      subtitle: "Personal",
      description: "Digital Treasures for Creatives",
      tag: "Project",
      bgColor: "#131313",
      imgSrc: "project2.jpg",
    },
    {
      title: "Portfolio",
      subtitle: "Personal",
      description: "I'm James Parker. I Code * Create * Innovate.",
      tag: "Project",
      bgColor: "#131313",
      imgSrc: "",
    },
    {
      title: "Among Us",
      subtitle: "Personal",
      description: "I'm James Parker. I Code * Create * Innovate.",
      tag: "Project",
      bgColor: "#131313",
      imgSrc: "project3.jpg",
    },
  ];

  return (
    
    <div className="App">
      <h3 className="projects-heading">My Projects</h3>
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card" style={{ backgroundColor: card.bgColor }}>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p className="subtitle">{card.subtitle}</p>
              <p className="description">{card.description}</p>
              
              {card.imgSrc && <img src={card.imgSrc} alt={card.title} className="card-image" />}
              <span className="tag">{card.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;