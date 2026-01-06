// export default function AnnouncementBar() {
//   return (
//     <div className="w-full bg-slate-900 text-white text-sm">
//       <div className="mx-auto max-w-7xl px-4 py-2 text-center">
//         <span className="inline-flex items-center gap-2 font-medium">
//           <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M10 2l2.39 4.84L18 7.64l-4 3.89L14.78 18 10 15.27 5.22 18 6 11.53 2 7.64l5.61-.8L10 2z" />
//           </svg>
//           Trusted Portable Manufacturing Company in North India
//         </span>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function AnnouncementBar() {
  return (
    <div className=" hidden sm:block relative w-full overflow-hidden bg-slate-950">
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-blue-500 to-pink-500 opacity-30 blur-md animate-pulse" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-7xl px-4 p text-center"
      >
        <div className="mx-auto max-w-7xl px-4 py-1 text-center text-white" >

          <span className="inline-flex items-center gap-2 font-medium">
      
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              
              <path d="M10 2l2.39 4.84L18 7.64l-4 3.89L14.78 18 10 15.27 5.22 18 6 11.53 2 7.64l5.61-.8L10 2z" />
              
            </svg>
            Trusted Portable Manufacturing Company in North India 
          </span>
          
        </div>
      </motion.div>
    </div>
  );
}
