// components/WhyChooseGlass.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Premium Build Quality",
    text: "High-grade MS steel frames, PUF/EPS insulated panels, rust-proof finishes — engineered to last.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 7l9-4 9 4-9 4-9-4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 7v10l9 4 9-4V7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fastest Delivery",
    text: "Optimised manufacturing & logistics — get turnkey cabins delivered and installed in days, not months.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12h12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v6a2 2 0 0 1-2 2h-1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fully Customisable",
    text: "Layouts, finishes, windows & utilities — tailor every cabin to your exact spec with fast CAD turnaround.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7h16M4 12h10M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Long-term Durability",
    text: "Weatherproof sealing, anti-corrosion treatment and tested insulation — designed for years of service.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l4 7H8l4-7z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22V9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing & Warranty",
    text: "Upfront quotes, no hidden costs — backed by warranty & documentation for every delivery.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1v22" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 7h14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Dedicated After-Sales Support",
    text: "Installation, maintenance & replacement support — one point of contact until the job is done right.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseGlass() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* soft teal orb glow behind content */}
      <div
        aria-hidden
        className="absolute left-1/2 top-6 -translate-x-1/2 -z-10 w-[420px] h-[420px] rounded-full blur-3xl opacity-60"
        
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Why Choose Us</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Premium prefabricated cabins engineered for speed, durability and finish — trusted across industries.
          </p>
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={container} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, idx) => (
            <motion.article key={it.title} variants={cardVariant} className="group relative rounded-2xl overflow-hidden">
              {/* Glass card */}
              <div
                className="p-6 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/6 hover:bg-white/8 transition transform will-change-transform"
                style={{
                  minHeight: 200,
                  boxShadow: "0 8px 32px rgba(2,6,23,0.06)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/12 text-teal-300 group-hover:bg-white/20">
                    {it.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                    <p className="mt-2 text-slate-600">{it.text}</p>
                  </div>
                </div>

                {/* subtle floating accent */}
                <div aria-hidden className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full blur-2xl opacity-30" style={{ background: "radial-gradient(circle, rgba(14,181,163,0.12), transparent)" }} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
