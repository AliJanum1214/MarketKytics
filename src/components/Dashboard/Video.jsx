"use client";
import React from "react";

export default function Video() {
  return (
    <section className="relative w-full h-[80vh] md:h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/Dashboard-Video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
