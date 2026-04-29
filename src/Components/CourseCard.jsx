"use client";

export default function CourseCard() {
  return (
    <section className="w-full bg-[#0F1112] flex justify-center py-[48px]">
      <div className="w-full max-w-[1366px] flex flex-col">
        {/* TOP CARD */}
        <div className="flex w-full overflow-hidden rounded-t-[20px]">
          {/* IMAGE */}
          <div className="flex-1 basis-0">
            <img
              src="/courses/course.png"
              alt="course"
              className="w-full h-[383px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-[671px] flex flex-col justify-between items-start px-[24px] bg-[#414243]">
            {/* TEXT */}
            <div className="flex flex-col gap-[8px] py-[24px]">
              <p className="text-[#F0F0F0] font-montserrat text-[18px] leading-[28px] font-bold mt-12">
                BEGINNER
              </p>

              <h2 className="w-full text-[#F0F0F0] font-montserrat text-[32px] leading-[40px] font-bold mt-4">
                AI FILMMAKING BOOTCAMP
              </h2>

              <p className="text-[#F0F0F0] font-montserrat text-[16px] leading-[24px] font-medium capitalize max-w-[520px] mt-6">
                Master AI-powered filmmaking from concept to final cut while
                learning how to create stunning, high-quality films faster using
                cutting-edge AI tools.
              </p>
            </div>

            {/* BUTTON */}
            <div className="w-full pb-[24px]">
              <button className="flex w-full items-center justify-center gap-[4px] bg-[#D0E46A] text-[#0F1112] px-[30px] py-[12px] text-[18px] leading-[28px] font-bold font-montserrat rounded-[12px]">
                ENROLL BOOTCAMP
              </button>
            </div>
          </div>
        </div>{" "}
        {/* ✅ CLOSED TOP CARD */}
        {/* BOTTOM BAR */}
        <div className="flex bg-[#414243] overflow-hidden rounded-b-[12px] border-t border-black/40 mt-[8px]">
          {/* ITEM */}
          <div className="flex-1 px-[20px] py-[18px] flex flex-col gap-[6px] border-r border-black/40">
            <div className="flex items-center gap-[6px]">
              <img
                src="/Tagicon.svg"
                alt="duration"
                className="w-[14px] h-[14px]"
              />
              <p className="text-[#9CA3AF] text-[12px] uppercase tracking-[0.08em]">
                Duration
              </p>
            </div>

            <p className="text-[#F0F0F0] text-[18px] font-semibold">3 HOURS</p>
          </div>

          {/* ITEM */}
          <div className="flex-1 px-[20px] py-[18px] flex flex-col gap-[6px] border-r border-black/40 ">
            <div className="flex items-center gap-[6px]">
              <img
                src="/Tagicon1.svg"
                alt="pricing"
                className="w-[14px] h-[14px]"
              />
              <p className="text-[#9CA3AF] text-[12px] uppercase tracking-[0.08em]">
                Pricing
              </p>
            </div>

            <p className="text-[#F0F0F0] text-[18px] font-semibold">₹499.00</p>
          </div>

          {/* ITEM */}
          <div className="flex-1 px-[20px] py-[18px] flex flex-col gap-[6px]">
            <div className="flex items-center gap-[6px]">
              <img
                src="/Tagicon2.svg"
                alt="access"
                className="w-[14px] h-[14px]"
              />
              <p className="text-[#9CA3AF] text-[12px] uppercase tracking-[0.08em]">
                Access
              </p>
            </div>

            <p className="text-[#F0F0F0] text-[18px] font-semibold">Lifetime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
