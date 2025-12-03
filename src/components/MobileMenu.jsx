// import React from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation';
// import { ArrowRight } from 'lucide-react'
//     const navLinks = [
//         { name: "Home", href: "/" },
//         { name: "About", href: "/about" },
//         { name: "Products", href: "/products" },
//         { name: "Gallery", href: "/gallery" },
//         { name: "Contact", href: "/contact" },
//     ];

// function MobileMenu() {
//     const pathname = usePathname();

//     return (
//         <div className="md:hidden bg-[#eef7ff]  border-t border-gray-600  h-full animate-fadeIn">
//             <ul className="flex flex-col items-center gap-4 py-4  ">
//                 {navLinks.map((link) => (
//                     <Link
//                         key={link.href}
//                         href={link.href}
//                         onClick={() => setMenuOpen(false)}
//                         className={`text-lg font-medium transition-all ${pathname === link.href
//                             ? "text-blue-900"
//                             : "text-sky-950 hover:text-[#f1c40f]"
//                             }`}
//                     >
//                         {link.name}
//                     </Link>
//                 ))}
//                 <Link
//                     href="/contact"
//                     onClick={() => setMenuOpen(false)}
//                     className="flex items-center gap-2 bg-sky-800 hover:bg-sky-900 text-blue-50 px-5 py-2 rounded-md transition-all mt-2"
//                 >
//                     Get Quote
//                     <ArrowRight size={18} />
//                 </Link>
//             </ul>
//         </div>
//     )
// }

// export default MobileMenu


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { ChevronDown, ChevronUp, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

// export default function MobileMenu({ onClose }) {
//   const [productsOpen, setProductsOpen] = useState(false);

//   const productLinks = [
//     { name: "Portable Office", href: "/products/portable-office" },
//     { name: "Security Cabins", href: "/products/security-cabins" },
//     { name: "Portable Cabins", href: "/products/portable-cabins" },
//     { name: "Container Café", href: "/products/container-cafe" },
//     { name: "Accommodation Cabin", href: "/products/accommodation-cabin" },
//     { name: "Portable Toilet", href: "/products/portable-toilet" },
//   ];

//   return (
//     <div className="md:hidden bg-[#eef7ff] animate-menuSlide  border-t border-sky-200  shadow-inner animate-slideDown ">
//       <div className="flex flex-col py-4 px-4 space-y-3">

//         {/* Main Links */}
//         <Link href="/" onClick={onClose} className="mobile-link text-sky-950 font-semibold">Home</Link>
//         <Link href="/about" onClick={onClose} className="mobile-link text-sky-950 font-semibold ">About Us</Link>
//         <Link href="/services" onClick={onClose} className="mobile-link text-sky-950 font-semibold">Services</Link>
 
//         {/* PRODUCTS DROPDOWN */}
//         <button
//           className="flex justify-between items-center text-sky-950 font-semibold text-lg py-2"
//           onClick={() => setProductsOpen(!productsOpen)}
//         >
//           Products
//           {productsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//         </button>

//         {productsOpen && (
//           <div className="pl-3  flex flex-col space-y-2 animate-fadeIn">
//             {productLinks.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={onClose}
//                 className="text-sky-900 text-base py-1 border-l-2 border-sky-700 pl-3 hover:text-sky-700"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}

//         <Link href="/gallery" onClick={onClose} className="mobile-link text-sky-950 font-semibold">Gallery</Link>
//         <Link href="/contact" onClick={onClose} className="mobile-link text-sky-950 font-semibold">Contact</Link>

//         {/* CONTACT BOX */}
//         <div className="mt-4 p-4 bg-white rounded-xl shadow-sm border border-sky-800">
//           <h3 className="text-lg font-bold text-sky-900 mb-3">Contact Us</h3>

//           <a href="tel:+919876543210" className="contact-item">
//             <Phone size={20} /> +91 98765 43210
//           </a>

//           <a href="mailto:dl@amoffice.co.in" className="contact-item">
//             <Mail size={20} /> dl@amoffice.co.in
//           </a>

//           <a href="https://wa.me/919876543210" className="contact-item">
//             <MessageCircle size={20} /> WhatsApp Chat
//           </a>

//           <a
//             href="https://www.google.com/maps/place/AM+Office+Solutions"
//             target="_blank"
//             className="contact-item"
//           >
//             <MapPin size={20} /> View Location
//           </a>
//         </div>

//       </div>

//       {/* STYLES */}
//       <style jsx>{`
//         .mobile-link {
//           text-lg;
//           display: block;
//           color: #0c2b4f;
//           font-weight: 600;
//           padding: 8px 0;
//         }

//         .mobile-link:hover {
//           color: #104a7d;
//         }

//         .contact-item {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 8px 0;
//           font-size: 15px;
//           color: #0c2b4f;
//         }

//         .contact-item:hover {
//           color: #104a7d;
//         }
//       `}</style>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function MobileMenu({ onClose }) {
  const [productsOpen, setProductsOpen] = useState(false);

  const productLinks = [
    { name: "Portable Office", href: "/products/portable-office" },
    { name: "Security Cabins", href: "/products/security-cabins" },
    { name: "Portable Cabins", href: "/products/portable-cabins" },
    { name: "Container Café", href: "/products/container-cafe" },
    { name: "Accommodation Cabin", href: "/products/accommodation-cabin" },
    { name: "Portable Toilet", href: "/products/portable-toilet" },
  ];

  return (
    <div
      className={`
        md:hidden bg-[#eef7ff] border-t border-sky-200 shadow-inner
        overflow-hidden animate-menuOpen menuSlide
       h-[98vh]`}
    >
      <div className="flex flex-col py-4 px-4 space-y-2">

        {/* Main Links */}
        <Link href="/" onClick={onClose} className="mobile-link font-medium text-sky-900">Home</Link>
        <Link href="/about" onClick={onClose} className="mobile-link  font-medium text-sky-900">About Us</Link>
        <Link href="/services" onClick={onClose} className="mobile-link  font-medium text-sky-900">Services</Link>

        {/* Products Dropdown */}
        <button
          className="flex justify-between items-center text-sky-950 font-semibold text-lg py-2"
          onClick={() => setProductsOpen(!productsOpen)}
        >
          Products
          {productsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {productsOpen && (
          <div className="pl-3 flex flex-col space-y-2 animate-dropdown">
            {productLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="text-sky-900 text-base py-1 border-l-2 border-sky-700 pl-3 hover:text-sky-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        <Link href="/gallery" onClick={onClose} className="mobile-link  font-medium text-sky-900">Gallery</Link>
        <Link href="/contact" onClick={onClose} className="mobile-link  font-medium text-sky-900">Contact</Link> 
        <Link href="#process" onClick={onClose} className="mobile-link  font-medium text-sky-900">Process</Link>

        {/* Contact Box */}
        <div className="mt-4 p-4 bg-[#ebf4ff] rounded-xl shadow-sm border border-sky-800">
          <h3 className="text-lg font-bold text-sky-900 mb-3">Contact Us</h3>

          <a href="tel:+919876543210" className="contact-item  font-medium">
            <Phone size={20} /> +91 98765 43210
          </a>

          <a href="mailto:dl@amoffice.co.in" className="contact-item font-medium">
            <Mail size={20} /> dl@amoffice.co.in
          </a>

          <a href="https://wa.me/919876543210" className="contact-item font-medium">
            <MessageCircle size={20} /> WhatsApp Chat
          </a>

          <a
            href="https://www.google.com/maps/place/AM+Office+Solutions"
            target="_blank"
            className="contact-item font-medium"
          >
            <MapPin size={20} /> View Location
          </a>
        </div>
      </div>

      {/* Animations + Styles */}
      <style jsx>{`
        @keyframes menuOpen {
          0% {
            max-height: 0;
            opacity: 0;
            transform: translateY(-12px);
          }
          100% {
            max-height: 1200px;
            opacity: 1;
            transform: translateY(0px);
          }
        }

        .animate-menuOpen {
          animation: menuOpen 0.46s ease forwards;
        }

        @keyframes dropdown {
          0% {
            max-height: 0;
            opacity: 0;
          }
          100% {
            max-height: 500px;
            opacity: 1;
          }
        }

        .animate-dropdown {
          animation: dropdown 1.1s ease forwards;
        }

        .mobile-link {
          display: block;
          color: #0c2b4f;
          font-weight: 600;
          padding: 8px 0;
          font-size: 17px;
        }

        .mobile-link:hover {
          color: #104a7d;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          font-size: 15px;
          color: #0c2b4f;
        }

        .contact-item:hover {
          color: #104a7d;
        }
      `}</style>
    </div>
  );
}
