/* eslint-disable no-unused-vars */
import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';

const OverviewPage = () => {
  // Parent DashboardLayout se currentUser ka backend data extract karna
  const { currentUser } = useOutletContext();

  // WhatsApp helper function
  const openWhatsApp = () => {
    const phoneNumber = "923056937190"; // Apna WhatsApp number (bina + ke, 92 se start)
    const message = `Hello Admin, I need help. My account email: ${currentUser?.email || "User"}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-8 font-sans">
      
      {/* 1. WELCOME BANNER */}
      <div className="bg-gradient-to-r from-[#8257ff] to-[#6f42ec] rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            👋 Welcome back
          </span>
          <h2 className="text-3xl font-extrabold mt-3">
            Hi {currentUser?.name || currentUser?.fullName || 'User'} 👋
          </h2>
          <p className="text-purple-100 text-xs sm:text-sm mt-2 max-w-xl">
            Here's an overview of your account. Manage your plan, track your work, and withdraw your earnings — all from one place.
          </p>
        </div>
      </div>

      {/* 2. CURRENT PLAN & ACCOUNT OVERVIEW GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* CURRENT PLAN CARD */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  CURRENT PLAN
                </span>
                <div className="flex items-center space-x-2 mt-1">
                  <h3 className="text-lg font-bold text-gray-900">
                    {currentUser?.planName || 'No Active Plan'}
                  </h3>
                  <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                    currentUser?.planStatus === 'Active' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {currentUser?.planStatus || 'Inactive'}
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold">
                💳
              </div>
            </div>
            
            <p className="text-xs text-gray-500">Contact admin or select a plan to activate</p>
            
            <div className="bg-slate-50 rounded-2xl p-4 my-6 text-xs text-gray-500 border border-gray-100">
              {currentUser?.planName ? (
                `Your ${currentUser.planName} is currently ${currentUser.planStatus || 'Active'}. Enjoy daily ads and benefits.`
              ) : (
                "You don't have an active plan yet. Once you choose or admin activates your plan, it'll show here with your benefits and daily ads."
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/dashboard/plans"
              className="px-5 py-2.5 bg-[#8257ff] hover:bg-[#6f42ec] text-white rounded-xl text-xs font-bold transition shadow-md inline-block"
            >
              View Plans →
            </Link>
            <button 
              onClick={openWhatsApp}
              className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold transition"
            >
              🎧 Contact Admin
            </button>
          </div>
        </div>

        {/* ACCOUNT OVERVIEW CARD */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              ACCOUNT OVERVIEW
            </span>
            
            <div className="mt-4 space-y-4 text-xs">
              <div>
                <p className="text-gray-400">Name</p>
                <p className="font-bold text-gray-800 text-sm mt-0.5">
                  {currentUser?.name || currentUser?.fullName || 'N/A'}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <p className="font-bold text-gray-800 text-sm mt-0.5">
                  {currentUser?.email || 'N/A'}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Status</p>
                <p className="font-semibold text-gray-600 mt-0.5 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${
                    currentUser?.planStatus === 'Active' ? 'bg-emerald-500' : 'bg-gray-400'
                  }`}></span> 
                  {currentUser?.planStatus || 'No active plan'}
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/dashboard/profile"
            className="w-full text-center mt-6 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl text-xs font-bold transition block"
          >
            View Profile
          </Link>
        </div>

      </div>

      {/* 3. THREE STATS CARDS (VIDEO WORK, MY EARNINGS, WITHDRAW) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Video Work Stat Card */}
        <Link 
          to="/dashboard/video-work"
          className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-purple-200 transition"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm">
              📹
            </div>
            <span className="text-gray-300 group-hover:text-[#8257ff] transition">→</span>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">Video Work</p>
            <h4 className="text-2xl font-extrabold text-gray-900 mt-1">
              {currentUser?.todayAdsWatched || 0} / {currentUser?.todayAds || 0}
            </h4>
            <p className="text-[11px] text-gray-400 mt-1">Today's watched vs available ads.</p>
          </div>
        </Link>

        {/* My Earnings Stat Card */}
        <Link 
          to="/dashboard/earnings"
          className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-purple-200 transition"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm">
              👛
            </div>
            <span className="text-gray-300 group-hover:text-[#8257ff] transition">→</span>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">My Earnings</p>
            <h4 className="text-2xl font-extrabold text-gray-900 mt-1">
              ${currentUser?.totalEarnings?.toFixed(2) || '0.00'}
            </h4>
            <p className="text-[11px] text-gray-400 mt-1">Your total earned balance.</p>
          </div>
        </Link>

        {/* Withdraw Stat Card */}
        <Link 
          to="/dashboard/withdraw"
          className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-purple-200 transition"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm">
              💵
            </div>
            <span className="text-gray-300 group-hover:text-[#8257ff] transition">→</span>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">Available Balance</p>
            <h4 className="text-2xl font-extrabold text-gray-900 mt-1">
              ${currentUser?.balance?.toFixed(2) || '0.00'}
            </h4>
            <p className="text-[11px] text-gray-400 mt-1">Available balance to withdraw.</p>
          </div>
        </Link>

      </div>

      {/* 4. NEED HELP BANNER */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm">
            ✉️
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900">Need help with something?</h4>
            <p className="text-xs text-gray-500 mt-0.5">
              Our team usually replies within a few hours.
            </p>
          </div>
        </div>
        
        <button 
          onClick={openWhatsApp}
          className="px-5 py-2.5 bg-[#8257ff] hover:bg-[#6f42ec] text-white rounded-xl text-xs font-bold transition shadow-md flex items-center space-x-2 whitespace-nowrap"
        >
          <span>🎧</span>
          <span>Contact Admin</span>
        </button>
      </div>

    </div>
  );
};

export default OverviewPage;