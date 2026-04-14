export default function CTASection() {
  return (
    <section className="w-full bg-black py-16 flex justify-center">
      {/* Container */}
      <div className="w-full max-w-6xl bg-[#b88fc9] rounded-[32px] px-6 md:px-12 py-12 text-center relative">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src="/avatar/avatar1.png"
            alt="avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>

        {/* Heading */}
        <h2 className="text-black text-2xl md:text-4xl font-extrabold leading-snug mb-6">
          BOOK A FREE 30 MINS <br />
          CALL WITH OUR COUNSELLOR
        </h2>

        {/* Button */}
        <button className="bg-[#C7E36B] text-black px-6 py-3 text-sm font-semibold rounded-sm hover:bg-[#b6d85f] transition">
          + DISCOVER OUR JOB POSITINGS →
        </button>
      </div>
    </section>
  );
}
