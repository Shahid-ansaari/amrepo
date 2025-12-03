"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, PhoneCall, FilePenLine } from "lucide-react";
import ContactPopup from "@/components/ContactPopup";
import { useRouter } from "next/navigation";
import FAQSection from "@/components/FAQSection";
import ContactPage from "@/components/ContactForm";


/**
 * About page hero with parallax background (applies transform to the <Image fill/>)
 * - Hero height uses 45vh by default (you can change)
 * - Parallax disabled on small screens for performance
 */

export default function AboutPage({ openPopup }) {
  const router = useRouter();


  // for contact popup 




  // ende here 

  // for contact us 
  const whatsappLink = "https://wa.me/919999999999"; // country code + number

  const cards = [
    {
      title: "Chat with Us",
      description: "Instant support on WhatsApp",
      icon: <MessageCircle size={32} />,
      link: whatsappLink,
      action: "whatsapp",
      img: "/assets/about/chat.jpg",
    },
    {
      title: "Call Us",
      description: "Talk directly with our expert",
      icon: <PhoneCall size={32} />,
      link: "tel:9999999999",
      action: "call",
      img: "/assets/about/callus.jpg",
    },
    {
      title: "Request Quote",
      description: "Get pricing and best offers",
      icon: <FilePenLine size={32} />,
      link: "#",
      action: "quote",
      img: "/assets/about/quote.jpg",
    },
  ];

  // const handleClick = (item) => {
  //   if (item.action === "quote") return openPopup(); // open popup instead of navigating
  //   window.open(item.link, "_blank");
  // };
  const handleClick = (item) => {
    if (item.action === "quote") {
      router.push("/contact");
      return;
    }
    window.open(item.link, "_blank");
  };

  // end here 

  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const [isSmall, setIsSmall] = useState(false);

  // Replace this with your image path (use next/image optimized images)
  const heroSrc = "/assets/about/about6.jpg"; // change file to your asset

  const headline = "North India Leading in Prefabricated & Portable cabins";
  const subheading =
    "Fast deployment, robust build and turnkey interiors for offices, security posts, farmhouses and labour colonies.";

  useEffect(() => {
    // Detect small screens -> disable parallax
    const mq = window.matchMedia("(max-width: 768px)");
    const handle = () => setIsSmall(mq.matches);
    handle();
    mq.addEventListener ? mq.addEventListener("change", handle) : mq.addListener(handle);

    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", handle) : mq.removeListener(handle);
    };
  }, []);

  useEffect(() => {
    if (isSmall) {
      // Reset transform on mobile
      if (imgRef.current) imgRef.current.style.transform = "translateY(0px)";
      return;
    }

    let rafId = null;

    const onScroll = () => {
      if (!heroRef.current || !imgRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how far hero is from the top (negative if scrolled past)
      // We'll map visible portion to a small translateY value
      // When hero top is 0 -> translate = 0; when hero top is -200 -> translate small amount
      const visible = Math.max(0, Math.min(rect.height, windowHeight - rect.top));
      // Use rect.top to compute a factor
      const factor = (rect.top / windowHeight) * 0.2; // small factor
      const translateY = Math.round(-factor * 50); // max ~ +/- 10-20px (tweak)
      // Smooth via requestAnimationFrame
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (imgRef.current) imgRef.current.style.transform = `translateY(${translateY}px)`;
      });
    };

    // initial apply
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isSmall]);

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        aria-label="About hero"
        style={{ height: "50vh", minHeight: "320px" }} // 45vh
      >
        {/* Background image placed absolutely and moved with transform */}
        <div className="absolute inset-0  -z-10">
          <div className="w-full h-full relative">
            <Image
              ref={imgRef}
              src={heroSrc}
              alt="Modular prefabricated cabins - hero"
              fill
              style={{ objectFit: "cover", transform: "translateY(0px)", transition: "transform 0.12s linear" }}
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
              className=""
            />
            {/* subtle gradient overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/40 pointer-events-none" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="w-full md:w-3/4 lg:w-2/3 text-center md:text-left">
            {/* <p className="text-sm text-white/80 uppercase tracking-wider mb-2">Trusted · Durable · Quick to deploy</p> */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
              {headline}
            </h1>
            {/* <p className="mt-3 text-white/90 max-w-2xl text-sm sm:text-base">
              {subheading}
            </p> */}

            <div className="mt-6 flex justify-center md:justify-start gap-3">
              <Link href="/contact" className="inline-block">
                <button className="px-5 py-3 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform">
                  Get a Free Quote
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint (small down arrow) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20">
          <div className="text-white/80 animate-bounce py-1 px-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* --- next section placeholder --- */}
      <section className="w-full px-5 py-16 bg-white flex flex-col ">
        {/* Company Logo */}
        <div className="mb-6">
          <Image
            src="/assets/logo.png" // temporary logo — replace later
            alt="AM Office Solution Logo"
            width={260}
            height={260}
            className="rounded-md shadow-md"
          />
        </div>

        {/* Company Name */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900  mb-6">
          AM Office Solution Delhi
        </h2>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl font-medium  md:text-lg text-gray-700 leading-relaxed "
        >
          At AM Office Solution, we specialize in manufacturing high-quality Portable Cabins,
          Office Cabins, Prefab Labour Camps, Security Guard Rooms, Portable Toilets and more.
          Every product is built to meet the needs of construction sites, industrial facilities,
          commercial spaces and many other environments where permanent construction is not
          feasible or practical.
        </motion.p>
      </section>

      {/* expertise  */}
      <section
        className="relative w-full bg-cover bg-center bg-fixed py-20 px-6"
        style={{
          backgroundImage:
            "url('/assets/about/expertise.jpg')", // 🔹 Replace with your image later
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto ">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-4xl font-extrabold mb-6"
          >
            Our Expertise
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-200 text-lg md:text-xl leading-relaxed"
          >
            We are a trusted manufacturer and supplier of high-quality portable
            products including Portable Office Cabins, Prefab Labour Camps,
            Portable Toilets, Portable Store Rooms, Security Cabins, Portable Bunk
            Houses and a wide range of customized portable cabins/containers. All
            our products are designed with precision, rigorously tested for
            durability and delivered in strong, leak-proof, weather-resistant
            structures. We take pride in producing portable solutions that ensure
            performance, safety and long-term reliability.
          </motion.p>
        </div>
      </section>


      {/* Our Infrastructure */}
      <section
        className="relative w-full bg-cover bg-center bg-fixed py-20 px-6"
        style={{
          backgroundImage:
            "url('/assets/about/infra.jpg')", // 🔹 Replace with your image later
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto ">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-4xl font-extrabold mb-6"
          >
            Our Infrastructure
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-200 text-lg md:text-xl leading-relaxed"
          >
            We are a trusted manufacturer and supplier of high-quality portable
            products including Portable Office Cabins, Prefab Labour Camps,
            Portable Toilets, Portable Store Rooms, Security Cabins, Portable Bunk
            Houses and a wide range of customized portable cabins/containers. All
            our products are designed with precision, rigorously tested for
            durability and delivered in strong, leak-proof, weather-resistant
            structures. We take pride in producing portable solutions that ensure
            performance, safety and long-term reliability.
          </motion.p>
        </div>
      </section>



      {/* Quality  */}
      <section
        className="relative w-full bg-cover bg-center bg-fixed py-20 px-6"
        style={{
          backgroundImage:
            "url('/assets/about/infra.jpg')", // 🔹 Replace with your image later
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto ">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-4xl font-extrabold mb-6"
          >
            Quality Assurance
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-200 text-lg md:text-xl leading-relaxed"
          >
            We offer highly durable array of products to our clients that is manufactured using quality approved raw material and innovative technology at our well-resourced production division. The entire production process is strictly done under the supervision of highly skilled quality controllers. With the support of advanced quality testing division, the entire product range is stringently tested on defined quality parameters by our quality auditors using modern testing tools to eradicate flaws from the offered assortment.
          </motion.p>
        </div>
      </section>


      {/* contact us  */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-10">
            Chat With Us
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => handleClick(item)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden group"
              >
                {/* Image */}
                <div className="h-48 w-full overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-center mb-3 text-sky-700">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-sky-900">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>

                  <button className="mt-5 bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg duration-300">
                    {item.title}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection/>
      <ContactPage/>
      









    </main>
  );
}
