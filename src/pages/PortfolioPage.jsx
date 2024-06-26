import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence for animation control
import Items from "../components/Portfolio/Items"; // Import Items component for displaying portfolio items
import Breadcrumb from "../utils/Breadcrumb"; // Import Breadcrumb component for navigation
import SanityService from "../services/sanityService"; // Import SanityService for fetching data
import { SectionWrapper } from "../hoc"; // Import SectionWrapper for section styling and functionality

const PortfolioPage = () => {
  const [projects, setProjects] = useState(); // State variable to store portfolio data

  /* GET PORTFOLIO DATA FROM SANITY SERVICE */
  const getPortfolioData = () => {
    SanityService.getData("portfolio")
      .then((response) => {
        setProjects(response); // Set state with fetched portfolio data
      })
      .catch((error) => {
        console.log(error); // Log any errors that occur during data fetching
      });
  };

  // Scroll to the top of the page on initial load and fetch portfolio data.
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    getPortfolioData(); // Fetch portfolio data on component mount
  }, []);

  return (
    <div className="container mx-auto mb-32">
      <Breadcrumb name="Portfolio" /> {/* Display breadcrumb navigation */}
      <h4 style={{ marginTop: "50px", fontSize: "20px" }}>Works</h4>{" "}
      {/* Heading for portfolio section */}
      <div className="container grid grid-cols-3 max-xl:grid-cols-2 max-[860px]:grid-cols-1 gap-7 mt-14">
        <AnimatePresence>
          {/* Render portfolio items with animation */}
          <Items projectItems={projects} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionWrapper(PortfolioPage, "portfolioPage"); // Apply SectionWrapper for styling and functionality
