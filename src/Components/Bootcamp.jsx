const bootcamps = [
  {
    title: "AI Lego Animation Workshop",
    image: "/bootcamp/bootcamp1.png",
    duration: "35 HOURS",
    price: "USD 999.00",
    mode: "ONLINE",
  },
  {
    title: "AI Lego Animation Workshop",
    image: "/bootcamp/bootcamp2.jpg",
    duration: "35 HOURS",
    price: "USD 999.00",
    mode: "ONLINE",
  },
  {
    title: "AI Lego Animation Workshop",
    image: "/bootcamp/bootcamp3.jpg",
    duration: "35 HOURS",
    price: "USD 999.00",
    mode: "ONLINE",
  },
];

export default function Bootcamps() {
  return (
    <section className="w-full bg-black py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-white text-3xl font-medium mb-8">
          AI Filmmaking Bootcamp
        </h2>

        {/* List */}
        <div className="flex flex-col gap-6">
          {bootcamps.map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden">
              {/* Top */}
              <div className="flex flex-col md:flex-row bg-[#e6dede] rounded-t-2xl">
                {/* Image */}
                <img
                  src={item.image}
                  alt="bootcamp"
                  className="w-full md:w-48 h-40 object-cover"
                />

                {/* Content */}
                <div className="flex-1 p-5">
                  {/* Title */}
                  <h3 className="text-black text-xl md:text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  {/* Info Boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="border border-black/30 rounded-lg p-3">
                      <p className="text-[10px] text-black/60 uppercase">
                        Duration
                      </p>
                      <p className="text-sm font-medium">{item.duration}</p>
                    </div>

                    <div className="border border-black/30 rounded-lg p-3">
                      <p className="text-[10px] text-black/60 uppercase">
                        Pricing
                      </p>
                      <p className="text-sm font-medium">{item.price}</p>
                    </div>

                    <div className="border border-black/30 rounded-lg p-3">
                      <p className="text-[10px] text-black/60 uppercase">
                        Mode
                      </p>
                      <p className="text-sm font-medium">{item.mode}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Button */}
              <div className="bg-[#C7E36B] text-center py-3 text-sm font-semibold text-black rounded-b-2xl">
                RESERVE SPOT →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
