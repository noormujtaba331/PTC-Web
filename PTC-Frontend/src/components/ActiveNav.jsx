/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const MainNavbar = ({ balance = 0 }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSideMenu, setShowSideMenu] = useState(false);

  // --- USER DATA ---
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null") || {};
  const UserName = currentUser.fullName || currentUser.name || "User";
  const UserEmail = currentUser.email || "";
  const userInitial = UserName.charAt(0).toUpperCase();

  const planName = localStorage.getItem("se_plan_name") || "Student Plan";
  const planStatus = localStorage.getItem("se_plan_status") || "Active";
  const todaysAds = localStorage.getItem("se_todays_ads") || "12";

  // Menu Items
  const menuItems = [
    { label: "Dashboard", icon: "🏠", path: "/dashboard" },
    { label: "Profile", icon: "👤", path: "/profile" },
    { label: "My Ads", icon: "▶", count: todaysAds, path: "/my-ads" },
    { label: "Assignments", icon: "📝", count: "6", path: "/assignments" },
    { label: "Plans", icon: "💳", path: "/plans" },
    { label: "Earnings", icon: "💰", path: "/earnings" },
    { label: "Withdrawals", icon: "🏦", path: "/withdrawals" },
    { label: "Support", icon: "💬", path: "/support" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <>
      {/* ===== TOP NAV ===== */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3 border-b sticky top-0 bg-white z-40">
        <Link to="/dashboard" className="flex gap-2 items-center">
          <div className="w-7 h-7 bg-[#2563EB] rounded-lg text-white flex items-center justify-center font-bold">SE</div>
          <div className="leading-none">
            <p className="font-bold text-sm">SE MARKETING</p>
            <p className="text- text-[#2563EB] font-bold tracking-widest">SOLUTION</p>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1.5 text-xs font-bold border px-3 py-1 rounded-full bg-green-50 text-green-600 border-green-100">
            ● {planName} {planStatus}
          </span>
          <button
            onClick={() => setShowSideMenu(true)}
            className="w-8 h-8 bg-[#0F172A] text-white rounded-full flex items-center justify-center font-bold text-sm hover:bg-black transition"
          >
            {userInitial}
          </button>
        </div>
      </div>

      {/* ===== SIDE MENU DRAWER ===== */}
      {showSideMenu && (
        <>
          <div
            onClick={() => setShowSideMenu(false)}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          ></div>
          <div className="fixed top-0 right-0 w-72 sm:w-80 h-full bg-white z-[60] shadow-[-10px_0_40px_rgba(0,0,0,0.1)] flex flex-col">
            
            {/* Header */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0F172A] text-white rounded-full flex items-center justify-center font-bold">
                  {userInitial}
                </div>
                <div className="overflow-hidden">
                  <p className="font-bold text-sm truncate">{UserName}</p>
                  <p className="text-xs text-gray-500 truncate max-w-">{UserEmail}</p>
                  <p className="text- text-gray-500">{planName} • {planStatus}</p>
                </div>
              </div>
              <button
                onClick={() => setShowSideMenu(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
              >
                ✕
              </button>
            </div>

            {/* Menu */}
            <div className="flex-1 p-3 space-y-1 overflow-y-auto">
              <p className="text- tracking-widest text-gray-400 font-bold px-3 py-2">MENU</p>
              {menuItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link key={idx} to={item.path}>
                    <button
                      onClick={() => setShowSideMenu(false)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition mb-1 ${
                        isActive
                          ? "bg-[#0F172A] text-white font-bold"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span>{item.icon}</span>{item.label}
                      </span>
                      {item.count && (
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                            isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {item.count}
                        </span>
                      )}
                    </button>
                  </Link>
                );
              })}

              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="text- tracking-widest text-gray-400 font-bold px-3 py-2">ACCOUNT</p>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm hover:bg-red-50 text-red-600 transition"
                >
                  <span>🚪</span> Logout
                </button>
              </div>
            </div>

            {/* Balance Footer */}
            <div className="p-4 border-t border-gray-100 bg-[#F9FBFD]">
              <div className="bg-[#0F172A] rounded-xl p-3 text-white flex justify-between items-center">
                <div>
                  <p className="text- text-gray-400 tracking-widest">BALANCE</p>
                  <p className="font-extrabold">${Number(balance).toFixed(2)}</p>
                </div>
                <Link to="/withdrawals" onClick={() => setShowSideMenu(false)}>
                  <button className="bg-white text-[#0F172A] px-3 py-1.5 rounded-lg text-xs font-bold">
                    Withdraw
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainNavbar;