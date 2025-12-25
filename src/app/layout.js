import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import ContactPopup from "@/components/ContactPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "AM Office Solutions",
//   description: "Welcome To Am Office Solutions , we provide portable cabins , offices , portable toilets",
// };
export const metadata = {
  title: "AM Office Solutions | Premium Portable Office Solutions, Guard Rooms & Cafes",
  description: "Welcome to AM Office Solutions, offering premium portable cabins, offices, security guard rooms, modular homes, container cafes, and more. Customizable and eco-friendly solutions with fast delivery across India.",
  keywords: "portable office cabins, modular homes, security guard rooms, container cafes, prefab solutions, office cabins, portable houses, portable workspaces, AM Office Solutions",
  author: "AM Office Solutions",
  robots: "index, follow",
  alternates: {
      canonical: "https://www.amoffices.in/", // ← ✅ Canonical tag here
    },
  openGraph: {
    title: "AM Office Solutions - Premium Portable Office Solutions, Guard Rooms & Cafes",
    description: "Explore AM Office Solutions for high-quality portable office cabins, security guard rooms, modular homes, and cafes. Customizable, weather-resistant, and fast delivery across India.",
    image: "/logo.png", // Replace with actual image URL
    url: "https://www.amoffices.in",
    site_name: "AM Office Solutions"
  },
  twitter: {
    card: "summary_large_image",
    title: "AM Office Solutions - Premium Portable Office Solutions, Guard Rooms & Cafes",
    description: "Premium portable office solutions, guard rooms, modular homes, and container cafes. Fast delivery, customizable, and eco-friendly construction.",
    image: "/logo.png", // Replace with actual image URL
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
       <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AM Office Solutions",
          "url": "https://www.amoffices.in",
          "logo": "https://www.amoffices.in/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 9266722472",
            "contactType": "Customer Service"
          }
        }
        `}
      </script>

    </Head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  relative`}
      >
        <Navbar />
        {children}
        <ContactPopup />
        <Footer />

      </body>
    </html>
  );
}
