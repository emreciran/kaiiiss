import { motion } from "framer-motion"; // Import motion for animations from framer-motion
import Typewriter from "typewriter-effect"; // Import Typewriter component for typing effect
import { styles } from "../../styles/styles"; // Import custom styles
import React, { useEffect, useState } from "react"; // Import React and its hooks
import { useNavigate } from "react-router-dom"; // Import navigate from react-router-dom
import SanityService from "../../services/sanityService"; // Import SanityService to fetch data

const Hero = () => {
  const [hero, setHero] = useState(); // State to store hero data

  /* Function to get home data from Sanity service */
  const getHero = () => {
    SanityService.getData("hero")
      .then((response) => {
        setHero(response[response.length - 1]); // Set the latest hero data
      })
      .catch((error) => {
        console.log(error); // Log any errors
      });
  };

  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    getHero(); // Fetch hero data when the component mounts
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 text-center max-w-full justify-center items-center mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          {/* Main heading */}
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hello World, I'm
            <span className="text-[#37B7C3] second-font"> Kaiiiss</span>
          </h1>

          {/* Typewriter effect to display slogans */}
          {hero !== undefined ? (
            <Typewriter
              options={{
                strings: hero?.slogans, // Slogans to type
                autoStart: true, // Start typing automatically
                loop: true, // Loop the typing
                cursorClassName:
                  "mt-2 font-medium second-font lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
                wrapperClassName:
                  "mt-2 text-white-100 second-font text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
              }}
            />
          ) : (
            "" // Render nothing if hero data is not available
          )}

          {/* Link to portfolio section with animation */}
          <motion.a
            href="#works"
            className="bg-[#37B7C3] hover:bg-[#2d929b] transition-all mt-4 inline-block text-white rounded-lg p-4"
          >
            My Portfolio
          </motion.a>

          {/* Link to contact page with navigation */}
          <motion.a
            href="/contact"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              navigate("/contact"); // Navigate to contact page
              window.scrollTo(0, 0); // Scroll to top
            }}
            className="bg-transparent mt-4 inline-block text-white transition-all hover:text-[#37B7C3] rounded-lg p-4"
          >
            Say Hello
          </motion.a>
        </div>
      </div>

      {/* Looping animation icon at the bottom */}
      <div className="absolute xs:bottom-6 bottom-24 w-full flex justify-center items-center">
        <a href="#about" className="flex items-center">
          <div className="w-[35px] h-[56px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0], // Animate up and down
              }}
              transition={{
                duration: 1.5, // Duration of the animation
                repeat: Infinity, // Repeat indefinitely
                repeatType: "loop", // Loop type animation
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero; // Export the Hero component for use in other parts of the app
