import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  // icons: {
  //   icon: "/favicon.ico",
  // },
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
    image: "https://www.amoffices.in/logo.png", // Replace with actual image URL
    url: "https://www.amoffices.in",
    site_name: "AM Office Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AM Office Solutions - Premium Portable Office Solutions, Guard Rooms & Cafes",
    description:
      "Premium portable office solutions, guard rooms, modular homes, and container cafes. Fast delivery, customizable, and eco-friendly construction.",
    image: "https://www.amoffices.in/logo.png", // Replace with actual image URL
  },
};
// LocalBusiness Schema (If you have a physical location)
//
{
  /* <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "AM Office Solutions",
      image: "https://www.amoffices.in/logo.png",
      "@id": "https://www.amoffices.in",
      url: "https://www.amoffices.in",
      telephone: "+91-9266722472",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Your Street Address",
        addressLocality: "Greater Noida",
        addressRegion: "UP",
        postalCode: "Your Pincode",
        addressCountry: "IN"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "YOUR_LATITUDE",
        longitude: "YOUR_LONGITUDE"
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00"
      }
    }),
  }}
/> */
}

// BreadcrumbList Schema (Add to each page)
// javascript// Add this to your product/service pages
// <script
//   type="application/ld+json"
//   dangerouslySetInnerHTML={{
//     __html: JSON.stringify({
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       itemListElement: [
//         {
//           "@type": "ListItem",
//           position: 1,
//           name: "Home",
//           item: "https://www.amoffices.in"
//         },
//         {
//           "@type": "ListItem",
//           position: 2,
//           name: "Products",
//           item: "https://www.amoffices.in/products"
//         },
//         {
//           "@type": "ListItem",
//           position: 3,
//           name: "Portable Cabins",
//           item: "https://www.amoffices.in/products/portable-cabins"
//         }
//       ]
//     }),
//   }}
// />

// 3. Product Schema (For individual products)
// javascript// Add this to product detail pages
// <script
//   type="application/ld+json"
//   dangerouslySetInnerHTML={{
//     __html: JSON.stringify({
//       "@context": "https://schema.org",
//       "@type": "Product",
//       name: "Portable Office Cabin",
//       image: "https://www.amoffices.in/products/cabin-image.jpg",
//       description: "High-quality portable office cabin with modern amenities",
//       brand: {
//         "@type": "Brand",
//         name: "AM Office Solutions"
//       },
//       offers: {
//         "@type": "Offer",
//         url: "https://www.amoffices.in/products/portable-cabin",
//         priceCurrency: "INR",
//         price: "150000",
//         availability: "https://schema.org/InStock",
//         seller: {
//           "@type": "Organization",
//           name: "AM Office Solutions"
//         }
//       }
//     }),
//   }}
// />
// 4. FAQPage Schema (If you have FAQ section)
// javascript<script
//   type="application/ld+json"
//   dangerouslySetInnerHTML={{
//     __html: JSON.stringify({
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       mainEntity: [
//         {
//           "@type": "Question",
//           name: "What are portable office cabins?",
//           acceptedAnswer: {
//             "@type": "Answer",
//             text: "Portable office cabins are prefabricated structures that can be easily transported and installed at different locations."
//           }
//         },
//         {
//           "@type": "Question",
//           name: "How long does delivery take?",
//           acceptedAnswer: {
//             "@type": "Answer",
//             text: "We provide fast delivery across India, typically within 7-14 days depending on location."
//           }
//         }
//       ]
//     }),
//   }}
// />
// 5. Service Schema (For your services)
// javascript<script
//   type="application/ld+json"
//   dangerouslySetInnerHTML={{
//     __html: JSON.stringify({
//       "@context": "https://schema.org",
//       "@type": "Service",
//       serviceType: "Portable Office Solutions",
//       provider: {
//         "@type": "Organization",
//         name: "AM Office Solutions"
//       },
//       areaServed: {
//         "@type": "Country",
//         name: "India"
//       },
//       hasOfferCatalog: {
//         "@type": "OfferCatalog",
//         name: "Portable Office Solutions",
//         itemListElement: [
//           {
//             "@type": "Offer",
//             itemOffered: {
//               "@type": "Service",
//               name: "Portable Office Cabins"
//             }
//           },
//           {
//             "@type": "Offer",
//             itemOffered: {
//               "@type": "Service",
//               name: "Security Guard Rooms"
//             }
//           }
//         ]
//       }
//     }),
//   }}
// />

// 9. Add Review/Rating Schema (if you have reviews)
// javascript<script
//   type="application/ld+json"
//   dangerouslySetInnerHTML={{
//     __html: JSON.stringify({
//       "@context": "https://schema.org",
//       "@type": "Organization",
//       name: "AM Office Solutions",
//       aggregateRating: {
//         "@type": "AggregateRating",
//         ratingValue: "4.8",
//         reviewCount: "127"
//       }
//     }),
//   }}
// />

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
              description:
                "Premium portable office and cabin solutions provider",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.facebook.com/people/AM-Office-Delhi/61585579305065/",
                "https://www.linkedin.com/company/amoffices",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9266722472",
                contactType: "customer service",
                availableLanguage: ["en", "hi"],
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
