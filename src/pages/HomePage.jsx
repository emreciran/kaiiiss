import React from "react";
import { Hero, About, Skills, Qualification, Portfolio } from "../components"; // Importing necessary components

const HomePage = () => {
  return (
    <div>
      <Hero /> {/* Render Hero component */}
      <About /> {/* Render About component */}
      <Skills /> {/* Render Skills component */}
      <Qualification /> {/* Render Qualification component */}
      <Portfolio /> {/* Render Portfolio component */}
    </div>
  );
};

export default HomePage;
