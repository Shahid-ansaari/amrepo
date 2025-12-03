


"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


/**
 * ProductOfferingsPremium.jsx
 *
 * Usage: import ProductOfferingsPremium from "@/components/ProductOfferingsPremium";
 * Then place <ProductOfferingsPremium /> in your page.
 *
 * Requirements:
 * - Tailwind CSS configured in project
 * - Framer Motion: `npm i framer-motion`
 *
 * Notes:
 * - Replace image paths with your real images in /public/images/
 * - This component is responsive: desktop grid, mobile horizontal parallax slider
 */

/* ---------- Config: products & theme ---------- */
const ACCENT = "#0EB5A3"; // teal
const ACCENT_DARK = "#0AA58A";
const products = [
    {
        id: "modular-offices",
        title: "Portable Offices",
        subtitle: "Premium ready-to-use workspaces for teams & sites.",
        href: "/products/portable-office",
        img: "/assets/hero/products/office/officep1.jpg",
    },
    {
        id: "portable-cabins",
        title: "Portable Cabins",
        subtitle: "Durable, versatile cabins for office, storage, or housing.",
        href: "/products/portable-cabin",
        img: "/assets/hero/products/cabins/cabinp1.jpg",
    },
    {
        id: "security-guard-rooms",
        title: "Security / Guard Rooms",
        subtitle: "Compact, secure cabins to protect your premises.",
        href: "/products/security-cabin",
        img: "/assets/hero/products/gaurd/gaurdp1.jpg",
    },
    {
        id: "farmhouses-weekend-homes",
        title: "Farmhouses & Weekend Homes",
        subtitle: "Luxury modular homes for farms, resorts & retreats.",
        href: "/products/farmhouse",
        img: "/assets/hero/products/house/housep1.jpg",
    },
    {
        id: "container-cafes",
        title: "Container Cafés",
        subtitle: "Stylish, turnkey café structures for food businesses.",
        href: "/products/container-cafe",
        img: "/assets/hero/products/cafe/cafep1.jpg",
    },
    {
        id: "labor-colonies",
        title: "Prefabricated Labor Colonies",
        subtitle: "Scalable, comfortable living units for workers.",
        href: "/products/labor-colony",
        img: "/assets/hero/products/labor/laborp2.jpg",
    },
];

/* ---------- Helper: framer motion variants ---------- */
const revealVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.48, ease: "easeOut" },
    }),
};

/* ---------- Main component ---------- */
export default function ProductOfferingsPremium() {
    return (
        <section className="relative py-6 md:py-6  bg-sky-50  overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[#2E3F42]  md:bg-[#ffff] animate-gradientSlow" />
            {/* bg-gradient-to-br from-[#f0faff] via-[#e9f8ff] to-white  */}


            <style jsx>{`
    .animate-gradientSlow {
      background-size: 200% 200%;
      animation: gradientMove 12s ease infinite;
    }
    @keyframes gradientMove {
      0% { background-position: 0% 0%; }
      50% { background-position: 100% 100%; }
      100% { background-position: 0% 0%; }
    }
  `}</style>



            <div className="max-w-6xl mx-auto sm:px-4 px-3">
                <div className="max-w-3xl mx-auto text-center mb-8">
                    {/* <h2
                        id="products-heading"
                        className="text-2xl md:text-4xl font-extrabold text-[#00162B]"
                        style={{ color: "#0F1720" }}
                    >
                        Our Product Offerings
                    </h2> */}
                    {/* <motion.h2
                        className="text-3xl md:text-4xl font-semibold text-gray-900 inline-block"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.03 } }
                        }}
                    >
                        {"Our Product Offerings".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } }
                                }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h2> */}
                    <div className="text-center mb-10">
                        <TypeAnimation
                            sequence={[
                                "Our Product Offerings", 5000,
                                "Premium Modular Solutions", 1500,
                                "Built for Speed & Quality", 1500,
                                "Designed for Modern Businesses", 1500,
                            ]}
                            wrapper="h2"
                            cursor={true}
                            repeat={Infinity}
                            speed={60}
                            className="
                                text-2xl md:text-3xl font-extrabold 
                                bg-gradient-to-r from-sky-950  via-sky-800 to-sky-950 
                                bg-clip-text text-transparent
                                drop-shadow-sm
                                "
                        />
                        {/* Animated underline */}
                        <div className="mt-3 flex justify-center">
                            <div className="h-[2px] w-52 bg-gradient-to-r from-[#00588a] via-[#8abeff] to-[#1100a7] rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* <p className="mt-3 text-gray-600">
            Explore our range of ready-to-use, premium prefabricated and modular solutions — fast,
            durable, and beautifully finished.
          </p> */}
                </div>

                {/* DESKTOP GRID */}
                <div className="hidden md:grid grid-cols-3 gap-8">
                    {products.map((p, i) => (
                        <DesktopCard key={p.id} p={p} index={i} />
                    ))}
                </div>

                {/* MOBILE: Horizontal Parallax Slider */}
                <div className="md:hidden mt-2">
                    <MobileParallax products={products} />
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                    <Link
                        href="/products"
                        //// yaha pe inline flex tha
                        className=" hidden  items-center gap-2 px-6 py-3 rounded-full border border-transparent bg-gradient-to-r from-teal-500 to-teal-400 text-white text-sm font-medium shadow-lg hover:scale-[1.01] transform transition"
                        style={{ boxShadow: "0 8px 30px rgba(14,181,163,0.18)" }}
                    >
                        View All Products
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
            {/* Animated underline */}
            {/* <div className="mt-3 flex justify-center">
                <div className="h-[1px] w-full bg-gradient-to-r from-[#00162B] via-[#E8B338] to-[#2E3F42] rounded-full animate-pulse"></div>
            </div> */}
        </section>
    );
}

/* ---------- DesktopCard: tilt + reveal + glassmorphism ---------- */
function DesktopCard({ p, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-120px 0px -120px 0px" });

    // simple 3D tilt calculation
    const handleMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rx = (py - 0.5) * -10; // rotateX
        const ry = (px - 0.5) * 10; // rotateY
        el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
    };
    const handleLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    };

    return (
        <motion.article
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={revealVariant}
            custom={index}
            className="group relative rounded-2xl  overflow-hidden"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{
                transition: "transform 0.18s ease",
            }}
        >
            {/* Glass card background */}
            <Link
                href={p.href}
                className="block"
                aria-label={`Open ${p.title} details`}
            >
                <div
                    className="p-4 rounded-2xl"
                    style={{
                        background: "#e9f3ff", ///#ffffff 
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(14,181,163,0.08)",
                        boxShadow: "0 12px 30px rgba(15,23,34,0.06)",
                        minHeight: "320px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div className="relative bg-[#e9f6ff] rounded-xl overflow-hidden flex-shrink-0 md:hover:scale-105  transition-all" style={{ height: 180 }}>
                        <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover" }} className="  sm:scale-110 " />
                        <div
                            className="absolute inset-0"
                            style={{
                                background: "linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.18))",
                            }}
                        />
                        {/* <div className="absolute left-4 bottom-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-[#00162B] bg-white/90">
                                {p.title}
                            </span>
                        </div> */}
                    </div>

                    <div className="mt-4 flex-1">
                        <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                        <p className="mt-2 text-sm text-slate-700">{p.subtitle}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <span
                            className="inline-flex  shadow-sm items-center gap-2 px-3 py-2 rounded-full text-sm font-medium"
                            style={{
                                color: "#162456  ",
                                background: "#cce3fb",
                            }}
                        >
                            Learn more
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>

                        {/* <Link
                            href="#contact"
                            className="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-gradient-to-r bg-[#cce3fb]  border-sky-950 text-shadow-blue-950 shadow"
                        >
                            Request Quote
                        </Link> */}
                    </div>
                </div>
            </Link>
            {/* <div className="mt-3">
                <Link href="#contact" className="inline-flex ...">
                    Request Quote
                </Link>
            </div> */}
        </motion.article>

    );
}

/* ---------- MobileParallax: horizontal scroll + parallax ---------- */
function MobileParallax({ products }) {
    const containerRef = useRef(null);
    const [cardOffsets, setCardOffsets] = useState([]); // store each card center relative to container
    const cardRefs = useRef([]);

    // set refs for cards
    useEffect(() => {
        cardRefs.current = cardRefs.current.slice(0, products.length);
    }, [products.length]);

    // update offsets after mount & on resize
    const updateOffsets = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;
        const cRect = container.getBoundingClientRect();
        const offsets = cardRefs.current.map((card) => {
            if (!card) return 0;
            const r = card.getBoundingClientRect();
            // center difference: cardCenter - containerLeft
            const center = r.left + r.width / 2 - cRect.left;
            return {
                center,
                width: r.width,
                left: r.left - cRect.left,
            };
        });
        setCardOffsets(offsets);
    }, []);

    useEffect(() => {
        updateOffsets();
        window.addEventListener("resize", updateOffsets);
        return () => window.removeEventListener("resize", updateOffsets);
    }, [updateOffsets]);

    // on scroll, compute each card's image translation
    const onScroll = (e) => {
        const container = containerRef.current;
        if (!container) return;
        const scrollLeft = container.scrollLeft;
        const cWidth = container.clientWidth;

        cardRefs.current.forEach((card, idx) => {
            if (!card) return;
            const img = card.querySelector("[data-parallax-img]");
            if (!img) return;
            const offset = card.offsetLeft - scrollLeft; // card's left relative to container visible left
            const cardCenter = offset + card.clientWidth / 2;
            const rel = (cardCenter - cWidth / 2) / (cWidth / 2); // -1 .. 1
            const maxShift = 18; // px max shift
            const shift = Math.max(Math.min(rel * maxShift, maxShift), -maxShift);
            img.style.transform = `translateX(${shift}px) scale(1.06)`;
            img.style.transition = "transform 0.15s linear";
        });
    };

    // ensure handler attached
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        // initial
        onScroll();
        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardOffsets]);

    return (
        <div className="relative">
            <div
                ref={containerRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-6 no-scrollbar"
                style={{
                    WebkitOverflowScrolling: "touch",
                }}
                onScroll={onScroll}
                onTouchStart={() => updateOffsets()}
            >
                {products.map((p, i) => (
                    <article
                        key={p.id}
                        ref={(el) => (cardRefs.current[i] = el)}
                        className="snap-center min-w-[80%] sm:min-w-[78%] bg-[#7499E0] rounded-2xl shadow-lg overflow-hidden"
                        style={{
                            border: "1px solid rgba(6,78,67,0.06)",
                            background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(250,250,250,0.94))",
                        }}
                    >
                        <Link href={p.href} className="block">
                            <div className="relative h-44 overflow-hidden">
                                {/* parallax image element */}
                                <div
                                    data-parallax-img
                                    className="absolute inset-0 will-change-transform"
                                    style={{
                                        transform: "translateX(0px) scale(1.06)",
                                        transition: "transform 0.2s linear",
                                    }}
                                >
                                    <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover" }} />
                                </div>
                                {/* overlay gradient for legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                                <p className="mt-1 font-medium text-sm text-slate-600">{p.subtitle}</p>
                                <div className="mt-3 flex items-center justify-between gap-1">
                                    <span className="text-sm font-medium text-center inline-flex items-center gap-2 px-3 sm:py-2 sm:rounded-full whitespace-nowrap py-2 rounded-lg" style={{ background: "#262c46", color: "#99bed6" }}>
                                        View details
                                    </span>
                                    {/* <Link href="#contact" className="text-sm font-medium inline-flex items-center sm:px-3 px-2 text-center   whitespace-nowrap py-2 sm:py-2 rounded-md  bg-[#99bed6] text-[#00162B] ">
                                        Request Quote
                                    </Link> */}
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>

            {/* small pager indicator */}
            <div className="flex items-center justify-center gap-2 mt-3">
                {products.map((_, i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-[#073656]" />
                ))}
            </div>

        </div>

    );
}
