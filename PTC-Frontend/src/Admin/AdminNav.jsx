/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-xs w-full">
      {/* Left Branding / Title */}
      <div className="flex items-center space-x-3">
        <span className="text-xl font-bold text-[#8257ff]">SE Marketing</span>
        <span className="text-xs bg-[#8257ff]/10 text-[#8257ff] px-2.5 py-1 rounded-full font-semibold">
          Admin Portal
        </span>
      </div>

      {/* Right Admin Profile & Logout */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
          <div className="w-8 h-8 rounded-full bg-[#8257ff]/20 text-[#8257ff] flex items-center justify-center font-bold text-sm">
            A
          </div>
          <span className="text-sm font-semibold text-gray-700">Administrator</span>
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white font-medium text-sm rounded-xl transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
