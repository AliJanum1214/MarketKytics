import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function MainSection() {
  return (
    <div className="max-w-[1290px] mx-auto px-4 sm:px-24 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Large Content Section */}
        <div className="lg:col-span-8 space-y-8">
          <LeftSection />
        </div>

        {/* Sidebar Section (Desktop View) */}
        <div className="lg:col-span-4 hidden lg:block space-y-6">
          <RightSection />
        </div>
      </div>

      {/* Sidebar Section (Mobile & Medium Screens) */}
      <div className="block lg:hidden mt-8 space-y-6">
        <RightSection />
      </div>
    </div>
  );
}
