import React, { useEffect, useState } from "react"; // Import React and its hooks
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io"; // Import social media icons from react-icons
import { FaXTwitter } from "react-icons/fa6"; // Import Twitter icon from react-icons
import { motion } from "framer-motion"; // Import motion for animations from framer-motion
import { SectionWrapper } from "../../hoc"; // Import higher-order component for section wrapping
import SanityService from "../../services/sanityService"; // Import Sanity service for data fetching

const Footer = () => {
  // Get the current year
  const year = new Date().getFullYear();

  const [socials, setSocials] = useState(); // State to hold social links data

  // Function to fetch social links data from Sanity service
  const getSocialLinks = () => {
    SanityService.getData("social")
      .then((response) => {
        setSocials(response); // Set the social links data in state
      })
      .catch((error) => {
        console.log(error); // Log any errors
      });
  };

  // useEffect to call getSocialLinks on component mount
  useEffect(() => {
    getSocialLinks();
  }, []);

  return (
    // Motion component for animated footer
    <motion.footer
      className="footer" // Apply footer CSS class
      initial={{ opacity: 0 }} // Initial opacity for animation
      animate={{ opacity: 1 }} // Animate to full opacity
      transition={{ duration: 1.4 }} // Duration of the animation
      exit={{ opacity: 0, transition: { duration: 0.5 } }} // Exit animation
    >
      {/* Animation with framer-motion package */}

      <div
        className={`flex items-center ${
          socials?.length !== 0 ? "justify-between" : "justify-center"
        } max-md:flex-col max-md:gap-4 footer__container max-sm:text-center`}
      >
        {/* Footer text with the current year and name */}
        <p>
          &copy; {year}{" "}
          <span className="text-[#37B7C3] second-font text-[20px]">
            Kaiiiss
          </span>
          &nbsp; All Rights Reserved
        </p>
        {/* Container for social media icons */}
        <div className="flex gap-2 text-xl">
          {/* Loop through social links and display corresponding icons */}
          {socials?.map(
            (social) =>
              social.link != "" && (
                <a
                  href={social.link} // Link to the social media profile
                  key={social._id} // Unique key for each link
                  target="_blank" // Open link in a new tab
                  className="hover:text-[#37B7C3] transition-all" // Hover effect
                >
                  {/* Display the appropriate icon based on social media name */}
                  {social.name === "instagram" && social.link !== undefined ? (
                    <IoLogoInstagram />
                  ) : social.name === "twitter" && social.link !== undefined ? (
                    <FaXTwitter />
                  ) : social.name === "linkedin" &&
                    social.link !== undefined ? (
                    <IoLogoLinkedin />
                  ) : social.name === "facebook" &&
                    social.link !== undefined ? (
                    <IoLogoFacebook />
                  ) : social.name === "github" && social.link !== undefined ? (
                    <IoLogoGithub />
                  ) : (
                    ""
                  )}
                </a>
              )
          )}
        </div>
      </div>
    </motion.footer>
  );
};

// Export the Footer component wrapped with SectionWrapper HOC
export default SectionWrapper(Footer, "footer");
