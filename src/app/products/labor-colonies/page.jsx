import ProductDetailTemplate from "@/components/Product Detail Template";


export default function Page() {
  return (
    <ProductDetailTemplate
      title="Modular Offices"
      subtitle="Premium ready-to-use office cabins designed for fast deployment."
      heroImage="/images/modular-offices.jpg"
      gallery={[
        "/images/modular1.jpg",
        "/images/modular2.jpg",
        "/images/modular3.jpg",
      ]}
      features={[
        "Fully insulated PUF/EPS panels",
        "Premium electrical fittings",
        "Weatherproof steel structure",
        "Modern interiors & flooring",
      ]}
      specifications={[
        { title: "Size Options", value: "10x20 ft, 12x40 ft, custom sizes" },
        { title: "Wall Material", value: "EPS / PUF insulated panels" },
        { title: "Frame Type", value: "Heavy-duty steel frame" },
      ]}
    />
  );
}
