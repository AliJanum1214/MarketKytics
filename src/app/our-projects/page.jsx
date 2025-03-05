"use client";
import {
  maskVariants,
  maskVariantsBottom,
} from "@/components/Animation/animation";
import BannerSection from "@/components/OurProjects/BannerSection";
import ContactSection from "@/components/OurProjects/ContactSection";
import ProjectGallery from "@/components/OurProjects/ProjectGallery";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function OurProjects() {
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
            className="w-full flex-1 bg-slate-50 shadow-sm"
          />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={maskVariantsBottom}
            className="w-full flex-1 bg-slate-50 shadow-sm"
          />
        </div>
      )}

      {/* Content appears AFTER animation */}
      {showContent && (
        <>
          <BannerSection />
          <ProjectGallery />
          <ContactSection />
        </>
      )}
    </div>
  );
}
