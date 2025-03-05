import React from "react";
import BlogHeading from "./BlogHeading";
import Link from "next/link";

export default function RightHeroSection({ text, data }) {
  const MapData = data;
  return (
    <div>
      <BlogHeading text={text} />
      <div className="flex flex-col space-y-2 my-5">
        {MapData.map((text, i) => (
          <Link href={"#"} key={i}>
            <h4 className="text-[15px] font-semibold">{text}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
