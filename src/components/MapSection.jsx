"use client";

import React from "react";

export default function MapSection() {
  // Google Maps embed URL (derived from your link)
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.460554378007!2d77.45550649858227!3d28.57474152006353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef2af29ec87b%3A0x69e6466c2c911174!2sAM%20Office%20Solutions%20-%20Portable%20Cabins%20Manufacturer%20and%20Supplier%20in%20Delhi!5e0!3m2!1sen!2sin!4v1698260471234!5m2!1sen!2sin`;

  const mapsLink = "https://www.google.com/maps/place/AM+Office+Solutions+-+Portable+Cabins+Manufacturer+and+Supplier+in+Delhi/@28.5757515,77.4630374,15.54z/data=!4m6!3m5!1s0x390cef2af29ec87b:0x69e6466c2c911174!8m2!3d28.5747415!4d77.4656125!16s%2Fg%2F11x121lxgc?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D";

  return (
    
    <section className="py-16 bg-sky-50 ">
      <div className="max-w-4xl mx-auto px-6 text-center ">
        <h2 className="text-xl md:text-3xl font-bold text-sky-900">
          Find Us On The Map
        </h2>
        <p className="mt-2 md:text-lg text-sky-900  font-semibold mb-8">
          Visit our office or contact us — here’s where we’re located.
        </p>

        <div className="relative w-full overflow-hidden rounded-xl shadow-sm " style={{ paddingTop: "56.25%" /* 16:9 aspect ratio */ }}>
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            className="absolute top-0 left-0 border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-semibold bg-sky-800 text-white  rounded-full hover:bg-sky-700 transition"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
