import React from "react";
import StrokeHeading from "../Dashboard/StrokeHeading";
import Button from "../ui/Button";

export default function ContactSection() {
  return (
    <div className="bg-black py-20 px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start gap-6">
        <div className="text-center md:text-left">
          <h5 className="uppercase text-[#24d5b4]">let's talk</h5>
          <StrokeHeading text="Contact" />
        </div>
        <Button text="Get In Touch" />
      </div>
    </div>
  );
}
