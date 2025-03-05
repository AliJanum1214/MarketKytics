"use client";
import React from "react";
import { Cloudy, Fingerprint, GitBranch, Github, Youtube } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="w-full max-w-5xl mx-auto shadow-2xl bg-white p-6 md:p-12 rounded-lg lg:absolute top-44 lg:-top-44 lg:left-1/2 lg:-translate-x-1/2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Text & Contact Info */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
            Do Not Hesitate To <br /> Consult Us For Any Problems.
          </h2>
          <p className="text-gray-600 mt-4 text-sm w-full md:w-[350px]">
            We’re a digital creative services firm. We provide web, mobile and
            app development, branding and design services for arts + culture,
            entertainment and nonprofit organizations.
          </p>

          {/* Contact Info */}
          <div className="mt-6 text-gray-800 text-sm">
            <p>Cecilia Chapman 711-2880</p>
            <p>Nulla St. Mankato Mississippi 96522</p>
            <p>(257) 563-7401</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <button className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition">
              <Fingerprint size={20} />
            </button>
            <button className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition">
              <Github size={20} />
            </button>
            <button className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition">
              <Cloudy size={20} />
            </button>
            <button className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition">
              <Youtube size={20} />
            </button>
            <button className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition">
              <GitBranch size={20} />
            </button>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <form className="space-y-4">
            {/* Name & Surname */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Surname"
                className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Inquiry Dropdown */}
            <select className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-black">
              <option>What is your inquiry about?</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>Branding</option>
              <option>Other</option>
            </select>

            {/* Message Box */}
            <textarea
              rows={4}
              placeholder="Message"
              className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>

            {/* Submit Button */}
            <button className="bg-black text-white py-3 px-6 uppercase hover:bg-[#333] transition">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
