const tools = [
  "/Tools/newicon1.svg",
  "/Tools/newicon2.png",
  "/Tools/newicon3.svg",
  "/Tools/newicon4.png",
  "/Tools/newicon5.png",
  "/Tools/newicon6.png",
  "/Tools/newicon7.svg",
  "/Tools/newicon8.png",
  "/Tools/newicon9.png",
   "/Tools/newicon7.svg",
  "/Tools/newicon8.png",
  "/Tools/newicon9.png",

];

export default function Tools() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-10">
          Tools we will use
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                h-20 md:h-24
                rounded-xl
                bg-white/10
                backdrop-blur-md
                border border-white/10
                hover:bg-white/20
                hover:scale-105
                transition-all duration-300
              "
            >
              <img
                src={tool}
                alt="tool"
                className="h-8 md:h-10 object-contain opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
