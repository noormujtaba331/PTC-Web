/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../Configs/api.config";
import NavBar  from "../LandingPage/NavBar";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/api/auth/login", formData);

      if (res.status === 200 || res.data?.success) {
        // 2 minute ka temporary expiry time (2 * 60 * 1000 ms)
        const expiryTime = new Date().getTime() + 2 * 60 * 1000;

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loginExpiry", expiryTime.toString());

        if (res.data?.user) {
          localStorage.setItem("userData", JSON.stringify(res.data.user));
        }

        alert("Login successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Login error:", error);
      alert(error.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Top Header / Navbar */}
      <NavBar />
     

      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side Dark Branding Panel */}
        <div className="lg:w-5/12 bg-[#090a16] text-white p-8 sm:p-12 flex flex-col justify-between">
          <div className="my-auto space-y-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Welcome Back to SE Marketing
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
              Access your personalized dashboard, manage daily ad tasks, track your earnings, and grow seamlessly.
            </p>
          </div>
          <div className="text-xs text-gray-500 pt-8">
            © 2026 SE Marketing. All rights reserved.
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="lg:w-7/12 flex items-center justify-center p-6 sm:p-12 bg-gray-50">
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Sign in to your account</h2>
              <p className="text-sm text-gray-500 mt-1.5">Enter your email and password to continue.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff] text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 py-3.5 bg-[#8257ff] text-white font-semibold rounded-xl hover:bg-[#6c42e8] transition shadow-lg shadow-[#8257ff]/25 text-sm"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <p className="text-sm text-center text-gray-500 mt-8">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#8257ff] font-semibold hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
