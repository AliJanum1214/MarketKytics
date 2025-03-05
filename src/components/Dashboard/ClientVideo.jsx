"use client";
import React from "react";

export default function ClientVideo() {
  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[90vh] lg:min-h-screen [@media(max-width:400px)]:min-h-[60vh]">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="https://res.cloudinary.com/dlorogzhe/video/upload/v1741175167/Client-Bg-Video_ib975b.mp4"
            type="video/mp4"
          />
          {/* <source
            src="https://drive.google.com/uc?export=download&id=17tn5ZFrlwYAAr8hPVsgpTfSkR-qi9SBT"
            type="video/mp4"
          /> */}
        </video>
      </div>
    </section>
  );
}
