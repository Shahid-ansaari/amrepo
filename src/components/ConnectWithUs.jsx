"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * ConnectWithUs.jsx
 * Usage: import ConnectWithUs from "@/components/ConnectWithUs";
 * Replace PHONE and WHATSAPP variables with your numbers.
 */

const PHONE = "+919266722472"; // replace with your number (international format)
const WHATSAPP = "9266722472"; // number used in wa.me (no +, no spaces)

export default function ConnectWithUs({
  title = "Connect with us",
  subtitle = "Reach out on WhatsApp or give us a call for the best portable solution experience.",
  phone = PHONE,
  whatsapp = WHATSAPP,
}) {
  const waLink = `https://wa.me/${whatsapp}`;
  const telLink = `tel:${phone}`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-blue-50 backdrop-blur-sm rounded-2xl border py-15 md:py-30 border-white/8 p-6 md:p-10 mx-auto"
      aria-labelledby="connect-title"
    >
      <div className="flex flex-col  items-center justify-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h3 id="connect-title" className="text-2xl text-center md:text-4xl font-bold text-slate-800">
            {title}
          </h3>
          <p className="mt-2 font-semibold text-sm sm:text-[1rem] text-slate-700 max-w-2xl">{subtitle}</p>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto flex  gap-4 md:gap-5">

          <a
            href={telLink}
            aria-label="Call us now"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto md:px-10 px-6  py-2 md:py-3 rounded-full md:bg-sky-800 bg-sky-950 hover:bg-slate-800 text-white font-semibold shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300"
          >
            {/* Phone Icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72c.12 1.21.38 2.4.77 3.53a2 2 0 01-.45 2.11L8.09 10.91a16 16 0 006 6l1.55-1.55a2 2 0 012.11-.45c1.13.39 2.32.65 3.53.77A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className=" whitespace-nowrap">Call Now</span>
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto md:px-10 px-6  py-2 md:py-3 rounded-full md:bg-sky-800 bg-sky-950 hover:bg-green-700 text-white font-semibold shadow-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300"
          >
            {/* WhatsApp Icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.52 3.48A11.94 11.94 0 0012 1C6.48 1 2 5.48 2 11c0 2.02.6 3.9 1.64 5.47L2 23l6.7-1.74A11.94 11.94 0 0012 23c5.52 0 10-4.48 10-10 0-1.96-.56-3.78-1.48-5.22zM12 21.5c-.92 0-1.83-.14-2.7-.41l-.19-.07L6 20l.6-2.9-.12-.2A9 9 0 013 11c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9z" />
              <path d="M17.5 14.3c-.2-.1-1.2-.6-1.4-.6s-.4-.1-.6.1c-.2.2-.8.6-1 .9-.2.3-.4.3-.8.1-.4-.2-1.3-.5-2.4-1.5-.9-.8-1.4-1.8-1.6-2.2-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.5-.6.2-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7 0 1.5 1.1 3 1.3 3.2.2.2 1.9 3 5.2 4.2 3.3 1.2 3.3.8 3.9.8.6 0 2.2-.9 2.5-1.7.3-.8.3-1.4.2-1.6-.1-.2-.5-.4-1-.7z" fill="#fff"/>
            </svg>
            <span  className="">WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
