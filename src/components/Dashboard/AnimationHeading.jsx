"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeVariants, letterVariants } from "../Animation/animation";

export default function AnimatedHeading({
  words = [
    { text: "Business Intelligence", color: "#FF5733" }, // Orange
    { text: "Digital Marketing", color: "#3380FF" }, // Blue
    { text: "Data Analytics", color: "#FFD700" }, // Gold
    { text: "Lead Generation", color: "#FF8C00" }, // Dark Orange
  ],
  intervalTime = 2500, // Default switch time
  className = "text-3xl sm:text-5xl font-extrabold w-full",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [words.length, intervalTime]);

  return (
    <div className="flex h-[38px] sm:h-[56px] w-full overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.h2
          key={index}
          className={`${className}`}
          style={{ color: words[index].color, letterSpacing: "1px" }}
          {...fadeVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {words[index].text.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              custom={letterIndex}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
