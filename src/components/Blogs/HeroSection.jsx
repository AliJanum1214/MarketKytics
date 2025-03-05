import React from "react";
import Button from "../ui/Button";

export default function BlogHeroSection({
  title,
  description,
  date,
  month,
  imgSrc,
  buttonText = "Read more",
  buttonHref = "#",
}) {
  return (
    <div className="md:col-span-8 px-1 md:px-4 space-y-4">
      {/* Image Wrapper with Relative Positioning */}
      <div className="relative w-full">
        <img
          src={imgSrc}
          alt="Project"
          className="w-full h-auto object-cover"
        />

        {/* Date Box (Moves to Bottom-Left on Small Screens, Stays in Original Position on Large Screens) */}
        <div className=" absolute bottom-4 left-4 bg-white border border-gray-300 rounded-xl px-6 py-3 text-center shadow-md lg:hidden">
          <h2 className="font-extrabold text-xl">{date}</h2>
          <p className="text-gray-600">{month}</p>
        </div>
      </div>

      <h3 className="text-gray-500 capitalize text-sm">envato - ninetheme</h3>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start space-y-5 lg:space-y-0">
        {/* Left Content */}
        <div className="flex flex-col space-y-5">
          <h2 className="text-md md:text-3xl font-bold">{title}</h2>
          <p className="text-sm text-gray-500 w-full md:w-11/12">
            {description}
          </p>
          <Button text={buttonText} href={buttonHref} textColor={"black"} />
        </div>

        {/* Date Box (Shows in Original Position on Large Screens) */}
        <div className="hidden lg:flex flex-col border border-gray-300 rounded-xl px-8 py-4 text-center shadow-md">
          <h2 className="font-extrabold text-xl">{date}</h2>
          <p className="text-gray-600">{month}</p>
        </div>
      </div>
    </div>
  );
}
