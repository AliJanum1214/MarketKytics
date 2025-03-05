import React from "react";
import BlogInput from "./BlogInput";
import GallerySection from "./GallerySection";
import RightHeroSection from "./RightHeroSection";
import AuthorInfo from "./AuthorInfo";
import TagSection from "./TagSection";

export default function RightSection() {
  return (
    <div>
      <AuthorInfo />
      <BlogInput />
      <GallerySection />
      <RightHeroSection
        data={[
          "Build a Beautiful Blog With Ease",
          "We can be faster",
          "A Healthier Cooking Oil",
          "Best Classico Mockup",
          "World Best Business Website Company",
        ]}
        text={"Recent Posts"}
      />
      <RightHeroSection
        data={["April 2020", "February 2020", "December 2019"]}
        text={"Archives"}
      />
      <TagSection />
      <RightHeroSection
        data={[
          "Build a Beautiful Blog With Ease",
          "A Healthier Cooking Oil",
          "A Healthier Cooking Oil",
          "Build a Beautiful Blog With Ease",
        ].map((title, index) => (
          <div key={index} className="flex">
            <span className="text-gray-500 hover:text-gray-700">Admin</span>
            &nbsp;{"on " + title}
          </div>
        ))}
        text="Recent Comments"
      />
    </div>
  );
}
