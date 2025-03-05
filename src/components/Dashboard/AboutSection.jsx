"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Video from "./Video";
import { letterVariants } from "../Animation/animation";
import StrokeHeading from "./StrokeHeading";

export default function AboutSection() {
  const text =
    "– we blend analytical expertise with innovative strategies to transform small and medium-sized enterprises into market leaders.";

  const controls = useAnimation(); // Animation control
  const [hasAnimated, setHasAnimated] = useState(false); // Prevent multiple animations

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100 && !hasAnimated) {
        controls.start("visible");
        setHasAnimated(true); // Prevent re-triggering animation
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, hasAnimated]);

  return (
    <div className="relative w-full">
      <Video />

      {/* Content */}
      <div className="absolute z-10 top-0 left-10 sm:left-16 md:left-20 p-6 sm:p-10 py-20 sm:py-32 flex flex-col space-y-5 sm:space-y-7">
        {/* Title */}
        <StrokeHeading text={"About"} />

        {/* Description */}
        <span className="stroke-text text-xl sm:text-2xl lg:text-[38px] font-bold">
          Founded in London by 2 lifelong friends
        </span>

        {/* Animated Paragraph */}
        <motion.p
          className="mt-4 sm:mt-6 text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-7 sm:leading-[50px]"
          initial="hidden"
          animate={controls} // Controls animation on scroll
        >
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              style={{ letterSpacing: "1px" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
      <div className="absolute inset-0 w-full h-full bg-black/60"></div>
    </div>
  );
}
