import { ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
  {
    title: "Google Flow Masterclass",
    image: "/courses/courses1.png",
    duration: "1h 10m",
    price: "₹49.00",
  },
  {
    title: "Kling AI Video Masterclass",
   image: "/courses/courses2.png",
    duration: "1h 10m",
    price: "₹49.00",
  },
  {
    title: "AI Background Magic",
image: "/courses/courses3.png",
    duration: "1h 10m",
    price: "₹49.00",
  },
];

export default function Courses() {
  return (
    <section className="w-full bg-black py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-2xl md:text-3xl font-semibold">
            Self Paced Courses
          </h2>

          {/* Arrows */}
          <div className="flex gap-2">
            <button className="bg-[#C7E36B] p-2 rounded">
              <ChevronLeft size={18} />
            </button>
            <button className="bg-[#C7E36B] p-2 rounded">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />

                {/* Duration Badge */}
                <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {course.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-white text-sm font-semibold mb-2">
                  {course.title}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2 text-xs mb-4">
                  <span className="text-yellow-400 font-semibold">95% off</span>
                  <span className="line-through text-gray-400">₹799</span>
                </div>

                {/* Button */}
                <button className="w-full bg-white text-black text-sm py-2 rounded hover:bg-gray-200 transition">
                  Buy {course.price}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#C7E36B] text-black px-6 py-2 text-sm font-semibold rounded hover:scale-105 transition">
            + Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
}
