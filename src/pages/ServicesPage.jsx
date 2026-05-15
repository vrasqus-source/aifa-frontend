"use client";

export default function ServicesPage() {
  return (
    <div className="bg-[#0F1112] text-white w-full">
      {/* 🔥 HERO */}
      <section
        className="
          flex flex-col
          justify-center
          items-center
          gap-[10px]
          self-stretch
          px-[10px]
          py-[64px]
          bg-[#0F1112]
        "
      >
        <div className="w-full max-w-7xl">
          <h1
            className="
      text-[#F0F0F0]
      text-center
      font-[Montserrat]
      text-[64px]
      not-italic
      font-[900]
      leading-[70px]
      mb-12
    "
          >
            AI Services for Creators, Teams & Businesses
          </h1>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="overflow-hidden rounded-[100px]">
              <img
                src="/3Dai/ai3d1.jpg"
                alt="AI 3D"
                className="w-full h-[306px] rounded-[200px] object-cover"
              />
            </div>

            <div>
              <p
                className="
    text-[#F0F0F0]
    font-[Montserrat]
    text-[18px]
    not-italic
    font-[700]
    leading-[28px]
    mb-2
  "
              >
                FOR TEAMS & ORGANISATIONS
              </p>

              <h2
                className="
    text-[#F0F0F0]
    font-[Montserrat]
    text-[48px]
    not-italic
    font-[900]
    leading-[56px]
    mb-4
  "
              >
                Corporate <br />
                & Institutional <br />
                Training
              </h2>
              <p
                className="
    text-[#DCDCDC]
    font-[Montserrat]
    text-[16px]
    not-italic
    font-[500]
    leading-[24px]
    mb-6
  "
                style={{
                  fontKerning: "none",
                  fontFeatureSettings: "'liga' off",
                }}
              >
                Upskill teams with structured AI filmmaking training tailored
                for real-world use.
              </p>

              <button
                className="
    flex
    justify-center
    items-center
    gap-[4px]
    px-[16px]
    py-[8px]
    rounded-[4px]
    bg-[#D0E46A]
  "
              >
                <span
                  className="
      text-black
      font-[Montserrat]
      text-[16px]
      font-[500]
      leading-[24px]
    "
                >
                  Talk to Us
                </span>

                <img
                  src="/Arrowleft2.svg"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 SECTION 2 */}
      <section
        className="
          flex flex-col
          justify-center
          items-center
          gap-[10px]
          self-stretch
          px-[10px]
          py-[64px]
          bg-[#0F1112]
        "
      >
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p
              className="
    text-[#F0F0F0]
    font-[Montserrat]
    text-[18px]
    not-italic
    font-[700]
    leading-[28px]
    mb-2
  "
            >
              FOR SCHOOLS & INSTITUTIONS
            </p>

            <h2
              className="
    text-[#F0F0F0]
    font-[Montserrat]
    text-[48px]
    not-italic
    font-[900]
    leading-[56px]
    mb-4
  "
            >
              Curriculum <br /> Consulting
            </h2>

            <p
              className="
    text-[#DCDCDC]
    font-[Montserrat]
    text-[16px]
    not-italic
    font-[500]
    leading-[24px]
    mb-6
  "
              style={{
                fontKerning: "none",
                fontFeatureSettings: "'liga' off",
              }}
            >
              Design industry-relevant AI courses and learning programs
              tailor-made to meet your student needs.
            </p>

            <button
              className="
    flex
    justify-center
    items-center
    gap-[4px]
    px-[16px]
    py-[8px]
    rounded-[4px]
    bg-[#D0E46A]
  "
            >
              <span
                className="
      text-black
      font-[Montserrat]
      text-[16px]
      font-[500]
      leading-[24px]
    "
              >
                Talk to Us
              </span>

              <img src="/Arrowleft2.svg" alt="" className="w-[24px] h-[24px]" />
            </button>
          </div>

          <div className="overflow-hidden rounded-[100px]">
            <img
              src="/3Dai/ai3d2.jpg"
              className="w-full h-[306px] rounded-[200px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* 🔥 SECTION 3 */}
      <section
        className="
          flex flex-col
          justify-center
          items-center
          gap-[10px]
          self-stretch
          px-[10px]
          py-[64px]
          bg-[#0F1112]
        "
      >
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-[100px]">
            <img
              src="/3Dai/ai3d3.jpg"
              className="w-full h-[306px] rounded-[200px] object-cover"
            />
          </div>

          <div>
            <p
              className="
    text-[#F0F0F0]
    font-[Montserrat]
    text-[18px]
    not-italic
    font-[700]
    leading-[28px]
    mb-2
  "
            >
              FOR CREATORS & TEAMS
            </p>

            <h2
              className="
    text-[#F0F0F0]
    font-[Montserrat]
    text-[48px]
    not-italic
    font-[900]
    leading-[56px]
    mb-4
  "
            >
              Production <br />
              Support
            </h2>

            <p
              className="
    text-[#DCDCDC]
    font-[Montserrat]
    text-[16px]
    not-italic
    font-[500]
    leading-[24px]
    mb-6
  "
              style={{
                fontKerning: "none",
                fontFeatureSettings: "'liga' off",
              }}
            >
              Get expert support to plan, create, and execute high-quality AI
              video projects.
            </p>

            <button
              className="
    flex
    justify-center
    items-center
    gap-[4px]
    px-[16px]
    py-[8px]
    rounded-[4px]
    bg-[#D0E46A]
  "
            >
              <span
                className="
      text-black
      font-[Montserrat]
      text-[16px]
      font-[500]
      leading-[24px]
    "
              >
                Talk to Us
              </span>

              <img src="/Arrowleft2.svg" alt="" className="w-[24px] h-[24px]" />
            </button>
          </div>
        </div>
      </section>

      {/* 🔥 SECTION 4 */}
      <section
        className="
          flex flex-col
          justify-center
          items-center
          gap-[10px]
          self-stretch
          px-[10px]
          py-[64px]
          bg-[#0F1112]
        "
      >
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p
              className="
    text-[#F0F0F0]
    font-[Montserrat]
    text-[18px]
    not-italic
    font-[700]
    leading-[28px]
    mb-2
  "
            >
              FOR BRANDS & BUSINESSES
            </p>

            <h2
              className="
    text-[#F0F0F0]
    font-[Montserrat]
    text-[48px]
    not-italic
    font-[900]
    leading-[56px]
    mb-4
  "
            >
              AI Content <br /> Production
            </h2>

            <p
              className="
    text-[#DCDCDC]
    font-[Montserrat]
    text-[16px]
    not-italic
    font-[500]
    leading-[24px]
    mb-6
  "
              style={{
                fontKerning: "none",
                fontFeatureSettings: "'liga' off",
              }}
            >
              Get expert support to plan, create, and execute high-quality AI
              video projects.
            </p>

            <button
              className="
    flex
    justify-center
    items-center
    gap-[4px]
    px-[16px]
    py-[8px]
    rounded-[4px]
    bg-[#D0E46A]
  "
            >
              <span
                className="
      text-black
      font-[Montserrat]
      text-[16px]
      font-[500]
      leading-[24px]
    "
              >
                Talk to Us
              </span>

              <img src="/Arrowleft2.svg" alt="" className="w-[24px] h-[24px]" />
            </button>
          </div>

          <div className="overflow-hidden rounded-[100px]">
            <img
              src="/3Dai/ai3d4.png"
              className="w-full h-[306px] rounded-[200px] object-cover"
            />
          </div>
        </div>
      </section>


      {/* 🔥 CONTACT FORM */}
      <section
        className="
    flex
    w-full
    flex-col
    justify-center
    items-center
    gap-[10px]

    px-[16px]
    sm:px-[24px]
    md:px-[40px]
    lg:px-[60px]
    xl:px-[93px]

    py-[64px]

    bg-[#0F1112]
  "
      >
        <div className="w-full max-w-[1180px]">
          {/* HEADING */}
          <h2
            className="
        text-[#F0F0F0]
        text-center
        font-[Montserrat]

        text-[32px]
        leading-[40px]

        sm:text-[40px]
        sm:leading-[48px]

        md:text-[48px]
        md:leading-[56px]

        not-italic
        font-[900]

        mb-12
      "
          >
            WE CAN HELP YOU!
          </h2>

          {/* FORM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FIRST NAME */}
            <div>
              <label className="block text-white text-[12px] font-semibold tracking-[0.6px] uppercase mb-2">
                First Name
              </label>

              <input
                type="text"
                className="
            w-full
            h-[48px]
            px-4
            rounded-[6px]
            bg-[#DCE8A3]
            outline-none
            text-black
          "
              />
            </div>

            {/* LAST NAME */}
            <div>
              <label className="block text-white text-[12px] font-semibold tracking-[0.6px] uppercase mb-2">
                Last Name (Required)
              </label>

              <input
                type="text"
                className="
            w-full
            h-[48px]
            px-4
            rounded-[6px]
            bg-[#DCE8A3]
            outline-none
            text-black
          "
              />
            </div>

            {/* EMAIL */}
            <div className="md:col-span-2">
              <label className="block text-white text-[12px] font-semibold tracking-[0.6px] uppercase mb-2">
                Email
              </label>

              <input
                type="email"
                className="
            w-full
            h-[48px]
            px-4
            rounded-[6px]
            bg-[#DCE8A3]
            outline-none
            text-black
          "
              />
            </div>

            {/* PHONE */}
            <div className="md:col-span-2">
              <label className="block text-white text-[12px] font-semibold tracking-[0.6px] uppercase mb-2">
                Phone
              </label>

              <input
                type="text"
                className="
            w-full
            h-[48px]
            px-4
            rounded-[6px]
            bg-[#DCE8A3]
            outline-none
            text-black
          "
              />
            </div>

            {/* SERVICES */}
            <div className="md:col-span-2 relative">
              <label className="block text-white text-[12px] font-semibold tracking-[0.6px] uppercase mb-2">
                Services
              </label>

              <select
                className="
            w-full
            h-[48px]
            px-4
            pr-10
            rounded-[6px]
            bg-[#DCE8A3]
            outline-none
            appearance-none
            text-black
          "
              >
                <option>Select Service</option>
                <option>AI Film Training</option>
                <option>Corporate Training</option>
              </select>

              <span className="absolute right-4 top-[42px] pointer-events-none">
                <img src="/Vectorarrow.svg" alt="" />
              </span>
            </div>

            {/* COUNTRY */}
            <div className="md:col-span-2 relative">
              <label className="block text-white text-[12px] font-semibold tracking-[0.6px] uppercase mb-2">
                Country
              </label>

              <select
                className="
            w-full
            h-[48px]
            px-4
            pr-10
            rounded-[6px]
            bg-[#DCE8A3]
            outline-none
            appearance-none
            text-black
          "
              >
                <option>Select Country</option>
                <option>India</option>
                <option>USA</option>
              </select>

              <span className="absolute right-4 top-[42px] pointer-events-none">
                <img src="/Vectorarrow.svg" alt="" />
              </span>
            </div>
          </div>

          {/* BUTTON */}
          <button
            className="
        mt-10
        w-full
        h-[44px]
        rounded-[4px]
        bg-[#EDEDED]
        text-black
        font-medium
      "
          >
            NEXT
          </button>
        </div>
      </section>
    </div>
  );
}
