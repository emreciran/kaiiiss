import React, { useEffect, useState } from "react";
import "./portfolio.css";
import List from "./List";
import Items from "./Items";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SanityService from "../../services/sanityService";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../../styles/styles";

const Portfolio = () => {
  const [projectItems, setProjectItems] = useState();
  const [projects, setProjects] = useState();
  const [catList, setCatList] = useState();

  const navigate = useNavigate();

  /* GET PORTRFOLIO DATA FROM SANITY SERVICE */
  const getPortfolioData = () => {
    SanityService.getData("portfolio")
      .then((response) => {
        setProjects(response);

        // We put the portfolio categories into an array
        const allCatList = [
          "all",
          ...new Set(response?.map((project) => project.category)),
        ];
        setCatList(allCatList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPortfolioData();
  }, []);

  // When the projects are loaded, we add the projects to setProjectItems
  useEffect(() => {
    setProjectItems(projects);
  }, [projects]);

  // This function works when you click on the categories in the Portfolio section. We filter portfolio items by category
  const filterItems = (category) => {
    if (category == "all") return setProjectItems(projects);

    const newProjectItems = projects?.filter(
      (item) => item.category === category
    );

    setProjectItems(newProjectItems);
  };

  return (
    <div className="portfolio section container mx-auto mt-32" id="works">
      <motion.div variants={textVariant()} className="text-center">
        <p
          className={`${styles.sectionSubText} second-font`}
          style={{ textAlign: "center" }}
        >
          Portfolio
        </p>
        <h2 className={styles.sectionHeadText}>
          <span className="text-[#37B7C3]">My</span> Works
        </h2>
      </motion.div>

      <div data-aos="fade-up" delay="100" data-aos-duration="1500">
        <div className="text-center">
          <motion.a
            href="/portfolio"
            onClick={(e) => {
              e.preventDefault();
              navigate("/portfolio");
              window.scrollTo(0, 0);
            }}
            className="bg-[#37B7C3] hover:bg-[#2d929b] transition-all mt-4 inline-block text-white rounded-lg p-4"
          >
            All projects
          </motion.a>
        </div>

        {/* Category list */}
        <List catList={catList} filterItems={filterItems} />

        <div className="container grid grid-cols-3 max-xl:grid-cols-2 max-[860px]:grid-cols-1 gap-7">
          <AnimatePresence>
            {/* Items in the Porfolio section */}
            <Items projectItems={projectItems} />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "works");
