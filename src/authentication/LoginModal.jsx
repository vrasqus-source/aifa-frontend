import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { GOOGLE_OAUTH_ENABLED } from "../main.jsx";

function saveUser(data) {
  localStorage.setItem("aifa_token", data.token);
  localStorage.setItem("aifa_user", JSON.stringify({ name: data.name, _id: data._id, role: data.role }));
}

export default function LoginModal({ onClose, onSwitchToSignup }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotMsg, setForgotMsg] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    if (!email || !password) { setError("Please enter email and password."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed.");
      } else {
        saveUser(data);
        onClose();
        window.location.href = data.role === "admin" ? "/admin" : "/dashboard";
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: tokenResponse.access_token }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.message || "Google login failed.");
        } else {
          saveUser(data);
          onClose();
          window.location.href = data.role === "admin" ? "/admin" : "/dashboard";
        }
      } catch {
        setError("Google login failed. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    onError: () => setError("Google login was cancelled or failed."),
  });

  const handleForgotPassword = async () => {
    if (!forgotEmail) { setForgotMsg("Please enter your email."); return; }
    setForgotLoading(true);
    setForgotMsg("");
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });
      const data = await res.json();
      setForgotMsg(res.ok ? "Reset link sent! Check your email." : data.message || "Failed.");
    } catch {
      setForgotMsg("Network error. Please try again.");
    } finally {
      setForgotLoading(false);
    }
  };

  // FORGOT PASSWORD VIEW
  if (showForgot) {
    return (
      <div onClick={onClose} className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
        <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg bg-[#0B0F10] rounded-2xl p-6 md:p-8 relative border border-white/10">
          <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl">✕</button>
          <button onClick={() => setShowForgot(false)} className="text-gray-400 text-sm mb-4 hover:text-white flex items-center gap-1">
            ← Back to Login
          </button>
          <h2 className="text-white text-2xl font-semibold mb-2">Forgot Password</h2>
          <p className="text-gray-400 text-sm mb-6">Enter your email and we'll send a reset link.</p>
          <input
            type="email"
            placeholder="Enter your email"
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleForgotPassword()}
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white mb-4 outline-none focus:border-[#C7E36B]"
          />
          {forgotMsg && (
            <p className={`text-sm mb-3 ${forgotMsg.includes("sent") ? "text-green-400" : "text-red-400"}`}>
              {forgotMsg}
            </p>
          )}
          <button
            onClick={handleForgotPassword}
            disabled={forgotLoading}
            className="w-full bg-[#C7E36B] text-black py-3 rounded-md font-semibold disabled:opacity-60"
          >
            {forgotLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </div>
      </div>
    );
  }

  // MAIN LOGIN VIEW
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg bg-[#0B0F10] rounded-2xl p-6 md:p-8 relative border border-white/10">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl">✕</button>

        <p className="text-gray-400 text-sm">Step 1 Of 2</p>
        <h2 className="text-white text-3xl font-semibold mb-6">Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white mb-4 outline-none focus:border-[#C7E36B]"
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white mb-3 outline-none focus:border-[#C7E36B]"
        />

        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" id="show-pwd" onChange={() => setShowPassword(!showPassword)} />
          <label htmlFor="show-pwd" className="text-gray-400 text-sm cursor-pointer">Show password</label>
        </div>

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-[#C7E36B] text-black py-3 rounded-md font-semibold mb-4 disabled:opacity-60"
        >
          {loading ? "Logging in..." : "+ VERIFY AND LOGIN"}
        </button>

        <p
          onClick={() => setShowForgot(true)}
          className="text-center text-blue-400 text-sm mb-6 cursor-pointer hover:underline"
        >
          forgot password?
        </p>

        {GOOGLE_OAUTH_ENABLED && (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-[1px] bg-white/10"></div>
              <span className="text-gray-500 text-xs">OR</span>
              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>
            <button
              onClick={() => googleLogin()}
              disabled={loading}
              className="w-full border border-white/20 text-white py-3 rounded-md flex justify-center gap-2 hover:bg-white/5 disabled:opacity-60 transition-all"
            >
              <img src="/icons/google.png" className="w-4 h-4" alt="Google" />
              Login Via Google
            </button>
          </>
        )}

        <p className="text-center text-gray-400 text-sm mt-6">
          or create an account on Aifa?{" "}
          <span onClick={onSwitchToSignup} className="text-white underline cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
}
