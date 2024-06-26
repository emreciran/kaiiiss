import React from "react"; // Import React
import { FaArrowRight } from "react-icons/fa"; // Import the right arrow icon from react-icons
import { motion } from "framer-motion"; // Import motion for animations
import imageUrlBuilder from "@sanity/image-url"; // Import image URL builder from Sanity
import sanityClient from "../../../sanity"; // Import Sanity client
import { Truncate } from "../../utils/TruncateText"; // Import the Truncate function for shortening text

// Create a builder to generate image URLs from Sanity
const builder = imageUrlBuilder(sanityClient);

// Function to generate image URL for a given source
function urlFor(source) {
  return builder.image(source);
}

// Component to display a list of project items
const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems?.map((projectItem) => {
        return (
          <motion.div
            layout // Enable layout animations
            animate={{ opacity: 1, scale: 1 }} // Define the animation state
            initial={{ opacity: 0.8, scale: 0.6 }} // Define the initial state
            exit={{ opacity: 0.8, scale: 0.6 }} // Define the exit state
            transition={{ duration: 0.4 }} // Define the transition duration
            className="portfolio__items card card-two pb-14" // CSS classes for styling
            key={projectItem?._id} // Unique key for each project item
          >
            {/* Animation with framer-motion package */}

            <div className="portfolio__img-wrapper">
              <a href={`/portfolio/${projectItem?.slug.current}`}>
                <img
                  src={urlFor(projectItem?.mainImage.asset._ref)} // Generate the image URL
                  alt="" // Alt text for the image
                  className="portfolio__img" // CSS class for styling the image
                />
              </a>
            </div>
            <span className="portfolio__category text-cs">
              {projectItem?.category} {/* Display the project category */}
            </span>
            <a href={`/portfolio/${projectItem?.slug.current}`}>
              <h3 className="portfolio__title text-[18px]">
                {projectItem?.title && Truncate(projectItem?.title, 100)}{" "}
                {/* Display and truncate the project title */}
              </h3>
            </a>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p className="portfolio__description text-[15px]">
                {projectItem?.description &&
                  Truncate(projectItem?.description, 200)}{" "}
                {/* Display and truncate the project description */}
              </p>
              <a
                href={`/portfolio/${projectItem?.slug.current}`}
                className="absolute bottom-3 flex hover:gap-2 transition-all duration-300 items-center gap-3"
              >
                See Details {/* Link to see more details about the project */}
                <FaArrowRight className="link__icon" /> {/* Right arrow icon */}
              </a>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Items; // Export the Items component
