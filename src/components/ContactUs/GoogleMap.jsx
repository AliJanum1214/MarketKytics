"use client";
import { useEffect } from "react";

export default function GoogleMap() {
  useEffect(() => {
    const loadMap = () => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.503324, lng: -0.119623 }, // Center on London Eye
        zoom: 14, // Adjust zoom level for better focus
        disableDefaultUI: true, // Disable default UI controls
        styles: [
          // Custom map styles for grayscale and minimalistic look
          { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] }, // Light background
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }], // White stroke for labels
          },
          { elementType: "labels.text.fill", stylers: [{ color: "#333333" }] }, // Dark text
          { featureType: "water", stylers: [{ color: "#d3d3d3" }] }, // Light gray water
          { featureType: "road", stylers: [{ color: "#b3b3b3" }] }, // Gray roads
          { featureType: "poi", stylers: [{ visibility: "off" }] }, // Hide points of interest
          { featureType: "transit", stylers: [{ visibility: "off" }] }, // Hide transit
          { featureType: "landscape", stylers: [{ color: "#e0e0e0" }] }, // Light gray landscape
        ],
      });

      // Add Marker
      new google.maps.Marker({
        position: { lat: 51.503324, lng: -0.119623 }, // Marker at London Eye
        map,
        title: "London Eye",
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", // Custom red marker
        },
      });
    };

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  return (
    <div
      id="map"
      className="w-full h-screen z-20"
      style={{ filter: "grayscale(100%)" }} // Apply grayscale filter
    ></div>
  );
}
