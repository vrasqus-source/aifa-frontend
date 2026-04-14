const features = [
  {
    image: "/video/video1.png",
    title: "Host in high quality, ad-free",
  },
  {
    image: "/video/video2.png",
    title: "Host in high quality, ad-free",
  },
  {
    image: "/video/video3.png",
    title: "Host in high quality, ad-free",
  },
  {
    image: "/video/video4.png",
    title: "Host in high quality, ad-free",
  },
  {
    image: "/video/video5.png",
    title: "Host in high quality, ad-free",
  },
  {
    image: "/video/video6.jpg",
    title: "Host in high quality, ad-free",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-black py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-white text-2xl md:text-3xl font-medium text-center mb-12">
          The platform that powers your video strategy
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div key={i}>
              {/* Image */}
              <div className="overflow-hidden rounded-3xl mb-4">
                <img
                  src={item.image}
                  alt="feature"
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-white text-sm font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Ensure your video play in their highest resolution, always
                ad-free. No competitor distributions or random suggestion here
              </p>

              {/* Button */}
              <button className="bg-[#C7E36B] text-black px-4 py-2 text-xs font-medium rounded-sm">
                + Learn about video hosting →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
