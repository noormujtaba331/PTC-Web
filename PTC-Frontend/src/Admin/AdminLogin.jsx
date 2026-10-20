/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@semarketing.com" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/overview");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 font-sans">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-md w-96 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff]"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff]"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2.5 bg-[#8257ff] text-white font-medium rounded-xl hover:bg-[#6c42e8] transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}