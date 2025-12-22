




// today 


// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Phone, Mail, ArrowRight, Menu, X } from "lucide-react";

// const phoneNumber = "919876543210";
// const whatsappURL = `https://wa.me/${phoneNumber}`;

// export default function Navbar() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Products", href: "/products" },
//     { name: "Gallery", href: "/gallery" },
//     { name: "Contact", href: "/contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
//         scrolled
//           ? "bg-[#00162B]/90 backdrop-blur-md shadow-xl"
//           : "bg-transparent backdrop-blur-sm"
//       }`}
//     >
//       <div className="max-w-[1400px] mx-auto px-4 lg:px-10 flex items-center justify-between py-4">

//         {/* LOGO */}
//         <Link href="/" className="text-2xl font-bold text-white whitespace-nowrap">
//           AM<span className="text-[#E8B338]">Office</span>
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`relative group text-white font-semibold ${
//                 pathname === link.href ? "text-[#E8B338]" : "hover:text-[#E8B338]"
//               }`}
//             >
//               {link.name}
//               <span
//                 className={`absolute bottom-0 left-0 h-[2px] bg-[#E8B338] transition-all duration-300 ${
//                   pathname === link.href
//                     ? "w-full"
//                     : "w-0 group-hover:w-full"
//                 }`}
//               />
//             </Link>
//           ))}
//         </nav>

//         {/* RIGHT SIDE DESKTOP (hidden on lg < 1280px) */}
//         <div className="hidden xl:flex items-center gap-6 text-white">

//           <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-[#E8B338]">
//             <Phone size={18} className="text-[#E8B338]" />
//             +91 98765 43210
//           </a>

//           <a href={whatsappURL}>
//             <svg width="28" height="28" viewBox="0 0 640 640" fill="#25D366">
//               <path d="M476.9 161.1C..." />
//             </svg>
//           </a>

//           <a href="mailto:info@mircabins.in" className="flex items-center gap-1 hover:text-[#E8B338]">
//             <Mail size={18} className="text-[#E8B338]" />
//             info@mircabins.in
//           </a>

//           <Link
//             href="/contact"
//             className="flex items-center gap-2 bg-[#bd8f24] hover:bg-[#d8b451] px-5 py-2 rounded-lg font-semibold"
//           >
//             Get Quote <ArrowRight size={18} />
//           </Link>
//         </div>

//         {/* MOBILE */}
//         <div className="flex lg:hidden items-center gap-4">

//           <a href="tel:+919876543210">
//             <Phone size={22} className="text-[#f1c40f]" />
//           </a>

//           <a href={whatsappURL}>
//             <svg width="28" height="28" fill="#25D366" viewBox="0 0 640 640">
//               <path d="M476.9 161.1C..." />
//             </svg>
//           </a>

//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-white"
//           >
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {menuOpen && (
//         <div className="lg:hidden bg-[#00162B]/95 backdrop-blur-xl p-6 space-y-5 text-white text-lg">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="block py-2 hover:text-[#E8B338] font-semibold"
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }




// second 

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, ArrowRight, Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const phoneNumber = "9266722472";
const whatsappURL = `https://wa.me/${phoneNumber}`;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    // { name: "Rentle Services", href: "/rent-services" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      // className={`fixed top-0 left-0 w-full z-[100]  backdrop-blur-md transition-all duration-500
      // ${scrolled ? "bg-[#00162Bd9] shadow-xl py-2" : "bg-transparent py-3"}`}
      className={`bg-[#e6f2ff] backdrop-blur-md sticky top-0 left-0 w-full z-[100]  transition-all duration-500
      ${scrolled ? "bg-[#97a7b8] shadow-xl py-2" : " py-3"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="md:hidden lg:block text-2xl md:text-3xl font-bold  tracking-wide"
        >
          <Image src={"/logo.png"} alt="AM Office " width={1000} height={1000} className=" w-40"></Image>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative group  whitespace-nowrap text-sm lg:text-[15px] font-semibold transition-all
              ${pathname === link.href
                  ? "text-blue-950"
                  : "text-sky-950 hover:text-[#104a7d]"
                }`}

            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-sky-800 transition-all
                ${pathname === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                  }`}
              />
            </Link>
          ))}
        </nav>



        {/* RIGHT ZONE DESKTOP */}
        <div className="hidden md:flex items-center gap-4 ml-3 text-white text-sm font-medium">
          <a href="tel:+919266722472" className="flex items-center gap-1 whitespace-nowrap">
            <Phone size={18} className="text-blue-950" />
            <span className=" hidden lg:block  font-semibold text-sky-950">+91 9266722472</span>
          </a>

          <a href={whatsappURL} className="flex items-center">
            {/* <svg
              viewBox="0 0 640 640"
              width="26"
              height="26"
              fill="#25D366"
            >
              <path d="M476.9 161.1C435..." />
            </svg> */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-800"
            >
              <path d="M16.001 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.773.746 5.48 2.16 7.853L2 30l6.32-2.773A13.24 13.24 0 0 0 16 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16 2.667Zm0 23.68c-2.24 0-4.427-.613-6.32-1.76l-.453-.267-3.747 1.64.8-3.867-.293-.4a10.6 10.6 0 0 1-2.027-6.027c0-5.867 4.773-10.64 10.64-10.64s10.64 4.773 10.64 10.64-4.773 10.64-10.64 10.64Zm5.813-7.893c-.32-.16-1.893-.934-2.187-1.04-.293-.106-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.373.48-.56.16-.187.213-.32.32-.533.106-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.387-.253-.613-.507-.533-.72-.533-.187 0-.4-.027-.613-.027-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.467 4.813 3.213 1.373 3.213.92 3.787.867.573-.053 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
            </svg>

          </a>

          <a href="mailto:info@amoffices.in" className="flex items-center gap-1">
            <Mail size={20} className="text-sky-950" />
            <span className=" text-sky-950 font-semibold"> info@amoffices.in</span>
          </a>

          <Link
            href="/contact"
            className=" hidden lg:flex items-center gap-1 bg-sky-800 hover:bg-[#c9a02d] lg:px-5 px-3 lg:py-2 md:py-1 py-1 rounded-md font-semibold"
          >
            Get Quote
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-5 text-white">
          <a href="tel:+919266722472">
            <Phone size={22}  className="text-sky-950 " />
          </a>

          <a href={whatsappURL}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#055f26]"
            >
              <path d="M16.001 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.773.746 5.48 2.16 7.853L2 30l6.32-2.773A13.24 13.24 0 0 0 16 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16 2.667Zm0 23.68c-2.24 0-4.427-.613-6.32-1.76l-.453-.267-3.747 1.64.8-3.867-.293-.4a10.6 10.6 0 0 1-2.027-6.027c0-5.867 4.773-10.64 10.64-10.64s10.64 4.773 10.64 10.64-4.773 10.64-10.64 10.64Zm5.813-7.893c-.32-.16-1.893-.934-2.187-1.04-.293-.106-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.373.48-.56.16-.187.213-.32.32-.533.106-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.387-.253-.613-.507-.533-.72-.533-.187 0-.4-.027-.613-.027-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.467 4.813 3.213 1.373 3.213.92 3.787.867.573-.053 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
            </svg>
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} className=" text-sky-950  " /> : <Menu size={28}  className=" text-sky-950"/>}
          </button>
        </div>
      </div>

      {/* {menuOpen && <MobileMenu />} */}
      {/* {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />} */}
      {menuOpen && <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />}
        

    </header>
  );
}
