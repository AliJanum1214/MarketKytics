import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavContent from "./NavContent";

export default function Navlinks({ menuOpen, setMenuOpen }) {
  return (
    // Click anywhere inside the wrapper to close the menu
    <div
      className={`fixed inset-0 z-20 flex flex-wrap sm:flex-nowrap bg-black/60 ${
        menuOpen ? "block" : "hidden"
      }`}
      onClick={() => setMenuOpen(false)}
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }} // Slower transition (10s)
        className="w-full sm:w-[60%] pt-7 pl-10 sm:h-screen bg-black flex flex-col sm:p-20 text-white text-xl sm:text-3xl space-y-6 z-20"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <ol className="text-white flex flex-col space-y-8 mt-10 sm:mt-20 font-semibold">
          {[
            { id: "01", title: "Blog", href: "/blog" },
            { id: "02", title: "Projects", href: "/our-projects" },
            { id: "03", title: "Contact Us", href: "/contact-us" },
          ].map((link) => (
            <li key={link.id} className="flex items-baseline space-x-2">
              <span className="text-sm">{link.id}.</span>
              <Link
                href={link.href}
                className="hover:text-gray-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ol>
      </motion.div>
      <NavContent setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    </div>
  );
}
