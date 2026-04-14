const directors = [
  //   {
  //     name: "Sherin",
  //     role: "Head of Product",
  //     image: "/team/team1.png",
  //   },
  //   {
  //     name: "Ravi Teja",
  //     role: "Head of Academics",
  //     image: "/team/team2.png ",
  //   },
  {
    name: "E Arun Kumar",
    role: "Head of Product",
    image: "/team/team3.png",
  },
  {
    name: "Satyarth",
    role: "Head of Product",
    image: "/team/team4.png",
  },
  {
    name: "Satyarth",
    role: "Head of Product",
    image: "/team/team5.png",
  },
];

export default function Directors() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-left">
          <h2 className="text-white text-3xl md:text-4xl font-medium leading-snug mb-4">
            The AI Directors era <br /> has arrived
          </h2>

          <p className="text-gray-400 text-sm mb-6 max-w-md">
            From vision to final frame, work with the most renowned AI Video
            Directors to create scroll-stopping content and campaigns that drive
            real impact.
          </p>

          <button className="bg-[#C7E36B] text-black px-5 py-2 text-sm font-medium rounded-sm">
            + Find your AI Director →
          </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="flex-1 relative flex justify-center items-center">
          <div className="flex gap-4">
            {directors.map((item, i) => (
              <div
                key={i}
                className={`relative w-40 h-64 md:w-44 md:h-72 rounded-2xl overflow-hidden border border-white/20 bg-black ${
                  i === 1 ? "scale-105 z-10" : "opacity-80"
                }`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-xs font-semibold">
                    {item.name}
                  </p>

                  <p className="text-gray-300 text-[10px]">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
