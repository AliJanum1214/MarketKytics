import React from "react";
import BlogHeading from "./BlogHeading";

const images = [
  [
    "https://marketlytics.co.uk/wp-content/uploads/2020/04/portfolio-wide-6-450x450.jpg",
    "https://marketlytics.co.uk/wp-content/uploads/2020/04/portfolio-wide-3-450x450.jpg",
  ],
  [
    "https://marketlytics.co.uk/wp-content/uploads/2020/04/portfolio-wide-4-450x450.jpg",
    "https://marketlytics.co.uk/wp-content/uploads/2019/12/1-450x450.jpg",
  ],
  [
    "https://marketlytics.co.uk/wp-content/uploads/2020/04/portfolio-wide-2-450x450.jpg",
    "https://marketlytics.co.uk/wp-content/uploads/2020/04/project3-450x450.jpg",
  ],
];

export default function GallerySection() {
  return (
    <>
      <div className="my-10">
        <BlogHeading text={"Our Gallery"} />
      </div>
      <div className="flex justify-between gap-2 mb-10">
        {images.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-2">
            {column.map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className="w-32 h-32 object-cover"
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
