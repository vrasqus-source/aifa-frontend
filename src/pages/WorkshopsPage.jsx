"use client";

const courses = [
  {
    title: "AI Lego Animation Workshop",
    image: "/courses/v1.png",
    duration: "3 Hours",
    price: "₹ 199",
    mode: "ONLINE",
  },
  {
    title: "AI  Cinematic Workshop",
    image: "/courses/v2.png",
    duration: "3 Hours",
    price: "₹ 199",
    mode: "ONLINE",
  },
  {
    title: "AI Sci-Fi Movie Creator",
    image: "/courses/v3.png",
    duration: "3 Hours",
    price: "₹ 199",
    mode: "ONLINE",
  },
  {
    title: "AI Fantasy World Builder",
    image: "/courses/v4.png",
    duration: "3 Hours",
    price: "₹ 199",
    mode: "ONLINE",
  },
  {
    title: "AI Product Ad Filmmaking",
    image: "/courses/v4.png",
    duration: "3 Hours",
    price: "₹ 199",
    mode: "ONLINE",
  },
  
];

export default function WorkshopsPage() {
  return (
    <>
      {/* 🔥 WORKSHOP SECTION */}
      <section className="bg-[#0B0F10] text-white py-16">
        <div className="max-w-[1180px] mx-auto px-4">
          {/* HEADING */}
          <h2
            className="
              w-full

              text-[#E5E7EB]

              font-[Montserrat]

              text-[32px]
              leading-[40px]

              sm:text-[40px]
              sm:leading-[48px]

              md:text-[48px]
              md:leading-[56px]

              font-black

              mb-12
            "
          >
            AI Filmmaking Workshop
          </h2>

          {/* CARDS */}
          <div className="flex flex-col gap-[20px]">
            {courses.map((item, i) => (
              <div
                key={i}
                className="
        w-full

        rounded-[24px]
        overflow-hidden

        bg-[#0F1112]

        border-[6px]
        border-[#0F1112]
      "
              >
                {/* TOP SECTION */}
                <div
                  className="
          flex
          flex-col

          md:flex-row

          gap-[6px]

          w-full
        "
                >
                  {/* IMAGE */}
                  <div
                    className="
    inline-grid

    w-full
    md:w-[266px]

    h-[200px]

    grid-cols-1
    grid-rows-1

    row-start-1
    row-end-2

    col-start-1
    col-end-2

    overflow-hidden

    rounded-tl-[20px]

    shrink-0

    bg-[lightgray]
  "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
      w-full
      h-full

      object-cover
      object-center
    "
                    />
                  </div>

                  {/* RIGHT SIDE */}
                  <div
                    className="
    flex-1

    flex
    flex-col

    gap-[6px]
  "
                  >
                    {/* TITLE */}
                    <div
                      className="
      flex

      h-[105px]

      px-[12px]
      py-[10px]

      flex-col
      justify-center
      items-start

      gap-[10px]

      self-stretch

      rounded-tr-[20px]

      bg-[#DCDCDC]
    "
                    >
                      <h3
                        className="
        self-stretch

        text-[#2B2D30]

        font-[Montserrat]

        text-[26px]
        leading-[34px]

        md:text-[56px]
        md:leading-[60px]

        font-black
      "
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* INFO BOXES */}
                   <div
  className="
    grid
    grid-cols-1

    sm:grid-cols-3

    gap-[8px]
  "
>
  {/* DURATION */}
  <div
    className="
      flex
      flex-col
      items-start

      gap-[6px]

      flex-1
      self-stretch

      p-[20px]

      rounded-[8px]

      bg-[#DCDCDC]
    "
  >
    <p
      className="
        text-[#6E7072]

        font-[Montserrat]

        text-[10px]
        leading-[14px]

        font-semibold

        uppercase
      "
    >
      ⏱ Duration
    </p>

    <p
      className="
        text-[#2B2D30]

        font-[Montserrat]

        text-[16px]
        leading-[22px]

        font-bold

        uppercase
      "
    >
      {item.duration}
    </p>
  </div>

  {/* PRICING */}
  <div
    className="
      flex
      flex-col
      items-start

      gap-[6px]

      flex-1
      self-stretch

      p-[20px]

      rounded-[8px]

      bg-[#DCDCDC]
    "
  >
    <p
      className="
        text-[#6E7072]

        font-[Montserrat]

        text-[10px]
        leading-[14px]

        font-semibold

        uppercase
      "
    >
      ⊞ Pricing
    </p>

    <p
      className="
        text-[#2B2D30]

        font-[Montserrat]

        text-[16px]
        leading-[22px]

        font-bold
      "
    >
      {item.price}
    </p>
  </div>

  {/* MODE */}
  <div
    className="
      flex
      flex-col
      items-start

      gap-[6px]

      flex-1
      self-stretch

      p-[20px]

      rounded-[8px]

      bg-[#DCDCDC]
    "
  >
    <p
      className="
        text-[#6E7072]

        font-[Montserrat]

        text-[10px]
        leading-[14px]

        font-semibold

        uppercase
      "
    >
      ⌨ Mode
    </p>

    <p
      className="
        text-[#2B2D30]

        font-[Montserrat]

        text-[16px]
        leading-[22px]

        font-bold

        uppercase
      "
    >
      {item.mode}
    </p>
  </div>
</div>
                  </div>
                </div>

                {/* BUTTON */}
               <button
  className="
    flex

    row-start-2
    row-end-3

    col-start-1
    col-end-2

    justify-self-stretch
    self-stretch

    justify-center
    items-center

    gap-[4px]

    px-[30px]
    py-[12px]

    w-full

    rounded-b-[25px]

    bg-[#D0E46A]

    text-[#0F1112]

    font-[Montserrat]

    text-[18px]
    leading-[28px]

    font-black

    uppercase

    hover:opacity-90
    transition
  "
>
  RESERVE SPOT
  <span className="text-[22px]">→</span>
</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="
    flex
    w-full
    justify-center
    items-center

    bg-[#0F1112]

    py-[32px]

    md:py-[48px]
  "
      >
        <div
          className="
      w-full
      max-w-[1366px]

      px-[16px]

      sm:px-[24px]

      md:px-[60px]

      lg:px-[93px]

      flex
      flex-col
      justify-center
      items-center
    "
        >
          <div
            className="
        w-full
        max-w-[1180px]

        bg-[#E39494]

        rounded-[24px]

        md:rounded-[40px]

        px-[20px]
        py-[40px]

        sm:px-[32px]
        sm:py-[48px]

        md:px-[48px]
        md:py-[64px]

        text-center
      "
          >
            {/* LOGO */}
            <img
              src="/logoimage.png"
              alt="support"
              className="
          w-[72px]
          h-[72px]

          md:w-[96px]
          md:h-[96px]

          rounded-full
          object-cover

          mx-auto

          mb-[20px]

          md:mb-[24px]
        "
            />

            {/* HEADING */}
            <h2
              className="
          text-[#000000]
          text-center

          font-[Montserrat]

          text-[32px]
          leading-[40px]

          sm:text-[44px]
          sm:leading-[52px]

          md:text-[64px]
          md:leading-[70px]

          font-[900]

          mb-[16px]
        "
            >
              Not sure which workshop is <br className="hidden md:block" />
              right for you?
            </h2>

            {/* SUBTEXT */}
            <p
              className="
          text-[#000000]
          text-center

          font-[Montserrat]

          text-[18px]
          leading-[28px]

          sm:text-[24px]
          sm:leading-[32px]

          md:text-[32px]
          md:leading-[40px]

          font-bold

          mb-[28px]

          md:mb-[32px]
        "
            >
              Get personalised guidance from our team
            </p>

            {/* BUTTON */}
            <button
              className="
          inline-flex
          justify-center
          items-center

          gap-[8px]

          px-[22px]
          py-[12px]

          md:px-[30px]
          md:py-[12px]

          rounded-[12px]

          bg-[#D0E46A]

          text-[#0F1112]

          font-[Montserrat]

          text-[15px]

          md:text-[18px]

          font-bold
          leading-[28px]

          uppercase

          transition-all
          duration-300

          hover:opacity-90
        "
            >
              <span>CHAT WITH US NOW</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
