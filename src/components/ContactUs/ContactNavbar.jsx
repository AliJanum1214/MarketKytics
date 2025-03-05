"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedLetter from "../Animation/AnimatedLetter";
import Link from "next/link";
import Button from "../ui/Button";
import ContactBtn from "./ContactBtn";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full absolute z-50 top-0 left-0 p-6 sm:p-8 flex justify-between items-center bg-transparent">
        <Link href={"/"} className="text-white">
          Aj
        </Link>
        {/* Desktop Menu (Visible on md and larger) */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <ContactBtn href="/blog" text={"Blog"} />
          </li>
          <li>
            <ContactBtn href="/our-projects" text={"Projects"} />
          </li>
          <li>
            <ContactBtn href="/contact-us" text={"Contact"} />
          </li>
        </ul>
        <div className="md:block hidden">
          <Button text={"Contact"} />
        </div>

        {/* Menu Button (Visible on small screens) */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex space-x-2 items-center cursor-pointer"
        >
          <motion.div className="relative w-8 h-6 flex flex-col justify-between">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              className="block h-1 bg-white w-full rounded transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-1 bg-white w-full rounded transition-all"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              className="block h-1 bg-white w-full rounded transition-all"
            />
          </motion.div>
          <AnimatedLetter letter={menuOpen ? "Close" : "Menu"} />
        </div>
      </div>

      {/* Sidebar Menu (Visible on small screens) */}
      {menuOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden w-full bg-[#111] shadow-lg p-6 h-screen"
        >
          <ul className="mt-20 space-y-9 text-white">
            <li>
              <ContactBtn href="/blog" text={"Blog"} />
            </li>
            <li>
              <ContactBtn href="/our-projects" text={"Projects"} />
            </li>
            <li>
              <ContactBtn href="/contact-us" text={"Contact"} />
            </li>
          </ul>
          <div className="my-5">
            <Button text={"Contact"} />
          </div>
        </motion.div>
      )}
    </>
  );
}
