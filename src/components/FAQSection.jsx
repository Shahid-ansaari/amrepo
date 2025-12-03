"use client";

import { useState } from "react";
import { ChevronDown , Plus } from "lucide-react";

const FAQS = [
  {
    q: "How long does it take to manufacture and deliver a portable cabin?",
    a: "The standard manufacturing time is 7–15 days depending on size, custom requirements, and workload. Delivery timelines vary based on your location."
  },
  {
    q: "Do you provide on-site installation and delivery support?",
    a: "Yes, our team handles complete delivery, unloading, leveling, and installation to ensure a smooth setup experience."
  },
  {
    q: "Can I customize the size, layout, and interior?",
    a: "Absolutely. We offer full customization including size, windows, insulation, partitions, electrical setup, furniture, and interior finishes."
  },
  {
    q: "Are these cabins durable and weather-resistant?",
    a: "Yes. All units are built with high-grade steel, insulated panels, premium coating, and weather-resistant materials to ensure long life."
  },
  {
    q: "What is the warranty and after-sales support?",
    a: "We offer a standard 1-year warranty on structure and fittings, along with reliable after-sales support for any service needs."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-xl text-sky-900 md:text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-sky-800 text-center mt-2 mb-10">
          Find quick answers to the most common queries.
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="font-semibold  md:text-lg text-sky-950">{item.q}</span>

                  <Plus
                    className={` font-extrabold w-5 h-5 text-sky-900 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 py-2" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-900 font-medium text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
