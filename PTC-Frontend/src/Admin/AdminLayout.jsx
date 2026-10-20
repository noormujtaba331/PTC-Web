/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/SElogo.png";

export default function AdminLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/admin-login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  const navItems = [
    { label: "Overview", path: "/admin/overview" },
    { label: "Users", path: "/admin/users" },
    { label: "Withdraw Requests", path: "/admin/withdraw-requests" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between shadow-sm">
        <div>
          <div className="p-6 border-b border-gray-100 flex items-center ">
           
            <img src={logo} alt="SE Marketing" className="w-22 h-16" />
            <span className="text-xl font-bold shrink-0 text-gray-800">SE Marketing</span>
          </div>

          <nav className="p-4 space-y-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-[#8257ff] text-white shadow-md shadow-[#8257ff]/20"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-2.5 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white font-medium text-sm rounded-xl transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-xs w-full">
          <div className="flex items-center space-x-3">
            <span className="text-lg font-bold text-gray-800">Admin Control Panel</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-[#8257ff]/20 text-[#8257ff] flex items-center justify-center font-bold text-sm">
                A
              </div>
              <span className="text-sm font-semibold text-gray-700">Administrator</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}