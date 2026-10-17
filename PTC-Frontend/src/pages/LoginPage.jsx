/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [error, setError] = useState("");
  const [showSupportModal, setShowSupportModal] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const whatsappNumber = "+92 300 1234567";
  const whatsappLink = "https://wa.me/923001234567";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.length === 0) {
      setError("Account Not Found!");
      return;
    }
    const foundUser = users.find(
      (u) => u.email.toLowerCase() === form.email.toLowerCase() && u.password === form.password
    );
    if (foundUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      navigate("/dashboard");
    } else {
      setError("Email or Password is incorrect!");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ===== TOP BAR ===== */}
      <div className="bg-black text-white text-center py-2.5 text- sm:text-sm px-4 leading-tight">
        <span className="bg-[#00C950] text- px-2 py-0.5 rounded-full mr-2 font-bold">LIVE</span>
        Over $150,000+ paid out to verified members this month! Join Now →
      </div>

      {/* ===== NAVBAR ===== */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3 bg-white sticky top-0 z-40 border-b">
        <Link to="/" className="flex gap-2 items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg text-white flex items-center justify-center font-bold text-sm">SE</div>
          <div className="leading-none">
            <p className="font-bold text-sm">SE MARKETING</p>
            <p className="text-blue-600 font-bold text- tracking-widest">SOLUTION</p>
          </div>
        </Link>
        <div className="hidden lg:flex gap-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-black">About Us</a>
          <a href="#how-it-works" className="hover:text-black">How It Works</a>
          <a href="#plans" className="hover:text-black">Plans</a>
          <a href="#testimonials" className="hover:text-black">Testimonials</a>
          <a href="#faq" className="hover:text-black">FAQ</a>
        </div>
        <div className="flex gap-3 items-center">
          <div className="hidden sm:flex gap-2 items-center">
            <Link to="/login" className="text-sm font-bold border px-5 rounded-lg py-2">Log In</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-bold">Get Started</Link>
          </div>
          <button onClick={()=> setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden w-9 h-9 border rounded-lg flex items-center justify-center text-lg">☰</button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b px-6 py-4 space-y-3 shadow-sm animate-in">
          <a href="#about" className="block py-2 text-sm">About Us</a>
          <a href="#how-it-works" className="block py-2 text-sm">How It Works</a>
          <a href="#plans" className="block py-2 text-sm">Plans</a>
          <div className="pt-3 flex gap-3">
            <Link to="/login" className="flex-1 border text-center py-2.5 rounded-xl text-sm font-bold">Log In</Link>
            <Link to="/signup" className="flex-1 bg-blue-600 text-white text-center py-2.5 rounded-xl text-sm font-bold">Get Started</Link>
          </div>
        </div>
      )}
      
      {/* ===== MAIN LOGIN BOX ===== */}
      <div className="bg-[#F8FBFF] flex items-center justify-center p-4 py-8 sm:py-12">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden">
          
          {/* Left - Branding - DESKTOP ONLY */}
          <div className="bg-[#0A1220] text-white p-8 lg:p-10 hidden lg:flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="flex gap-2 items-center">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center font-bold">SE</div>
                <div className="leading-none">
                  <p className="font-bold text-sm">SE MARKETING</p>
                  <p className="text-xs text-blue-400 font-bold">SOLUTION</p>
                </div>
              </div>
              <h2 className="text- font-extrabold leading-[1.1] mt-16">
                Welcome Back.<br/>Your Earnings<br/>Are Waiting.
              </h2>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">Log in to access your dashboard, daily video tasks and instant withdrawals.</p>
            </div>
            <p className="relative text-xs text-gray-500">Trusted by brands like BBC World • 99.9% Trust Score</p>
          </div>

          {/* Right - Form - MOBILE FIXED */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10 bg-white">
            {/* Mobile pe small header show */}
            <div className="lg:hidden flex gap-2 items-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg text-white flex items-center justify-center font-bold text-sm">SE</div>
              <div className="leading-none">
                <p className="font-bold text-sm">SE MARKETING SOLUTION</p>
                <p className="text- text-gray-500">Welcome back</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold">Log In</h2>
            <p className="text-sm text-gray-500 mt-1">Access your dashboard and start earning.</p>

            <div className="mt-6 space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}
              
              <div>
                <label className="font-semibold text-">Email Address</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@email.com" className="w-full mt-1.5 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-600" required />
              </div>
              <div>
                <div className="flex justify-between">
                  <label className="font-semibold text-">Password</label>
                  <span onClick={() => setShowSupportModal(true)} className="text- text-blue-600 cursor-pointer font-medium">Forgot?</span>
                </div>
                <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Your password" className="w-full mt-1.5 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-600" required />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <input name="remember" checked={form.remember} onChange={handleChange} type="checkbox" className="rounded" />
                <span className="text-gray-600 text-">Remember me</span>
              </div>

              <button type="submit" className="w-full bg-[#0F172A] text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-black transition">
                Log In to Dashboard →
              </button>
              <button type="button" onClick={() => setShowSupportModal(true)} className="w-full bg-white border border-gray-200 py-3 rounded-xl text-sm font-medium hover:bg-gray-50">
                💬 Contact WhatsApp Support
              </button>
              <div className="text-center text-sm text-gray-500 pt-2">
                Don't have an account? <Link to="/signup" className="text-blue-600 font-semibold">Create your account</Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      {showSupportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm relative">
            <button onClick={() => setShowSupportModal(false)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">✕</button>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">💬</div>
            <h3 className="font-bold mt-4">Need Help?</h3>
            <p className="text-sm text-gray-500 mt-2">Contact support on WhatsApp.</p>
            <div className="mt-4 bg-gray-50 border rounded-xl p-3 font-bold text-sm">{whatsappNumber}</div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 w-full bg-[#25D366] text-white py-3 rounded-xl font-bold flex items-center justify-center">Chat on WhatsApp</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
