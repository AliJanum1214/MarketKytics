"use client";
import Link from "next/link";
import ProjectTabs from "./ProjectTabs";
import { motion, useAnimation, useInView } from "framer-motion";
import { FluidVariants, imageVariants } from "../Animation/animation";
import { useEffect, useState } from "react";

export default function ProjectGallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered item
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const projects = [
    {
      src: "https://marketlytics.co.uk/wp-content/uploads/2020/04/portfolio-wide-4.jpg",
      name: "Efes Turkish Restaurant",
      href: "#",
    },
    {
      src: "https://marketlytics.co.uk/wp-content/uploads/2020/04/portfolio-wide-2.jpg",
      name: "Rainforest Cafe London",
      href: "#",
    },
    {
      src: "https://marketlytics.co.uk/wp-content/uploads/2020/04/masonry-04.jpg",
      name: "Counaught Law London",
      href: "#",
    },
    {
      src: "https://marketlytics.co.uk/wp-content/uploads/2020/04/masonry-06.jpg",
      name: "Where The Pancakes Are",
      href: "#",
    },
    {
      src: "https://marketlytics.co.uk/wp-content/uploads/2020/04/masonry-08.jpg",
      name: "Shrimp & Grill",
      href: "#",
    },
    {
      src: "https://marketlytics.co.uk/wp-content/uploads/2020/04/work-x1.jpg",
      name: "Paro",
      href: "#",
    },
    {
      src: "https://marketlytics.co.uk/wp-content/uploads/2020/04/work-x3.jpg",
      name: "City Spice",
      href: "#",
    },
  ];

  return (
    <>
      <ProjectTabs />
      <div className="max-w-6xl my-14 mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              href={project.href}
              key={index}
              className="relative group block"
              onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
              onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index
            >
              {/* Animated Image */}
              <motion.img
                src={project.src}
                alt={project.name}
                className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:opacity-70"
                variants={imageVariants}
                initial="hidden"
                animate={controls}
                whileInView="visible"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                {/* Animated Text */}
                <motion.p
                  className="text-white text-lg font-semibold flex gap-1"
                  initial="hidden"
                  animate={hoveredIndex === index ? "visible" : "hidden"}
                >
                  {project.name.split(" ").map((letter, i) => (
                    <motion.span
                      key={i}
                      variants={FluidVariants}
                      custom={i}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
