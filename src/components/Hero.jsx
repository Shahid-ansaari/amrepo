





// fully responsive for all devices 
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Phone } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

// first: "Prefabricated Modular",


// Slide data
const slides = [
  {
    image: "/assets/hero/modernoffice.jpg",
    alt: "Portable Office Cabin",
    first: "Premium Portable Solutions for",
    headline: "Offices, Security Cabins, Cafes & Houses",
    subheadline:
      "We create smart and movable workspace for every need.",
  },
  {
    image: "/assets/hero/siteoffice.jpg",
    alt: "Office Cabins and Site Cabins",
    first: "Modular Office Cabins & Site Cabins",
    headline: "Premium Portable Office Solutions",
    subheadline:
      "Boost productivity with fully customizable, movable office cabins designed for project sites, startups, and expansion teams.",
  },
  {
    image: "/assets/hero/guard.jpg",
    alt: "Prefabricated Modular Container",
    first: "Security Guard Rooms",
    headline: "Portable Guard Rooms & Security Cabins",
    subheadline:
      " Weather-proof, ready-to-use security guard cabins for industrial, residential, and commercial sites.",
  },
  {
    image: "/assets/hero/house2.jpg",
    alt: "Prefabricated Modular Container",
    first: "Prefebricated ",
    headline: "Modular Homes & Portable Farm Houses",
    subheadline:
      "Ready-to-use living spaces designed for comfort and style, perfect for farms, resorts, weekend stays, and private retreats.",
  },
  {
    image: "/assets/hero/cafe.jpg",
    alt: "Prefabricated Modular Container",
    first: "Portable Cafe Container ",
    headline: "Container Cafes for  Food & Beverage Brands",
    subheadline:
      "Ready-to-launch café spaces designed for speed, style, and customer appeal.Perfect for coffee shops, food startups.",
  },
  {
    image: "/assets/hero/labor.jpg",
    alt: "Prefabricated Modular Container",
    first: "Labor Container ",
    headline: "Prefabricated Portable Labor Colonies",
    subheadline:
      "Quick-to-install worker housing built for safety, comfort, and efficiency.Designed for construction sites, industrial projects, and large workforce deployments",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <section
      {...handlers}
      className="relative   w-full min-h-[79vh] md:h-[87vh] overflow-hidden bg-[#e2f1ff] sm:bg-[#00162B] "
    >
      <div className=" hidden md:block">

        <div className="absolute inset-0">
          <div className="absolute top-[-80px] left-[-80px] w-[350px] h-[350px] bg-blue-500/85 rounded-full blur-[140px]" />

          <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-yellow-400/70 rounded-full blur-[160px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[200px]" />

          <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px]"></div>
          <div className="absolute top-1/3 right-0 w-[28rem] h-[28rem] sm:bg-violet-500/65 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[22rem] h-[22rem] bg-indigo-400/50 rounded-full blur-[120px]"></div>

        </div>
      </div>
      <div className=" sm:hidden">
        <div className="absolute inset-0">
          {/* <div className="absolute top-[-80px] left-[-80px] w-[350px] h-[350px] bg-cyan-950-500/85 rounded-full blur-[140px]" />
          
          <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-sky-900 rounded-full blur-[160px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[200px]" />

          <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-200/50 rounded-full blur-[140px]"></div>
          <div className="absolute top-1/3 right-0 w-[28rem] h-[28rem] sm:bg-violet-500/65 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[22rem] h-[22rem] bg-slate-800/50 rounded-full blur-[120px]"></div> */}
          {/* <div className="absolute top-[-80px] left-[-80px] w-[350px] h-[350px] bg-sky-50 rounded-full blur-[140px]" />

          <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-50-900 rounded-full blur-[160px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[200px]" />

          <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-50 rounded-full blur-[140px]"></div>
          <div className="absolute top-1/3 right-0 w-[28rem] h-[28rem] sm:bg-violet-50 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[22rem] h-[22rem] bg-slate-50 rounded-full blur-[120px]"></div> */}
        </div>
      </div>


      {/* Video Background - Desktop */}
      {/* <div className="absolute inset-0 hidden md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover "
        >
          <source
            src="https://d1di04ifehjy6m.cloudfront.net/media/filer_public/9e/25/9e257999-1c41-43d1-a33c-656a08606260/brigade_promo_15sec_without_sound_comp.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-[#749ae037]/50" />
      </div> */}

      {/* Fallback Image - Mobile */}
      {/* <div className="absolute inset-0 md:hidden">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
          fill
          className="object-cover blur-xs "
        />
        <div className="absolute inset-0 bg-black/35" />
      </div> */}

      {/* Slide Content */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 text-sky-950 -mt-15 flex flex-col-reverse md:flex-row items-center  justify-center px-3 sm:px-6 md:px-12 lg:px-20 transition-all duration-700 ${index === currentSlide
            ? "opacity-100 translate-x-0 z-20"
            : "opacity-0 translate-x-full z-0"
            }`}
        >
          {/* Text Section */}
          <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left text-sky-950 sm:text-white space-y-3 animate-slideInLeft">
            {slide.first && (
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#3a310b] sm:text-yellow-500">
                {slide.first}
              </span>
            )}

            <h1 className="text-2xl text-sky-950 sm:text-white  sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
              {slide.headline}
            </h1>

            <p className=" hidden md:block text-[#f2f5ff] text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              {slide.subheadline}
            </p>

            <div className="flex w-fit flex-col sm:flex-row gap-5 pt-2 items-center justify-center md:justify-start">
              <Link
                href="/contact"
                className=" flex items-center shadow-inner shadow-lg justify-center gap-2 border border-[#d6e9ff] hover:border-white sm:bg-[#040c2977] hover:bg-[#050028] hover:scale-105 px-6 py-1 rounded-md text-lg font-semibold transition-all"
              >
                Get Quote
                <ArrowRight size={16}/>
              </Link>
              <Link
                href="tel:+919266722472"
                className=" flex items-center shadow-inner  shadow-lg  justify-center gap-2 border border-[#d6e9ff] hover:border-white sm:bg-[#040c2977] hover:bg-[#050028] hover:scale-105 px-6 py-1 rounded-md text-lg font-semibold transition-all"
              >
                <span className=""><Phone size={15} /></span> Call Now
              </Link>

            </div>
          </div>

          {/* Image Section */}
          {/* <div className="md:w-[60%] flex justify-center items-center mt-6 md:mt-0 ">
            <Image
              src={slide.image}
              alt={slide.alt}
              width={700}
              height={500}
              className="rounded-lg  scale-150 w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl transition-transform hover:scale-105"
            />
          </div> */}
          <div className="overflow-hidden rounded-lg w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl">
            <Image
              src={slide.image}
              alt={slide.alt}
              width={700}
              height={500}
              className="w-full h-full object-cover scale-135 origin-center"
            />
          </div>


        </div>
      ))}

      {/* Navigation Arrows - Desktop */}
      <button
        onClick={prevSlide}
        className="hidden md:flex cursor-pointer absolute left-5 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 p-2 rounded-full z-40"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex  cursor-pointer absolute right-5 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 p-2 rounded-full z-40"
      >
        <ChevronRight size={28} />
      </button>

      {/* Mobile Arrows */}
      <div className="flex  mb-10 md:hidden justify-between absolute bottom-6 left-0 right-0 px-6 z-40">
        <button
          onClick={prevSlide}
          className="text-sky-50 cursor-pointer bg-sky-950/20  hover:bg-white/20 p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="text-sky-50 cursor-pointer bg-sky-950/20  hover:bg-white/20 p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute  bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={` cursor-pointer hover:bg-sky-100 md:w-3 md:h-3 w-2 h-2 rounded-full transition-all ${currentSlide === index
              ? "bg-gradient-to-r from-sky-900 sm:from-[#8ac3ff] to-blue-900 sm:to-[#c7e1ff] scale-125"
              : "sm:bg-white/40 bg-slate-500"
              }`}
          />
        ))}
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}
