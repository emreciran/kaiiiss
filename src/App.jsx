import React, { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import { Footer, Header } from "./components";
import { ParticlesBg } from "./shared-components";
import {
  HomePage,
  PortfolioPage,
  PortfolioDetailsPage,
  ContactPage,
} from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  useEffect(() => {
    // We init the Aos package for animations
    Aos.init();
  }, []);

  return (
    <div>
      <Header />
      <div className="relative z-0 bg-primary min-h-screen">
        <div className="hidden sm:block">
          <ParticlesBg />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default App;
