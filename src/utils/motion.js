/* Animation configurations using framer-motion */

/**
 * Variant for animating text elements.
 * @param {number} delay - Delay before animation starts.
 * @returns {object} Framer Motion variant object.
 */
export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

/**
 * Variant for fading in elements from a specific direction.
 * @param {string} direction - Direction from which the element fades in ('left', 'right', 'up', 'down').
 * @param {string} type - Type of transition animation.
 * @param {number} delay - Delay before animation starts.
 * @param {number} duration - Duration of the animation.
 * @returns {object} Framer Motion variant object.
 */
export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Variant for zooming in elements.
 * @param {number} delay - Delay before animation starts.
 * @param {number} duration - Duration of the animation.
 * @returns {object} Framer Motion variant object.
 */
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Variant for sliding in elements from a specific direction.
 * @param {string} direction - Direction from which the element slides in ('left', 'right', 'up', 'down').
 * @param {string} type - Type of transition animation.
 * @param {number} delay - Delay before animation starts.
 * @param {number} duration - Duration of the animation.
 * @returns {object} Framer Motion variant object.
 */
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Container variant for staggering children animations.
 * @param {number} staggerChildren - Stagger effect for children elements.
 * @param {number} delayChildren - Delay for children elements to start animating.
 * @returns {object} Framer Motion variant object.
 */
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
