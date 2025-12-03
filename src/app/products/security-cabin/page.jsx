"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { FaWhatsapp, FaPhone, FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";

export default function SecurityGuardCabinPage() {
  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:4000/api/leads";

  const product = {
    name: "Security Guard Cabin",
    subtitle: "Compact, secure and quick-to-deploy guardrooms for every site.",
    mainImage: "/assets/products/security/gaurd5.png",
    images: [
      "/assets/products/security/gaurd2.jpg",
      "/assets/products/security/security2.jpg",
      "/assets/products/security/security3.jpg",
      "/assets/products/security/security4.jpg",
      "/assets/products/security/security5.jpg",
    ],
    features: [
      { feature: "Footprint", benefit: "4x4 ft, 6x6 ft, 8x6 ft — custom sizes available" },
      { feature: "Build", benefit: "Powder-coated MS frame + insulated panels" },
      { feature: "Power", benefit: "Pre-wired with LED, sockets & AC provision" },
    ],
    highlights: [
      "Weatherproof and secure",
      "Fast installation — ready to use on delivery",
      "Custom finishes & branding available",
    ],
  };

  const faqs = [
    { q: "How fast can I get one?", a: "Small guard cabins ship in 3–7 days depending on customization and location." },
    { q: "Can it be locked?", a: "Yes — we provide shutter/lock options and secure window grills on request." },
    { q: "Is installation needed?", a: "Minimal site prep — we deliver, anchor and handover. No civil work usually required." },
    { q: "Can you add power and AC?", a: "Yes, wiring, sockets and AC support are pre-installed based on your spec." },
  ];

  const [activeTab, setActiveTab] = useState("details");
  const [activeImage, setActiveImage] = useState(product.mainImage);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [viewerCount, setViewerCount] = useState(0);
  const [zoom, setZoom] = useState(false);

  // Lead form state
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
      newCount = Math.floor(Math.random() * 60) + 20; // 20-80
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
      setSuccess("Thanks — we received your request. Our team will contact you soon.");
      setForm({ fullName: "", phone: "", email: "", product: product.name, projectDetails: "" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-sky-50 ">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-4 flex gap-2">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Products</Link>
          <span>/</span>
          <span className="font-semibold text-sky-900">{product.name}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* IMAGE AREA */}
          <div className=" sm:w-220">
            <div onClick={() => setZoom(true)} className="cursor-zoom-in rounded overflow-hidden">
              <Image src={activeImage} alt={product.name} width={1000} height={600} className="object-cover w-full h-[320px] sm:h-[420px] md:h-[520px] rounded" />
            </div>

          </div>

          {/* INFO AREA */}
          <div className="md:w-[36%] p-4 ">
             <span className="bg-yellow-600 text-sm text-white px-3 py-1.5 text-center rounded-md font-semibold">
              ⭐ Best Seller
            </span>
            <h1 className="text-2xl mt-4 font-bold text-sky-900">{product.name}</h1>
            <p className="text-gray-700 mt-2 font-medium">{product.subtitle}</p>

            <table className="w-full bg-slate-50 mt-4 text-sm">
              <tbody>
                {product.features.map((row, i) => (
                  <tr key={i} className="border-t border-dotted border-slate-400 py-2">
                    <td className="py-2 font-semibold text-sky-900">{row.feature}</td>
                    <td className="py-2">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 bg-sky-50 p-3 rounded">
              <p className="flex items-center gap-2 text-sm text-gray-700"><FaEye className="text-sky-600" /> Currently <span className="font-semibold text-gray-800">{viewerCount}</span> people are viewing this product</p>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="https://wa.me/9999999999" className="flex-1 bg-sky-700 hover:bg-sky-800 text-white py-3 rounded flex items-center justify-center gap-2 font-semibold"><FaWhatsapp /> Get Price</a>
              <a href="tel:+919999999999" className="w-40 bg-gray-800 hover:bg-black text-white py-3 rounded flex items-center justify-center gap-2 font-semibold"><FaPhone /> Call</a>
            </div>
          </div>
        </div>

            <div className="mt-4 flex items-center gap-2">
              <button className="md:hidden bg-white shadow p-2 rounded-full" onClick={() => moveImage("left")} aria-label="Prev image"><FaChevronLeft size={14} /></button>

              <div className="flex gap-2 overflow-x-auto ">
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setActiveImage(img)} className="rounded overflow-hidden border" aria-label={`View image ${i + 1}`}>
                    <Image src={img} alt={`thumb-${i}`} width={150} height={90} className={` w-30 h-20 object-cover ${img === activeImage ? "ring-2 ring-sky-500" : ""}`} />
                  </button>
                ))}
              </div>

              <button className="md:hidden bg-white shadow p-2 rounded-full" onClick={() => moveImage("right")} aria-label="Next image"><FaChevronRight size={14} /></button>
            </div>
        {/* ZOOM MODAL */}
        {zoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <button onClick={() => setZoom(false)} className="absolute top-6 right-6 bg-white px-3 py-1 rounded">Close ✕</button>
            <div className="max-w-4xl w-full rounded overflow-hidden">
              <Image src={activeImage} alt="zoom" width={1600} height={1000} className="object-contain w-full h-[80vh]" />
            </div>
          </div>
        )}

        {/* TABS */}
        <section className="mt-10 bg-white p-4 rounded">
          <div className="flex gap-2">
            <button onClick={() => setActiveTab("details")} className={`px-4 py-2 rounded ${activeTab === "details" ? "bg-white border-t-4 border-t-sky-800" : "bg-gray-100"}`}>Details</button>
            <button onClick={() => setActiveTab("specs")} className={`px-4 py-2 rounded ${activeTab === "specs" ? "bg-white border-t-4 border-t-sky-800" : "bg-gray-100"}`}>Specifications</button>
            <button onClick={() => setActiveTab("faq")} className={`px-4 py-2 rounded ${activeTab === "faq" ? "bg-white border-t-4 border-t-sky-800" : "bg-gray-100"}`}>FAQ</button>
            <button onClick={() => setActiveTab("images")} className={`px-4 py-2 rounded ${activeTab === "images" ? "bg-white border-t-4 border-t-sky-800" : "bg-gray-100"}`}>Images</button>
          </div>

          <div className="mt-6 text-gray-800">
            {activeTab === "details" && (
              <div className="space-y-4">
                <p className="font-semibold">When site security is non-negotiable, you need a guard cabin    that quick to place and built to protect. This cabin delivers a secure, comfortable station for guards — whether for construction sites, gated communities or corporate campuses.</p>
                <ul className="list-disc pl-6 font-medium">
                  <li>Weather & theft-resistant construction</li>
                  <li>Comfort provisions: lighting, ventilation & AC-ready</li>
                  <li>Customisable — paint, branding, counters & more</li>
                </ul>
                <p className="font-medium">Pain → Our clients were losing time and risking safety waiting for permanent structures. Solution → A ready cabin that ships fast and keeps people safe from Day 1. Trust → 100s installed across projects with long-term support.</p>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="space-y-4">
                <h3 className="font-semibold">Construction</h3>
                <ul className="list-disc pl-6">
                  <li>MS steel frame with corrosion-resistant coating</li>
                  <li>EPS/PUF insulated panels for thermal comfort</li>
                  <li>Aluminium windows with security grills</li>
                </ul>

                <h3 className="font-semibold mt-2">Electrical & Interiors</h3>
                <ul className="list-disc pl-6">
                  <li>LED lighting, 2+ sockets, switchboard</li>
                  <li>Optional furniture: counter, chair, small storage</li>
                  <li>AC provision with reinforced mounting</li>
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
                  <div key={i} className="rounded overflow-hidden cursor-pointer" onClick={() => { setActiveImage(img); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    <Image src={img} alt={`img-${i}`} width={600} height={400} className="object-cover w-full h-40 rounded" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* QUICK GALLERY BELOW TABS (small) */}
        <section className="mt-6">
          <h4 className="font-semibold mb-3">More views</h4>
          <div className="flex gap-3 overflow-x-auto py-2">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setActiveImage(img)} className="min-w-[160px] rounded overflow-hidden border">
                <Image src={img} alt={`small-${i}`} width={240} height={160} className="object-cover w-full h-28" />
              </button>
            ))}
          </div>
        </section>

        {/* LEAD FORM SECTION */}
        <section className="mt-10 bg-white p-6 rounded max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center">Interested in this Security Guard Cabin?</h2>
          <p className="text-center text-gray-700 mt-2">Tell us briefly — our expert will suggest the right size and delivery timeline.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
            <input type="text" required placeholder="Full name" className="border p-3 rounded" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
            <input type="tel" required placeholder="Phone" className="border p-3 rounded" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <input type="email" placeholder="Email (optional)" className="border p-3 rounded" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

            <select className="border p-3 rounded" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}>
              <option value="">Select product</option>
              <option value="Security Guard Cabin">Security Guard Cabin</option>
              <option value="Portable Office Cabin">Portable Office Cabin</option>
              <option value="Prefab House">Prefab House</option>
            </select>

            <textarea rows={4} placeholder="Project details (optional)" className="border p-3 rounded" value={form.projectDetails} onChange={(e) => setForm({ ...form, projectDetails: e.target.value })} />

            <button type="submit" disabled={loading} className="bg-sky-700 text-white py-3 rounded font-semibold">{loading ? "Sending..." : "Get a Free Quote"}</button>

            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-600">{error}</p>}

            <p className="text-sm text-gray-600">Or call us: <a href="tel:+919999999999" className="font-semibold">+91 99999 99999</a> — or message on WhatsApp.</p>
          </form>
        </section>

        {/* TRUST / CTA */}
        <section className="mt-8 text-center">
          <p className="text-gray-700">Trusted by site supervisors & security teams — backed by on-ground support and spare-part availability.</p>
        </section>

      </div>
    </div>
  );
}
