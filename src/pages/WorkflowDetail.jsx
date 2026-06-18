"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WORKFLOW_DATA = {
  title: "AI Filmmaking Masterclass",
  category: "MASTERCLASS",
  readTime: "45 Min Read",
  description: "Master the complete AI filmmaking pipeline from concept to final cut. Learn how to use cutting-edge AI tools to generate scripts, create visuals, add voiceovers, and produce a professional-quality short film.",
  author: { name: "Rahul Sharma", role: "AI Film Director & Instructor" },
  steps: [
    {
      title: "Concept & Idea Generation",
      prose: "Begin by defining your film's core concept. Use AI to brainstorm unique story ideas, identify your target audience, and craft a compelling premise that will resonate with viewers.",
      prompt: `Generate 5 unique short film concepts for a 3-minute film about human connection in the digital age. For each concept, provide:
1) A one-line premise
2) The emotional hook
3) The visual style
4) Key AI tools needed
Focus on concepts that can be produced entirely with AI tools.`,
    },
    {
      title: "Script Writing with AI",
      prose: "Transform your concept into a compelling script using AI assistance. Structure your narrative with a clear beginning, middle, and end, ensuring each scene serves the story.",
      prompt: `Write a 3-minute short film script about [YOUR CONCEPT]. Structure it as follows:
- ACT 1 (30 sec): Establish character and world
- ACT 2 (90 sec): Conflict and escalation
- ACT 3 (60 sec): Resolution and impact
Include scene descriptions, dialogue, and visual cues for AI generation.`,
    },
    {
      title: "Visual Generation & Storyboarding",
      prose: "Create stunning visuals using Midjourney, Stable Diffusion, or similar tools. Generate consistent character images, backgrounds, and key scenes that match your script.",
      prompt: `Midjourney prompt for cinematic scene: [SCENE DESCRIPTION], film photography style, anamorphic lens, 4K resolution, professional lighting, [COLOR GRADING STYLE], photorealistic, ultra detailed, --ar 16:9 --style raw --v 6`,
    },
    {
      title: "Voiceover & Sound Design",
      prose: "Add professional-quality narration and sound effects using AI voice generation tools like ElevenLabs. Create an immersive audio landscape that complements your visuals.",
      prompt: `Generate a professional voiceover script for this scene: [SCENE DESCRIPTION].
Tone: [EMOTIONAL TONE]. Pace: measured and thoughtful.
Include: natural pauses [pause], emphasis on key words [*word*], and breathing points.
Duration: approximately 30 seconds when read aloud.`,
    },
    {
      title: "Final Edit & Export",
      prose: "Combine all elements in your editing software. Use AI upscaling tools to enhance video quality, add color grading, and export in the appropriate format for your distribution platform.",
      prompt: `Create a color grading LUT description for this film style: [VISUAL STYLE].
Specify: shadow lift, highlight roll-off, midtone contrast, hue rotation for skin tones, saturation curve, and grain overlay settings.
Target aesthetic: [REFERENCE FILMS].`,
    },
  ],
};

export default function WorkflowDetail() {
  const [completed, setCompleted] = useState([]);
  const [voiceScript, setVoiceScript] = useState("");
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

  const progress = WORKFLOW_DATA.steps.length > 0 ? completed.length / WORKFLOW_DATA.steps.length : 0;
  const r = 40;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="bg-[#0B0F10] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-8">

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-5 text-xs text-gray-500">
              <button onClick={() => navigate(-1)} className="hover:text-white transition-all">← Back</button>
              <span>·</span>
              <span className="font-bold text-[#C7E36B]">{WORKFLOW_DATA.category}</span>
              <span>·</span>
              <span>{WORKFLOW_DATA.readTime}</span>
            </div>

            {/* Hero */}
            <h1 className="text-3xl font-black text-white mb-4">{WORKFLOW_DATA.title}</h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl">{WORKFLOW_DATA.description}</p>

            {/* Author card */}
            <div className="inline-flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl mb-10">
              <div className="w-10 h-10 rounded-full bg-[#C7E36B] flex items-center justify-center text-black font-black text-lg">
                {WORKFLOW_DATA.author.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{WORKFLOW_DATA.author.name}</p>
                <p className="text-xs text-gray-400">{WORKFLOW_DATA.author.role}</p>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-10">
              {WORKFLOW_DATA.steps.map((step, i) => (
                <div key={i} id={`step-${i}`} className="scroll-mt-24">
                  <div className="flex items-start gap-5">
                    {/* Step circle */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-black transition-all ${completed.includes(i) ? "bg-[#C7E36B] text-black" : "bg-white/10 text-white"}`}>
                      {completed.includes(i) ? "✓" : i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-bold text-white mb-3">{step.title}</h2>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5">{step.prose}</p>

                      {/* MASTER PROMPT box */}
                      <div className="bg-[#0F1112] border border-white/10 rounded-xl mb-5 overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
                          <span className="text-[10px] font-bold text-[#C7E36B] uppercase tracking-wider">MASTER PROMPT</span>
                          <button onClick={() => copyPrompt(step.prompt, i)}
                            className="flex items-center gap-1.5 text-[10px] text-gray-400 hover:text-white transition-all">
                            {copied === i
                              ? <span className="text-green-400">✓ Copied!</span>
                              : "📋 Copy"}
                          </button>
                        </div>
                        <pre className="px-4 py-4 text-xs text-gray-300 font-mono whitespace-pre-wrap leading-relaxed">{step.prompt}</pre>
                      </div>

                      <button onClick={() => markComplete(i)}
                        className={`text-sm font-semibold px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 border ${completed.includes(i)
                          ? "border-[#C7E36B]/40 bg-[#C7E36B]/10 text-[#C7E36B]"
                          : "border-white/15 bg-white/5 text-gray-300 hover:bg-white/10"}`}>
                        {completed.includes(i) ? "✓ Step Complete" : `Mark Step ${i + 1} Complete`}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Generate VO Script */}
            <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#C7E36B]/20 rounded-xl flex items-center justify-center text-xl">🎙</div>
                <div>
                  <h3 className="text-base font-bold text-white">Generate VO Script</h3>
                  <p className="text-xs text-gray-400">Auto-generate a voiceover script from your film concept</p>
                </div>
              </div>
              <textarea value={voiceScript} onChange={e => setVoiceScript(e.target.value)}
                placeholder="Describe your film concept here and we'll generate a professional VO script..."
                rows={4}
                className="w-full bg-[#1A1D1E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#C7E36B]/50 resize-none placeholder-gray-600 mb-3" />
              <button className="bg-[#C7E36B] text-black font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-lime-300 transition-all flex items-center gap-2">
                🎙 Generate Script
              </button>
            </div>

            {/* Certificate CTA */}
            {completed.length === WORKFLOW_DATA.steps.length ? (
              <div className="mt-8 bg-gradient-to-r from-[#C7E36B]/20 to-[#C7E36B]/5 border border-[#C7E36B]/30 rounded-2xl p-8 text-center">
                <p className="text-3xl mb-3">🎓</p>
                <h3 className="text-xl font-bold text-white mb-2">Ready to Export?</h3>
                <p className="text-sm text-gray-400 mb-5">You've completed all {WORKFLOW_DATA.steps.length} steps! Claim your certificate.</p>
                <button className="bg-[#C7E36B] text-black font-bold px-8 py-3 rounded-xl hover:bg-lime-300 transition-all text-sm">
                  Claim Your Certificate →
                </button>
              </div>
            ) : (
              <div className="mt-8 bg-white/3 border border-white/8 rounded-2xl p-6">
                <p className="text-sm text-gray-500 mb-3">
                  Complete all {WORKFLOW_DATA.steps.length} steps to claim your certificate
                  · <span className="text-white font-semibold">{completed.length} / {WORKFLOW_DATA.steps.length} done</span>
                </p>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-[#C7E36B] h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${(completed.length / WORKFLOW_DATA.steps.length) * 100}%` }} />
                </div>
              </div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div className="w-[280px] shrink-0">
            <div className="sticky top-24 space-y-4">

              {/* Progress ring */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                <svg width="100" height="100" viewBox="0 0 100 100" className="mx-auto mb-3">
                  <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                  <circle cx="50" cy="50" r={r} fill="none" stroke="#C7E36B" strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference * (1 - progress)}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    style={{ transition: "stroke-dashoffset 0.5s ease" }}
                  />
                  <text x="50" y="55" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
                    {Math.round(progress * 100)}%
                  </text>
                </svg>
                <p className="text-sm font-semibold text-white">{completed.length} / {WORKFLOW_DATA.steps.length} Steps Done</p>
                <p className="text-xs text-gray-400 mt-0.5">Keep going!</p>
              </div>

              {/* Contents list */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Contents</p>
                <div className="space-y-0.5">
                  {WORKFLOW_DATA.steps.map((step, i) => (
                    <a key={i} href={`#step-${i}`}
                      className={`flex items-center gap-2.5 text-xs py-2 px-2 rounded-lg hover:bg-white/5 transition-all ${completed.includes(i) ? "text-[#C7E36B]" : "text-gray-400 hover:text-white"}`}>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[8px] shrink-0 ${completed.includes(i) ? "bg-[#C7E36B] border-[#C7E36B] text-black font-black" : "border-white/30"}`}>
                        {completed.includes(i) ? "✓" : i + 1}
                      </span>
                      <span className="line-clamp-1">{step.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Book Office Hours */}
              <button className="w-full bg-white/10 border border-white/15 text-white font-semibold text-sm py-3 rounded-xl hover:bg-white/15 transition-all flex items-center justify-center gap-2">
                📅 Book Office Hours
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
