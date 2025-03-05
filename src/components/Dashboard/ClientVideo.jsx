"use client";
import React from "react";

export default function ClientVideo() {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="./Client-Bg-Video.mp4" type="video/mp4" />
          {/* <source
            src="https://drive.google.com/uc?export=download&id=17tn5ZFrlwYAAr8hPVsgpTfSkR-qi9SBT"
            type="video/mp4"
          /> */}
        </video>
      </div>
    </section>
  );
}
