// import React from "react";

// export default function ContactButtons() {
//   // Replace with your actual info
//   const whatsappNumber = "919876543210"; // WhatsApp Business number
//   const phoneNumber = "919876543210";    // Phone number for call
//   const emailAddress = "info@example.com"; // Email address

//   // URLs
//   const whatsappURL = `https://wa.me/${whatsappNumber}`;
//   const phoneURL = `tel:${phoneNumber}`;
//   const mailURL = `mailto:${emailAddress}`;

//   // Button styles
//   const buttonStyle = {
//     width: "40px",
//     height: "40px",
//     borderRadius: "0%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
//     marginBottom: "5px",
//     cursor: "pointer",
//   };

//   return (
//     <div
//     className=" hidden md:flex "
//       style={{
//         position: "fixed",
//         // bottom: "80px",
//         top:"450px",
//         // right: "20px",
//         left: "10px",
//         // display: "flex",
//         flexDirection: "column",
//         zIndex: 100,
//       }}
//     >
//       {/* WhatsApp */}
//       <a
//         href={whatsappURL}
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{ ...buttonStyle, backgroundColor: "#25D366" }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 640 640"
//           width="28"
//           height="28"
//           fill="white"
//         >
//           <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/>
//         </svg>
//       </a>

//       {/* Phone */}
//       <a
//         href={phoneURL}
//         style={{ ...buttonStyle, backgroundColor: "#007bff" }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//           width="28"
//           height="28"
//           fill="white"
//         >
//           <path d="M391 351l-55-55c-7-7-18-9-27-4l-45 22c-33-17-60-44-77-77l22-45c5-9 3-20-4-27l-55-55c-9-9-23-10-33-3L77 124c-17 17-28 40-28 66 0 131 106 237 237 237 26 0 49-11 66-28l47-47c7-10 6-24-3-33z"/>
//         </svg>
//       </a>

//       {/* Email */}
//       <a
//         href={mailURL}
//         style={{ ...buttonStyle, backgroundColor: "#FF6F61" }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//           width="28"
//           height="28"
//           fill="white"
//         >
//           <path d="M502.3 190.8l-192-160c-22.1-18.3-53.6-18.3-75.7 0l-192 160C20.6 197.4 0 217.9 0 244v184c0 30.9 25.1 56 56 56h400c30.9 0 56-25.1 56-56V244c0-26.1-20.6-46.6-49.7-53.2zM256 59.7L448 208H64L256 59.7zM480 428c0 13.3-10.7 24-24 24H56c-13.3 0-24-10.7-24-24V261.5l184 153c12 9.9 29.3 9.9 41.3 0l184-153V428z"/>
//         </svg>
//       </a>
//     </div>
//   );
// }






"use client";
import React from "react";
import { Phone, Mail } from "lucide-react";

export default function ContactButtons() {
  const whatsappNumber = "9266722472";
  const phoneNumber = "9266722472";
  const emailAddress = "info@amoffices.in";

  const whatsappURL = `https://wa.me/${whatsappNumber}`;
  const phoneURL = `tel:${phoneNumber}`;
  const mailURL = `mailto:${emailAddress}`;

  return (
    <div
      className="
      hidden md:flex flex-col gap-1
      fixed left-4 top-[75%] -translate-y-1/2
      z-[200] 
      animate-fadeIn
    "
    >
      {/* WhatsApp */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className=" text-white
        w-10 h-10 rounded-xl bg-[#25D366] 
        flex items-center justify-center
        shadow-xl hover:shadow-2xl
        hover:scale-110 transition-all duration-300
        backdrop-blur-lg border border-white/20
      "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12c0 1.87.521 3.614 1.422 5.114L2 22l5.025-1.353A9.93 9.93 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-1.597 0-3.115-.472-4.418-1.305l-.314-.199-2.982.803.797-2.91-.207-.324A7.93 7.93 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.396-6.339c-.239-.119-1.408-.695-1.626-.774-.218-.08-.377-.119-.535.119-.159.238-.614.774-.754.933-.139.159-.278.179-.516.06-.238-.119-1.005-.37-1.917-1.181-.708-.63-1.187-1.409-1.326-1.647-.139-.238-.015-.366.104-.485.107-.107.238-.278.357-.417.119-.139.159-.238.238-.397.08-.159.04-.298-.02-.417-.06-.119-.535-1.288-.734-1.764-.194-.466-.389-.403-.535-.403h-.457c-.159 0-.417.06-.635.298-.218.238-.833.814-.833 1.985 0 1.172.854 2.306.974 2.466.119.159 1.673 2.653 4.176 3.716.584.239 1.039.379 1.384.497.584.198 1.115.159 1.535.1.467-.06 1.317-.538 1.506-1.078.188-.538.188-.993.129-1.112-.06-.119-.218-.178-.457-.297z" />
        </svg>

      </a>

      {/* Phone */}
      <a
        href={phoneURL}
        className="
        w-10 h-10 rounded-xl bg-[#e6f2ff]
        flex items-center justify-center
        shadow-xl hover:shadow-2xl
        hover:scale-110 transition-all duration-300
        backdrop-blur-lg border border-blue-950
      "
      >
        <Phone size={24} className="text-blue-950" />
      </a>

      {/* Email */}
      <a
        href={mailURL}
        className="
        w-10 h-10 rounded-xl bg-[#e6f2ff] 
        flex items-center justify-center
        shadow-xl hover:shadow-2xl
        hover:scale-110 transition-all duration-300
        backdrop-blur-lg border border-blue-950
      "
      >
        <Mail size={24} className="text-blue-950" />
      </a>
    </div>
  );
}
