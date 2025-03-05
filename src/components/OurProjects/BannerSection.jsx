import React from "react";

export default function BannerSection() {
  return (
    <div className="bg-black h-[60vh] sm:h-[80vh] w-full flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 pt-20 sm:pt-28 space-y-2 md:space-y-4">
      <h2 className="text-2xl text-center sm:text-left sm:text-3xl md:text-4xl font-semibold text-white">
        Marketing Projects
      </h2>
      <p className="text-gray-400 text-sm max-w-lg">
        Creative way to showcase your works at their absolute best.
      </p>
    </div>
  );
}
