// "use client";

// import { ChevronLeft, ChevronRight } from "lucide-react";

// const courses = [
//   {
//     title: "Google Flow Masterclass",
//     image: "/courses/v1.png",
//     duration: "1h 10m",
//     price: "₹49.00",
//   },
//   {
//     title: "Kling AI Video Masterclass",
//     image: "/courses/v2.png",
//     duration: "1h 10m",
//     price: "₹49.00",
//   },
//   {
//     title: "AI Background Magic",
//     image: "/courses/v3.png",
//     duration: "1h 10m",
//     price: "₹49.00",
//   },
// ];

// export default function Courses() {
//   return (
//     <section className="w-full bg-[#0B0F10] py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* HEADER */}
//         <div className="flex justify-between items-center mb-10">
//           <h2 className="text-white text-3xl md:text-4xl font-semibold">
//             Self Paced Courses
//           </h2>

//           <div className="flex gap-3">
//             <button className="bg-[#C7E36B] p-3 rounded-md">
//               <ChevronLeft size={18} />
//             </button>
//             <button className="bg-[#C7E36B] p-3 rounded-md">
//               <ChevronRight size={18} />
//             </button>
//           </div>
//         </div>

//         {/* CARDS */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {courses.map((course, i) => (
//             <div
//               key={i}
//               className="bg-[#111516] border border-white/10 rounded-xl overflow-hidden"
//             >
//               {/* IMAGE */}
//               <div className="relative">
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-full h-[220px] object-cover"
//                 />

//                 {/* DURATION */}
//                 <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-md">
//                   {course.duration}
//                 </span>
//               </div>

//               {/* CONTENT */}
//               <div className="p-5">
//                 <h3 className="text-white text-base font-semibold mb-3">
//                   {course.title}
//                 </h3>

//                 {/* PRICE */}
//                 <div className="flex items-center gap-2 text-sm mb-5">
//                   <span className="text-[#C7E36B] font-semibold">95% off</span>
//                   <span className="line-through text-gray-400">₹799</span>
//                 </div>

//                 {/* BUTTON */}
//                 <button className="w-full bg-[#E5E5E5] text-black py-2 rounded-md text-sm font-medium hover:bg-white transition">
//                   Buy {course.price}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* BOTTOM BUTTON */}
//         <div className="flex justify-center mt-12">
//           <button className="bg-[#C7E36B] text-black px-6 py-3 text-sm font-semibold rounded-md">
//             + Explore Courses
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Google Flow Masterclass",
    image: "/courses/v1.png",
    duration: "1h 10m",
    price: "₹49.00",
  },
  {
    title: "Kling AI Video Masterclass",
    image: "/courses/v2.png",
    duration: "1h 10m",
    price: "₹49.00",
  },
  {
    title: "AI Background Magic",
    image: "/courses/v3.png",
    duration: "1h 10m",
    price: "₹49.00",
  },
];

export default function Courses() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 300;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#0B0F10] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <h2
            className="text-[#F0F0F0] font-montserrat font-black 
  text-[28px] leading-[34px] 
  sm:text-[34px] sm:leading-[40px] 
  md:text-[40px] md:leading-[48px]"
          >
            SELF PACED COURSES
          </h2>

          <div className="flex gap-[12px]">
            {/* LEFT BUTTON */}
            <button
              onClick={() => scroll("left")}
              className="flex items-center justify-center bg-[#D0E46A] p-[12px] rounded-[8px] hover:opacity-90 transition"
            >
              <img
                src="/Arrowleft1.svg"
                alt="left"
                className="w-[18px] h-[18px]"
              />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => scroll("right")}
              className="flex items-center justify-center bg-[#D0E46A] p-[12px] rounded-[8px] hover:opacity-90 transition"
            >
              <img
                src="/Arrowleft2.svg"
                alt="right"
                className="w-[18px] h-[18px]"
              />
            </button>
          </div>
        </div>
        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4"
        >
          {[...courses].map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="min-w-[280px] bg-[#111516] border border-white/10 rounded-xl overflow-hidden group relative transition-all duration-300 hover:border-[#D0E46A]"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>

                {/* DURATION */}
                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-md">
                  {course.duration}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3
                  className="text-white font-montserrat font-bold 
text-[16px] leading-[24px] mb-3"
                >
                  {course.title}
                </h3>

                {/* PRICE */}
                <div className="flex items-center gap-2 text-[14px] mb-5">
                  <span className="text-[#D0E46A] font-bold">60% OFF</span>
                  <span className="line-through text-gray-400">₹999</span>
                </div>

                {/* BUTTON */}
                <button className="flex w-full items-center justify-center bg-[#F0F0F0] text-[#0F1112] px-[16px] py-[10px] text-[14px] font-semibold font-montserrat rounded-[6px] hover:bg-white transition">
                  BUY ₹399
                </button>
              </div>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10 blur-xl"></div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM BUTTON */}
        <div className="flex justify-center mt-14">
          <button
            className="flex items-center justify-center gap-[6px] 
bg-[#D0E46A] text-[#0F1112] 
px-[28px] py-[12px] 
text-[16px] leading-[24px] 
sm:text-[18px] sm:leading-[28px] 
font-bold font-montserrat 
rounded-[10px] hover:opacity-90 transition"
          >
            EXPLORE COURSES
          </button>
        </div>
      </div>
    </section>
  );
}
