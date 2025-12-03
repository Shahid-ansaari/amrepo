"use client";
import Image from "next/image";

export default function FeatureGrid() {
  const steps = [
    {
      step: "1",
      title: "Meet salesteam",
      img: "/assets/process/sales manager.png",
    },
    {
      step: "2",
      title: "get Quotation",
      img: "/assets/process/ico/quotation.png",

    },
    {
      step: "3",
      title: "(50% Payment)",
      desc: "Execution begins",
      img: "/assets/process/ico/exicution.png",
    },
    {
      step: "4",
      title: "(100% Payment)",
      desc: "Final installations.",
      img: "/assets/process/ico/install.png",

    }, {
      step: "5",
      title: "move in and enjoy!",

      img: "/assets/process/ico/delevery truck.png",
    },
  ];

  return (
    <div className="w-full  overflow-hidden">
      {/* ---------- DESKTOP ---------- */}
      <h2 className=" text-2xl text-center m-auto w-fit  text-sky-950  font-semibold">How It Works</h2>
      <div className="hidden md:flex justify-center gap-10 relative">
        {steps.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center w-45">

            {/* Step bubble */}
            {/* <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-semibold">
              {item.step}
            </div> */}

            {/* Connector line (desktop only) */}
            {index !== steps.length - 1 && (
              <div className="absolute top-1/2 left-full w-24 border-t-2 border-gray-300"></div>
            )}

            {/* Card */}
            <div className="mt-6 bg-white   p-4 w-full">
              <div className="  rounded-xl overflow-hidden">
                <Image src={item.img} width={1000} height={1000} alt={item.title} className="object-cover w-30 m-auto " />
              </div>
              <h3 className="text- font-semibold m-1 text-slate-700 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center font-semibold mb-4">{item.desc}</p>

            </div>
          </div>
        ))}
      </div>

      {/* ---------- MOBILE ---------- */}
      <div className="md:hidden flex flex-col mt-3 relative px-4">
        {steps.map((item, index) => (
          <div key={index} className="relative flex    ">

            {/* Circle + title in one row */}
            <div className="flex  items-center justify-center gap-2">
              {/* <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                {item.step}
              </div> */}

              {/* Image */}
              <div className="   rounded-xl overflow-hidden">
                <Image src={item.img} alt={item.title} width={1000} height={1000} className="object-cover w-20 " />
              </div>
              <div className=" flex  items-center gap-1">

                <h3 className=" font-semibold text-sky-800 text-sm " >{item.title}</h3>
                {/* Description */}
                <p className=" text-sky-950 ">
                  {item.desc}
                </p>
              </div>


            </div>

            {/* Connector line */}
            {/* {index !== steps.length - 1 && (
              <div className="absolute left-6 top-12 h-12 border-l-2 border-gray-300"></div>
            )} */}


          </div>
        ))}
      </div>
    </div>
  );
}
