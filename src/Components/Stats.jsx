"use client";

import { Play, GraduationCap, Star } from "lucide-react";

export default function Stats() {
  return (
    <section className="w-full bg-[#0B0F10] py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* HEADING */}
      <h2 className="text-[#F0F0F0] text-center font-montserrat text-[40px] leading-[48px] font-semibold mb-16">
  Trusted by media companies, creators,
  <br />
  and businesses around the globe
</h2>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* ITEM */}
          <div className="flex flex-col items-center">
            <img src="/baseline-ondemand-video1.svg" alt="" />

            <h3 className="text-white text-4xl md:text-5xl font-semibold">
              100+ billion
            </h3>

            <p className="text-gray-400 text-sm mt-3">
              Video View (And Counting)
            </p>
          </div>

          {/* ITEM */}
          <div className="flex flex-col items-center">
            <img src="/baseline-ondemand-video2.svg" alt="" />

            <h3 className="text-white text-4xl md:text-5xl font-semibold">
              7+ million
            </h3>

            <p className="text-gray-400 text-sm mt-3">
              Video Uploaded Every Month
            </p>
          </div>

          {/* ITEM */}
          <div className="flex flex-col items-center">
            <img src="/baseline-ondemand-video3.svg" alt="" />

            <h3 className="text-white text-4xl md:text-5xl font-semibold">
              4+ billion
            </h3>

            <p className="text-gray-400 text-sm mt-3">
              Minutes Streamed Each Month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



