/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F8FBFF] flex flex-col">
      {/* NAV - same */}
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3 border-b bg-white sticky top-0 z-40">
        <Link to="#" className="flex gap-2 items-center">
          <div className="w-7 h-7 bg-[#2563EB] rounded-lg text-white flex items-center justify-center font-bold text-">SE</div>
          <div className="leading-none">
            <p className="font-bold text-">SE MARKETING</p>
            <p className="text- text-[#2563EB] font-bold tracking-widest">SOLUTION</p>
          </div>
        </Link>
        <Link to="/dashboard" className="text- border border-gray-200 px-4 py-1.5 rounded-xl font-bold hover:bg-gray-50">
          Go to Dashboard
        </Link>
      </div>

      {/* MAIN 404 */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w- w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT - TEXT */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 px-3 py-1 rounded-full text- font-bold tracking-widest">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              ERROR 404
            </div>
            
            <h1 className="text- sm:text- font-extrabold leading-[0.9] mt-4">
              Oops! <br />
              <span className="text-[#2563EB]">Page</span> Not <br />
              Found
            </h1>
            
            <p className="text- text-gray-500 mt-4 leading-relaxed max-w-">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Don't worry, let's get you back on track.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link to="/dashboard" className="bg-[#0F172A] hover:bg-black text-white px-6 py-3 rounded-xl text- font-bold transition">
                ← Back to Dashboard
              </Link>
              <Link to="/" className="bg-white border border-gray-200 hover:bg-gray-50 text-[#0F172A] px-6 py-3 rounded-xl text- font-bold transition">
                Go Home
              </Link>
            </div>

            <div className="mt-8 bg-white border border-gray-100 rounded-xl p-4 flex gap-3 items-center max-w-">
              <div className="w-10 h-10 bg-[#F8FBFF] rounded-lg flex items-center justify-center text-">💡</div>
              <div>
                <p className="text- font-bold tracking-widest text-gray-400">QUICK HELP</p>
                <p className="text- text-gray-700 mt-0.5">Check the URL or contact support on WhatsApp</p>
              </div>
            </div>
          </div>

          {/* RIGHT - VISUAL */}
          <div className="order-1 md:order-2 relative">
            <div className="bg-white border border-gray-100 rounded- p-6 sm:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.06)] relative overflow-hidden">
              {/* blur bg */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#2563EB]/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00C950]/10 rounded-full blur-2xl"></div>

              <div className="relative text-center">
                <div className="text- sm:text- font-black leading-none tracking-tight">
                  <span className="text-[#0F172A]">4</span>
                  <span className="text-[#2563EB]">0</span>
                  <span className="text-[#0F172A]">4</span>
                </div>
                
                <div className="w-24 h-24 bg-[#F8FBFF] border border-gray-100 rounded-full mx-auto mt-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text- animate-bounce">
                    😵‍💫
                  </div>
                </div>

                <div className="mt-6 bg-[#0F172A] text-white rounded-xl p-3 flex justify-between items-center text-left">
                  <div>
                    <p className="text- text-gray-400 tracking-widest">STATUS</p>
                    <p className="text- font-bold text-red-400">● Page Not Found</p>
                  </div>
                  <div className="text-right">
                    <p className="text- text-gray-400 tracking-widest">CODE</p>
                    <p className="text- font-bold">404</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-center gap-2 text-">
                  <Link to="/dashboard" className="bg-[#F9FBFD] border w-full rounded-lg py-2 font-bold">🏠 Dashboard</Link>
                </div>
              </div>
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow-lg rounded-xl px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              <span className="text- font-bold">SE Marketing is Live</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-4 text- text-gray-400 tracking-widest">
        © 2026 SE MARKETING SOLUTION • 404 PAGE
      </div>
    </div>
  );
};

export default NotFound;