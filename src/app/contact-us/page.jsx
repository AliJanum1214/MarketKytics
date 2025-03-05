import ContactBanner from "@/components/ContactUs/ContactBanner";
import ContactFooter from "@/components/ContactUs/ContactFooter";
import ContactForm from "@/components/ContactUs/ContactForm";
import ContactNavbar from "@/components/ContactUs/ContactNavbar";
import GoogleMap from "@/components/ContactUs/GoogleMap";
import React from "react";

export default function ContactUs() {
  return (
    <div>
      <ContactNavbar />
      <ContactBanner />
      {/* Form positioned at the bottom */}
      <div className="relative h-screen z-50 bg-white">
        <ContactForm />
      </div>
      <GoogleMap />
      <ContactFooter />
    </div>
  );
}
