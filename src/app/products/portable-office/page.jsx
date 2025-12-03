
// import ProductDetailTemplate from "@/components/Product Detail Template";

// export default function Page() {
//   return (
//     <ProductDetailTemplate
//       title="Modular Offices"
//       subtitle="Premium ready-to-use office cabins designed for fast deployment."
//       heroImage="/images/modular-offices.jpg"
//       gallery={[
//         "/images/modular1.jpg",
//         "/images/modular2.jpg",
//         "/images/modular3.jpg",
//       ]}
//       features={[
//         "Fully insulated PUF/EPS panels",
//         "Premium electrical fittings",
//         "Weatherproof steel structure",
//         "Modern interiors & flooring",
//       ]}
//       specifications={[
//         { title: "Size Options", value: "10x20 ft, 12x40 ft, custom sizes" },
//         { title: "Wall Material", value: "EPS / PUF insulated panels" },
//         { title: "Frame Type", value: "Heavy-duty steel frame" },
//       ]}
//     />
//   );
// }



"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaPhone, FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";
import Link from "next/link";
import { Eye } from "lucide-react";
import { useEffect } from "react";
// import { Phone, ChevronLeft , ChevronRight  } from 'lucide-react';
// <ChevronLeft />


export default function ProductPage() {
  /// tis is the code after image + info 
  const [activeTab, setActiveTab] = useState("details");
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  const faqs = [
    { q: "How long does installation take?", a: "The cabin is ready for use on the same day after delivery. No civil work is needed." },
    { q: "Can the cabin be shifted later?", a: "Yes, it is fully portable and can be relocated without any structural damage." },
    { q: "Can AC be installed inside?", a: "Yes, AC provision and internal wiring are already included on the basis of requirment." },
    { q: "What sizes are available?", a: "We manufacture any size depending on your space and requirement." },
    { q: "What is the lifespan of the cabin?", a: "With proper care, it lasts 20–30+ years even in tough weather." },
    { q: "What customization options are available?", a: "Furniture, layout, branding, windows, lighting, partitions & much more." },
  ];
  //// and end here 
  const product = {
    name: "Portable Office Cabin",
    mainImage: "/assets/products/office/office5.jpg",
    images: [
      "/assets/products/office/office5.jpg",
      "/assets/products/office/office1.jpg",
      "/assets/products/office/office6.jpg",
      "/assets/products/office/office3.jpg",
      "/assets/products/office/office4.jpg",
    ],
    features: [
      { feature: "Size", benefit: "20×10 ft, 30x12 ft, 36x11 ft,  10x10 ft etc. Custom size available" },
      { feature: "Height", benefit: "Standard sizes available" },
      { feature: "Material", benefit: "MS Steel, ACP Sheet etc." },
      // { feature: "Insulation", benefit: "Glass Wool" },
    ],
  };

  const [activeImage, setActiveImage] = useState(product.mainImage);
  const [zoom, setZoom] = useState(false);

  ///  ofor eye 
  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("viewerCount");
    const lastUpdate = localStorage.getItem("viewerCountTime");
    const now = Date.now();

    let newCount;
    if (stored && lastUpdate && now - lastUpdate < 3600000) {
      newCount = Number(stored);
    } else {
      newCount = Math.floor(Math.random() * 60) + 30; // 30 – 90 range
      localStorage.setItem("viewerCount", newCount);
      localStorage.setItem("viewerCountTime", now);
    }

    // update state AFTER effect ends → no warning
    Promise.resolve().then(() => {
      setViewerCount(newCount);
    });
  }, []);



  // eye end 

  // swipe
  // const move = (dir: "left" | "right") => {
  //   const idx = product.images.indexOf(activeImage);
  //   const newIndex =
  //     dir === "left"
  //       ? (idx - 1 + product.images.length) % product.images.length
  //       : (idx + 1) % product.images.length;
  //   setActiveImage(product.images[newIndex]);
  // };
  const move = (dir) => {
    const idx = product.images.indexOf(activeImage);
    const newIndex =
      dir === "left"
        ? (idx - 1 + product.images.length) % product.images.length
        : (idx + 1) % product.images.length;
    setActiveImage(product.images[newIndex]);
  };

  return (
    <div className=" bg-sky-50">

      <div className="   max-w-340   mx-auto px-4 py-8 ">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4  gap-1  flex">
          <span className="text-gray-500 font-semibold"><Link href="/">Home </Link></span>
          <span className="text-gray-500 font-semibold"><Link href="/products">/ Products</Link></span>
          <span className="text-gray-800 font-semibold"><Link href="/portable-cabin">/ Portable Office Cabin</Link></span>
          {/* / Products / <span className="text-gray-800 font-semibold">Portable Office Cabin</span> */}
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* ---- IMAGE SECTION ---- */}
          <div className=" sm:w-220  no-scrollbar " >
            {/* Main Image */}
            <div
              onClick={() => setZoom(true)}
              className="cursor-pointer  sm:rounded-lg rounded-md overflow-hidden "
            >
              <Image src={activeImage} alt="product" width={1000} height={600}
                className="object-cover h-[250px]  sm:h-[380px] md:h-[520px] " />
            </div>

            {/* Thumbnails */}
            <div className=" mt-4 flex items-center gap-2">
              {/* swipe buttons mobile */}
              <button className="md:hidden absolute left-0 bg-white shadow p-2 rounded-full"
                onClick={() => move("left")}>
                <FaChevronLeft size={10} />
              </button>

              <div className="flex gap-2 overflow-x-auto scrollbar-hide  md:px-0">
                {product.images.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt="thumb"
                    width={150}
                    height={90}
                    onClick={() => setActiveImage(img)}
                    className={`w-30 h-20 rounded object-cover cursor-pointer border ${img === activeImage ? "border-blue-50" : "border-gray-200"
                      }`}
                  />
                ))}
              </div>

              <button className="md:hidden absolute right-0 bg-white shadow p-2 rounded-full"
                onClick={() => move("right")}>
                <FaChevronRight size={10} />
              </button>
            </div>
          </div>

          {/* ---- PRODUCT INFO SECTION ---- */}
          <div className=" md:w-[33%] mt-6 sm:mt-1 ">
            <span className="bg-yellow-600 text-sm text-white px-3 py-1.5 text-center rounded-md font-semibold">
              ⭐ Best Seller
            </span>

            <h1 className="text-2xl mt-4 font-bold text-sky-900">{product.name}</h1>

            {/* Table */}
            <table className="w-full mb-5 mt-6 text-sm shadow-sm border bg-white/70 border-gray-50 ">
              <tbody className=" ">
                {product.features.map((row, i) => (
                  <tr key={i} className="border-b border-dotted border-gray-400">
                    <td className="p-2 font-semibold text-sky-900 ">{row.feature}</td>
                    <td className="p-2">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* eye  */}
            <div className=" mt-4 bg-sky-100 py-3 rounded-sm  ">

              <p className="text-sm text-gray-600 ml-3 font-semibold flex items-center gap-2">
                <span className="text-green-600 text-lg"><FaEye className="text-sky-600 text-xl " />
                </span>
                Currently <span className="font-semibold text-gray-800">{viewerCount}</span> guests are viewing this product
              </p>
            </div>




            {/* Buttons */}
            <div className="mt-7 flex  gap-3 justify-around items-center ">
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                Get Price
              </button> */}

              <a
                href="https://wa.me/9999999999"
                className="bg-sky-700 hover:bg-sky-800 text-white py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 font-semibold  whitespace-nowrap w-fit px-9 sm:px-15"
              >
                <FaWhatsapp /> Get Price
              </a>

              <a
                href="tel:+919999999999"
                className="bg-gray-800 w-fit px-9 sm:px-15 whitespace-nowrap hover:bg-black text-white py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 font-semibold md:col-span-2"
              >
                <FaPhone /> Call Now
              </a>
            </div>
          </div>
        </div>

        {/* -------- ZOOM POPUP -------- */}
        {zoom && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <button
              onClick={() => setZoom(false)}
              className="absolute top-20 right-5 bg-sky-900 px-4 py-2 rounded shadow font-semibold"
            >
              Close ✕
            </button>
            <Image
              src={activeImage}
              alt="zoom"
              width={800}
              height={800}
              className=" rounded"
            />
          </div>
        )}
      </div>
      <section className="mt-10 sm:max-w-7xl m-auto pb-16   bg-white">
        {/* Tabs */}
        <div className="flex   sm:flex-row gap-0.5  border-gray-200 pb-2">
          <button
            className={` sm:py-3 px-4  text-sm border border-gray-200 rounded-sm font-semibold transition ${activeTab === "details" ? "bg-white  border-t-4 border-b-0 border-t-sky-800" : "bg-gray-100  "
              }`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </button>
          <button
            className={`px-4 sm:py-2 py-3 text-sm  rounded-sm font-semibold transition ${activeTab === "specs" ? "bg-white  border-t-4 border-b-0 border-t-sky-800" : "bg-gray-100  "
              }`}
            onClick={() => setActiveTab("specs")}
          >
            Specifications
          </button>
          <button
            className={`px-10 sm:py-2  text-sm rounded-md font-semibold transition ${activeTab === "faq" ? "bg-white  border-t-4 border-b-0 border-t-sky-800" : "bg-gray-100  "
              }`}
            onClick={() => setActiveTab("faq")}
          >
            <span className=" hidden sm:block">Frequently Asked Questions </span>
            <span className="  sm:hidden">FAQ </span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6 text-gray-800 leading-relaxed">
          {/* Details */}
          {activeTab === "details" && (
            <div className="space-y-4">
              <p className=" px-3 font-semibold ">
                A Portable Office Cabin is the fastest way to set up a comfortable and professional workspace
                anywhere without waiting for construction. Designed for durability and convenience, it helps
                businesses reduce setup time, avoid civil work, and maintain productivity from Day 1.
              </p>

              <ul className="list-disc pl-6 font-semibold  px-3">
                <li>Weather-resistant & insulated structure</li>
                <li>Portable and relocatable anytime</li>
                <li>Custom interior options (desk, AC, flooring & partitions)</li>
                <li>Cost-effective and low maintenance</li>
              </ul>

              <p className=" font-semibold px-3">
                Whether for construction sites, factories, corporate projects or temporary setups — this cabin offers
                a professional workspace with comfort and privacy.
              </p>
            </div>
          )}

          {/* Specifications */}
          {activeTab === "specs" && (
            <div className="space-y-6 px-3">
              <div>
                <h3 className="font-semibold mb-2 text-lg">Construction Details</h3>
                <ul className="list-disc pl-6">
                  <li>Heavy-gauge steel frame for long-term durability</li>
                  <li>Exterior weather-resistant coated panels</li>
                  <li>Premium insulated walls & ceiling</li>
                  <li>Wooden / vinyl flooring options</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-lg">Electrical & Interior</h3>
                <ul className="list-disc pl-6">
                  <li>LED lighting + switches + power sockets</li>
                  <li>Standard wiring with distribution board</li>
                  <li>AC provision with reinforced support</li>
                  <li>Optional furniture & storage installation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-lg">Features & Benefits</h3>
                <ul className="list-disc pl-6">
                  <li>Fast installation without civil work</li>
                  <li>Portable & reusable for multiple sites</li>
                  <li>Energy-efficient insulated build</li>
                  <li>Highly cost-effective long-term</li>
                </ul>
              </div>
            </div>
          )}

          {/* FAQ */}
          {activeTab === "faq" && (
            <div className="space-y-3">
              {faqs.map((item, i) => (
                <div key={i} className="border border-gray-300 rounded-md overflow-hidden">
                  <button
                    className="w-full  text-left px-4  py-3 font-semibold bg-gray-100 hover:bg-gray-200 transition"
                    onClick={() => toggleFAQ(i)}
                  >
                    {item.q}
                  </button>
                  {openFAQ === i && (
                    <div className="px-4 py-3  font-medium text-sm bg-white border-t">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className=" sm:max-w-7xl m-auto py-12 text-center ">
        <h3 className="text-2xl font-semibold">Interested in portable office ?</h3>
        <p className="mt-2 text-gray-700">Get a free quote or talk to our expert team.</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://wa.me/9999999999"
            className=" flex items-center justify-center gap-2 font-semibold md:col-span-2 px-6 py-3 bg-blue-100 rounded-full hover:bg-slate-300 transition"
          >
            <FaWhatsapp /> Get Price
          </a>
          <a
            href="tel:+919999999999"
            target="_blank"
            className=" flex items-center justify-center gap-2 font-semibold md:col-span-2 px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition"
          >
            <FaPhone /> Call Now
          </a>
        </div>
      </section>

    </div>
  );
}
