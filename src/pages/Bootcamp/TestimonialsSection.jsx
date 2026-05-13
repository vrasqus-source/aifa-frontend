"use client";

import { FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Prerna Singh",
    role: "AI Filmmaker & Creator",
    text: "He specializes in helping creators transform ideas into cinematic visuals using AI—leveraging emerging tools not just for experimentation, but to build real-world, monetizable creative projects.",
    img: "/test1.png",
  },
  {
    name: "David Robert",
    role: "Content Creator",
    text: "The course structure was incredibly practical and easy to follow. I started creating professional AI ads within weeks and landed freelance projects shortly after.",
    img: "/test1.png",
  },
  {
    name: "Tejasvi Kalbu",
    role: "Visual Designer",
    text: "What stood out most was the mentorship and workflow clarity. Every module felt premium and directly applicable to real-world creative work.",
    img: "/test1.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="
        w-full
        bg-[#0F1112]

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

          justify-center
          items-center

          gap-[10px]
        "
      >
        {/* INNER WRAPPER */}
        <div
          className="
            w-full
            max-w-[1180px]

            flex
            flex-col

            gap-[48px]
          "
        >
          {/* HEADER */}
          <div
            className="
              relative

              flex
              flex-col

              items-center

              gap-[14px]
            "
          >
            {/* SMALL TEXT */}
            <p
              className="
                text-[#D0E46A]

                text-[16px]
                font-bold

                uppercase

                tracking-[1px]

                leading-[24px]
              "
            >
              TESTIMONIALS
            </p>

            {/* HEADING */}
            <h2
              className="
                text-[#F0F0F0]

                text-center

                font-black

                text-[64px]
                leading-[72px]

                tracking-[-1.5px]
              "
            >
              HEAR WHAT OUR
              <br />
              TRAINEES SAY
            </h2>

            {/* BUTTON */}
            <button
              className="
                absolute
                right-0
                top-1/2

                -translate-y-1/2

                flex
                items-center
                justify-center

                w-[58px]
                h-[58px]

                rounded-full

                bg-[#D0E46A]

                text-black

                transition-all
                duration-300

                hover:scale-[1.05]
              "
            >
              <FaArrowRight className="text-[18px]" />
            </button>
          </div>

          {/* TESTIMONIAL GRID */}
         {/* TESTIMONIAL GRID */}
<div
  className="
    grid
    grid-cols-3

    gap-[20px]
  "
>
  {testimonials.map((item, index) => (
    <div
      key={index}
      className="
        flex
        flex-col

        rounded-[20px]

        overflow-hidden

        border
        border-[#343638]

        transition-all
        duration-500

        hover:border-[#D0E46A]
        hover:translate-y-[-6px]
      "
    >
      {/* TOP CONTENT BOX */}
      <div
        className="
          flex
          flex-col

          items-start

          gap-[10px]

          self-stretch

          p-[24px]

          rounded-t-[20px]

          bg-[#282A2C]

          min-h-[220px]
        "
      >
        {/* TEXT */}
        <p
          className="
            text-[#E4E4E4]

            text-[18px]
            leading-[32px]

            font-medium
          "
        >
          “{item.text}”
        </p>
      </div>

      {/* BOTTOM USER BOX */}
      <div
        className="
          flex
          items-center

          gap-[14px]

          px-[24px]
          py-[20px]

          bg-[#1E2022]

          border-t
          border-[#3A3D3F]
        "
      >
        {/* IMAGE */}
        <img
          src={item.img}
          alt={item.name}
          className="
            w-[60px]
            h-[60px]

            rounded-full

            object-cover
          "
        />

        {/* INFO */}
        <div
          className="
            flex
            flex-col

            gap-[2px]
          "
        >
          <h4
            className="
              text-[#F0F0F0]

              font-black

              text-[22px]
              leading-[28px]
            "
          >
            {item.name}
          </h4>

          <p
            className="
              text-[#B0B0B0]

              text-[14px]
              leading-[22px]
            "
          >
            {item.role}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}
