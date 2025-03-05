import { motion } from "framer-motion";

const text = "Menu".split(""); // Split text into individual letters

const containerVariants = {
  hover: {
    transition: { staggerChildren: 0.1 }, // Stagger effect for smooth animation
  },
};
const letterVariants = {
  initial: { y: 0, opacity: 1 }, // Initially visible
  hover: { y: -10, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }, // Moves up on hover
};

export default function AnimatedLetter() {
  return (
    <motion.div
      className="text-white text-lg flex  cursor-pointer"
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
    >
      {text.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
