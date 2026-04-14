export default function Companies() {
  const logos = [
    "/logos/nb1.svg",
    "/logos/nb2svg.svg",
    "/logos/nb3.svg",
    "/logos/Vector.svg",
    "/logos/Vector1.svg",

    "/logos/logo1.png",
  ];

  return (
    <section className="w-full bg-[#0b0b0b] py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <p className="text-gray-400 text-xs tracking-widest uppercase mb-8">
          Our learners works at
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="logo"
              className="h-6 md:h-8 object-contain opacity-70 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
