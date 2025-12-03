"use client";
import Link from "next/link";
import Image from "next/image";

export default function ProductGrid() {
  const PRODUCTS = [
    {
      title: "Portable Office",
      img: "/assets/products/office/office4.jpg",
      link: "/products/portable-office",
    },
    {
      title: "Security Cabin",
      img: "/assets/products/security/gaurd2.jpg",
      link: "/products/security-cabin",
    },
    {
      title: "Portable Cabin",
      img: "/assets/products/cabin/cabin3.jpg",
      link: "/products/portable-cabin",
    },
    {
      title: "Container Café",
      img: "/assets/products/cafe/cafe3.jpg",
      link: "/products/container-cafe",
    },
    {
      title: "Accommodation Cabin",
      img: "/assets/products/accomondation/accomondation.jpeg",
      link: "/products/accommodation",
    },
    {
      title: "Portable Toilet",
      img: "/assets/products/toilets/toilet3.jpg", 
      link: "/products/portable-toilet",
    },
  ];

  return (
    <section className="py-16 bg-[#001127] mt-0.5 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-xl md:text-3xl font-bold text-blue-400 text-center mb-12">
           Awesome Products
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:p-8">
          {PRODUCTS.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group block rounded-2xl overflow-hidden bg-[#eef9ff] shadow-2xs shadow-blue-700 hover:shadow-md   hover:shadow-blue-800 transition-all duration-500"
            >
              {/* Image box with aspect ratio */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* Title */}
              <div className="p-5">
                <h3 className="text-lg  font-semibold text-sky-950 group-hover:text-blue-800 transition">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
