import React from "react";
import BlogHeading from "./BlogHeading";
import Button from "../ui/Button";

export default function TagSection() {
  return (
    <div className="">
      <BlogHeading text={"Tags"} />
      <div className="flex items-center gap-4 my-5">
        <Button text={"Envato"} bgColor="black" />
        <Button text={"Ninetheme"} bgColor="black" />
      </div>
    </div>
  );
}
