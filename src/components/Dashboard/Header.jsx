// "use client";
import React from "react";
import LearnMoreBtn from "../ui/LearnMoreBtn";
import Video from "./Video";
import AnimationHeading from "./AnimationHeading";

export default function Header() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Video */}
      <Video />
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col space-y-8 sm:space-y-12 sm:p-20 pl-10 pt-24">
        <h1 className="text-white text-5xl sm:text-5xl font-bold sm:mt-14 mt-0">
          MARKETlytics
        </h1>
        <AnimationHeading
          word1={"Business Intelligence"}
          word2={"Digital Marketing"}
          word3={"Data Analytics"}
          word4={"Lead Generation"}
          intervalTime={2500}
        />
        <h3 className="text-[20px] sm:text-[24px] font-black text-transparent stroke-text">
          Fueling Growth with Data, AI and Strategic Marketing.
        </h3>

        <LearnMoreBtn />
      </div>
    </div>
  );
}
