"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const CATEGORIES = [
    "All",
    "Portable Office",
    "Security Cabin",
    "Portable Cabin",
    "Container Café",
    "Accommodation Cabin",
    "Portable Toilet",
];

const IMAGES = [
    { id: 1, category: "Portable Office", src: "/assets/products/office/office6.jpg", alt: "Portable Office 1" },
    { id: 2, category: "Portable Office", src: "/assets/products/office/office1.jpg", alt: "Portable Office 2" },
    { id: 3, category: "Security Cabin", src: "/assets/products/security/gaurd5.png", alt: "Security Cabin 1" }, 
    { id: 4, category: "Security Cabin", src: "/assets/products/security/security9.jpg", alt: "Security Cabin 2" },
    { id: 5, category: "Portable Cabin", src: "/assets/products/cabin/cabin2.jpg", alt: "Portable Cabin 1" },
    { id: 6, category: "Portable Cabin", src: "/assets/products/cabin/cabin1.jpg", alt: "Portable Cabin 2" },
    { id: 9, category: "Accommodation Cabin", src: "/assets/products/accomondation/accomondation3.jpg", alt: "Accommodation Cabin 1" },
    { id: 12, category: "Portable Toilet", src: "/assets/products/toilets/toilet5.jpg", alt: "Portable Toilet 2" },
    { id: 7, category: "Container Café", src: "/assets/products/cafe/cafe1.jpg", alt: "Container Café 1" },
    { id: 8, category: "Container Café", src: "/examples/cafe-2.jpg", alt: "Container Café 2" },
    { id: 11, category: "Portable Toilet", src: "/examples/toilet-1.jpg", alt: "Portable Toilet 1" },
    { id: 10, category: "Accommodation Cabin", src: "/assets/products/accomondation/accommodation4.jpeg", alt: "Accommodation Cabin 2" },
    { id: 14, category: "Security Cabin", src: "/assets/products/security/security-cabin-062025.jpg", alt: "Security Cabin 1" }, 
    { id: 15, category: "Security Cabin", src: "/assets/products/security/security-cabin 062025-2.jpg", alt: "Security Cabin 1" },
    
    
];

export default function ProjectGallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const overlayRef = useRef(null);

    const filtered = useMemo(() => {
        return activeCategory === "All"
            ? IMAGES
            : IMAGES.filter((img) => img.category === activeCategory);
    }, [activeCategory]);
    // 👉 Limit grid to first 6 images
    const limitedGrid = filtered.slice(0, 9);


    // open
    const openLightbox = (i) => {
        setLightboxIndex(i);
        setLightboxOpen(true);

    };

    // close
    const closeLightbox = () => {
        setLightboxOpen(false);

    };

    // next / prev
    const gotoNext = () => {
        // setLightboxIndex((i) => (i + 1) % filtered.length);
        setLightboxIndex((i) => (i + 1) % limitedGrid.length);
    };

    const gotoPrev = () => {
        // setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
        setLightboxIndex((i) => (i - 1 + limitedGrid.length) % limitedGrid.length);
    };

    // keyboard navigation
    useEffect(() => {
        if (!lightboxOpen) return;

        const handleKey = (e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") gotoNext();
            if (e.key === "ArrowLeft") gotoPrev();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxOpen, filtered.length]);

    //   error past code 
    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [lightboxOpen]);


    // outside close
    const onOverlayClick = (e) => {
        if (e.target === overlayRef.current) closeLightbox();
    };

    // category → product link
    const detailsLink = useMemo(() => {
        if (activeCategory === "All") return "/products";
        return `/products/${activeCategory.toLowerCase().replace(/\s+/g, "-")}`;
    }, [activeCategory]);

    return (
        <section className="py-16  bg-[#152027]">
            <div className="max-w-7xl sm:mx-auto sm:px-6">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl text-blue-50 md:text-4xl font-bold">Project Gallery</h2>
                    <p className="text-sky-100 font-semibold mt-2">
                        Explore our work — filter by product category.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex   overflow-hidden gap-1 justify-center    sm:gap-2 sm:sticky flex-wrap   top-15    z-40 sm:flex-wrap  md:justify-center md:gap-3 mb-8">
                    {CATEGORIES.map((cat, index) => (
                        <HoverBorderGradient key={cat} as="div">
                            <div>

                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={` cursor-pointer w-fit  sm:px-4 whitespace-nowrap   sm:rounded-full rounded-xl  text-sm font-medium transition ${activeCategory === cat
                                        ? "bg-[#010a10] text-sky-300 shadow"
                                        : "bg-[#010a10]  border-gray-200 text-gray-100 hover:shadow-sm "
                                        }`}
                                >
                                    {cat}
                                </button>
                            </div>

                        </HoverBorderGradient>
                    ))}
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0   gap-6">

                    {/* {filtered.map((img, i) => ( */}
                    {limitedGrid.map((img, i) => (
                        <div
                            key={img.id}
                            className="group  rounded-2xl overflow-hidden bg-white shadow-sm cursor-zoom-in"
                        >
                            <button onClick={() => openLightbox(i)} className="w-full  text-left">
                                <div className="relative aspect-[4/3]  bg-gray-100 ">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>

                                <div className="p-3">
                                    <p className="font-semibold text-gray-900">{img.category}</p>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom Buttons */}
                <div className="mt-10  flex  justify-center items-center gap-3">
                    <HoverBorderGradient className={ "border border-gray-500 py-2"}  key={"e"}>
                        <a href="/gallery" className=" w-fit   text-white rounded-full font-semibold">


                            Go to Gallery

                        </a>

                    </HoverBorderGradient>
                    <HoverBorderGradient className={ "border border-gray-500 py-2 "} key={"f"}>

                        <a
                            href={detailsLink}
                            className=" w-fit    text-white rounded-full font-semibold :shadow"
                        >

                                View Products
                        </a>
                    </HoverBorderGradient>

                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    ref={overlayRef}
                    onClick={onOverlayClick}
                    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                >
                    <div className="relative w-full max-w-5xl h-[85vh]">
                        {/* Close */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 z-50"
                        >
                            ✕
                        </button>

                        {/* Prev */}
                        <button
                            onClick={(e) => { e.stopPropagation(); gotoPrev(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-800 text-white p-3 rounded-full hover:bg-white/30"
                        >
                            ‹
                        </button>

                        {/* Next */}
                        <button
                            onClick={(e) => { e.stopPropagation(); gotoNext(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30"
                        >
                            ›
                        </button>

                        {/* Image */}
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full h-full bg-black/90 rounded-lg flex items-center justify-center cursor-zoom-in"
                        >
                            <Image
                                src={filtered[lightboxIndex].src}
                                alt={filtered[lightboxIndex].alt}
                                fill
                                className="object-contain cursor-zoom-in"
                            />

                            <div className="absolute bottom-5 left-5 text-white">
                                <p className="font-semibold text-lg">{filtered[lightboxIndex].category}</p>
                                <p className="text-gray-300 text-sm">{filtered[lightboxIndex].alt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
