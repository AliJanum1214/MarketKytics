import React from "react";

const menuSections = [
  { title: "Primary Menu", links: ["Home", "About Us", "Contact", "News"] },
  { title: "About Us", links: ["Home", "About Us", "Contact", "News"] },
  { title: "Quick Links", links: ["Home", "About Us", "Contact", "News"] },
  { title: "Contact Channels", links: ["Home", "About Us", "Contact", "News"] },
];

export default function ContactFooter() {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-10">
      <div className="w-full">
        {/* Top Section */}
        <div className="mb-10 text-center md:text-left">
          <h3 className="text-green-400 text-sm font-semibold uppercase tracking-wide">
            Important Note
          </h3>
          <p className="mt-2 text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.”
          </p>
        </div>

        {/* Footer Grid - 12 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-center md:text-left">
          {/* The Wavo (5 columns) */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xl font-bold">The Wavo</h4>
            <p className="text-gray-400 max-w-sm mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus{" "}
              <span className="font-bold">leo</span>.
            </p>
          </div>

          {/* Links Section (7 columns) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {menuSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-sm font-semibold uppercase tracking-[1px]">
                  {section.title}
                </h4>
                <ul className="mt-3 space-y-2 text-gray-400">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
