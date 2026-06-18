"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PROJECT_DATA = {
  title: "AI Commercial Product Ad",
  categories: ["FILMMAKING", "PRODUCT AD"],
  description: "A complete walkthrough for producing a cinematic product advertisement using AI tools. From concept to final export, learn the entire pipeline for creating studio-quality commercial ads.",
  banner: "/workflow/workflow1.png",
  author: { name: "Priya Mehta", role: "Creative Director", views: "2.4k", replications: "187", published: "Nov 2024" },
  stats: [
    { label: "Time", value: "3–5 Days" },
    { label: "Difficulty", value: "Intermediate" },
    { label: "Tools", value: "5 AI Tools" },
  ],
  steps: [
    {
      title: "Brief & Concept",
      description: "Define the product, target audience, and key message. Create a mood board using reference images.",
      prompt: `You are a creative director for a luxury brand. Create a detailed creative brief for a 30-second product commercial.
Product: [PRODUCT NAME]
Target audience: [DEMOGRAPHICS]
Key message: [SINGLE KEY BENEFIT]
Visual style: [STYLE REFERENCE]
Include: hero shot description, supporting scenes, CTA.`,
    },
    {
      title: "Visual Generation",
      description: "Generate hero product shots and lifestyle images using Midjourney or Stable Diffusion.",
      prompt: `Product photography prompt: [PRODUCT] on [SURFACE], studio lighting, white seamless background, 8K resolution, professional product photography, specular highlights, depth of field, --ar 1:1 --style raw --v 6`,
    },
    {
      title: "Motion & Animation",
      description: "Animate still images using Runway Gen-3 or Kling AI. Create smooth product reveals and transitions.",
      prompt: `Animate this product image: slow 360-degree rotation, subtle zoom in 2%, soft bokeh background transition, studio lighting maintained throughout, 4 second loop, professional commercial feel.`,
    },
    {
      title: "Voiceover & Music",
      description: "Generate a professional voiceover using ElevenLabs. Layer with royalty-free background music.",
      prompt: `Professional commercial voiceover script for [PRODUCT], 30-second format:
- Opening hook (5 sec)
- Problem statement (5 sec)
- Product introduction (10 sec)
- Key benefits ×3 (10 sec)
- CTA (5 sec)
Tone: confident, aspirational. Target: urban professionals 25–40.`,
    },
    {
      title: "Final Edit & Delivery",
      description: "Combine all elements in CapCut or Premiere Pro. Export in multiple formats for different platforms.",
      prompt: `Color grading style for luxury product commercial: rich shadows with warm undertones, clean highlights preserving product detail, subtle film grain 15%, vignette 20% opacity, temperature +200K warm, teal-orange complementary palette for skin tones and shadows.`,
    },
  ],
  assets: [
    { name: "Project Brief Template.pdf", size: "240 KB" },
    { name: "Midjourney Prompts Pack.txt", size: "18 KB" },
    { name: "Color LUTs Collection.zip", size: "4.2 MB" },
    { name: "Sound Effects Library.zip", size: "88 MB" },
  ],
  similar: [
    { title: "AI Music Video Production", img: "/workflow/workflow2.png" },
    { title: "Documentary Filmmaking", img: "/workflow/workflow3.png" },
  ],
};

export default function ProjectDetail() {
  const [completed, setCompleted] = useState([]);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(null);
  const navigate = useNavigate();

  const markComplete = (i) => {
    setCompleted(c => c.includes(i) ? c.filter(x => x !== i) : [...c, i]);
  };

  const copyPrompt = (prompt, i) => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(i);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div className="bg-[#0B0F10] text-white min-h-screen">

      {/* ── Hero banner ── */}
      <div className="relative h-[300px] overflow-hidden">
        <img src={PROJECT_DATA.banner} alt="banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="max-w-7xl mx-auto w-full">
            <button onClick={() => navigate(-1)} className="text-xs text-gray-400 hover:text-white mb-4 flex items-center gap-1 transition-all">
              ← Back to Projects
            </button>
            <div className="flex gap-2 mb-3">
              {PROJECT_DATA.categories.map(c => (
                <span key={c} className="text-[10px] font-bold bg-[#C7E36B] text-black px-2.5 py-0.5 rounded-full">{c}</span>
              ))}
            </div>
            <h1 className="text-3xl font-black text-white mb-3">{PROJECT_DATA.title}</h1>
            <p className="text-gray-300 text-sm max-w-2xl mb-5">{PROJECT_DATA.description}</p>
            <div className="flex gap-3">
              <button className="bg-[#C7E36B] text-black font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-lime-300 transition-all">
                ↗ View Workflow
              </button>
              <button className="bg-white/20 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-white/30 transition-all backdrop-blur-sm">
                Use Prompts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">

          {/* Main */}
          <div className="flex-1 min-w-0">

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {PROJECT_DATA.stats.map(s => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1">{s.label}</p>
                  <p className="text-base font-bold text-white">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Process Breakdown */}
            <h2 className="text-lg font-bold text-white mb-5">Process Breakdown</h2>
            <div className="space-y-8">
              {PROJECT_DATA.steps.map((step, i) => (
                <div key={i} id={`pstep-${i}`} className="border-l-4 border-yellow-500/50 pl-6 scroll-mt-24">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-wider">STEP {i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{step.description}</p>

                  {/* Master Prompt */}
                  <div className="bg-[#0F1112] border border-white/10 rounded-xl mb-4 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
                      <span className="text-[10px] font-bold text-[#C7E36B] uppercase tracking-wider">MASTER PROMPT</span>
                      <button onClick={() => copyPrompt(step.prompt, i)}
                        className="text-[10px] text-gray-400 hover:text-white flex items-center gap-1 transition-all">
                        {copied === i ? <span className="text-green-400">✓ Copied!</span> : "📋 Copy"}
                      </button>
                    </div>
                    <pre className="px-4 py-4 text-xs text-gray-300 font-mono whitespace-pre-wrap leading-relaxed">{step.prompt}</pre>
                  </div>

                  <button onClick={() => markComplete(i)}
                    className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all border ${completed.includes(i)
                      ? "border-[#C7E36B]/40 bg-[#C7E36B]/10 text-[#C7E36B]"
                      : "border-white/15 bg-white/5 text-gray-300 hover:bg-white/10"}`}>
                    {completed.includes(i) ? "✓ Step Complete" : `Mark Step ${i + 1} Complete`}
                  </button>
                </div>
              ))}
            </div>

            {/* Project Assets */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white">Project Assets</h2>
                <button className="text-xs bg-[#C7E36B] text-black font-bold px-4 py-2 rounded-lg hover:bg-lime-300 flex items-center gap-1.5 transition-all">
                  ↓ Download All (.zip)
                </button>
              </div>
              <div className="space-y-2">
                {PROJECT_DATA.assets.map((asset, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-white/20 transition-all">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📄</span>
                      <div>
                        <p className="text-sm font-semibold text-white">{asset.name}</p>
                        <p className="text-[10px] text-gray-500">{asset.size}</p>
                      </div>
                    </div>
                    <button className="text-xs text-[#C7E36B] hover:underline flex items-center gap-1">↓ Download</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-[280px] shrink-0">
            <div className="sticky top-24 space-y-4">

              {/* Author card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#C7E36B] flex items-center justify-center text-black font-black text-lg">
                    {PROJECT_DATA.author.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{PROJECT_DATA.author.name}</p>
                    <p className="text-xs text-gray-400">{PROJECT_DATA.author.role}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[["Views", PROJECT_DATA.author.views], ["Replications", PROJECT_DATA.author.replications], ["Published", PROJECT_DATA.author.published]].map(([l, v]) => (
                    <div key={l} className="text-center bg-white/5 rounded-lg p-2">
                      <p className="text-xs font-bold text-white">{v}</p>
                      <p className="text-[9px] text-gray-500 mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setSaved(!saved)}
                    className={`flex-1 text-xs font-semibold py-2 rounded-lg border transition-all ${saved ? "border-[#C7E36B] text-[#C7E36B] bg-[#C7E36B]/10" : "border-white/20 text-gray-300 hover:bg-white/5"}`}>
                    {saved ? "✓ Saved" : "Save Project"}
                  </button>
                  <button className="flex-1 text-xs font-semibold py-2 rounded-lg border border-white/20 text-gray-300 hover:bg-white/5 transition-all">
                    Share
                  </button>
                </div>
              </div>

              {/* Quick Navigation */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Quick Navigation</p>
                <div className="space-y-0.5">
                  {PROJECT_DATA.steps.map((step, i) => (
                    <a key={i} href={`#pstep-${i}`}
                      className={`flex items-center gap-2 text-xs py-1.5 px-2 rounded-lg hover:bg-white/5 transition-all ${completed.includes(i) ? "text-[#C7E36B]" : "text-gray-400 hover:text-white"}`}>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[8px] shrink-0 ${completed.includes(i) ? "bg-[#C7E36B] border-[#C7E36B] text-black font-black" : "border-white/30"}`}>
                        {completed.includes(i) ? "✓" : i + 1}
                      </span>
                      <span className="line-clamp-1">{step.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Similar Projects */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Similar Projects</p>
                <div className="space-y-3">
                  {PROJECT_DATA.similar.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-all">
                      <img src={p.img} alt={p.title} className="w-14 h-10 object-cover rounded-lg" />
                      <p className="text-xs text-gray-300 font-medium">{p.title}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
