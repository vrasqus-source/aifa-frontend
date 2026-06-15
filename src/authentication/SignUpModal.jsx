import { useState } from "react";

export default function SignUpModal({ onClose, onSwitchToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleContinue = async () => {
    setError("");
    if (!name || !email || !phone) {
      setError("Please fill in all fields.");
      return;
    }
    setStep(2);
  };

  const handleSignup = async () => {
    setError("");
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Signup failed.");
      } else {
        localStorage.setItem("aifa_token", data.token);
        localStorage.setItem("aifa_user", JSON.stringify({ name: data.name, _id: data._id, role: data.role }));
        onClose();
        window.location.reload();
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-[#0B0F10] rounded-[32px] p-6 md:p-10 relative border border-white/10"
      >
        {/* CLOSE */}
        <button onClick={onClose} className="absolute top-5 right-5 text-white text-2xl">
          ✕
        </button>

        {/* HEADER */}
        <p className="text-gray-400 text-sm mb-1">Step {step} Of 2</p>
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-8">Sign up</h2>

        {step === 1 ? (
          <>
            {/* NAME */}
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white mb-4 outline-none focus:border-[#C7E36B]"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white mb-4 outline-none focus:border-[#C7E36B]"
            />

            {/* PHONE */}
            <div className="flex gap-3 mb-6">
              <div className="flex items-center gap-2 border border-white/20 rounded-xl px-4 py-3 text-white">
                +91
                <span className="text-xs">⌄</span>
              </div>
              <input
                type="text"
                placeholder="Enter Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white outline-none focus:border-[#C7E36B]"
              />
            </div>

            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

            <button
              onClick={handleContinue}
              className="w-full bg-[#C7E36B] text-black py-3 rounded-md font-semibold"
            >
              + CONTINUE
            </button>
          </>
        ) : (
          <>
            {/* PASSWORD STEP */}
            <p className="text-gray-400 text-sm mb-4">Create a password for your account</p>
            <input
              type="password"
              placeholder="Create Password (min 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSignup()}
              className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white mb-6 outline-none focus:border-[#C7E36B]"
            />

            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

            <button
              onClick={handleSignup}
              disabled={loading}
              className="w-full bg-[#C7E36B] text-black py-3 rounded-md font-semibold disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "+ CREATE ACCOUNT"}
            </button>

            <button
              onClick={() => setStep(1)}
              className="w-full mt-3 text-gray-400 text-sm underline"
            >
              Back
            </button>
          </>
        )}

        <p className="text-gray-400 text-sm mt-4">
          Already have an account?{" "}
          <span onClick={onSwitchToLogin} className="text-blue-400 cursor-pointer">
            Click here
          </span>
        </p>

        <p className="text-gray-500 text-xs mt-6">
          By creating an account I have read and agree to{" "}
          <span className="text-blue-400">Terms</span> and{" "}
          <span className="text-blue-400">Privacy policy</span>
        </p>
      </div>
    </div>
  );
}
