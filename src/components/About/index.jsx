import React, { useEffect, useState } from "react"; // Import React and its hooks
import "./about.css"; // Import the CSS file for styling
import sanityClient from "../../../sanity"; // Import the configured Sanity client
import imageUrlBuilder from "@sanity/image-url"; // Import image URL builder from Sanity
import { BiLinkExternal } from "react-icons/bi"; // Import an external link icon
import { motion } from "framer-motion"; // Import motion component for animations
import { styles } from "../../styles/styles"; // Import custom styles
import { fadeIn, textVariant } from "../../utils/motion"; // Import animation variants
import { SectionWrapper } from "../../hoc"; // Import higher-order component for section wrapping
import SanityService from "../../services/sanityService"; // Import Sanity service for data fetching

// A builder to be able to use images from sanity.io
const builder = imageUrlBuilder(sanityClient);

// Function to build image URLs from Sanity
function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [about, setAbout] = useState(); // State to hold the about data

  // Function to get about data from Sanity service
  const getAbout = () => {
    SanityService.getData("about")
      .then((response) => {
        setAbout(response[response.length - 1]); // Set the latest about data
      })
      .catch((error) => {
        console.log(error); // Log any errors
      });
  };

  // useEffect to call getAbout on component mount
  useEffect(() => {
    getAbout();
  }, []);

  // Destructure file information if available
  const [_file, id, extension] =
    about !== undefined && about?.file !== undefined
      ? about?.file.asset._ref.split("-")
      : "";

  return (
    <div className="container mx-auto mt-32" id="about">
      {/* Animation with framer-motion package */}
      <motion.div variants={textVariant()} className="text-center">
        <p
          className={`${styles.sectionSubText} second-font`}
          style={{ textAlign: "center" }}
        >
          About
        </p>
        <h2 className={styles.sectionHeadText}>
          <span className="text-[#37B7C3]">My</span> Introduction
        </h2>
      </motion.div>

      <div className="flex flex-row-reverse max-lg:flex-col-reverse max-lg:items-center gap-10 justify-center">
        <div>
          {/* Animated paragraph for about description */}
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-white max-w-xl leading-[26px]"
          >
            {about?.description}
          </motion.p>
          {/* Conditional rendering of resume link if file data is available */}
          {_file !== undefined ? (
            <motion.a
              href={`https://cdn.sanity.io/files/qezjc3p6/production/${id}.${extension}`}
              rel="noreferrer noopener"
              target="_blank"
              aria-label="View My Resume"
              className="flex items-center gap-1 bg-[#37B7C3] w-fit hover:bg-[#2d929b] transition-all mt-4 text-white rounded-lg p-4"
            >
              View Resume
              <BiLinkExternal size={20} />
            </motion.a>
          ) : (
            ""
          )}
        </div>
        {/* Conditional rendering of image if image data is available */}
        {about?.image !== undefined ? (
          <div className="relative mt-4 sm:w-[500px] w-full">
            <img
              src={urlFor(about?.image.asset._ref)}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

// Export the About component wrapped with SectionWrapper HOC
export default SectionWrapper(About, "about");
