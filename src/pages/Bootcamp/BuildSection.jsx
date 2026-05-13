"use client";

const data = [
  {
    title: "AI SHORT FILM",
    desc: "Create a complete story-driven video with scenes and visuals.",
    img: "/bootcamp1.jpg",
  },
  {
    title: "PRODUCT AD FILM",
    desc: "Produce a high-quality commercial-style video for products or services.",
    img: "/bootcamp6.jpg",
  },
  {
    title: "SOCIAL MEDIA REELS",
    desc: "Make scroll-stopping content optimized for Instagram, YouTube, and TikTok.",
    img: "/bootcamp3.jpg",
  },
  {
    title: "CINEMATIC POSTERS",
    desc: "Design high-impact visuals for storytelling and marketing.",
    img: "/bootcamp4.jpg",
  },
  {
    title: "PORTFOLIO-READY PROJECTS",
    desc: "Build a professional portfolio to showcase your work or get clients.",
    img: "/bootcamp5.jpg",
  },
];

export default function BuildSection() {
  return (
    <section
      className="
        w-full
        bg-[#070B14]

        flex
        justify-center
      "
    >
      {/* FIGMA EXACT CONTAINER */}
      <div
        className="
          w-full
          max-w-[1366px]

          px-[93px]
          py-[64px]

          flex
          flex-col

          gap-[64px]
        "
      >
        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            items-center

            gap-[16px]
          "
        >
          <h2
            className="
              text-[#F0F0F0]

              text-center
              font-black

              text-[64px]
              leading-[70px]

              tracking-[-1.5px]
            "
          >
            WHAT YOU WILL BUILD
          </h2>

          <p
            className="
              max-w-[760px]

              text-center

              text-[#D0D0D0]

              text-[18px]
              leading-[30px]
            "
          >
            Build real, portfolio-ready projects as you learn films, ads, and
            social content created step by step.
          </p>
        </div>

        {/* CONTENT */}
        <div
          className="
            flex
            flex-col

            gap-[72px]
          "
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`
                flex
                items-center
                justify-between

                gap-[80px]

                ${index % 2 !== 0 ? "flex-row-reverse" : "flex-row"}
              `}
            >
              {/* TEXT SIDE */}
              <div
                className="
                  flex-1

                  flex
                  flex-col

                  items-start

                  gap-[14px]
                "
              >
                {/* TAG */}
                <div
                  className="
                    flex
                    items-center
                    justify-center

                    px-[18px]
                    py-[8px]

                    rounded-full

                    bg-[#D0E46A]/10

                    border
                    border-[#D0E46A]/20
                  "
                >
                  <p
                    className="
                      text-[#D0E46A]

                      text-[14px]
                      font-bold

                      tracking-[1px]
                    "
                  >
                    BEGINNER
                  </p>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-[#F0F0F0]

                    font-black

                    text-[48px]
                    leading-[56px]

                    tracking-[-1px]

                    max-w-[520px]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    max-w-[480px]

                    text-[#CFCFCF]

                    text-[18px]
                    leading-[30px]
                  "
                >
                  {item.desc}
                </p>
              </div>

              {/* IMAGE SIDE */}
              <div
                className="
                  flex-1

                  flex
                  justify-center
                "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full
                    max-w-[520px]

                    h-[320px]

                    object-cover

                    rounded-[200px]

                    border
                    border-[#2E3133]

                    shadow-[0_20px_60px_rgba(0,0,0,0.35)]

                    transition-all
                    duration-500

                    hover:scale-[1.02]
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
