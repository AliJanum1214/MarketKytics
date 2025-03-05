import React from "react";
import BlogHeading from "./BlogHeading";

export default function AuthorInfo() {
  return (
    <div className="">
      <BlogHeading text={"About Author"} />
      <img
        src="https://marketlytics.co.uk/wp-content/uploads/2020/04/team-1-500x613.jpg"
        alt="Author"
        className="w-64 h-auto object-cover z-40"
      />
      <p className="text-gray-500 text-sm my-5">
        We all intend to plan ahead, but too often let the{" "}
        <span className="italic">day-to-day</span> minutia get in the way of
        making a calendar for the year. Sure, you can’t know every detail to
        anticipate. Heck, you can’t know half the priorities that will pop up in
        any particular month.
      </p>
    </div>
  );
}
