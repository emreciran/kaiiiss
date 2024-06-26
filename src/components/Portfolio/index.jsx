import React, { useEffect, useState } from "react"; // Import React and its hooks
import "./portfolio.css"; // Import CSS file for styling
import List from "./List"; // Import List component
import Items from "./Items"; // Import Items component
import { AnimatePresence } from "framer-motion"; // Import AnimatePresence for animations
import { useNavigate } from "react-router-dom"; // Import navigate from react-router-dom
import SanityService from "../../services/sanityService"; // Import SanityService to fetch data
import { SectionWrapper } from "../../hoc"; // Import HOC for section wrapping
import { textVariant } from "../../utils/motion"; // Import text animation variant
import { motion } from "framer-motion"; // Import motion for animations
import { styles } from "../../styles/styles"; // Import custom styles

const Portfolio = () => {
  const [projectItems, setProjectItems] = useState(); // State to store filtered project items
  const [projects, setProjects] = useState(); // State to store all project data
  const [catList, setCatList] = useState(); // State to store category list

  const navigate = useNavigate(); // Hook to navigate programmatically

  /* Function to get portfolio data from Sanity service */
  const getPortfolioData = () => {
    SanityService.getData("portfolio")
      .then((response) => {
        setProjects(response); // Set the fetched projects data

        // Extract unique categories from projects data and add 'all' category
        const allCatList = [
          "all",
          ...new Set(response?.map((project) => project.category)),
        ];
        setCatList(allCatList); // Set the category list
      })
      .catch((error) => {
        console.log(error); // Log any errors
      });
  };

  useEffect(() => {
    getPortfolioData(); // Fetch portfolio data when the component mounts
  }, []);

  // Update projectItems state when projects data changes
  useEffect(() => {
    setProjectItems(projects);
  }, [projects]);

  // Function to filter projects by category
  const filterItems = (category) => {
    if (category === "all") return setProjectItems(projects); // Show all projects if 'all' is selected

    const newProjectItems = projects?.filter(
      (item) => item.category === category // Filter projects by category
    );

    setProjectItems(newProjectItems); // Set the filtered projects
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
              e.preventDefault(); // Prevent default link behavior
              navigate("/portfolio"); // Navigate to portfolio page
              window.scrollTo(0, 0); // Scroll to top
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
            {/* Items in the Portfolio section */}
            <Items projectItems={projectItems} />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "works"); // Export the Portfolio component wrapped with SectionWrapper
