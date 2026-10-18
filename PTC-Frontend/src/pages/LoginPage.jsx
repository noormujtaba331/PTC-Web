/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from "../LandingPage/NavBar"

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // LocalStorage se registered users ki list nikalna
    const existingUsers = JSON.parse(localStorage.getItem('se_marketing_users')) || [];

    // Check karna ki user exist karta hai ya nahi
    const foundUser = existingUsers.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (foundUser) {
      // Current user ko LocalStorage me save karna
      localStorage.setItem('current_user', JSON.stringify(foundUser));
      
      // Dashboard par redirect karna
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
    <NavBar/>
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
     

     <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-gray-100 shadow-xl space-y-6">
        
        {/* Logo & Header */}
        <div className="text-center">
          <div className="w-12 h-12 bg-[#8257ff] text-white rounded-2xl flex items-center justify-center font-bold text-xl mx-auto shadow-md">
            ✨
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mt-4">Welcome Back</h2>
          <p className="text-xs text-gray-500 mt-1">
            Sign in to access your SE Marketing dashboard
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 text-red-600 text-xs p-3 rounded-xl font-medium border border-red-100 text-center">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8257ff]/20 focus:border-[#8257ff] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8257ff]/20 focus:border-[#8257ff] transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#8257ff] hover:bg-[#6f42ec] text-white rounded-xl text-xs font-bold transition shadow-md"
          >
            Sign In
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-xs text-gray-500">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#8257ff] font-bold hover:underline">
            Register here
          </Link>
        </p>

      </div>
    </div>
    </>
  );
};

export default LoginPage;