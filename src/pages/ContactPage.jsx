import React, { useState, useEffect } from "react"; // Import React and necessary hooks
import { motion } from "framer-motion"; // Import motion components from Framer Motion library
import { styles } from "../styles/styles"; // Import styles from styles folder
import { EarthCanvas } from "../components/canvas"; // Import EarthCanvas component
import { SectionWrapper } from "../hoc"; // Import SectionWrapper higher-order component
import { slideIn } from "../utils/motion"; // Import slideIn animation utility
import SanityService from "../services/sanityService"; // Import SanityService for fetching data
import ReactCardFlip from "react-card-flip"; // Import ReactCardFlip component for card flipping
import { ContactForm, ContactInfo } from "../shared-components"; // Import ContactForm and ContactInfo components
import { FiRefreshCw } from "react-icons/fi"; // Import FiRefreshCw icon from React Icons library
import Breadcrumb from "../utils/Breadcrumb"; // Import Breadcrumb component for navigation

const ContactPage = () => {
  const [contact, setContact] = useState(); // State variable to manage contact data
  const [flipped, setFlipped] = useState(false); // State variable to manage card flip state

  /* GET CONTACT DATA FROM SANITY SERVICE */
  const getContactData = () => {
    SanityService.getData("contact") // Fetch contact data from Sanity service
      .then((response) => {
        setContact(response[0]); // Set contact data to state
      })
      .catch((error) => {
        console.log(error); // Log any errors that occur during data fetching
      });
  };

  // Function to handle card flipping
  const handleFlip = (e) => {
    e.preventDefault(); // Prevent default behavior of the event
    setFlipped(!flipped); // Toggle the flipped state of the card
  };

  // Scroll to the top of the page and fetch contact data on component mount
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    getContactData(); // Fetch contact data from Sanity service
  }, []);

  return (
    <div className={`xl:mt-12 overflow-hidden`}>
      <Breadcrumb name="Contact" />{" "}
      {/* Display breadcrumb navigation for Contact page */}
      <div className="flex xl:flex-row flex-col-reverse gap-10 mt-10 p-1">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)} // Define animation variants using slideIn utility
          className="flex-[0.75] portfolio__items p-8 rounded-xl"
        >
          <div className="flex justify-between items-center">
            <p className={styles.sectionSubText}>Get in touch</p>{" "}
            {/* Display section subtitle */}
            <FiRefreshCw
              onClick={handleFlip} // Handle card flip on click of refresh icon
              className="opacity-70 text-xl hover:rotate-180 transition-all duration-500 cursor-pointer"
            />
          </div>

          {/* Flip between ContactForm and ContactInfo based on 'flipped' state */}
          <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
            <div>
              <ContactForm contact={contact} />{" "}
              {/* Display ContactForm component */}
            </div>
            <div>
              <ContactInfo contact={contact} />{" "}
              {/* Display ContactInfo component */}
            </div>
          </ReactCardFlip>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)} // Define animation variants using slideIn utility
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas /> {/* Display EarthCanvas component */}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(ContactPage, "contactPage"); // Export ContactPage wrapped with SectionWrapper
