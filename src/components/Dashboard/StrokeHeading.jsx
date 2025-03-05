"use client";
import React from "react";
import { motion } from "framer-motion";
import { letterVariants } from "../Animation/animation";
export default function StrokeHeading({ text }) {
  return (
    <div>
      <motion.h2>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            className="text-5xl md:text-7xl stroke-text font-extrabold"
          >
            {char}
          </motion.span>
        ))}{" "}
        <span className="text-white text-4xl md:text-6xl font-bold">US</span>
        <span className="text-3xl sm:text-4xl md:text-6xl stroke-text font-extrabold">
          .
        </span>
      </motion.h2>
    </div>
  );
}
