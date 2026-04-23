"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CourseFullPage() {
  const [open, setOpen] = useState(0);

  const syllabus = [
    {
      title: "The Photo Enhancement Mindset",
      desc: "Understand what makes professional photo enhancement different from casual editing—enhancing with intention, not filters. Learn how to analyze images, identify enhancement opportunities, and approach each project with a creative problem-solving mindset.",
      img: "/courses/v1.png",
    },
    {
      title: "Real Client Workflow Experience",
      desc: "Work through a realistic creative brief, analyze image issues, and deliver results aligned with client expectations. ",
      img: "/courses/v2.png",
    },
    {
      title: "AI Editing Basics",
      desc: "Learn core tools and techniques used in AI-powered photo enhancement workflows.Understand how to use AI for intelligent adjustments while maintaining creative control.",
      img: "/courses/v3.png",
    },
    {
      title: "Color Grading",
      desc: "Apply cinematic color grading techniques to enhance mood and visual impact. Learn how to use color grading tools to create cohesive, professional-looking images.",
      img: "/courses/v4.png",
    },
    {
      title: "Export & Delivery",
      desc: "Prepare high-quality exports for social media, clients, and professional use. Learn best practices for file formats, resolution, and compression to ensure your enhanced photos look their best everywhere.",
      img: "/courses/v5.png",
    },
    {
      title: "Bonus Content",
      desc: "Exclusive resources and templates to accelerate your photo enhancement journey. Get access to project files, cheat sheets, and a curated list of AI tools to help you continue improving your skills long after the course ends.",
      img: "/courses/v6.png",
    }
  ];

  const faqs = [
    {
      q: "How is this microcourse different from YouTube tutorials?",
      a: "Focused, structured, and practical. Each lesson is concise and designed to deliver clear results without unnecessary fluff. You'll follow a step-by-step system that builds real photo enhancement skills.",
    },
    {
      q: "What’s the difference between buying a single microcourse and getting All-Access?",
      a: "All-access gives you access to every course including future updates, making it more cost-effective long term.",
    },
    {
      q: "How long will I have access to the course?",
      a: "You get lifetime access to all purchased content.",
    },

    {
      q: "What if I’m not satisfied with the course?",
      a: "We offer a 30-day money-back guarantee. If you’re not satisfied, just reach out for a full refund.",
    },
    {
      q: "Do I need prior experience with photo editing or AI tools?",
      a: "No prior experience is needed. The course is designed for beginners and will guide you through every step of the process.",
    },
    {
      q: "What software do I need for this course?",
      a: "We cover industry-standard photo editing software and AI enhancement tools. Specific software recommendations will be provided in the course materials.",
    },
  ];

  return (
    <div>
      <section className="bg-[#0B0F10] text-white relative overflow-hidden">
        {/* 🔥 BACKGROUND GLOW */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/bg/glow.png" // add your abstract glow image
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* 🔹 BREADCRUMB */}
          <p className="text-gray-400 text-sm mb-8">
            Home <span className="mx-2">›</span> Video Courses{" "}
            <span className="mx-2">›</span>
            <span className="text-[#C7E36B]">
              AI Photo Enhancement Masterclass
            </span>
          </p>

          {/* 🔥 HERO GRID */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT IMAGE */}
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/courses/v1.png"
                alt="course"
                className="w-full h-[260px] md:h-[300px] object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="text-[#C7E36B] text-xs tracking-widest mb-3">
                INCLUDED IN ALL-ACCESS
              </p>

              <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-5">
                Photo Enhancement Essentials
              </h1>

              <p className="text-gray-400 text-sm md:text-base mb-6 max-w-md">
                Learn to transform ordinary images into stunning visuals using
                industry-standard photo editing and AI enhancement tools.
              </p>

              <button className="bg-[#C7E36B] text-black px-6 py-3 rounded-md font-medium hover:opacity-90 transition">
                + Purchase Now
              </button>
            </div>
          </div>

          {/* 🔥 FEATURE CARDS */}
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {/* CARD 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur transition hover:border-[#C7E36B]/40 hover:bg-white/10">
              <div className="mb-4">
                <img
                  src="/courses/Imgicon.svg"
                  alt="Schedule Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Learn On Your Own Schedule
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Build your photo enhancement skills at your own pace. All
                lessons and project files are available 24/7.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur transition hover:border-[#C7E36B]/40 hover:bg-white/10">
              <div className="mb-4">
                <img
                  src="/courses/Imgicon2.svg"
                  alt="Duration Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                3+ Hours of Content
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Structured, practical lessons focused on real-world photo
                enhancement skills.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur transition hover:border-[#C7E36B]/40 hover:bg-white/10">
              <div className="mb-4">
                <img
                  src="/courses/Imgicon3.svg"
                  alt="Beginner Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">Beginner Friendly</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designed for beginners with no prior experience in editing or AI
                enhancement tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0F10] text-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          {/* 🔥 OUTER BORDER */}
          <div className="border border-white/10 rounded-[28px] p-3">
            {/* 🔥 INNER CARD */}
            <div className="rounded-[24px] p-8 md:p-10 bg-gradient-to-br from-[#1a1f22] to-[#111] border border-white/10">
              <div className="grid md:grid-cols-2 gap-12">
                {/* LEFT */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    Course Overview
                  </h2>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    In Photo Enhancement Essentials, you’ll work through
                    real-world image projects from raw photo to final export,
                    learning not just how to enhance visuals, but why specific
                    adjustments create stronger impact.
                    <br />
                    <br />
                    Get introduced to a practical AI editing
                    toolkit—professional photo editing software for precision
                    control, AI enhancement tools for intelligent corrections,
                    and color grading techniques for cinematic results. Learn
                    when to use each tool, how to maintain natural detail, and
                    how to prepare high-quality outputs ready for social media,
                    advertising, or client delivery.
                  </p>

                  {/* 🔥 BOTTOM LOGO */}
                  <div className="flex items-center gap-4 mt-10">
                    <img
                      src="/Tools/newicon2.png"
                      className="w-16 opacity-80"
                    />
                    <div className="bg-black px-4 py-2 text-xl font-semibold">
                      Flow
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-6">
                    You Get:
                  </h3>

                  <ul className="space-y-4 text-gray-300 text-sm md:text-base">
                    {[
                      "3+ Hours Of Video Training",
                      "PDF Cheat Sheets",
                      "Downloadable Notes & Assets",
                      "24/7 Community Access",
                      "Verified Credential Upon Completion",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-[#C7E36B] text-lg">✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 SYLLABUS */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-amber-50">
          Course syllabus.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {syllabus.map((item, i) => (
            <div key={i} className="group">
              {/* IMAGE */}
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img
                  src={item.img}
                  className="w-full h-52 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2 text-amber-50">{item.title}</h3>

                <p className="text-gray-400 text-1xl leading-relaxed ">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 CTA TEXT */}
      <div className="text-center mb-20 px-6">
        <h2 className="text-5xl font-semibold mb-4 text-white">
          Ready to Enhance with AI?
        </h2>
        <p className="text-white max-w-4xl mx-auto text-2xl">
          Don’t just experiment with tools. Learn how to use AI photo
          enhancement confidently to create professional, high-impact visuals.
        </p>
      </div>

      <section className="bg-[#0B0F10] text-white py-4">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* 🔥 LEFT CARD */}
          <div className="relative rounded-2xl p-8 md:p-10 border border-white/10 overflow-hidden">
            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a3b0a] via-[#0B0F10] to-[#0B0F10] opacity-60"></div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Buy this Course
              </h3>

              <p className="text-pink-300 mb-6">Own this course forever.</p>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">₹399</h2>

              <div className="flex justify-center">
                <button className="bg-[#C7E36B] text-black px-8 py-3 rounded-md font-medium hover:opacity-90 transition">
                  + Buy This Course
                </button>
              </div>

              <p className="text-center text-orange-300 text-sm mt-4 mb-8">
                No recurring fees — ever.
              </p>

              <p className="text-pink-300 mb-4">What's Included:</p>

              <ul className="space-y-4 text-gray-300 text-1xl">
                <li className="flex gap-3">
                  <span className="text-[#C7E36B]">✔</span> 3 hours of HD video
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C7E36B]">✔</span> 120 lessons
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C7E36B]">✔</span> Lifetime access
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C7E36B]">✔</span> Downloadable content
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C7E36B]">✔</span> English captions
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C7E36B]">✔</span> Certificate of
                  completion
                </li>
              </ul>
            </div>
          </div>

          {/* 🔥 RIGHT CARD */}
          <div className="relative rounded-2xl p-8 md:p-10 border border-white/10 overflow-hidden">
            {/* BADGE */}
            <span className="absolute top-4 right-4 bg-orange-400 text-black text-xs px-3 py-1 rounded-md">
              Best Value
            </span>

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a3b0a] via-[#0B0F10] to-[#0B0F10] opacity-60"></div>

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Get Lifetime Access
              </h3>

              <p className="text-pink-300 mb-6">
                All current & future courses — one payment.
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">₹9,999</h2>

              <div className="flex justify-center">
                <button className="bg-[#C7E36B] text-black px-8 py-3 rounded-md font-medium hover:opacity-90 transition">
                  + Unlock All Courses
                </button>
              </div>

              <p className="text-center text-orange-300 text-sm mt-4 mb-8">
                No recurring fees — ever.
              </p>

              <p className="text-pink-300 mb-4">What's Included:</p>

              <ul className="space-y-4 text-gray-300 text-1xl">
                <li className="flex gap-3">
                  <span className="text-[#C7E36B]">✔</span> 50+ premium courses
                  worth 20,000
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C7E36B]">✔</span> All future courses
                  included
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C7E36B]">✔</span> 330 hours of HD
                  video
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C7E36B]">✔</span> Lifetime access
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C7E36B]">✔</span> Downloadable content
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C7E36B]">✔</span> Early access to new
                  courses
                </li>
                <li className="flex gap-3">
                  <span className="text-[#C7E36B]">✔</span> Help shape future
                  course topics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 FAQ */}

      <section className="bg-[#0B0F10] text-white py-4">
        <div className="max-w-4xl mx-auto px-6">
          {/* Heading */}
          <p className="text-center text-[#C7E36B] mb-2">Need More Details?</p>

          <h2 className="text-5xl font-semibold text-center mb-12">
            Frequently-Asked Questions
          </h2>

          {/* FAQ */}
          <div className="space-y-4">
            {faqs.map((item, i) => {
              const isOpen = open === i;

              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-white/10 border-white/20 p-6"
                      : "border-white/10 p-5 hover:bg-white/5"
                  }`}
                >
                  {/* Question */}
                  <div
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <h3 className="text-lg font-medium">{item.q}</h3>

                    <span className="text-2xl">{isOpen ? "−" : "+"}</span>
                  </div>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-400 mt-4 text-sm leading-relaxed"
                      >
                        {item.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>{" "}
        {/* ✅ CORRECT PLACE */}
      </section>
    </div>
  );
}
