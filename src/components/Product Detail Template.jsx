"use client";

import React from "react";
import Image from "next/image";

// Generic Product Detail Template for ALL Your Products
// Duplicate this file for each product page and replace the content.

export default function ProductDetailTemplate({
  title = "Product Name",
  subtitle = "Short product description goes here.",
  heroImage = "/assets/products/office/office5.jpg",
  gallery = [],
  features = [],
  specifications = [],
}) {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px] overflow-hidden">
        <Image
          src={"/assets/products/office/office5.jpg"}
          alt={title}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            {title}
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {title}
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl">{subtitle}</p>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 pb-10 md:pb-16">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
          Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="w-full h-56 sm:h-64 md:h-72 relative rounded-xl overflow-hidden shadow-lg">
              <Image src={src} alt={`${title} image ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-10 md:py-14">
        <div className="container mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
            Key Features
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <li key={i} className="p-5 bg-white shadow-md rounded-xl text-gray-700">
                • {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Specifications */}
      <section className="container mx-auto px-4 py-10 md:py-14">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
          Specifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {specifications.map((spec, i) => (
            <div key={i} className="p-5 border rounded-xl shadow-sm bg-white">
              <h4 className="text-lg font-medium text-gray-800">{spec.title}</h4>
              <p className="text-gray-600 mt-2 text-sm">{spec.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-12 text-center text-white">
        <h3 className="text-2xl font-semibold">Interested in {title}?</h3>
        <p className="mt-2 text-gray-300">Get a free quote or talk to our expert team.</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-500 transition"
          >
            Request Quote
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
