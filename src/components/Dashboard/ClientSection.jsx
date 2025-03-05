import React from "react";
import ClientVideo from "./ClientVideo";
import Button from "../ui/Button";

export default function ClientSection() {
  const images = [
    {
      src: "https://marketlytics.co.uk/wp-content/uploads/2020/05/7-1.png",
      alt: "Client Logo 1",
    },
    {
      src: "https://marketlytics.co.uk/wp-content/uploads/2020/05/5-1.png",
      alt: "Client Logo 2",
    },
    {
      src: "https://marketlytics.co.uk/wp-content/uploads/2020/05/3-1.png",
      alt: "Client Logo 3",
    },
    {
      src: "https://marketlytics.co.uk/wp-content/uploads/2020/05/4-1.png",
      alt: "Client Logo 4",
    },
    {
      src: "https://marketlytics.co.uk/wp-content/uploads/2020/05/2-1.png",
      alt: "Client Logo 5",
    },
    {
      src: "https://marketlytics.co.uk/wp-content/uploads/2020/05/1-1.png",
      alt: "Client Logo 6",
    },
  ];

  return (
    <div className="relative w-full flex flex-col justify-center items-center text-white">
      {/* Background Video */}
      <ClientVideo />

      {/* Black Overlay */}
      <div className="absolute w-full  bg-black/60"></div>

      {/* Heading */}
      <h2 className="absolute top-12 md:top-16  text-4xl md:text-6xl font-bold text-center z-10">
        <span className="stroke-text font-extrabold text-transparent">Our</span>{" "}
        Clients
      </h2>

      {/* Client Logos */}
      <div className="absolute flex flex-wrap justify-center gap-6 px-2 z-10">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="w-20 h-auto sm:w-36 sm:h-36 object-contain"
          />
        ))}
      </div>
      <div className="absolute bottom-16 md:bottom-24">
        <Button text={"Get In Touch"} href="#" />
      </div>
    </div>
  );
}
