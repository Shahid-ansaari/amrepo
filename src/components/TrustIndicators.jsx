"use client";
import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Users, Building2, Award } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

// ---------- TRUST DATA -------------
const METRICS = [
  {
    id: "projects",
    icon: <Building2 className="w-8 h-8 text-blue-400" />,
    number: 5000,
    suffix: "+",
    title: "Projects Delivered",
    desc: "Successfully completed modular structures across India."
  },
  {
    id: "clients",
    icon: <Users className="w-8 h-8 text-blue-400" />,
    number: 3000,
    suffix: "+",
    title: "Happy Clients",
    desc: "Trusted by businesses, corporates, and homeowners."
  },
  {
    id: "experience",
    icon: <Award className="w-8 h-8 text-blue-400" />,
    number: 8,
    suffix: "+ Years",
    title: "Industry Experience",
    desc: "Leading in prefab modular engineering and innovation."
  },
  {
    id: "quality",
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    number: 100,
    suffix: "%",
    title: "Quality Assurance",
    desc: "Premium materials, strict QC & long-lasting durability."
  }
];

export default function TrustIndicators() {
  // Track animation start
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  // Safe refs setup
  const countersRef = useRef({});

  useEffect(() => {
    const map = {};
    METRICS.forEach((m) => {
      map[m.id] = { current: null };
    });
    countersRef.current = map;
  }, []);

  // When section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStartAnimation(true);
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full py-8 sm:py-18 overflow-hidden
        bg-[#012669]  /* deep modern blue-black */
        text-white
      "
    >
      {/* ---------- PARALLAX INDIA MAP BG  bg-[#012669]  ---------- */}
      <div
        className="
          absolute inset-0 pointer-events-none 
          bg-[url('/indiamap.png')]  
          bg-contain bg-center bg-no-repeat 
          opacity-[0.34]
          animate-slowFloat
        "
      />

      {/* ---------- SOFT GLASS GLOW OVERLAY ---------- */}
      <div className="absolute inset-0 bg-[url('/india%20map.png')]   bg-gradient-to-b from-transparent via-[#0d1b2a48] to-[#000000c5]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ---------- Heading ---------- */}
        <TypeAnimation
          sequence={[
            "Built on Trust. Driven by Performance.", 5000,
            "Let the numbers speak for us:", 1500,
            "Let our numbers do the talking!", 1500,
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          speed={60}
          className="text-2xl z-40 md:text-3xl font-extrabold text-center mb-2 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
        />
        {/* <h2 className="text-2xl md:text-2xl font-extrabold text-center mb-2">
          <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            Built on Trust. Driven by Performance.
          </span>
        </h2> */}
        {/* <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg">
          Proven excellence across modular cabins, offices, homes & prefab engineering.
        </p> */}

        {/* ---------- GRID ---------- */}
        <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-4 mt-10">
          {METRICS.map((m) => {
            const start = startAnimation ? m.number : 0;

            return (
              <div
                key={m.id}
                className="
                  group p-6 m-au rounded-2xl relative 
                  bg-white/5 backdrop-blur-xl 
                  border border-white/10 
                  hover:border-blue-500/40 
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
                  transition-all duration-300
                "
              >
                <div className="mb-1">{m.icon}</div>

                {/* Animated Number */}
                <Counter value={start} suffix={m.suffix} />

                <h3 className="text-lg font-semibold mt-2">{m.title}</h3>
                {/* <p className="text-gray-400 text-sm mt-1">{m.desc}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- COUNTER COMPONENT ----------
function Counter({ value, suffix }) {
  const [displayNum, setDisplayNum] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 1200;
    const increment = end / (duration / 16);

    const step = () => {
      start += increment;
      setDisplayNum(Math.floor(start));

      if (start < end) requestAnimationFrame(step);
      else setDisplayNum(end);
    };

    requestAnimationFrame(step);
  }, [value]);

  return (
    <div className="text-2xl font-extrabold tracking-tight text-blue-300">
      {displayNum}
      <span className="text-2xl font-bold text-blue-400">{suffix}</span>
    </div>
  );
}
