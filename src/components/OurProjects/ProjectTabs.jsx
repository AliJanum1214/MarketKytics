"use client";
import React, { useState } from "react";

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState("All Products");

  return (
    <div>
      {" "}
      <div className="flex justify-center items-center space-x-4 my-2">
        <h2
          className={`cursor-pointer ${
            activeTab === "All Products" ? "text-[#24d5b4]" : "text-black"
          }`}
          onClick={() => setActiveTab("All Products")}
        >
          All Products
        </h2>
        <span className="text-gray-500 text-xl">•</span>
        <h2
          className={`cursor-pointer ${
            activeTab === "Restaurant" ? "text-[#24d5b4]" : "text-black"
          }`}
          onClick={() => setActiveTab("Restaurant")}
        >
          Restaurant
        </h2>
      </div>
    </div>
  );
}
