"use client";
import { motion } from "framer-motion";

const Loading = () => {
  // Animation variants for the letters
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, color: "#000" },
    green: { color: "#0F9D58" },
  };

  // Animation variants for the dots
  const dotVariants = {
    initial: { backgroundColor: "#DB4437" },
    animate: {
      backgroundColor: ["#DB4437", "#F4B400", "#0F9D58", "#4285F4"],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Letters */}
      <div className="flex space-x-1">
        {["L", "o", "a", "d", "i", "n", "g", ".", "."].map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: index * 0.2,
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            whileHover="green"
            className="text-black"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Loading Dots */}
      <div className="flex space-x-2 mt-4">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{
              delay: index * 0.3,
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-4 h-4 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
