import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { EarthCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import SanityService from "../services/sanityService";
import ReactCardFlip from "react-card-flip";
import { ContactForm, ContactInfo } from "../shared-components";
import { FiRefreshCw } from "react-icons/fi";
import Breadcrumb from "../utils/Breadcrumb";

const ContactPage = () => {
  // Define state variables to manage contact data and the state of the card.
  const [contact, setContact] = useState();
  const [flipped, setFlipped] = useState(false);

  /* GET CONTACT DATA FROM SANITY SERVICE */
  const getContactData = () => {
    SanityService.getData("contact")
      .then((response) => {
        setContact(response[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to flip the card.
  const handleFlip = (e) => {
    e.preventDefault();
    setFlipped(!flipped);
  };

  // Scroll to the top of the page on initial load and fetch contact data.
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page.
    getContactData(); // Fetch contact data.
  }, []);

  return (
    <div className={`xl:mt-12 overflow-hidden`}>
      <Breadcrumb name="Contact" />{" "}
      {/* Display the page name using the Breadcrumb component. */}
      <div className="flex xl:flex-row flex-col-reverse gap-10 mt-10 p-1">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] portfolio__items p-8 rounded-xl"
        >
          <div className="flex justify-between items-center">
            <p className={styles.sectionSubText}>Get in touch</p>
            <FiRefreshCw
              onClick={handleFlip}
              className="opacity-70 text-xl hover:rotate-180 transition-all duration-500 cursor-pointer"
            />
          </div>

          {/* Display the front or back of the card based on 'isFlipped'. */}
          <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
            <div>
              <ContactForm contact={contact} />
            </div>
            <div>
              <ContactInfo contact={contact} />
            </div>
          </ReactCardFlip>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas /> {/* Display the component with the EarthCanvas. */}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(ContactPage, "contactPage");
