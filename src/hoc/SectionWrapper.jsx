import { motion } from "framer-motion"; // Import motion components from Framer Motion library

import { styles } from "../styles/styles"; // Import styles from styles folder
import { staggerContainer } from "../utils/motion"; // Import staggerContainer animation utility

// Higher Order Component (HOC) that wraps a given Component with motion and styling
const StarWrapper = (
  Component // StarWrapper function takes a Component as input
) =>
  function HOC() {
    // Inner function HOC that returns JSX
    return (
      <motion.section
        variants={staggerContainer()} // Set animation variants using staggerContainer utility
        // initial="hidden" // Commented out initial animation state
        whileInView="show" // Animation state when component is in view
        viewport={{ once: true, amount: 0.25 }} // Viewport settings for animation trigger
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // Dynamically apply styles from styles object
      >
        <Component /> {/* Render the wrapped Component */}
      </motion.section>
    );
  };

export default StarWrapper; // Export StarWrapper as default
