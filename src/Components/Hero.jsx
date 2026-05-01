// "use client";

// import { useState, useEffect } from "react";

// const slides = [
//   "/hero/hero1.jpg",
//   "/hero/hero2.jpg",
//   "/hero/hero3.jpg",
//   "/hero/hero4.jpg",
// ];

// export default function Hero() {
//   const [active, setActive] = useState(0);

//   // 🔁 AUTO SLIDE
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full bg-black flex justify-center pt-24 pb-10">
//       <div className="relative w-full max-w-7xl h-[520px] md:h-[580px] rounded-[20px] overflow-hidden">
//         {/* 🎥 IMAGE */}
//         <img
//           key={active}
//           src={slides[active]}
//           alt="hero"
//           className="absolute inset-0 w-full h-full object-cover transition duration-700"
//         />

//         {/* 🌑 LIGHT DARK OVERLAY (NOT TOO HEAVY) */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* 🎬 CONTENT */}
//         <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-[80px]">
//           <p className="text-[#F0F0F0] font-montserrat text-[32px] leading-[40px] font-bold tracking-[0.02em] mb-3 uppercase">
//             FILMS
//           </p>

//           <h1 className="text-[#F0F0F0] font-montserrat text-[64px] leading-[70px] font-black max-w-[620px]">
//             CREATE <br />
//             HOLLYWOOD <br />
//             STYLE AI FILMS
//           </h1>

//           {/* ✅ FIXED BUTTON (SMALL + CLEAN) */}
//           <button className="mt-5 inline-flex items-center justify-center gap-[4px] bg-[#D0E46A] text-[#0F1112] px-[30px] py-[12px] text-[18px] leading-[28px] font-bold font-montserrat rounded-[12px] hover:opacity-90 transition-all duration-200 w-fit">
//             BOOK A FREE 30 MINS CONSULTATION
//           </button>
//         </div>

//         {/* 🎞️ THUMBNAILS */}
//         <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//           {slides.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               onClick={() => setActive(i)}
//               className={`w-12 h-8 object-cover rounded cursor-pointer transition ${
//                 active === i
//                   ? "border border-white scale-105"
//                   : "opacity-60 hover:opacity-100"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";

const slides = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
  "/hero/hero4.jpg",
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black flex justify-center pt-24 pb-10">
      {/* MAIN HERO */}
      <div className="relative w-full max-w-[1280px] h-[588px] rounded-[24px] overflow-hidden">
        {/* 🎥 IMAGE */}
        <img
          key={active}
          src={slides[active]}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />

        {/* 🌑 EXACT FIGMA OVERLAY */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* 🎬 CONTENT (FIXED EXACT SPACING) */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-[102px] gap-[60px]">
          {/* TEXT BLOCK */}
          <div>
            <p className="text-[#F0F0F0] font-montserrat text-[32px] leading-[40px] font-bold tracking-[0.02em] uppercase">
              FILMS
            </p>

           <h1 className="mt-2 text-[#F0F0F0] font-montserrat font-black 
text-[40px] leading-[46px] 
sm:text-[52px] sm:leading-[58px] 
md:text-[64px] md:leading-[70px] 
max-w-[620px]">
  CREATE <br />
  HOLLYWOOD <br />
  STYLE AI FILMS
</h1>
          </div>

          {/* BUTTON */}
          <button className="inline-flex items-center justify-center gap-[4px] bg-[#D0E46A] text-[#0F1112] px-[30px] py-[12px] text-[18px] leading-[28px] font-bold font-montserrat rounded-[12px] hover:opacity-90 transition-all duration-200">
            BOOK A FREE 30 MINS CONSULTATION
          </button>
        </div>

        {/* 🎞️ THUMBNAILS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setActive(i)}
              className={`w-[52px] h-[36px] object-cover rounded-[6px] cursor-pointer transition-all ${
                active === i
                  ? "border border-white scale-105"
                  : "opacity-60 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
