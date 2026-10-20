<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../Configs/api.config";
import NavBar from "../LandingPage/NavBar";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    cnic: "",
    referralCode: "",
    isTermsAgreed: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.referralCode !== "SE-0301") {
      alert("Invalid Referral Code! Please use 'SE-0301'");
      setLoading(false);
      return;
    }

    if (!formData.isTermsAgreed) {
      alert("You must agree to the terms and conditions.");
      setLoading(false);
      return;
    }

    try {
      const res = await API.post("/api/auth/register", formData);
      
      if (res.status === 201 || res.data?.success) {
        alert("Registration successful! Logging in...");
        
        // Auto-login request right after registration
        const loginRes = await API.post("/api/auth/login", {
          email: formData.email,
          password: formData.password,
        });

        if (loginRes.status === 200 || loginRes.data?.success) {
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
      }
    } catch (error) {
      console.log("Registration error:", error);
      alert(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Responsive Navbar */}
      <NavBar />
      

      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side Branding */}
        <div className="lg:w-5/12 bg-[#090a16] text-white p-6 sm:p-12 flex flex-col justify-between">
          <div className="my-auto space-y-4">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Build Your Future with SE Marketing
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Join thousands of professionals and businesses growing with premium digital solutions.
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:w-7/12 flex items-center justify-center p-4 sm:p-8 bg-gray-50">
          <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 w-full max-w-2xl">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Create your account</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Start your journey in under a minute.</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Full Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">CNIC</label>
                  <input
                    type="text"
                    name="cnic"
                    value={formData.cnic}
                    onChange={handleChange}
                    required
                    placeholder="XXXXX-XXXXXXX-X"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">Referral Code *</label>
                  <input
                    type="text"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleChange}
                    required
                    placeholder="Referral"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff] text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  name="isTermsAgreed"
                  id="isTermsAgreed"
                  checked={formData.isTermsAgreed}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 text-[#8257ff] border-gray-300 rounded focus:ring-[#8257ff]"
                />
                <label htmlFor="isTermsAgreed" className="text-xs sm:text-sm text-gray-600">
                  I agree to the <span className="text-[#8257ff] font-medium">Terms & Conditions</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 py-3 bg-[#8257ff] text-white font-semibold rounded-xl hover:bg-[#6c42e8] transition shadow-lg shadow-[#8257ff]/25 text-sm"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <p className="text-xs sm:text-sm text-center text-gray-500 mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-[#8257ff] font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "../LandingPage/NavBar"

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    country: '',
    password: '',
    confirmPassword: '',
    address: '',
    cnic: '',
    referralCode: '',
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (name === 'referralCode') {
      setErrorMsg('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Password Match Check
    if (formData.password !== formData.confirmPassword) {
      setErrorMsg('Passwords do not match!');
      setSuccessMsg('');
      return;
    }

    // 2. Strict Referral Code Check (SE-0301)
    if (formData.referralCode.trim() !== 'SE-0301') {
      setErrorMsg('Invalid Referral Code!');
      setSuccessMsg('');
      return;
    }

    setErrorMsg('');

    // 3. Prepare User Data Object
    const newUser = {
      id: Date.now(),
      fullName: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      mobileNumber: formData.mobileNumber.trim(),
      country: formData.country,
      password: formData.password,
      address: formData.address.trim(),
      cnic: formData.cnic.trim(),
      referralCode: formData.referralCode.trim(),
      isTermsAgreed: formData.agreeTerms,
      createdAt: new Date().toISOString(),
    };

    // 4. Save to All Users List in LocalStorage
    const existingUsers = JSON.parse(localStorage.getItem('se_marketing_users')) || [];
    
    // Email Duplicate Check
    const isEmailExists = existingUsers.some((u) => u.email === newUser.email);
    if (isEmailExists) {
      setErrorMsg('This Email is Already Registered');
      return;
    }

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('se_marketing_users', JSON.stringify(updatedUsers));

    // 5. Save Current Active Session User
    localStorage.setItem('current_user', JSON.stringify(newUser));

    setSuccessMsg('Account created successfully! Redirecting to dashboard...');

    // 6. Redirect to Dashboard Page after 1.5 Seconds
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div><NavBar/>
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white">
      


      {/* LEFT SIDEBAR (DARK GRADIENT BRANDING PANEL) */}
      <div className="lg:col-span-5 bg-[#0b0c1e] text-white p-8 lg:p-14 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-10 right-10 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Brand Logo */}
        <div className="flex items-center space-x-3 relative z-10">
          <div className="w-10 h-10 rounded-full bg-[#8257ff] flex items-center justify-center text-white shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">SE Marketing</span>
        </div>

        {/* Center Content */}
        <div className="my-auto py-12 relative z-10 max-w-md">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
            Build Your Future with SE Marketing
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Join thousands of professionals and businesses growing with premium digital solutions.
          </p>
        </div>

        <div className="text-xs text-gray-500 relative z-10">
          © 2026 SE Marketing. All rights reserved.
        </div>
      </div>

      {/* RIGHT FORM CONTAINER */}
      <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-12 bg-slate-50/50">
        <div className="w-full max-w-xl bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
          
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Create your account
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Start your journey in under a minute.
            </p>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-2">
              <span>⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Success Banner */}
          {successMsg && (
            <div className="mb-5 p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs font-semibold flex items-center gap-2">
              <span>✅</span>
              <span>{successMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#8257ff] focus:ring-1 focus:ring-[#8257ff] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#8257ff] focus:ring-1 focus:ring-[#8257ff] transition"
                />
              </div>
            </div>

            {/* Row 2: Mobile Number & Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="+1 555 123 4567"
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#8257ff] focus:ring-1 focus:ring-[#8257ff] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 text-gray-600 focus:outline-none focus:border-[#8257ff] focus:ring-1 focus:ring-[#8257ff] transition bg-white"
                >
                  <option value="">Select your country</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                </select>
              </div>
            </div>

            {/* Row 3: Password & Confirm Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#8257ff] focus:ring-1 focus:ring-[#8257ff] transition pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                  >
                    👁
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#8257ff] focus:ring-1 focus:ring-[#8257ff] transition pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                  >
                    👁
                  </button>
                </div>
              </div>
            </div>

            {/* Row 4: Full Address */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Full Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#8257ff] focus:ring-1 focus:ring-[#8257ff] transition"
              />
            </div>

            {/* Row 5: CNIC & Referral Code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">CNIC</label>
                <input
                  type="text"
                  name="cnic"
                  value={formData.cnic}
                  onChange={handleChange}
                  placeholder="XXXXX-XXXXXXX-X"
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#8257ff] focus:ring-1 focus:ring-[#8257ff] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Referral Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="referralCode"
                  value={formData.referralCode}
                  onChange={handleChange}
                  placeholder="Refferal Code"
                  required
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border transition focus:outline-none ${
                    errorMsg && errorMsg.includes('Referral')
                      ? 'border-red-400 bg-red-50/50'
                      : 'border-gray-200 focus:border-[#8257ff] focus:ring-1 focus:ring-[#8257ff]'
                  }`}
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-center space-x-2 pt-2">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                className="w-4 h-4 rounded text-[#8257ff] focus:ring-[#8257ff] border-gray-300"
              />
              <label htmlFor="agreeTerms" className="text-xs text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-[#8257ff] font-semibold hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#8257ff] hover:bg-[#6f42ec] text-white font-bold rounded-2xl text-sm transition-all duration-200 shadow-md hover:shadow-lg mt-4"
            >
              Create Account
            </button>

          </form>

          {/* Sign In Link */}
          <div className="text-center mt-6 text-xs text-gray-500">
            Already have an account?{' '}
            <a href="/login" className="text-[#8257ff] font-bold hover:underline">
              Sign In
            </a>
          </div>

        </div>
      </div>

    </div>
    </div>
  );
};

export default Register;
>>>>>>> f77442eb0f987ea25bd6616b52935ef79ea34515
