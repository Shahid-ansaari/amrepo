import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import ContactPopup from "@/components/ContactPopup";
import Script from "next/script";

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
   icons: {
    icon: '/favicon.ico'
  },
  title:
    "AM Office Solutions |  Portable Office Solutions, Guard Rooms & Cafes",
  description:
    "Welcome to AM Office Solutions, offering premium portable cabins, offices, security guard rooms, portable toilets, modular homes, container cafes, and more. Customizable and eco-friendly solutions with fast delivery across India.",
  keywords:
    "portable office cabins,portable toilets, modular homes, security guard rooms, container cafes, prefab solutions, office cabins, portable houses, portable workspaces, AM Office Solutions",
  author: "AM Office Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.amoffices.in/", // ← ✅ Canonical tag here
  },
  openGraph: {
    title:
      "AM Office Solutions - Premium Portable Office Solutions, Guard Rooms & Cafes",
    description:
      "Explore AM Office Solutions for high-quality portable office cabins, security guard rooms, modular homes, and cafes. Customizable, weather-resistant, and fast delivery across India.",
    image: "/logo.png", // Replace with actual image URL
    url: "https://www.amoffices.in",
    site_name: "AM Office Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AM Office Solutions - Premium Portable Office Solutions, Guard Rooms & Cafes",
    description:
      "Premium portable office solutions, guard rooms, modular homes, and container cafes. Fast delivery, customizable, and eco-friendly construction.",
    image: "/logo.png", // Replace with actual image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/x-icon" />
        {/* <!-- Google Tag Manager --> */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-55X6RQ6X');
  `}
        </Script>

        {/* <!-- End Google Tag Manager --> */}
        {/* Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17842271118"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17842271118');
          `}
        </Script>

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AM Office Solutions",
              alternateName: "AM Offices",
              url: "https://www.amoffices.in",
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AM Office Solutions",
              url: "https://www.amoffices.in",
              logo: "https://www.amoffices.in/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9266722472",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  relative`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55X6RQ6X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        {children}
        <ContactPopup />
        <Footer />
      </body>
    </html>
  );
}
