/* eslint-disable no-unused-vars */
import React from 'react';

const DashboardShowcase = () => {
  return (
    <section id="dashboards" className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-semibold tracking-wide uppercase border border-purple-100 mb-4">
            • DASHBOARD
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            A workspace that makes complex <br />
            feel simple.
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Every pixel considered. Every interaction refined. Meet the dashboard your team has been asking for.
          </p>
        </div>

        {/* Browser Window Mockup */}
        <div className="relative max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          
          {/* Window Top Navigation Bar */}
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            {/* Window Dots */}
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            {/* URL Bar */}
            <div className="bg-white border border-gray-200 rounded-md px-4 py-1 text-xs text-gray-500 font-mono shadow-inner">
              app.semarketing.com / overview
            </div>
            <div className="w-12"></div> {/* Spacer for symmetry */}
          </div>

          {/* Window Body - Dashboard Content */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-50/50">
            
            {/* Left Sidebar */}
            <div className="md:col-span-3 bg-[#8257ff] text-white rounded-2xl p-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="font-bold text-lg mb-8 tracking-tight">SEDigital</div>
                <nav className="space-y-3 text-sm font-medium">
                  <div className="bg-white/20 px-3 py-2 rounded-lg cursor-pointer">Overview</div>
                  <div className="text-white/80 hover:text-white px-3 py-1.5 cursor-pointer">Payments</div>
                  <div className="text-white/80 hover:text-white px-3 py-1.5 cursor-pointer">Customers</div>
                  <div className="text-white/80 hover:text-white px-3 py-1.5 cursor-pointer">Products</div>
                  <div className="text-white/80 hover:text-white px-3 py-1.5 cursor-pointer">Analytics</div>
                  <div className="text-white/80 hover:text-white px-3 py-1.5 cursor-pointer">Settings</div>
                </nav>
              </div>
            </div>

            {/* Right Main Panel */}
            <div className="md:col-span-9 space-y-6">
              
              {/* Top 3 Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Revenue Card */}
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-start">
                  <div>
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs mb-2">
                      $
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Revenue</p>
                    <p className="text-lg font-extrabold text-gray-900">$128,430</p>
                  </div>
                  <span className="bg-lime-100 text-lime-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    +12.5%
                  </span>
                </div>

                {/* Customers Card */}
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-start">
                  <div>
                    <div className="w-7 h-7 rounded-lg bg-green-50 text-green-600 flex items-center justify-center font-bold text-xs mb-2">
                      👥
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Customers</p>
                    <p className="text-lg font-extrabold text-gray-900">1,450</p>
                  </div>
                  <span className="bg-lime-100 text-lime-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    +8.2%
                  </span>
                </div>

                {/* Success Rate Card */}
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-start">
                  <div>
                    <div className="w-7 h-7 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center font-bold text-xs mb-2">
                      📈
                    </div>
                    <p className="text-xs text-gray-500 font-medium">Success rate</p>
                    <p className="text-lg font-extrabold text-gray-900">98.6%</p>
                  </div>
                  <span className="bg-lime-100 text-lime-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    +0.4%
                  </span>
                </div>
              </div>

              {/* Chart Card */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Total revenue</p>
                    <h4 className="text-2xl font-black text-gray-900">$342,430</h4>
                  </div>
                  <span className="bg-lime-100 text-lime-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                    <span>↑</span>
                    <span>15.4%</span>
                  </span>
                </div>

                {/* Wave Line Chart SVG */}
                <div className="h-40 w-full pt-4">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 500 100" fill="none" preserveAspectRatio="none">
                    <path
                      d="M 0,80 Q 100,20 200,60 T 400,20 T 500,70 L 500,100 L 0,100 Z"
                      fill="url(#purpleGradient)"
                      opacity="0.2"
                    />
                    <path
                      d="M 0,80 Q 100,20 200,60 T 400,20 T 500,70"
                      stroke="#8257ff"
                      strokeWidth="3"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8257ff" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

            </div>

          </div>

          {/* Floating Badge: New Payout (Left Overlap) */}
          <div className="absolute top-24 -left-4 bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 rounded-2xl p-4 w-56 transform -rotate-2 hover:rotate-0 transition duration-300 hidden sm:block">
            <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
              <span className="text-purple-600">🔔</span>
              <span>New payout</span>
            </div>
            <p className="text-lg font-extrabold text-gray-900">+$4,220.00</p>
            <p className="text-[10px] text-gray-400">Arrived in your account • Just now</p>
          </div>

          {/* Floating Badge: New Signup (Right Overlap) */}
          <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 rounded-2xl p-3.5 w-52 flex items-center space-x-3 transform rotate-1 hover:rotate-0 transition duration-300">
            <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
              OR
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-gray-400 font-medium">New signup</p>
              <p className="text-xs font-bold text-gray-900">Olivia Rhye</p>
              <p className="text-[10px] text-purple-600 font-medium">Upgraded to Pro</p>
            </div>
            <span className="text-xs text-gray-400">↗</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardShowcase;