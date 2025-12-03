"use client";
import React from "react";
import Image from "next/image";

export default function ProcessSteps() {
  const steps = [
    {
      step: "01",
      title: "Explore Our Solutions",
      desc: "Consider options that fit your",
      img: "/assets/process/site.jpg",

      placeholder: "s"
    },
    {
      step: "02",
      title: "Get a Custom Quote",
      desc: "Guided and support from our sales team to understand your needs.",
      img: "/assets/process/sales.jpg",


      placeholder: "s"

    },
    {
      step: "03",
      title: "Delivery and Installation",
      desc: " sameless delivery and  installation from our team.",
      img: "/assets/process/installation.jpg",


      placeholder: "s"

    },
    {
      step: "04",
      title: "Right from the start",
      desc: "Get your set up exactly as you need.",
      img: "/assets/process/setup.jpg", 
      placeholder: "s"

    },
  ];

  return (
    <section id="process" className="w-full py-6 bg-white">
      <h2 className=" text-center md:text-2xl text-2xl text-sky-950  font-semibold py-3 mb-4 ">Start your project today</h2>
      <div className="max-w-7xl mx-auto px-4">

        {/* Desktop top connector line */}
        <div className="hidden md:flex justify-between items-center mb-4 relative">
          {steps.map((item, index) => (
            <div key={index} className="relative flex-1 flex justify-center">
              {/* Circle */}
              <div className="w-7 h-7 bg-sky-700 text-white rounded-full flex items-center justify-center font-semibold">
                {item.step}
              </div>

              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="absolute top-1/2   left-full  w-full border-t-2 border-blue-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-white  transition flex flex-col p-6"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold text-center mb-3">
                {item.title}
              </h3>

              {/* Description (auto-balances height) */}
              <p className="text-gray-600 font-semibold  text-center px-2 text-sm mb-4 flex-grow">
                {item.desc}
              </p>

              {/* Image (always aligned bottom) */}
              <div className="w-full h-40 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>


        {/* Mobile Slider */}
        {/* Mobile Slider */}
        {/* Mobile Slider */}
        {/* Mobile Slider */}
        {/* Mobile Slider */}
        <div className="md:hidden flex gap-6 scrolll-hidden overflow-x-auto snap-x snap-mandatory">
          {steps.map((item, index) => (
            <div
              key={index}
              className="snap-center w-[95%] mr-[-50px] p-4 pt-0 bg-white  flex-shrink-0 flex flex-col"
            >
              {/* Step circle + connector */}
              <div className="flex flex-col items-center justify-center mb-4">
                <div className="w-7 h-7 bg-blue-950 text-white rounded-full flex items-center justify-center font-semibold">
                  {item.step}
                </div>

                {/* Always visible connector */}
                {/* <div className="w-12 border-t-2 border-gray-300 mt-2"></div> */}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-center">
                {item.title}
              </h3>

              {/* Description (flex-grow keeps card heights equal) */}
              <p className="text-gray-600 text-sm font-semibold mb-3 text-center flex-grow">
                {item.desc}
              </p>

              {/* Image - perfect mobile responsiveness */}
              <div className="relative w-full h-70 overflow-hidden mt-auto">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>





      </div>
      
    </section>
  );
}



