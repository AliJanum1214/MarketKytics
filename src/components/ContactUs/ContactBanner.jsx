import React from "react";

export default function ContactBanner() {
  return (
    <div
      className="relative bg-cover bg-center min-h-[60vh] sm:min-h-[90vh] lg:min-h-screen [@media(max-width:400px)]:min-h-[60vh]"
      style={{
        backgroundImage:
          "url('https://ninetheme.com/themes/wavo/wp-content/uploads/2020/05/eduardo-sanchez-rSRWst-IGlA-unsplash.jpg')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 top-32">
        <p className="text-sm sm:text-lg uppercase tracking-[2px] text-[#24D5B4]">
          Contact
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-[1px]">
          Welcome&nbsp;
          <span className="text-4 xl sm:text-6xl stroke-text text-transparent font-extrabold">
            To
          </span>
          &nbsp; Wavo
        </h1>
        <p className="mt-3 sm:mt-4 max-w-sm md:max-w-md sm:max-w-lg text-sm sm:text-md leading-relaxed">
          We’re a digital creative services firm. We provide web, mobile, and
          app development, branding, and design services for arts + culture,
          entertainment, and nonprofit organizations.
        </p>
      </div>
    </div>
  );
}
