import { Play, GraduationCap, Star } from "lucide-react";

export default function Stats() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-white text-2xl md:text-3xl font-medium mb-12 leading-snug">
          Trusted by media companies, creators,
          <br />
          and businesses around the globe
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <Play className="text-[#C7E36B] mb-3" size={28} />

            <h3 className="text-white text-2xl font-semibold">100+ billion</h3>

            <p className="text-gray-400 text-xs mt-1">
              Video Views (And Counting)
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <GraduationCap className="text-[#C7E36B] mb-3" size={28} />

            <h3 className="text-white text-2xl font-semibold">7+ million</h3>

            <p className="text-gray-400 text-xs mt-1">
              Video Uploaded Every Month
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <Star className="text-[#C7E36B] mb-3" size={28} />

            <h3 className="text-white text-2xl font-semibold">4+ billion</h3>

            <p className="text-gray-400 text-xs mt-1">
              Minutes Streamed Each Month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
