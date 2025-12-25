"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { FaWhatsapp, FaPhone, FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";
import { toast } from "sonner";

export default function PortableCabinsPage() {
  const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || "http://localhost:4000/api/leads";

  const product = {
    name: "Portable Cabins",
    subtitle: "Flexible, durable cabins",
    mainImage: "/assets/products/cabin/cabin3.jpg",
    images: [
      "/assets/products/cabin/cabin2312.jpeg", 
      "/assets/products/cabin/cabin2.jpg",
      "/assets/hero/modular homes.jpg",
      "/assets/hero/products/cabins/cabinp1.jpg",
      "/assets/products/cabin/cabin-interior1.jpg",
      "/assets/products/cabin/cabin-10.jpg",
      "/assets/products/cabin/pink-cabin.jpg",
    ],
    features: [
      { feature: "Sizes", benefit: "Custom ranges: 6x4, 8x6, 10x10 and bespoke options" },
      { feature: "Build", benefit: "Galvanized MS frame + insulated panels for year-round comfort" },
      { feature: "Delivery", benefit: "Pre-built, tested and fast-to-install — minimal site prep" },
    ],
    highlights: [
      "Multi-purpose — office, guardroom, kiosk, farm cabin & more",
      "Energy-efficient insulated design",
      "Branding and turnkey interior options",
    ],
  };

  const faqs = [
    { q: "How quickly can I get a cabin?", a: "Small standard cabins: 3–10 days. Custom builds: depends on specs — we'll give a clear timeline on enquiry." },
    { q: "Can cabins be moved later?", a: "Yes — they are designed for relocation. We also offer re-installation support if needed." },
    { q: "Do you provide customization?", a: "Full customization: doors, windows, finishes, electrical, furniture and branding." },
    { q: "What about warranty & support?", a: "We offer a standard workmanship warranty and long-term spare-part support through our service team." },
  ];

  const [activeTab, setActiveTab] = useState("details");
  const [activeImage, setActiveImage] = useState(product.mainImage);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [viewerCount, setViewerCount] = useState(0);
  const [zoom, setZoom] = useState(false);

  // Lead form
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
      newCount = Math.floor(Math.random() * 60) + 25; // 25-85
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
      setSuccess("Thank you — we've received your request. Our team will contact you shortly.");
      setForm({ fullName: "", phone: "", email: "", product: product.name, projectDetails: "" });
    } catch (err) {
      console.error(err);
      toast.message("Something went wrong. Please try again or call us directly")
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-sky-50 min-h-screen">
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
          <div className="sm:w-220">
            <div onClick={() => setZoom(true)} className="cursor-zoom-in rounded overflow-hidden">
              <Image src={activeImage} alt={product.name} width={1200} height={800} className="object-cover w-full h-[320px] sm:h-[420px] md:h-[520px] rounded" />
            </div>


          </div>

          {/* INFO AREA */}
          <div className="md:w-[36%] p-4 rounded-md ">
            <span className="bg-yellow-600 text-white px-3 py-1 rounded font-semibold text-sm">Best Seller</span>
            <h1 className="text-2xl mt-4 font-bold text-sky-900">{product.name}</h1>
            <p className="text-gray-700 mt-2 font-medium">{product.subtitle}</p>

            <table className="w-full mt-4 text-sm bg-slate-50">
              <tbody>
                {product.features.map((row, i) => (
                  <tr key={i} className="border-t py-2">
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

        {/* ZOOM MODAL - used by hero and bottom gallery */}
        {zoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setZoom(false)}
              className="absolute top-30 right-4 bg-black text-white  px-3 py-1.5 rounded shadow font-semibold hover:bg-gray-200"
            >
              ✕ Close
            </button>

            <div className="max-w-5xl w-full rounded overflow-hidden flex justify-center">
              <Image
                src={activeImage}
                alt="zoom"
                width={1600}
                height={1000}
                className="object-contain w-full max-h-[85vh]"
              />
            </div>
          </div>
        )}
        <div className="mt-4 flex items-center gap-2">
          <button className="md:hidden bg-white shadow p-2 rounded-full" onClick={() => moveImage("left")} aria-label="Prev image"><FaChevronLeft size={14} /></button>

          <div className="flex gap-2 overflow-x-auto py-1">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setActiveImage(img)} className="rounded overflow-hidden border" aria-label={`View image ${i + 1}`}>
                <Image src={img} alt={`thumb-${i}`} width={160} height={110} className={`object-cover ${img === activeImage ? "ring-2 ring-sky-500" : ""}`} />
              </button>
            ))}
          </div>

          <button className="md:hidden bg-white shadow p-2 rounded-full" onClick={() => moveImage("right")} aria-label="Next image"><FaChevronRight size={14} /></button>
        </div>

        {/* TABS */}
        <section className="mt-10 bg-white p-4 rounded">
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => setActiveTab("details")} className={`px-4 py-2 rounded ${activeTab === "details" ? "bg-white border-t-4 border-t-sky-800" : "bg-gray-100"}`}>Details</button>
            <button onClick={() => setActiveTab("specs")} className={`px-4 py-2 rounded ${activeTab === "specs" ? "bg-white border-t-4 border-t-sky-800" : "bg-gray-100"}`}>Specifications</button>
            <button onClick={() => setActiveTab("faq")} className={`px-4 py-2 rounded ${activeTab === "faq" ? "bg-white border-t-4 border-t-sky-800" : "bg-gray-100"}`}>FAQ</button>
            <button onClick={() => setActiveTab("images")} className={`px-4 py-2 rounded ${activeTab === "images" ? "bg-white border-t-4 border-t-sky-800" : "bg-gray-100"}`}>Images</button>
          </div>

          <div className="mt-6 text-gray-800">
            {activeTab === "details" && (
              <div className="space-y-4">
                <p className="font-semibold">Portable cabins are the fastest, most cost-effective way to get a fully functional space — without waiting months for construction. Whether you need a site office, security post, retail kiosk or quick guest room, these cabins give you comfort, security and instant utility.</p>

                <ul className="list-disc pl-6 font-medium">
                  <li>Delivered ready — mount, anchor and start using</li>
                  <li>Thermal insulation keeps interiors comfortable in any season</li>
                  <li>Modular design — expand, relocate or repurpose as needs change</li>
                </ul>

                <p className="font-medium">Pain → Long construction and hidden costs stall projects. Solution → Portable cabins deliver usable spaces fast, with transparent pricing and low upkeep. Trust → Installed across industrial sites, farms and small businesses with local aftersales support.</p>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="space-y-4">
                <h3 className="font-semibold">Structure</h3>
                <ul className="list-disc pl-6">
                  <li>Galvanized MS frame with anti-corrosion finish</li>
                  <li>PUF/EPS insulated wall panels for energy efficiency</li>
                  <li>Various floor finishes: vinyl, wood-look, or tile</li>
                </ul>

                <h3 className="font-semibold mt-2">Electrical & Fitout</h3>
                <ul className="list-disc pl-6">
                  <li>Pre-wired with LED lighting and multiple sockets</li>
                  <li>Optional HVAC, plumbing and fitted furniture</li>
                  <li>Security options: locks, grills, CCTV mounts</li>
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
                  <div key={i} className="rounded overflow-hidden cursor-pointer" onClick={() => { setActiveImage(img); setZoom(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    <Image src={img} alt={`img-${i}`} width={600} height={400} className="object-cover w-full h-40 rounded" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* QUICK GALLERY BELOW TABS (small) - opens zoom on click */}
        <section className="mt-6">
          <h4 className="font-semibold mb-3">More views</h4>
          <div className="flex gap-3 overflow-x-auto py-2">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => { setActiveImage(img); setZoom(true); }} className="min-w-[160px] rounded overflow-hidden border">
                <Image src={img} alt={`small-${i}`} width={240} height={160} className="object-cover w-full h-28" />
              </button>
            ))}
          </div>
        </section>

        {/* LEAD FORM SECTION */}
        <section className="mt-10 bg-white p-6 rounded max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-sky-900">Get a quote for Portable Cabins</h2>
          <p className="text-center text-gray-700 mt-2 font-medium">Tell us your use-case and size,  our expert will respond with options and a delivery estimate.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
            <input type="text" required placeholder="Full name" className="border p-3 rounded" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
            <input type="tel" required placeholder="Phone" className="border p-3 rounded" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <input type="email" placeholder="Email (optional)" className="border p-3 rounded" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

            <select className="border p-3 rounded" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}>
              <option value="">Select product</option>
              <option value="Portable Cabins">Portable Cabins</option>
              <option value="Security Guard Cabin">Security Guard Cabin</option>
              <option value="Portable Office Cabin">Portable Office Cabin</option>
            </select>

            <textarea rows={4} placeholder="Project details (optional)" className="border p-3 rounded" value={form.projectDetails} onChange={(e) => setForm({ ...form, projectDetails: e.target.value })} />

            <button type="submit" disabled={loading} className="bg-sky-700 text-white py-3 rounded font-semibold">{loading ? "Sending..." : "Request Quote"}</button>

            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-600 font-medium">{error}</p>}

            {/* <p className="text-sm text-gray-600">Or call us: <a href="tel:+919999999999" className="font-semibold">+91 99999 99999</a> — or message on WhatsApp.</p> */}
          </form>
        </section>

        {/* TRUST */}
        <section className="mt-8 text-center">
          {/* <p className="text-gray-700">Trusted by businesses, farms and site managers — backed by nationwide logistics and spare-part support.</p> */}
        </section>

      </div>
    </div>
  );
}
