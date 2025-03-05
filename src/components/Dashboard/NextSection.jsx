import React from "react";
import Button from "../ui/Button";

export default function NextSection() {
  return (
    <div className="bg-black flex flex-col justify-center items-center text-white h-[50vh] md:h-screen space-y-7 p-20">
      <h2 className="text-4xl text-center md:text-7xl font-extrabold">
        <span className="stroke-text text-transparent font-extrabold">
          your
        </span>
        &nbsp;next projects
      </h2>
      <p>Talk to us!</p>
      <Button text={"Get in touch"} href="#" />
    </div>
  );
}
