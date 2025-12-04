"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { FaWhatsapp, FaPhone, FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";

export default function PortableToiletPage() {
  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:4000/api/leads";

  const product = {
    name: "Portable Toilet",
    subtitle: "Portable toilets for sites, events, construction areas & public outdoor spaces — ready to install anywhere.",
    mainImage: "/assets/products/toilets/toilet2.jpg",
    images: [
      "/assets/products/portable-toilet/toilet1.jpg",
      "/assets/products/toilets/toilet3.jpg",
      "/assets/products/toilets/Portable Office toilet.jpg",
      "/assets/products/portable-toilet/toilet4.jpg",
      "/assets/products/toilets/toilet5.jpg",
      "/assets/products/portable-toilet/toilet6.jpg",
    ],
    features: [
      { feature: "Setup", benefit: "Delivered fully assembled — ready to use immediately" },
      { feature: "Capacity", benefit: "Single or multiple units for events, sites, or public areas" },
      { feature: "Hygiene", benefit: "Water tank, ventilation, wash basin, and waste disposal options" },
    ],
    highlights: [
      "Movable — deploy anywhere without construction",
      "Durable & weather-resistant materials",
      "Low maintenance & quick installation",
    ],
  };

  const faqs = [
    { q: "Are these toilets suitable for outdoor events?", a: "Yes — they are fully portable, weatherproof, and can handle multiple users." },
    { q: "Can the toilet be relocated?", a: "Absolutely — units can be moved to different sites as needed." },
    { q: "Do you provide water & waste management?", a: "Yes — we provide tanks, drainage options, and optional plumbing setup." },
    { q: "Is installation required?", a: "Minimal setup — just place and anchor; ready for immediate use." },
  ];

  const [activeTab, setActiveTab] = useState("details");
  const [activeImage, setActiveImage] = useState(product.mainImage);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [viewerCount, setViewerCount] = useState(0);
  const [zoom, setZoom] = useState(false);

  const [form, setForm] = useState({ fullName: "", phone: "", email: "", product: product.name, projectDetails: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("viewerCount");
    const lastUpdate = localStorage.getItem("viewerCountTime");
    const now = Date.now();
    let newCount;
    if (stored && lastUpdate && now - lastUpdate < 3600000) {
      newCount = Number(stored);
    } else {
      newCount = Math.floor(Math.random() * 60) + 25;
      localStorage.setItem("viewerCount", newCount);
      localStorage.setItem("viewerCountTime", now);
    }
    Promise.resolve().then(() => setViewerCount(newCount));
  }, []);

  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  const moveImage = (dir) => {
    const idx = product.images.indexOf(activeImage);
    const newIndex = dir === "left" ? (idx - 1 + product.images.length) % product.images.length : (idx + 1) % product.images.length;
    setActiveImage(product.images[newIndex]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      await axios.post(API_ENDPOINT, form, { headers: { "Content-Type": "application/json" } });
      setSuccess("Thank you — our team will contact you with pricing & options.");
      setForm({ fullName: "", phone: "", email: "", product: product.name, projectDetails: "" });
    } catch (err) {
      setError("Something went wrong. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-sky-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-4 flex gap-2">
          <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span className="text-sky-900 font-semibold">{product.name}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <div className=" sm:w-220">
            <div onClick={() => setZoom(true)} className="cursor-zoom-in rounded overflow-hidden">
              <Image src={activeImage} alt={product.name} width={1200} height={800} className="w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover rounded" />
            </div>
          </div>

          <div className="md:w-[36%] p-4">
            <span className="bg-yellow-600 text-white px-3 py-1 rounded text-sm">Top Selling</span>
            <h1 className="text-2xl font-bold text-sky-900 mt-4">{product.name}</h1>
            <p className="text-gray-700 mt-2 font-medium">{product.subtitle}</p>

            <table className="w-full mt-4 text-sm bg-slate-50">
              <tbody>
                {product.features.map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2 font-semibold text-sky-900">{row.feature}</td>
                    <td>{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-4 bg-sky-50 p-3 rounded flex items-center gap-2 text-gray-800">
              <FaEye className="text-sky-700" /> <b>{viewerCount}</b> people are currently viewing this product
            </p>

            <div className="mt-6 flex gap-3">
              <a href="https://wa.me/9999999999" className="flex-1 bg-sky-700 hover:bg-sky-800 text-white py-3 rounded flex justify-center items-center gap-2 font-semibold"><FaWhatsapp /> WhatsApp</a>
              <a href="tel:+919999999999" className="w-40 bg-gray-800 hover:bg-black text-white py-3 rounded flex justify-center items-center gap-2 font-semibold"><FaPhone /> Call</a>
            </div>
          </div>
        </div>

        {zoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <button onClick={() => setZoom(false)} className="absolute top-18 right-4 text-white bg-black/60 hover:bg-black px-3 py-1.5 rounded text-lg font-bold">✕ Close</button>
            <div className="max-w-5xl w-full flex justify-center">
              <Image src={activeImage} alt="zoom" width={1600} height={1000} className="object-contain w-full max-h-[85vh]" />
            </div>
          </div>
        )}

        <div className="mt-4 flex items-center gap-2">
          <button className="md:hidden bg-white shadow p-2 rounded-full" onClick={() => moveImage("left")}><FaChevronLeft size={14} /></button>
          <div className="flex gap-2 overflow-x-auto py-1">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setActiveImage(img)} className="border rounded overflow-hidden">
                <Image src={img} alt={`thumb-${i}`} width={160} height={110} className={`object-cover ${img === activeImage ? "ring-2 ring-sky-600" : ""}`} />
              </button>
            ))}
          </div>
          <button className="md:hidden bg-white shadow p-2 rounded-full" onClick={() => moveImage("right")}><FaChevronRight size={14} /></button>
        </div>

        {/* ---- TABS ---- */}
        <section className="mt-10 bg-white p-4 rounded">
          <div className="flex gap-2 flex-wrap">
            {["details", "specs", "faq", "images"].map((tab) => (
              <button onClick={() => setActiveTab(tab)} key={tab} className={`px-4 py-2 rounded ${activeTab === tab ? "bg-white border-t-4 border-t-sky-800" : "bg-gray-100"}`}>{tab.toUpperCase()}</button>
            ))}
          </div>

          <div className="mt-6 text-gray-800">
            {activeTab === "details" && (
              <div className="space-y-4">
                <p className="font-semibold">Portable toilets are the fastest, most hygienic solution for sites, events and public spaces. They are designed for quick installation, mobility, and durability.</p>
                <ul className="list-disc pl-6 font-medium">
                  <li>Ready-to-use units — minimal setup required</li>
                  <li>Weatherproof and durable materials</li>
                  <li>Portable for relocation whenever needed</li>
                </ul>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="space-y-4">
                <h3 className="font-semibold">Structure</h3>
                <ul className="list-disc pl-6">
                  <li>MS frame with anti-corrosion finish</li>
                  {/* <li>PUF/EPS insulated walls for ventilation support</li> */}
                  <li>Durable plastic or composite flooring</li>
                </ul>
                <h3 className="font-semibold mt-2">Fitout</h3>
                <ul className="list-disc pl-6">
                  <li>Water tank & flush system</li>
                  <li>Ventilation and small wash basin</li>
                  <li>Optional plumbing & waste management setup</li>
                </ul>
              </div>
            )}

            {activeTab === "faq" && (
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <div key={i} className="border rounded">
                    <button onClick={() => toggleFAQ(i)} className="w-full text-left px-4 py-3 bg-gray-100 font-semibold">{f.q}</button>
                    {openFAQ === i && <div className="px-4 py-3 bg-white">{f.a}</div>}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "images" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {product.images.map((img, i) => (
                  <div key={i} onClick={() => { setActiveImage(img); setZoom(true); }} className="cursor-pointer rounded overflow-hidden">
                    <Image src={img} alt={`img-${i}`} width={600} height={400} className="object-cover w-full h-40 rounded" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ---- LEAD FORM ---- */}
        <section className="mt-10 bg-white p-6 rounded max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center">Get a Quote for Portable Toilet</h2>
          <p className="text-center text-gray-700 mt-2">Share your requirement — size, quantity, and location — our team will provide price & delivery options.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
            <input type="text" required placeholder="Full name" className="border p-3 rounded" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
            <input type="tel" required placeholder="Phone" className="border p-3 rounded" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <input type="email" placeholder="Email (optional)" className="border p-3 rounded" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <textarea rows={4} placeholder="Requirement (size, quantity, location…)" className="border p-3 rounded" value={form.projectDetails} onChange={(e) => setForm({ ...form, projectDetails: e.target.value })} />
            <button type="submit" disabled={loading} className="bg-sky-700 text-white py-3 rounded font-semibold">{loading ? "Sending..." : "Request Quote"}</button>
            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </section>

        {/* <p className="text-center mt-8 text-gray-700">Used by construction sites, events, and public facilities across India — fast deployment & maintenance support.</p> */}
      </div>
    </div>
  );
}
