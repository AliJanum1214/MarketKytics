export const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.09, // Stagger effect for each letter
      duration: 0.1,
      ease: "easeOut",
    },
  }),
};
export const FluidVariants = {
  hidden: { opacity: 0, y: 0 }, // Start slightly lower
  visible: (i) => ({
    opacity: 1,
    y: [0, 0, 20, 0, 0], // Wave effect
    x: [-20, 0, 0, 0, 0], // Swaying motion
    transition: {
      delay: i * 0.1, // Staggered effect
      duration: 0.75, // Smooth animation
      ease: "easeIn",
    },
  }),
};

// Define animation variants for the image
export const imageVariants = {
  hidden: { opacity: 0.4, x: 0, clipPath: "inset(0% 100% 0% 0%)" }, // Partially visible and cropped
  visible: {
    opacity: 1,
    x: 0,
    clipPath: "inset(0% 0% 0% 0%)", // Fully visible
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export const fadeVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};
export const maskVariants = {
  hidden: { y: 0 },
  visible: {
    y: ["0%", "-100%"], // Moves upward
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

export const maskVariantsBottom = {
  hidden: { y: 0 },
  visible: {
    y: ["0%", "100%"], // Moves downward
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};
