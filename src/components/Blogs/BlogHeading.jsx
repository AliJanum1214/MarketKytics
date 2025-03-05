"use client";
import React from "react";
import { motion } from "framer-motion";
import { letterVariants } from "../Animation/animation";

export default function BlogHeading({ text }) {
  return (
    <motion.h2 className="text-xl font-semibold">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          custom={i}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
}
