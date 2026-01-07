// // "use client";
// // import { useState } from "react";
// // import axios from "axios";

// // export default function ContactPage() {
// //   const [form, setForm] = useState({
// //     fullName: "",
// //     phone: "",
// //     email: "",
// //     product: "",
// //     projectDetails: "",
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [success, setSuccess] = useState("");
// //   const [error, setError] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setSuccess("");
// //     setError("");

// //     try {
// //       await axios.post("http://localhost:4000/api/leads", form, {
// //         headers: { "Content-Type": "application/json" },
// //       });
// //       setSuccess("Thank you! We received your request.");
// //       setForm({
// //         fullName: "",
// //         phone: "",
// //         email: "",
// //         product: "",
// //         projectDetails: "",
// //       });
// //     } catch (err) {
// //       console.error(err);
// //       setError("Something went wrong. Try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="max-w-xl mx-auto py-10">
// //       <h2 className="text-3xl font-bold mb-6 text-center">Contact / Get a Quote</h2>

// //       <form onSubmit={handleSubmit} className="space-y-4">

// //         <input
// //           type="text"
// //           placeholder="Full Name"
// //           required
// //           className="border p-3 w-full"
// //           value={form.fullName}
// //           onChange={(e) => setForm({ ...form, fullName: e.target.value })}
// //         />

// //         <input
// //           type="tel"
// //           placeholder="Phone"
// //           required
// //           className="border p-3 w-full"
// //           value={form.phone}
// //           onChange={(e) => setForm({ ...form, phone: e.target.value })}
// //         />

// //         <input
// //           type="email"
// //           placeholder="Email (optional)"
// //           className="border p-3 w-full"
// //           value={form.email}
// //           onChange={(e) => setForm({ ...form, email: e.target.value })}
// //         />

// //         <select
// //           required
// //           className="border p-3 w-full"
// //           value={form.product}
// //           onChange={(e) => setForm({ ...form, product: e.target.value })}
// //         >
// //           <option value="">Select Product</option>
// //           <option value="Portable Office Cabin">Portable Office Cabin</option>
// //           <option value="Security Guard Cabin">Security Guard Cabin</option>
// //           <option value="Portable Cafe Cabin">Portable Cafe Cabin</option>
// //           <option value="Prefab House">Prefab House</option>
// //         </select>

// //         <textarea
// //           placeholder="Project Details (optional)"
// //           rows="4"
// //           className="border p-3 w-full"
// //           value={form.projectDetails}
// //           onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
// //         />

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="bg-blue-600 text-white font-medium px-5 py-3 rounded w-full"
// //         >
// //           {loading ? "Sending..." : "Submit"}
// //         </button>

// //         {success && <p className="text-green-600">{success}</p>}
// //         {error && <p className="text-red-600">{error}</p>}
// //       </form>
// //     </div>
// //   );
// // }




// // "use client";

// // import { useState } from "react";
// // import axios from "axios";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Button } from "@/components/ui/button";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // // import { Toast, ToastProvider, ToastTitle, ToastDescription } from "@/components/ui/sonner";
// // import { toast, Toaster } from "sonner";

// // import { Loader2 } from "lucide-react";

// // export default function ContactPage() {
// //   const [form, setForm] = useState({
// //     fullName: "",
// //     phone: "",
// //     email: "",
// //     product: "",
// //     projectDetails: "",
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [toast, setToast] = useState({ type: "", message: "", visible: false });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setToast({ type: "", message: "", visible: false });

// //     try {
// //       await axios.post("http://localhost:4000/api/leads", form, {
// //         headers: { "Content-Type": "application/json" },
// //       });
// //       setToast({ type: "success", message: "Thank you! We received your request.", visible: true });
// //       setForm({ fullName: "", phone: "", email: "", product: "", projectDetails: "" });
// //     } catch (err) {
// //       console.error(err);
// //       setToast({ type: "error", message: "Something went wrong. Try again.", visible: true });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="bg-sky-50 min-h-screen flex items-center justify-center p-4">
// //       <Toaster position="top-right">
// //         <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-xl max-w-5xl w-full overflow-hidden">

// //           {/* Left side illustration */}
// //           <div className="hidden md:block md:w-1/2 relative">
// //             <img
// //               src="/assets/contact-illustration.jpg"
// //               alt="Contact Illustration"
// //               className="object-cover w-full h-full"
// //             />
// //           </div>

// //           {/* Right side form */}
// //           <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
// //             <h2 className="text-3xl font-bold mb-6 text-sky-900">Contact / Get a Quote</h2>
// //             <p className="text-gray-600 mb-6">Share your requirements and we’ll respond with options and pricing.</p>

// //             <form onSubmit={handleSubmit} className="space-y-5">

// //               {/* Full Name */}
// //               <div className="relative">
// //                 <Label htmlFor="fullName">Full Name</Label>
// //                 <Input
// //                   id="fullName"
// //                   type="text"
// //                   placeholder="John Doe"
// //                   required
// //                   value={form.fullName}
// //                   onChange={(e) => setForm({ ...form, fullName: e.target.value })}
// //                   className="pl-10"
// //                 />
// //                 <span className="absolute left-3 top-10 text-gray-400">👤</span>
// //               </div>

// //               {/* Phone */}
// //               <div className="relative">
// //                 <Label htmlFor="phone">Phone</Label>
// //                 <Input
// //                   id="phone"
// //                   type="tel"
// //                   placeholder="+91 99999 99999"
// //                   required
// //                   value={form.phone}
// //                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
// //                   className="pl-10"
// //                 />
// //                 <span className="absolute left-3 top-10 text-gray-400">📞</span>
// //               </div>

// //               {/* Email */}
// //               <div className="relative">
// //                 <Label htmlFor="email">Email (optional)</Label>
// //                 <Input
// //                   id="email"
// //                   type="email"
// //                   placeholder="example@mail.com"
// //                   value={form.email}
// //                   onChange={(e) => setForm({ ...form, email: e.target.value })}
// //                   className="pl-10"
// //                 />
// //                 <span className="absolute left-3 top-10 text-gray-400">✉️</span>
// //               </div>

// //               {/* Product Select */}
// //               <div>
// //                 <Label htmlFor="product">Select Product</Label>
// //                 <Select
// //                   value={form.product}
// //                   onValueChange={(val) => setForm({ ...form, product: val })}
// //                 >
// //                   <SelectTrigger id="product" className="w-full">
// //                     <SelectValue placeholder="Choose a product" />
// //                   </SelectTrigger>
// //                   <SelectContent>
// //                     <SelectItem value="Portable Office Cabin">Portable Office Cabin</SelectItem>
// //                     <SelectItem value="Security Guard Cabin">Security Guard Cabin</SelectItem>
// //                     <SelectItem value="Portable Cafe Cabin">Portable Cafe Cabin</SelectItem>
// //                     <SelectItem value="Prefab House">Prefab House</SelectItem>
// //                   </SelectContent>
// //                 </Select>
// //               </div>

// //               {/* Project Details */}
// //               <div>
// //                 <Label htmlFor="projectDetails">Project Details (optional)</Label>
// //                 <textarea
// //                   id="projectDetails"
// //                   rows="4"
// //                   placeholder="Provide any specific requirements"
// //                   className="border rounded-md p-3 w-full focus:ring-2 focus:ring-sky-400 transition"
// //                   value={form.projectDetails}
// //                   onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
// //                 />
// //               </div>

// //               {/* Submit Button */}
// //               <Button
// //                 type="submit"
// //                 disabled={loading}
// //                 className="w-full bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-600 hover:to-sky-700 text-white flex items-center justify-center gap-2"
// //               >
// //                 {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit"}
// //               </Button>
// //             </form>
// //           </div>
// //         </div>

// //         {/* Toast Messages */}
// //         {toast.visible && (
// //           <Toast className={`fixed bottom-4 right-4 ${toast.type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}>
// //             <ToastTitle>{toast.type === "success" ? "Success" : "Error"}</ToastTitle>
// //             <ToastDescription>{toast.message}</ToastDescription>
// //           </Toast>
// //         )}
// //       </Toaster>
// //     </div>
// //   );
// // }





// "use client";

// import { useState , useRef, useEffect } from "react";
// import Link from "next/link";
// import axios from "axios";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { toast, Toaster } from "sonner";
// import { Loader2 } from "lucide-react";
// import Image from "next/image";
// import ContactButtons from "@/components/ContactButtons";
// import ConnectWithUs from "@/components/ConnectWithUs";

// export default function ContactPage() {




//   // start fror main 
//     const heroRef = useRef(null);
//     const imgRef = useRef(null);
//     const [isSmall, setIsSmall] = useState(false);
  
//     // Replace this with your image path (use next/image optimized images)
//     const heroSrc = "/assets/about/about6.jpg"; // change file to your asset
  
//     const headline = "North India Leading in Prefabricated & Portable cabins";
//     const subheading =
//       "Fast deployment, robust build and turnkey interiors for offices, security posts, farmhouses and labour colonies.";
  
//     useEffect(() => {
//       // Detect small screens -> disable parallax
//       const mq = window.matchMedia("(max-width: 768px)");
//       const handle = () => setIsSmall(mq.matches);
//       handle();
//       mq.addEventListener ? mq.addEventListener("change", handle) : mq.addListener(handle);
  
//       return () => {
//         mq.removeEventListener ? mq.removeEventListener("change", handle) : mq.removeListener(handle);
//       };
//     }, []);
  
//     useEffect(() => {
//       if (isSmall) {
//         // Reset transform on mobile
//         if (imgRef.current) imgRef.current.style.transform = "translateY(0px)";
//         return;
//       }
  
//       let rafId = null;
  
//       const onScroll = () => {
//         if (!heroRef.current || !imgRef.current) return;
//         const rect = heroRef.current.getBoundingClientRect();
//         const windowHeight = window.innerHeight;
//         // Calculate how far hero is from the top (negative if scrolled past)
//         // We'll map visible portion to a small translateY value
//         // When hero top is 0 -> translate = 0; when hero top is -200 -> translate small amount
//         const visible = Math.max(0, Math.min(rect.height, windowHeight - rect.top));
//         // Use rect.top to compute a factor
//         const factor = (rect.top / windowHeight) * 0.2; // small factor
//         const translateY = Math.round(-factor * 50); // max ~ +/- 10-20px (tweak)
//         // Smooth via requestAnimationFrame
//         if (rafId) cancelAnimationFrame(rafId);
//         rafId = requestAnimationFrame(() => {
//           if (imgRef.current) imgRef.current.style.transform = `translateY(${translateY}px)`;
//         });
//       };
  
//       // initial apply
//       onScroll();
//       window.addEventListener("scroll", onScroll, { passive: true });
//       window.addEventListener("resize", onScroll);
  
//       return () => {
//         if (rafId) cancelAnimationFrame(rafId);
//         window.removeEventListener("scroll", onScroll);
//         window.removeEventListener("resize", onScroll);
//       };
//     }, [isSmall]);


//     // end 
  
//   const [form, setForm] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     product: "",
//     projectDetails: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await axios.post("https://am-backend-2968.onrender.com/api/leads", form, {
//         headers: { "Content-Type": "application/json" },
//       });

//       toast.success("Thank you! We received your request.");
//       setForm({ fullName: "", phone: "", email: "", product: "", projectDetails: "" });
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       {/* HERO */}
//       <section
//         ref={heroRef}
//         className="relative overflow-hidden"
//         aria-label="About hero"
//         style={{ height: "50vh", minHeight: "320px" }} // 45vh
//       >
//         {/* Background image placed absolutely and moved with transform */}
//         <div className="absolute inset-0  -z-10">
//           <div className="w-full h-full relative">
//             <Image
//               ref={imgRef}
//               src={heroSrc}
//               alt="Modular prefabricated cabins - hero"
//               fill
//               style={{ objectFit: "cover", transform: "translateY(0px)", transition: "transform 0.12s linear" }}
//               sizes="(max-width: 768px) 100vw, 1200px"
//               priority
//               className=""
//             />
//             {/* subtle gradient overlay for contrast */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/40 pointer-events-none" />
//           </div>
//         </div>

//         {/* Content */}
//         <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
//           <div className="w-full md:w-3/4 lg:w-2/3 text-center md:text-left">
//             {/* <p className="text-sm text-white/80 uppercase tracking-wider mb-2">Trusted · Durable · Quick to deploy</p> */}
//             <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
//               {headline}
//             </h1>
//             {/* <p className="mt-3 text-white/90 max-w-2xl text-sm sm:text-base">
//               {subheading}
//             </p> */}
// {/* 
//             <div className="mt-6 flex justify-center md:justify-start gap-3">
//               <Link href="/contact" className="inline-block">
//                 <button className="px-5 py-3 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform">
//                   Get a Free Quote
//                 </button>
//               </Link>
//             </div> */}
//           </div>
//         </div>

//         {/* Scroll hint (small down arrow) */}
//         <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20">
//           <div className="text-white/80 animate-bounce py-1 px-2 rounded-full">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>
//         </div>
//       </section>
//       <div className="bg-sky-100 min-h-screen flex items-center justify-center p-4">
//         {/* Sonner Toaster */}
//         <Toaster position="top-right" richColors closeButton />

//         <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-xl max-w-5xl w-full overflow-hidden">

//           {/* Left Illustration */}
//           <div className="hidden md:block md:w-1/2 relative">
//             <Image
//               width={1000}
//               height={1000}
//               src="/assets/hero/a.jpg"
//               alt="Contact Illustration"
//               className="object-cover w-full h-full"
//             />
//           </div>

//           {/* Right Form */}
//           <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
//             <div className=" flex ">
//               <Image
//                 width={1000}
//                 height={1000}
//                 src="/logo.png"
//                 alt="Contact Illustration"
//                 className="object-cover  w-40 " />

//             </div>
//             <h2 className="text-3xl font-bold mb-3 text-sky-900">Contact / Get a Quote</h2>
//             <p className="text-gray-600 mb-6">Share your requirements and we’ll respond with options and pricing.</p>

//             <form onSubmit={handleSubmit} className="space-y-5">

//               {/* Full Name */}
//               <div className="relative">
//                 <Label htmlFor="fullName">Full Name</Label>
//                 <Input
//                   id="fullName"
//                   type="text"
//                   placeholder="full name"
//                   required
//                   value={form.fullName}
//                   onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//                   className="pl-10"
//                 />
//                 <span className="absolute left-3 top-5 text-gray-400">👤</span>
//               </div>

//               {/* Phone */}
//               <div className="relative">
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   placeholder="+91 99999 99999"
//                   required
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   className="pl-10"
//                 />
//                 <span className="absolute left-3 top-5 text-gray-400">📞</span>
//               </div>

//               {/* Email */}
//               <div className="relative">
//                 <Label htmlFor="email">Email (optional)</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="example@mail.com"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   className="pl-10"
//                 />
//                 <span className="absolute left-3 top-5 text-gray-400">✉️</span>
//               </div>

//               {/* Product Select */}
//               <div>
//                 <Label htmlFor="product">Select Product</Label>
//                 <Select
//                   value={form.product}
//                   onValueChange={(val) => setForm({ ...form, product: val })}
//                 >
//                   <SelectTrigger id="product" className="w-full">
//                     <SelectValue placeholder="Choose a product" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="Portable Office Cabin">Portable Office Cabin</SelectItem>
//                     <SelectItem value="Security Guard Cabin">Security Guard Cabin</SelectItem>
//                     <SelectItem value="Portable Cafe ">Portable Cafe </SelectItem>
//                     <SelectItem value="Portable Toilet ">Portable Toilet </SelectItem>
//                     <SelectItem value="Prefab House">Prefab House</SelectItem>
//                     <SelectItem value="Accomondation">Prefab Accomondation</SelectItem>
//                     <SelectItem value="Labor Colony">Labor Colony </SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Project Details */}
//               <div>
//                 <Label htmlFor="projectDetails">Project Details (optional)</Label>
//                 <textarea
//                   id="projectDetails"
//                   rows="4"
//                   placeholder="Provide any specific requirements"
//                   className="border rounded-md p-3 w-full focus:ring-2 focus:ring-sky-400 transition"
//                   value={form.projectDetails}
//                   onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
//                 />
//               </div>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-600 hover:to-sky-700 text-white flex items-center justify-center gap-2"
//               >
//                 {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit"}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { useState, useRef, useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast, Toaster } from "sonner";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const [isSmall, setIsSmall] = useState(false);

  const heroSrc = "/assets/about/about6.jpg";
  const headline = "North India Leading in Prefabricated & Portable cabins";

  useEffect(() => {
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
      if (imgRef.current) imgRef.current.style.transform = "translateY(0px)";
      return;
    }

    let rafId = null;

    const onScroll = () => {
      if (!heroRef.current || !imgRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const factor = (rect.top / windowHeight) * 0.2;
      const translateY = Math.round(-factor * 50);
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (imgRef.current) imgRef.current.style.transform = `translateY(${translateY}px)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isSmall]);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    product: "",
    projectDetails: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Changed to use local API route
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      toast.success("Thank you! We received your request.");
      setForm({ 
        fullName: "", 
        phone: "", 
        email: "", 
        product: "", 
        projectDetails: "" 
      });
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        aria-label="About hero"
        style={{ height: "50vh", minHeight: "320px" }}
      >
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full relative">
            <Image
              ref={imgRef}
              src={heroSrc}
              alt="Modular prefabricated cabins - hero"
              fill
              style={{ objectFit: "cover", transform: "translateY(0px)", transition: "transform 0.12s linear" }}
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/40 pointer-events-none" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="w-full md:w-3/4 lg:w-2/3 text-center md:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
              {headline}
            </h1>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20">
          <div className="text-white/80 animate-bounce py-1 px-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      <div className="bg-sky-100 min-h-screen flex items-center justify-center p-4">
        <Toaster position="top-right" richColors closeButton />

        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-xl max-w-5xl w-full overflow-hidden">
          {/* Left Illustration */}
          <div className="hidden md:block md:w-1/2 relative">
            <Image
              width={1000}
              height={1000}
              src="/assets/hero/a.jpg"
              alt="Contact Illustration"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <div className="flex">
              <Image
                width={1000}
                height={1000}
                src="/logo.png"
                alt="Logo"
                className="object-cover w-40"
              />
            </div>
            <h2 className="text-3xl font-bold mb-3 text-sky-900">Contact / Get a Quote</h2>
            <p className="text-gray-600 mb-6">Share your requirements and we will respond with options and pricing.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="relative">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="full name"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="pl-10"
                />
                <span className="absolute left-3 top-5 text-gray-400">👤</span>
              </div>

              {/* Phone */}
              <div className="relative">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 99999 99999"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="pl-10"
                />
                <span className="absolute left-3 top-5 text-gray-400">📞</span>
              </div>

              {/* Email */}
              <div className="relative">
                <Label htmlFor="email">Email (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="pl-10"
                />
                <span className="absolute left-3 top-5 text-gray-400">✉️</span>
              </div>

              {/* Product Select */}
              <div>
                <Label htmlFor="product">Select Product</Label>
                <Select
                  value={form.product}
                  onValueChange={(val) => setForm({ ...form, product: val })}
                >
                  <SelectTrigger id="product" className="w-full">
                    <SelectValue placeholder="Choose a product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Portable Office Cabin">Portable Office Cabin</SelectItem>
                    <SelectItem value="Security Guard Cabin">Security Guard Cabin</SelectItem>
                    <SelectItem value="Portable Cafe">Portable Cafe</SelectItem>
                    <SelectItem value="Portable Toilet">Portable Toilet</SelectItem>
                    <SelectItem value="Prefab House">Prefab House</SelectItem>
                    <SelectItem value="Accomondation">Prefab Accomondation</SelectItem>
                    <SelectItem value="Labor Colony">Labor Colony</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Project Details */}
              <div>
                <Label htmlFor="projectDetails">Project Details (optional)</Label>
                <textarea
                  id="projectDetails"
                  rows="4"
                  placeholder="Provide any specific requirements"
                  className="border rounded-md p-3 w-full focus:ring-2 focus:ring-sky-400 transition"
                  value={form.projectDetails}
                  onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-600 hover:to-sky-700 text-white flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
