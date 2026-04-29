// export default function Companies() {
//   const logos = [
//     "/logos/nb1.svg",
//     "/logos/nb2svg.svg",
//     "/logos/nb3.svg",
//     "/logos/Vector.svg",
//     "/logos/Vector1.svg",

//     "/logos/logo1.png",
//   ];

//   return (
//     <section className="w-full bg-[#0b0b0b] py-10">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Title */}
//         <p className="text-gray-400 text-xs tracking-widest uppercase mb-8">
//           Our learners works at
//         </p>

//         {/* Logos */}
//         <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
//           {logos.map((logo, i) => (
//             <img
//               key={i}
//               src={logo}
//               alt="logo"
//               className="h-6 md:h-8 object-contain opacity-70 hover:opacity-100 transition duration-300"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

export default function Companies() {
  const logos = [
    "/logos/nb1.svg",
    "/logos/nb2svg.svg",
    "/logos/nb3.svg",
    "/logos/Vector.svg",
    "/logos/Vector1.svg",
    "/logos/logo1.png",
  ];

  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let frame;
    const speed = 0.4;

    const scroll = () => {
      if (!isPaused) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(scroll);
    };

    frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  return (
    <section className="w-full bg-[#0F1112] flex justify-center">
      {/* CONTAINER */}
      <div className="w-full max-w-[1366px] flex flex-col items-center justify-center py-[48px] px-[93px] gap-[26px]">
        {/* TITLE */}
        <p className="text-[#E5E7EB] font-montserrat text-[18px] leading-[28px] font-semibold uppercase tracking-[0.02em]">
          OUR LEARNERS WORKS AT
        </p>

        {/* SCROLLER WRAPPER */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 h-full w-[80px] bg-gradient-to-r from-[#0F1112] to-transparent z-10"></div>

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 h-full w-[80px] bg-gradient-to-l from-[#0F1112] to-transparent z-10"></div>

          {/* SCROLL TRACK */}
          <div
            ref={scrollRef}
            className="flex items-center gap-[48px] overflow-x-scroll scrollbar-hide"
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[140px] group relative"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="h-[32px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />

                {/* subtle glow */}
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-white/10 w-[60px] h-[30px]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
