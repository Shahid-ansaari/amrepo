
"use client";

import Image from "next/image";

export default function TrustedPartners() {
  const brands = [
    "/assets/trusted brands/amazon.png",
    "/assets/trusted brands/LnT.png",
    "/assets/trusted brands/gaar.png",
    "/assets/trusted brands/asianpaints.png",
    "/assets/trusted brands/sobha.png",
    "/assets/trusted brands/shapoorji.png",
    "/assets/trusted brands/mercedes.png",
    "/assets/trusted brands/blue dart.png",
    "/assets/trusted brands/jsw.png",
    "/assets/trusted brands/reliance.png",
    "/assets/trusted brands/tata.png",
    "/assets/trusted brands/presige.png",
  ];

  // Duplicate logos for endless motion
  const loopBrands = [...brands, ...brands];

  return (
    <section className="sm:py-10 bg-[#f9fcff] overflow-hidden">
      <div className="sm:max-w-[90%] mx-auto px-6">
        
        <h2 className="text-xl text-sky-900 md:text-2xl font-bold text-center my-5">
          Trusted by Top Brands
        </h2>

        {/* Moving Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll border  border-sky-50">
            {loopBrands.map((src, i) => (
              <div key={i} className="flex items-center justify-center sm:mx-2">
                <Image
                  src={src}
                  alt="brand"
                  width={120}
                  height={120}
                  className="w-24  md:w-28 object-contain opacity-95 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 13s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
