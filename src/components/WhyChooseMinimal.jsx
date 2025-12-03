// components/WhyChooseMinimal.jsx
"use client";
import React from "react";

const items = [
  {
    title: "Premium Build Quality",
    text: "MS steel frames and insulated panels — precision manufactured and quality assured.",
    icon: "🏗️",
  },
  {
    title: "Fast Delivery",
    text: "Rapid production and logistics for quick site deployment and minimal downtime.",
    icon: "⚡",
  },
  {
    title: "Customisable Layouts",
    text: "Flexible floorplans, finishes and utilities to match your exact requirements.",
    icon: "🛠️",
  },
  {
    title: "Durability & Weatherproofing",
    text: "Engineered seals and coatings to withstand weather, pests and long-term use.",
    icon: "🛡️",
  },
  {
    title: "Transparent Pricing & Warranty",
    text: "Clear quotes, no surprises — warranty and documentation included with every order.",
    icon: "📜",
  },
  {
    title: "Reliable Support",
    text: "Installation, maintenance and a dedicated contact — we’re with you after delivery.",
    icon: "🤝",
  },
];

export default function WhyChooseMinimal() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Why Choose Us</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Built for professionals — premium materials, on-time delivery and long-term support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it) => (
            <div key={it.title} className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center text-lg">
                  <span>{it.icon}</span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                  <p className="mt-2 text-slate-600">{it.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional small trustline */}
        <div className="mt-10 text-center text-slate-500 text-sm">
          <strong className="text-slate-900">Trusted by 300+ clients</strong> • 5-year average product lifespan guarantee • Pan-India delivery
        </div>
      </div>
    </section>
  );
}
