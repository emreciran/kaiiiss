import React, { useEffect } from "react";
import "./App.css";
import Aos from "aos"; // Import AOS library for animations
import { Footer, Header } from "./components"; // Import Footer and Header components
import { ParticlesBg } from "./shared-components"; // Import ParticleBg component for background particles animation
import {
  HomePage,
  PortfolioPage,
  PortfolioDetailsPage,
  ContactPage,
} from "./pages"; // Import different page components
import { Route, Routes } from "react-router-dom"; // Import Route and Routes from react-router-dom for routing

const App = () => {
  useEffect(() => {
    // Initialize AOS for animations when component mounts
    Aos.init();
  }, []);

  return (
    <div>
      {/* Header component */}
      <Header />

      {/* Main content area with background color */}
      <div className="relative z-0 bg-primary min-h-screen">
        <div className="hidden sm:block">
          {/* Background particles animation */}
          <ParticlesBg />
        </div>

        {/* Routing setup using React Router */}
        <Routes>
          {/* Route for home page */}
          <Route path="/" element={<HomePage />} />

          {/* Route for portfolio page */}
          <Route path="/portfolio" element={<PortfolioPage />} />

          {/* Route for portfolio details page with slug parameter */}
          <Route path="/portfolio/:slug" element={<PortfolioDetailsPage />} />

          {/* Route for contact page */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Footer component */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
