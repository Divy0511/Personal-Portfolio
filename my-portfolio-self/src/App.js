import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <section id="Navbar">
      <Navbar />
      </section>
      <section id="HeroSection">
        <HeroSection />
      </section>
      <section id="AboutMe">
        <AboutMe />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
