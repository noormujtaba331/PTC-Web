/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", cnic: "", password: "", referralCode: ""
  });

  const whatsappNumber = "+92 300 1234567";
  const whatsappLink = "https://wa.me/923001234567";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.fullName || !form.email || !form.password || !form.referralCode) {
      setError("Sare required fields bharo!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const alreadyExists = existingUsers.find(u => u.email.toLowerCase() === form.email.toLowerCase());
    if (alreadyExists) {
      setError("Ye email pehle se registered hai! Login karo.");
      return;
    }

    const newUser = {
      id: Date.now(),
      fullName: form.fullName,
      name: form.fullName,
      email: form.email,
      phone: form.phone,
      cnic: form.cnic,
      password: form.password,
      referralCode: form.referralCode,
      createdAt: new Date().toISOString()
    };

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Auto Login
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    // --- PLAN STATUS PENDING ADD KARNA ---
    localStorage.setItem("se_plan_status", "Pending");
    localStorage.setItem("se_plan_name", "");
    localStorage.setItem("se_balance", "0");
    localStorage.setItem("se_watched_ads", "0");
    localStorage.removeItem("se_payment_payload"); // purana payment clear

    console.log("=== SIGNUP SUCCESS WITH PENDING PLAN ===", newUser);

    setForm({ fullName: "", email: "", phone: "", cnic: "", password: "", referralCode: "" });

    navigate("/dashboard");
  };

  const copyNumber = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="bg-[#0A1220] text-white text-center py-2 text- px-4">
        <span className="bg-[#00C950] text- px-2 py-0.5 rounded-full mr-2 font-bold">LIVE</span>
        Over $150,000+ paid out to verified members this month! Join Now →
      </div>

      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 border border-white/20 bg-white/5 p-8 shadow-2xl backdrop-blur-3xl rounded-b-4xl backdrop-saturate-100 transition-all duration-500 hover:bg-white/10 inset-shadow-[0_4px_12px_rgba(255,255,255,0.3)] sticky top-0 bg-white z-50">
        <Link to="/" className="flex gap-2 items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg text-white flex items-center justify-center font-bold">SE</div>
          <div className="leading-none">
            <p className="font-bold">SE MARKETING</p>
            <p className="text-blue-600 font-bold">SOLUTION</p>
          </div>
        </Link>
        <div className="hidden lg:flex gap-6 text-gray-600">
          <a href="#about">About Us</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#plans">Plans</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="flex gap-3 items-center">
          <div className="hidden sm:flex gap-3 items-center">
            <Link to="/login" className="text- font-bold border px-6 rounded-lg py-2">Log In</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-lg text- font-bold">Get Started</Link>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden w-8 h-8 border rounded-lg flex items-center justify-center">☰</button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b px-6 py-4 space-y-3 shadow-sm">
          <a href="#about" className="block py-2">About Us</a>
          <a href="#how-it-works" className="block py-2">How It Works</a>
          <a href="#plans" className="block py-2">Plans</a>
          <a href="#testimonials" className="block py-2">Testimonials</a>
          <a href="#faq" className="block py-2">FAQ</a>
          <div className="pt-2 flex gap-3">
            <Link to="/login" className="flex-1 border text-center py-2 rounded-lg">Log In</Link>
            <Link to="/signup" className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg">Get Started</Link>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-[#F8FBFF] flex relative">
        <div className="hidden lg:flex w-[45%] bg-[#0A1220] text-white p-10 flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w- h- bg-blue-600/20 rounded-full blur-"></div>
          <div>
            <div className="flex gap-2 items-center">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center font-bold">SE</div>
              <div className="leading-none">
                <p className="font-bold text-">SE MARKETING</p>
                <p className="text- text-blue-400 font-bold">SOLUTION</p>
              </div>
            </div>
            <h1 className="text- font-extrabold leading-[1.05] mt-16">Join 25,480+ Members<br />Earning Daily.</h1>
            <p className="text-gray-400 text- mt-4 max-w-">Create your free account in 60 seconds. Verified campaigns, instant withdrawals, 99.9% trust score.</p>
          </div>
          <p className="text- text-gray-500">© 2026 SE Marketing Solution. All rights reserved.</p>
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
          <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded- shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-8 w-full max-w-">
            <h2 className="text- font-bold">Create Account</h2>
            <p className="text- text-gray-500 mt-1">Start earning in under a minute.</p>

            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 text-red-600 text- px-4 py-3 rounded-xl">{error}</div>
            )}

            <div className="mt-6 space-y-4">
              <div>
                <label className="text- font-medium">Full Name</label>
                <input name="fullName" value={form.fullName} onChange={handleChange} type="text" placeholder="Ahmad Ali" className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-" required />
              </div>
              <div>
                <label className="text- font-medium">Email Address</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@email.com" className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text- font-medium">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} type="text" placeholder="+92 3xx xxxxxxx" className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-" />
                </div>
                <div>
                  <label className="text- font-medium">CNIC / ID</label>
                  <input name="cnic" value={form.cnic} onChange={handleChange} type="text" placeholder="42201-xxxxxxx-x" className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-" />
                </div>
              </div>
              <div>
                <label className="text- font-medium">Password</label>
                <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Min. 8 characters" className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-" required />
              </div>
              <div>
                <label className="text- font-medium">Referral Code (Required)</label>
                <p className="text- text-red-500 mt-1">Don't have an Referral Code? <span onClick={() => setShowSupportModal(true)} className="text-blue-600 cursor-pointer underline font-bold">Contact Support</span></p>
                <input name="referralCode" required value={form.referralCode} onChange={handleChange} type="text" placeholder="Enter referral code" className="w-full mt-2 border border-gray-200 rounded-xl px-4 py-3 text-" />
              </div>
              <div className="flex items-center gap-2 text- text-gray-500">
                <input type="checkbox" required className="rounded" />
                <span>I agree to <b className="text-[#0F172A]">Terms</b> and <b className="text-[#0F172A]">Privacy</b></span>
              </div>
              <button type="submit" className="w-full bg-[#2563EB] text-white py-3.5 rounded-xl text- font-semibold hover:bg-blue-700 transition">Create Account →</button>
              <div className="text-center text- text-gray-500">
                Already have an account? <Link to="/login" className="text-blue-600 font-semibold">Log In</Link>
              </div>
            </div>
          </form>
        </div>

        {showSupportModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded- p-6 w-full max-w- relative shadow-2xl">
              <button onClick={() => setShowSupportModal(false)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">✕</button>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-">💬</div>
              <h3 className="text- font-bold mt-4">Need a Referral Code?</h3>
              <p className="text- text-gray-500 mt-2">Contact our support team on WhatsApp to get your referral code instantly.</p>
              <div className="mt-4 bg-gray-50 border rounded-xl p-3 flex items-center justify-between">
                <span className="font-bold text-">{whatsappNumber}</span>
                <button onClick={copyNumber} className="text- bg-white border px-3 py-1 rounded-full">{copied ? "Copied!" : "Copy"}</button>
              </div>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 w-full bg-[#25D366] text-white py-3 rounded-xl text- font-bold flex items-center justify-center gap-2">Chat on WhatsApp</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;