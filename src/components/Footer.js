"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin,Youtube  } from "lucide-react";


export default function Footer() {
  return (
    <footer className="  bg-sky-950 m-auto text-sky-50 pt-16 pb-10 ">
      <div className="max-w-7xl mx-auto px-6 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* QUICK LINKS */}
        <div className="">
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
          <ul className="space-y-3">
            <li><Link href="/products/portable-office" className="hover:text-white transition">Portable Office</Link></li>
            <li><Link href="/products/security-cabin" className="hover:text-white transition">Security Cabin</Link></li>
            <li><Link href="/products/portable-cabin" className="hover:text-white transition">Portable Cabin</Link></li>
            <li><Link href="/products/container-cafe" className="hover:text-white transition">Container Café</Link></li>
            <li><Link href="/products/accommodation" className="hover:text-white transition">Accommodation Cabin</Link></li>
            <li><Link href="/products/portable-toilet" className="hover:text-white transition">Portable Toilet</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span>AM Office Solutions, Delhi NCR, India</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <a href="tel:+919266722472" className="hover:text-white transition">
                +91 9266722472
              </a>
            </li>

            <li className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-gray-400" />
              <a href="https://wa.me/9266722472" className="hover:text-white transition">
                WhatsApp Us
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <a href="mailto:info@amoffices.in" className="hover:text-white transition">
                info@amoffices.in
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://www.facebook.com/people/AM-Office-Delhi/61585579305065/" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/am_office1" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#"  target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <Linkedin className="w-5 h-5" />
            </a> 
            <a href="https://www.youtube.com/@AMOffices" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">
              <Youtube  className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className=" border-t border-sky-900">

        <div className=" flex-col-reverse w-9/12 m-auto flex sm:flex-col md:flex-row justify-between  mt-5 pt-3 text-center text-gray-400 text-sm">
          <div className=" m-auto">

          © {new Date().getFullYear()} AM Office Solutions. All Rights Reserved.
          </div>
          {/* <div className=" flex gap-4 ">
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms and Conditions</Link>
            <Link href={"#"}>Delivery Policy</Link>
            <Link href={"#"}>Refund Policy</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
