"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      title: "MS steel",
      img: "/assets/features/metals.png", // replace
      desc: "High‑strength mild steel framing ensures durability, stability, and long-term weather resistance.",
    },
    {
      title: "Glasswool",
      img: "/assets/features/woolglass.png", // replace public\assets\features\glasswool.png
      desc: "Premium glass wool for superior thermal and sound insulation, keeping interiors cool and quiet.",
    },
    {
      title: "Materials",
      img: "/assets/features/material.png", // replace public\assets\features\
      desc: "High-grade PUF panels, MDF, plywood, and tiles for strong, insulated, and premium interiors."
    },
    {
      title: "Panels",
      img: "/assets/features/panels.png", // replace public\assets\features\panel.png
      desc: "High‑performance insulated sandwich panels for weather proofing and energy efficiency.",
    },

  ];

  //   {
  //   title: "weather proof ",
  //   img: "/assets/features/weather.png", // replace
  //   desc: "High‑performance insulated sandwich panels for weather proofing and energy efficiency.",
  // },

  return (
    <section className=" md:w-11/12 lg:w-full  bg-[#e9f2ff] m-auto py-3 md:py-16  sm:px-2 px-1 md:px-5">
      <h2 className="text-center md:text-2xl  text-sky-950 font-bold md:mb-8">
        Key Features & Specifications
      </h2>

      {/* Mobile Slider – show 1 card per row */}
      <div className="flex overflow-x-auto gap-2 px-6  sm:hidden  snap-x snap-mandatory">
        {features.map((f, i) => (
          <div key={i} className="min-w-[80%] snap-center">
            <FeatureCard {...f} />
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden w-11/12 m-auto sm:grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-6">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ title, img, desc }) {
  const [open, setOpen] = useState(false);

  return (
    <div className=" rounded-2xl overflow-hidden  transition-all duration-300">
      <div className="w-full  overflow-hidden ">
        <Image onClick={() => setOpen(!open)}  src={img} alt={title} width={1000} height={1000} className={`md:hover:scale-150 transition-all px-6 md:px-20 hover:scale-105  `} />
      </div>

      <div className="md:p-4   m-auto w-fit ">
        {/* Title + Plus Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="flex  text-center w-full gap-3 justify-center sm:items-center"
        >
          <h3 className="sm:text-[1rem] text-nowrap  text-slate-600 font-semibold text-xs sm:text-center">{title}</h3>
          <ChevronDown size={16} className={` text-gray-600 items-center transition-transform ${open ? "rotate-45" : "rotate-0"}`} />
        </button>

        {/* Hidden Description – Smooth Animation */}
        <AnimatePresence>
          {open && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className=" text-sm md:text-lg text-center md:font-semibold text-gray-600 mt-3"
            >
              {desc}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
