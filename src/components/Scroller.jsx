"use client";

import React, { useState, useEffect } from "react";

export default function Scroller() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScroller, setShowScroller] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(progress);
      setShowScroller(scrollTop > window.innerHeight * 0.5); // Show only after scrolling past 50vh
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScroller && (
      <div className="fixed bottom-14 right-10 z-50">
        {/* Outer Circle */}
        <div className="relative w-14 h-14">
          {/* Background Circle */}
          <svg
            className="absolute inset-0 w-full h-full bg-black rounded-full"
            viewBox="0 0 36 36"
          >
            <circle
              className="text-gray-100"
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              cx="18"
              cy="18"
              r="15"
            />
          </svg>

          {/* Progress Circle */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90"
            viewBox="0 0 36 36"
          >
            <circle
              className="text-blue-500 transition-all duration-500 ease-out"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="transparent"
              strokeDasharray="100"
              strokeDashoffset={100 - scrollProgress}
              cx="18"
              cy="18"
              r="15"
            />
          </svg>

          {/* Scroll Button */}
          <button
            onClick={scrollToTop}
            className="absolute inset-0 flex items-center justify-center w-14 h-14 text-white rounded-full cursor-pointer hover:bg-gray-800 transition z-50"
          >
            ↑
          </button>
        </div>
      </div>
    )
  );
}
