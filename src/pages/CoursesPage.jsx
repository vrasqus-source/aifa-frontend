"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProPlanBanner from "./ProPlanBanner";

const parseDurationMinutes = (d) => {
  const m = d.match(/(\d+)h\s*(\d+)m/);
  if (m) return parseInt(m[1]) * 60 + parseInt(m[2]);
  const h = d.match(/(\d+)h/);
  if (h) return parseInt(h[1]) * 60;
  return 0;
};

/* ---------------- MOCK FALLBACK ---------------- */
const MOCK_COURSES = [
  { _id: "m1", title: "AI Reels & Shorts Masterclass", description: "Master AI-powered tools to write engaging and impactful scripts.", image: "/courses/v1.png", duration: "1h 10m", price: 399, originalPrice: 799 },
  { _id: "m2", title: "AI Social Media Design Course", description: "Transform still images into dynamic visuals using AI tools.", image: "/courses/v2.png", duration: "1h 10m", price: 299, originalPrice: 799 },
  { _id: "m3", title: "AI Thumbnail Creation Masterclass", description: "Create realistic AI avatars with advanced editing techniques.", image: "/courses/v3.png", duration: "1h 10m", price: 349, originalPrice: 799 },
  { _id: "m4", title: "AI Video Editing Masterclass", description: "Design stunning virtual fashion models using AI technology.", image: "/courses/v4.png", duration: "2h 00m", price: 499, originalPrice: 999 },
  { _id: "m5", title: "AI Content Creation Bootcamp", description: "Restore and enhance colors in photos with AI precision.", image: "/courses/v5.png", duration: "1h 30m", price: 399, originalPrice: 799 },
  { _id: "m6", title: "AI Cinematic Storytelling", description: "Enhance facial details and clarity using powerful AI tools.", image: "/courses/v6.png", duration: "2h 15m", price: 599, originalPrice: 999 },
  { _id: "m7", title: "AI Scriptwriting Masterclass", description: "Build intelligent workflows and automate tasks using AI tools.", image: "/courses/v7.png", duration: "1h 45m", price: 449, originalPrice: 899 },
  { _id: "m8", title: "AI Visual Effects Course", description: "Create stunning AI-generated videos with cinematic precision.", image: "/courses/v8.png", duration: "2h 30m", price: 649, originalPrice: 1299 },
  { _id: "m9", title: "AI Sound Design Masterclass", description: "Generate immersive backgrounds and scenes using AI tools.", image: "/courses/v9.png", duration: "1h 20m", price: 349, originalPrice: 699 },
];

/* ---------------- MAIN PAGE ---------------- */
export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Newest");
  const [courses, setCourses] = useState(MOCK_COURSES);
  const [enrolling, setEnrolling] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("aifa_token");

  useEffect(() => {
    fetch("/api/courses")
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data) && data.length > 0) setCourses(data); })
      .catch(() => {});
  }, []);

  const handleBuy = async (course) => {
    if (!isLoggedIn) {
      alert("Please login or sign up to purchase a course.");
      return;
    }
    if (!course._id || course._id.startsWith("m")) {
      alert("Payment gateway coming soon!");
      return;
    }
    setEnrolling(course._id);
    try {
      const token = localStorage.getItem("aifa_token");
      const res = await fetch(`/api/courses/${course._id}/enroll`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        alert("Enrolled successfully! Go to your dashboard to watch.");
        navigate("/dashboard");
      } else {
        alert(data.message || "Enrollment failed.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setEnrolling(null);
    }
  };

  const options = ["Newest", "Price: Low to High", "Price: High to Low", "Duration"];

  /* FILTER */
  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase()),
  );

  /* SORT */
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (selected === "Duration") return parseDurationMinutes(a.duration) - parseDurationMinutes(b.duration);
    if (selected === "Price: Low to High") return a.price - b.price;
    if (selected === "Price: High to Low") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <section
        className="
          w-full
          bg-[#0F1112]

          flex
          justify-center
        "
      >
        {/* FIGMA CONTAINER */}
        <div
          className="
            w-full
            max-w-[1366px]

            flex
            flex-col

            items-center

            gap-[11px]

            px-[93px]
            py-[64px]

            bg-[#0F1112]

            max-sm:px-[16px]
            max-sm:py-[40px]
          "
        >
          {/* INNER */}
          <div
            className="
              w-full
              max-w-[1180px]
            "
          >
            {/* SEARCH + SORT */}
            <div
              className="
                flex
                flex-col
                md:flex-row

                justify-between
                items-center

                gap-6

                mb-12

                max-sm:items-stretch
                max-sm:mb-8
              "
            >
              {/* SEARCH */}
              <div className="w-full md:w-[60%] relative">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search Videos"
                  className="
                    w-full

                    bg-transparent

                    border
                    border-[#414243]

                    rounded-[12px]

                    px-12
                    py-3

                    text-white

                    placeholder-gray-500

                    outline-none

                    focus:border-white
                  "
                />

                <span
                  className="
                    absolute
                    left-4
                    top-1/2

                    -translate-y-1/2
                  "
                >
                  <img
                    src="/Searchicon.svg"
                    alt="search"
                    className="w-[18px] h-[18px]"
                  />
                </span>
              </div>

              {/* SORT */}
              <div className="relative w-full md:w-[260px]">
                <button
                  onClick={() => setOpen(!open)}
                  className="
                    w-full

                    flex
                    justify-between
                    items-center

                    border
                    border-[#414243]

                    px-4
                    py-3

                    rounded-[12px]

                    text-white

                    transition-all
                    duration-300

                    hover:bg-white/5
                  "
                >
                  <span>Sort By: {selected}</span>

                  <span
                    className={`
                      transition-all
                      duration-300
                      ${open ? "rotate-180" : ""}
                    `}
                  >
                    <img src="/Vectorup.svg" alt="arrow" className="w-[14px]" />
                  </span>
                </button>

                {open && (
                  <div
                    className="
                      absolute
                      top-full

                      mt-2

                      w-full

                      bg-[#1A1F22]

                      border
                      border-[#414243]

                      rounded-[12px]

                      overflow-hidden

                      z-50
                    "
                  >
                    <div
                      className="
                        px-4
                        py-3

                        text-gray-400
                        text-sm

                        border-b
                        border-[#414243]
                      "
                    >
                      Sort by
                    </div>

                    {options.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setSelected(item);
                          setOpen(false);
                        }}
                        className={`
                          px-4
                          py-3

                          cursor-pointer

                          text-sm

                          transition-all
                          duration-300

                          ${
                            selected === item
                              ? "bg-white/10 text-white"
                              : "text-gray-300 hover:bg-white/5"
                          }
                        `}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* GRID */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3

                gap-[20px]

                w-full

                max-sm:gap-[16px]
              "
            >
              {sortedCourses.map((course, i) => (
                <div
                  key={i}
                  className="
                    flex
                    flex-col

                    items-start
                    justify-between

                    w-full
                    max-w-[386px]

                    min-h-[477px]

                    rounded-[8px]

                    border
                    border-[#414243]

                    bg-[#0F1112]

                    overflow-hidden

                    transition-all
                    duration-300

                    hover:border-[#5A5B5C]
                    hover:translate-y-[-4px]

                    max-sm:max-w-full
                  "
                >
                  {/* IMAGE */}
                  <div className="relative w-full">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="
                        w-full
                        h-[240px]

                        object-cover
                      "
                    />

                    {/* DURATION */}
                    <span
                      className="
                        absolute
                        top-[14px]
                        left-[14px]

                        bg-black/80

                        text-white

                        text-[12px]
                        font-medium

                        px-[10px]
                        py-[6px]

                        rounded-[6px]
                      "
                    >
                      {course.duration}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                      flex
                      flex-col

                      items-start

                      gap-[16px]

                      w-full

                      p-[24px]

                      flex-1

                      max-sm:p-[18px]
                    "
                  >
                    {/* TITLE */}
                    <h3
                      className="
    text-[#F0F0F0]

    font-[Montserrat]
    text-[18px]
    font-semibold
    leading-[28px]

    max-sm:text-[16px]
    max-sm:leading-[24px]
  "
                    >
                      {course.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
    self-stretch
    max-h-[48px]

    text-[#767779]

    font-[Montserrat]
    text-[16px]
    font-normal
    leading-[24px]

    [font-feature-settings:'case'_on]

    overflow-hidden
  "
                    >
                      {course.description || course.desc}
                    </p>
                    {/* PRICE */}
                    <div className="flex items-center gap-[8px] self-stretch mt-auto">
                      {course.originalPrice && course.originalPrice > course.price && (
                        <span className="text-[#C7E36B] font-[Montserrat] text-[14px] font-semibold leading-[22px]">
                          {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                        </span>
                      )}
                      {course.originalPrice && course.originalPrice > course.price && (
                        <span className="line-through text-[#6F6F6F] font-[Montserrat] text-[14px] font-normal leading-[22px]">
                          ₹{course.originalPrice}
                        </span>
                      )}
                    </div>
                    {/* BUTTON */}
                    <button
                      onClick={() => handleBuy(course)}
                      disabled={enrolling === course._id}
                      className="flex justify-center items-center gap-[8px] self-stretch px-[16px] py-[8px] rounded-[4px] bg-[#F0F0F0] text-black text-[14px] font-semibold leading-[24px] transition-all duration-300 hover:bg-white disabled:opacity-60"
                    >
                      {enrolling === course._id ? "Enrolling..." : `BUY ₹${course.price}.00`}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <ProPlanBanner />
    </>
  );
}
