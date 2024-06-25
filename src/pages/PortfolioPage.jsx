import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Items from "../components/Portfolio/Items";
import Breadcrumb from "../utils/Breadcrumb";
import SanityService from "../services/sanityService";
import { SectionWrapper } from "../hoc";

const PortfolioPage = () => {
  const [projects, setProjects] = useState();

  /* GET PORTRFOLIO DATA FROM SANITY SERVICE */
  const getPortfolioData = () => {
    SanityService.getData("portfolio")
      .then((response) => {
        setProjects(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Scroll to the top of the page on initial load and fetch portfolio data.
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page.
    getPortfolioData(); // Fetch portfolio data.
  }, []);

  return (
    <div className="container mx-auto mb-32">
      <Breadcrumb name="Portfolio" />
      <h4 style={{ marginTop: "50px", fontSize: "20px" }}>Works</h4>
      <div className="container grid grid-cols-3 max-xl:grid-cols-2 max-[860px]:grid-cols-1 gap-7 mt-14">
        <AnimatePresence>
          {/* Items in the Porfolio page */}
          <Items projectItems={projects} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionWrapper(PortfolioPage, "portfolioPage");
