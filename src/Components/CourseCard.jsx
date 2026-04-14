export default function CourseCard() {
  return (
    <section className="w-full bg-black flex justify-center py-10">
      {/* Card */}
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden bg-[#1a1a1a]">
        {/* Top Section */}
        <div className="grid md:grid-cols-2">
          {/* Left Image */}
          <div className="h-[300px] md:h-auto">
            <img
              src="courses/course.png"
              alt="course"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center p-6 md:p-10 bg-[#2a1f1f]">
            <p className="text-gray-300 text-xs uppercase tracking-widest mb-2">
              Beginner
            </p>

            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              AI FILMMAKING BOOTCAMP
            </h2>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Master AI-Powered Filmmaking From Concept To Final Cut While
              Learning How To Create Stunning, High-Quality Films Faster Using
              Cutting-Edge AI Tools.
            </p>

            {/* Button */}
            <button className="bg-[#C7E36B] text-black px-6 py-3 text-sm font-semibold rounded-md hover:bg-[#b6d85f] transition">
              ENROLL BOOTCAMP
            </button>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 bg-[#2a2a2a] text-gray-300 text-sm">
          <div className="p-4 border-t border-gray-700">
            <p className="text-xs uppercase text-gray-400">Duration</p>
            <p className="mt-1 font-semibold">3 Hours</p>
          </div>

          <div className="p-4 border-t border-gray-700 md:border-l">
            <p className="text-xs uppercase text-gray-400">Pricing</p>
            <p className="mt-1 font-semibold">₹499.00</p>
          </div>

          <div className="hidden md:block p-4 border-t border-gray-700 md:border-l">
            <p className="text-xs uppercase text-gray-400">Pricing</p>
            <p className="mt-1 font-semibold">₹499.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
