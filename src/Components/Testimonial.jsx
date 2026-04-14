export default function Testimonial() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[280px] h-[380px] md:w-[320px] md:h-[420px] overflow-hidden rounded-[40px]">
            <img
              src="/movies/movie.png"
              alt="person"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2">
          {/* Quote */}
          <h2 className="text-white text-2xl md:text-4xl font-semibold leading-snug mb-6">
            “AIFA IS A GREAT PLACE FOR THE FUTURE OF AI FILMMAKING”
          </h2>

          {/* Name */}
          <p className="text-gray-400 text-sm uppercase tracking-wide">
            RAJA MOULI
          </p>
        </div>
      </div>
    </section>
  );
}
