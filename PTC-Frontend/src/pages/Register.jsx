
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
