"use client";
import {
  maskVariants,
  maskVariantsBottom,
} from "@/components/Animation/animation";
import MainSection from "@/components/Blogs/MainSection";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Blog() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 1200); // Delay rendering content until animation ends

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Full-Screen Overlay Animation */}
      {!showContent && (
        <div className="fixed inset-0 z-50 flex flex-col">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={maskVariants}
            className="w-full flex-1 bg-gray-100"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={maskVariantsBottom}
            className="w-full flex-1 bg-gray-100"
          />
        </div>
      )}

      {/* Content appears AFTER animation */}
      {showContent && <MainSection />}
    </div>
  );
}
