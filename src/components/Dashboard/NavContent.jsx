"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function NavContent({ setMenuOpen, menuOpen }) {
  const contactInfo = [
    { label: "Phone", value: "+0 762-2367-723" },
    { label: "Address", value: "London, UK" },
    { label: "Email", value: "info@marketlytics.co.uk" },
  ];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: menuOpen ? 0 : "100%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed sm:top-0 top-56 right-0 p-5 sm:h-screen w-full sm:w-[40%] bg-black flex justify-start sm:justify-center items-center text-white shadow-lg z-30"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-col items-start space-y-4 px-6 sm:px-10 text-lg sm:text-xl">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-semibold">{item.label} :</span>
            <p className="text-gray-300">{item.value}</p>
          </div>
        ))}
        <div className="border-[0.5px] border-white flex">
          <input
            type="text"
            placeholder="search..."
            className="p-[8px] border-none outline-none text-black text-sm"
          />
          <Button text={"Search"} />
        </div>
      </div>
    </motion.div>
  );
}
