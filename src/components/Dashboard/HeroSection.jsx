import React from "react";
import AnimatedHeading from "./AnimationHeading";
import Button from "../ui/Button";
import DashboardBtn from "../ui/DashboardBtn";

export default function HeroSection({
  title = "AI Enablement",
  words = [
    { text: "skimming.ai", color: "#fff" },
    { text: "shipGPT", color: "#fff" },
    { text: "recaster.ai", color: "#fff" },
    { text: "chatwebby", color: "#fff" },
  ],
  description = "We leverage the latest open-source, nano, LLMS, and other machine learning algorithms to build AI-enabled applications and modules.",
  buttonText = "Learn More",
  bgColor = "bg-[#24d5b4]", // Dynamic background color
  btnLink = "#",
  align = "left", // "left" or "right"
}) {
  // Determine alignment classes
  const textAlignment =
    align === "right" ? "items-end text-right" : "items-start text-left";

  return (
    <div
      className={`py-16 px-6 sm:px-10 lg:px-20 flex flex-col ${textAlignment} space-y-5 sm:space-y-7 ${bgColor}`}
    >
      {/* Title */}
      <h2 className="text-[28px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent stroke-text max-w-4xl sm:max-w-5xl">
        {title}
      </h2>

      {/* Animated Heading */}
      <AnimatedHeading words={words} intervalTime={2000} />

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl">
        {description}
      </p>

      {/* Button */}
      <div className="mt-4">
        <Button text={buttonText} href={btnLink} />
      </div>
    </div>
  );
}
