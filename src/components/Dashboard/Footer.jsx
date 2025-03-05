"use client";
import React from "react";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-[#111] py-16 md:py-32 text-white  px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            MARKETlytics
          </h2>
          <p className="mt-2 text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2 text-white">ibrahim@marketlytics.co.uk</p>
        </div>

        {/* Download Button */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Download Our Profile</h3>
          <Button text={"Download"} href="#" bgColor="white" />
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2"
          >
            <img
              src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png"
              alt="linkedIn_logo"
              className="w-10 h-10 object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
