"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedLetter from "../Animation/AnimatedLetter";
import Navlinks from "./Navlinks";
import Link from "next/link";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed z-30 top-0 left-0 w-full p-6 sm:p-8 flex justify-between transition-all duration-300 
        ${isScrolled ? "bg-[#111] shadow-lg" : "bg-black/0"}`}
      >
        <Link href={"/"}>
          <h1 className="text-cyan-500 font-bold text-xl sm:text-3xl">Aj</h1>
        </Link>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex space-x-2 items-center"
        >
          <button className="relative w-8 h-6 flex flex-col justify-between z-50">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              className="block h-1 bg-white w-full"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-1 bg-white w-full"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              className="block h-1 bg-white w-full"
              transition={{ duration: 0.3 }}
            />
          </button>
          <AnimatedLetter letter={"Menu"} />
        </div>
      </div>
      <Navlinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* Full-Screen Menu (Slide from Left) */}
    </>
  );
}
