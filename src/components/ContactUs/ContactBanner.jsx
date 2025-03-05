import React from "react";
import StrokeHeading from "../Dashboard/StrokeHeading";
import ContactForm from "./ContactForm";

export default function ContactBanner() {
  return (
    <div
      className="relative bg-cover bg-center h-screen top-0"
      style={{
        backgroundImage:
          "url('https://ninetheme.com/themes/wavo/wp-content/uploads/2020/05/eduardo-sanchez-rSRWst-IGlA-unsplash.jpg')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/80 h-screen"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <p className="text-lg uppercase tracking-[3px] text-[#24D5B4]">
          Contact
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-[1px]">
          Welcome&nbsp;
          <span className="text-4xl sm:text-6xl stroke-text text-transparent font-extrabold">
            To
          </span>
          &nbsp; Wavo
        </h1>
        <p className="mt-4 max-w-lg text-md sm:text-md">
          We’re a digital creative services firm. We provide web, mobile, and
          app development, branding, and design services for arts + culture,
          entertainment, and nonprofit organizations.
        </p>
      </div>
    </div>
  );
}
