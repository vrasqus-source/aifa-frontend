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
    title: "AI Lego Animation Workshop",
    image: "/courses/v2.png",
    duration: "3 Hours",
    price: "₹ 199",
    mode: "ONLINE",
  },
  {
    title: "AI Lego Animation Workshop",
    image: "/courses/v3.png",
    duration: "3 Hours",
    price: "₹ 199",
    mode: "ONLINE",
  },
  {
    title: "AI Lego Animation Workshop",
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
                  inline-grid

                  grid-cols-1
                  grid-rows-1

                  rounded-[20px]
                  overflow-hidden

                  bg-[#0F1112]

                  p-[4px]
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    md:flex-row

                    gap-[4px]

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

    rounded-tl-[20px]

    overflow-hidden

    shrink-0
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

      bg-[lightgray]
    "
                    />
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex-1 flex flex-col gap-[4px]">
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
    flex

    h-[90px]

    flex-col
    justify-center

    self-stretch

    text-[#282A2C]

    font-[Montserrat]

    text-[32px]
    leading-[40px]

    md:text-[48px]
    md:leading-[56px]

    font-bold
  "
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* INFO BOXES */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[8px]">
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
        text-[#767779]

        font-[Montserrat]

        text-[11px]
        font-medium

        uppercase
      "
                        >
                          ⏱ Duration
                        </p>

                        <p
                          className="
        text-[#282A2C]

        font-[Montserrat]

        text-[16px]
        font-semibold
        leading-[24px]
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
        text-[#767779]

        font-[Montserrat]

        text-[11px]
        font-medium

        uppercase
      "
                        >
                          ⊞ Pricing
                        </p>

                        <p
                          className="
        text-[#282A2C]

        font-[Montserrat]

        text-[16px]
        font-semibold
        leading-[24px]
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
        text-[#767779]

        font-[Montserrat]

        text-[11px]
        font-medium

        uppercase
      "
                        >
                          ⌨ Mode
                        </p>

                        <p
                          className="
        text-[#282A2C]

        font-[Montserrat]

        text-[16px]
        font-semibold
        leading-[24px]
      "
                        >
                          {item.mode}
                        </p>
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
    font-bold
    leading-[28px]

    hover:opacity-90
    transition
  "
                    >
                      RESERVE SPOT →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 HELP SECTION */}
      <section className="bg-[#0B0F10] py-16">
        <div className="max-w-[1180px] mx-auto px-4">
          <div
            className="
              bg-[#E39494]

              rounded-[24px]
              md:rounded-[40px]

              py-12
              px-6

              md:py-16
              md:px-12

              text-center
            "
          >
            <img
              src="/team/support.jpg"
              alt="support"
              className="
                w-20
                h-20

                md:w-24
                md:h-24

                rounded-full
                mx-auto
                mb-6

                object-cover
              "
            />

            <h2
              className="
                text-black

                font-[Montserrat]

                text-[28px]
                leading-[36px]

                md:text-[48px]
                md:leading-[56px]

                font-black

                mb-4
              "
            >
              Not sure which workshop is right for you?
            </h2>

            <p
              className="
                text-black

                font-[Montserrat]

                text-[16px]
                leading-[24px]

                md:text-[18px]
                md:leading-[28px]

                font-medium

                mb-8
              "
            >
              Get personalised guidance from our team
            </p>

            <button
              className="
                bg-[#C7E36B]

                text-black

                px-8
                py-4

                rounded-[16px]

                font-[Montserrat]

                text-[16px]
                font-semibold

                hover:opacity-90
                transition
              "
            >
              ← Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
