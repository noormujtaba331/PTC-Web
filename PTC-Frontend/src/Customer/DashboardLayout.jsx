<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import API from "../Configs/api.config";
import SElogo from "../assets/SElogo.png";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Backend se cookie verify karke logged-in user ka data fetch karna
    const verifyUserSession = async () => {
      try {
        const res = await API.get("/api/auth/get-me"); // Apne route ke mutabiq endpoint adjust kar lena
        if (res.data.success || res.status === 200) {
          setCurrentUser(res.data.user || res.data);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.log("Session verification failed:", error);
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    verifyUserSession();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await API.get("/api/auth/logout"); // Backend logout route jo cookie clear karega
    } catch (error) {
      console.log("Logout error:", error);
    }
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-gray-500 font-medium text-sm">Loading session...</p>
      </div>
    );
  }

  if (!currentUser) return null;

  // Name ke initials nikalne ke liye (Jaise: "Noor Mujtaba" -> "NM")
  const getInitials = (name) => {
    if (!name) return 'US';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  // Sidebar ke navigation links
  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: '📊' },
    { name: 'Plans', path: '/dashboard/plans', icon: '💳' },
    { name: 'Video Work', path: '/dashboard/video-work', icon: '▶' },
    { name: 'My Earnings', path: '/dashboard/earnings', icon: '💰' },
    { name: 'Withdraw', path: '/dashboard/withdraw', icon: '🏦' },
    { name: 'Profile', path: '/dashboard/profile', icon: '👤' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row font-sans">
      
      {/* ================= 1. MOBILE TOP NAVBAR ================= */}
      <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <div className="rounded-full flex">
            <img src={SElogo} alt="" className='h-[40px] w-[55px]' />
          </div>
          <span className="text-lg font-bold text-gray-900 tracking-tight">
            SE Marketing
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 rounded-full bg-[#8257ff] text-white flex items-center justify-center font-bold text-xs">
            {getInitials(currentUser.name || currentUser.fullName)}
          </div>
          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl text-xs font-bold ${
                location.pathname === item.path
                  ? 'bg-purple-50 text-[#8257ff]'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 text-red-600 font-bold text-xs hover:bg-red-50 rounded-xl"
          >
            Sign Out
          </button>
        </div>
      )}

      {/* ================= 2. DESKTOP FIXED SIDEBAR ================= */}
      <aside className="w-64 bg-white border-r border-gray-100 p-6 flex flex-col justify-between hidden lg:flex sticky top-0 h-screen">
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-10 cursor-pointer">
            <div className="rounded-full">
              <img src={SElogo} alt="" className="h-10" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              SE Marketing
            </span>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <div>
              <p className="mb-3 px-3">General</p>
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition ${
                        isActive
                          ? 'bg-purple-50 text-[#8257ff] font-bold'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Sign Out Button */}
        <div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition font-medium text-xs"
          >
            <span>🚪</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ================= 3. MAIN CONTENT AREA (DYNAMIC OUTLET) ================= */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto min-h-screen">
        
        {/* Desktop Top Header Bar */}
        <div className="hidden lg:flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold text-gray-900 capitalize">
            {location.pathname.split('/')[2] || 'Overview'}
          </h1>
          
          <div className="flex items-center space-x-3 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-[#8257ff] text-white flex items-center justify-center font-bold text-xs">
              {getInitials(currentUser.name || currentUser.fullName)}
            </div>
            <span className="text-xs font-bold text-gray-800 pr-2">{currentUser.name || currentUser.fullName}</span>
          </div>
        </div>

        {/* Nested child pages render honge */}
        <Outlet context={{ currentUser }} />

      </main>

    </div>
  );
};

=======
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // LocalStorage se logged-in user ko fetch karna
    const user = JSON.parse(localStorage.getItem('current_user'));
    if (!user) {
      navigate('/login');
    } else {
      setCurrentUser(user);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('current_user');
    navigate('/login');
  };

  if (!currentUser) return null;

  // Name ke initials nikalne ke liye (Jaise: "Noor Mujtaba" -> "NM")
  const getInitials = (name) => {
    if (!name) return 'US';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  // Sidebar ke navigation links
  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: '📊' },
    { name: 'Plans', path: '/dashboard/plans', icon: '💳' },
    { name: 'Video Work', path: '/dashboard/video-work', icon: '▶' },
    { name: 'My Earnings', path: '/dashboard/earnings', icon: '💰' },
    { name: 'Withdraw', path: '/dashboard/withdraw', icon: '🏦' },
    { name: 'Profile', path: '/dashboard/profile', icon: '🏦' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      
      {/* ================= 1. MOBILE TOP NAVBAR ================= */}
      <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-[#8257ff] flex items-center justify-center text-white text-xs font-bold shadow-md">
            ✨
          </div>
          <span className="text-lg font-bold text-gray-900 tracking-tight">
            SE Marketing
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 rounded-full bg-[#8257ff] text-white flex items-center justify-center font-bold text-xs">
            {getInitials(currentUser.fullName)}
          </div>
          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl text-xs font-bold ${
                location.pathname === item.path
                  ? 'bg-purple-50 text-[#8257ff]'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 text-red-600 font-bold text-xs hover:bg-red-50 rounded-xl"
          >
            Sign Out
          </button>
        </div>
      )}

      {/* ================= 2. DESKTOP FIXED SIDEBAR ================= */}
      <aside className="w-64 bg-white border-r border-gray-100 p-6 flex flex-col justify-between hidden lg:flex sticky top-0 h-screen">
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-10 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-[#8257ff] flex items-center justify-center text-white shadow-md">
              ✨
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              SE Marketing
            </span>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <div>
              <p className="mb-3 px-3">General</p>
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition ${
                        isActive
                          ? 'bg-purple-50 text-[#8257ff] font-bold'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="mb-3 px-3">Account</p>
              <div className="space-y-1">
                <Link
                  to="/dashboard/profile"
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition ${
                    location.pathname === '/dashboard/profile'
                      ? 'bg-purple-50 text-[#8257ff] font-bold'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>👤</span>
                  <span>My Profile</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Out Button */}
        <div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition font-medium text-xs"
          >
            <span>🚪</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ================= 3. MAIN CONTENT AREA (DYNAMIC OUTLET) ================= */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto min-h-screen">
        
        {/* Desktop Top Header Bar */}
        <div className="hidden lg:flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold text-gray-900 capitalize">
            {location.pathname.split('/')[2] || 'Overview'}
          </h1>
          
          <div className="flex items-center space-x-3 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-[#8257ff] text-white flex items-center justify-center font-bold text-xs">
              {getInitials(currentUser.fullName)}
            </div>
            <span className="text-xs font-bold text-gray-800 pr-2">{currentUser.fullName}</span>
          </div>
        </div>

        {/* Yahan par nested child pages render honge (Jaise OverviewPage) */}
        <Outlet context={{ currentUser }} />

      </main>

    </div>
  );
};

>>>>>>> f77442eb0f987ea25bd6616b52935ef79ea34515
export default DashboardLayout;