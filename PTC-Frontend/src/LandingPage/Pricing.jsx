<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div id="plans" className="py-20 px-4 sm:px-6 lg:px-10 bg-[#F9FBFD] text-center">
      
      {/* Section Header */}
      <div className="max-w-xl mx-auto mb-14">
        <span className="inline-block px-4 py-1.5 bg-[#E6FFF4] border border-green-100 text-[#00A651] rounded-full text-xs font-bold tracking-widest uppercase mb-3">
          MEMBERSHIP TIERS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Choose Your Plan & Scale Your Daily Income
        </h2>
        <p className="text-gray-500 text-sm mt-3">
          Show in your Account within 45 min.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left items-stretch">
        
        {/* ================= CARD 1: STARTER PLAN ================= */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
          <div>
            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-bold inline-block">
              BASIC TIER
            </span>
            <h3 className="font-bold text-xl text-gray-900 mt-4">Starter Plan</h3>
            <p className="text-xs text-gray-500">Expire After 20 Days</p>
            
            <div className="mt-3">
              <span className="bg-yellow-100 text-yellow-700 text-[11px] px-2.5 py-1 rounded-full font-semibold inline-block">
                Show in your Account within 45 min.
              </span>
            </div>

            <div className="flex items-baseline mt-4">
              <span className="text-4xl font-extrabold text-gray-900">$45</span>
              <span className="text-sm font-normal text-gray-500 ml-1">/ 20 days</span>
            </div>

            {/* Feature List */}
            <div className="mt-6 border-t border-gray-100 pt-5 text-sm space-y-3.5 text-gray-700 font-medium">
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 6 videos access
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 3 Assignment pkr 400
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 1st Level Benefit 15%
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> <b>20000 with incentive</b>
              </p>
            </div>
          </div>

          <Link
            to="/register"
            className="flex items-center justify-center w-full mt-8 p-3 bg-[#8257ff] hover:bg-[#6f42ec] text-white rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg"
          >
            Choose Starter
          </Link>
        </div>

        {/* ================= CARD 2: PREMIUM PLAN (CENTER - MOST POPULAR) ================= */}
        <div className="bg-[#0F172A] text-white border-2 border-blue-600 rounded-3xl p-7 flex flex-col justify-between relative shadow-[0_20px_60px_rgba(37,99,235,0.2)] md:-translate-y-2">
          
          {/* Most Popular Badge */}
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-[#00C950] text-white text-xs px-4 py-1.5 rounded-full font-bold whitespace-nowrap shadow-md">
            MOST POPULAR
          </span>

          <div>
            <span className="bg-white/10 text-xs text-blue-200 px-3 py-1 rounded-full font-bold inline-block mt-2">
              PREMIUM TIER • LIFETIME
            </span>
            <h3 className="font-bold text-xl text-white mt-4">Premium Plan</h3>
            <p className="text-xs text-gray-400">180 days</p>
            
            <div className="mt-3">
              <span className="bg-yellow-500/20 text-yellow-300 text-[11px] px-2.5 py-1 rounded-full font-semibold inline-block">
                Show in your Account within 45 min.
              </span>
            </div>

            <div className="flex items-baseline mt-4">
              <span className="text-4xl font-extrabold text-white">$85</span>
              <span className="text-sm font-normal text-gray-400 ml-1">/ Lifetime</span>
            </div>

            {/* Feature List */}
            <div className="mt-6 border-t border-white/10 pt-5 text-sm space-y-3.5 text-gray-200 font-medium">
              <p className="flex items-center gap-2">
                <span className="text-[#00C950] font-bold">✓</span> 12 Videos Access
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#00C950] font-bold">✓</span> 8 PDF pkr 800
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#00C950] font-bold">✓</span> 2nd Level Benefit 20%
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#00C950] font-bold">✓</span> 7/24 Support
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#00C950] font-bold">✓</span> <b>35000 with incentive</b>
              </p>
            </div>
          </div>

          <Link
            to="/register"
            className="flex items-center justify-center w-full mt-8 p-3 bg-gradient-to-r from-blue-600 to-[#00C950] hover:opacity-90 rounded-xl font-bold text-white text-sm transition-all shadow-lg"
          >
            Choose Premium
          </Link>
        </div>

        {/* ================= CARD 3: STUDENT PLAN ================= */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
          <div>
            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-bold inline-block">
              STUDENT TIER • 80-DAY
            </span>
            <h3 className="font-bold text-xl text-gray-900 mt-4">Student Plan</h3>
            <p className="text-xs text-gray-500">Expire After 80 Days</p>
            
            <div className="mt-3">
              <span className="bg-yellow-100 text-yellow-700 text-[11px] px-2.5 py-1 rounded-full font-semibold inline-block">
                Show in your Account within 45 min.
              </span>
            </div>

            <div className="flex items-baseline mt-4">
              <span className="text-4xl font-extrabold text-gray-900">$65</span>
              <span className="text-sm font-normal text-gray-500 ml-1">/ 80 days</span>
            </div>

            {/* Feature List */}
            <div className="mt-6 border-t border-gray-100 pt-5 text-sm space-y-3.5 text-gray-700 font-medium">
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 12 videos access
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 6 PDF pkr 600
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 1st level Benefits 15%
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> <b>25000 with incentive</b>
              </p>
            </div>
          </div>

          <Link
            to="/register"
            className="flex items-center justify-center w-full mt-8 p-3 bg-[#8257ff] hover:bg-[#6f42ec] text-white rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg"
          >
            Get Student Access
          </Link>
        </div>

      </div>
    </div>
  );
};

=======
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div id="plans" className="py-20 px-4 sm:px-6 lg:px-10 bg-[#F9FBFD] text-center">
      
      {/* Section Header */}
      <div className="max-w-xl mx-auto mb-14">
        <span className="inline-block px-4 py-1.5 bg-[#E6FFF4] border border-green-100 text-[#00A651] rounded-full text-xs font-bold tracking-widest uppercase mb-3">
          MEMBERSHIP TIERS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Choose Your Plan & Scale Your Daily Income
        </h2>
        <p className="text-gray-500 text-sm mt-3">
          Show in your Account within 45 min.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left items-stretch">
        
        {/* ================= CARD 1: STARTER PLAN ================= */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
          <div>
            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-bold inline-block">
              BASIC TIER
            </span>
            <h3 className="font-bold text-xl text-gray-900 mt-4">Starter Plan</h3>
            <p className="text-xs text-gray-500">Expire After 20 Days</p>
            
            <div className="mt-3">
              <span className="bg-yellow-100 text-yellow-700 text-[11px] px-2.5 py-1 rounded-full font-semibold inline-block">
                Show in your Account within 45 min.
              </span>
            </div>

            <div className="flex items-baseline mt-4">
              <span className="text-4xl font-extrabold text-gray-900">$45</span>
              <span className="text-sm font-normal text-gray-500 ml-1">/ 20 days</span>
            </div>

            {/* Feature List */}
            <div className="mt-6 border-t border-gray-100 pt-5 text-sm space-y-3.5 text-gray-700 font-medium">
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 6 videos access
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 3 Assignment pr 400
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 1st Level Benefit 15%
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> <b>20000 with incentive</b>
              </p>
            </div>
          </div>

          <Link
            to="/register"
            className="flex items-center justify-center w-full mt-8 p-3 bg-[#8257ff] hover:bg-[#6f42ec] text-white rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg"
          >
            Choose Starter
          </Link>
        </div>

        {/* ================= CARD 2: PREMIUM PLAN (CENTER - MOST POPULAR) ================= */}
        <div className="bg-[#0F172A] text-white border-2 border-blue-600 rounded-3xl p-7 flex flex-col justify-between relative shadow-[0_20px_60px_rgba(37,99,235,0.2)] md:-translate-y-2">
          
          {/* Most Popular Badge */}
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-[#00C950] text-white text-xs px-4 py-1.5 rounded-full font-bold whitespace-nowrap shadow-md">
            MOST POPULAR
          </span>

          <div>
            <span className="bg-white/10 text-xs text-blue-200 px-3 py-1 rounded-full font-bold inline-block mt-2">
              PREMIUM TIER • LIFETIME
            </span>
            <h3 className="font-bold text-xl text-white mt-4">Premium Plan</h3>
            <p className="text-xs text-gray-400">Lifetime Access</p>
            
            <div className="mt-3">
              <span className="bg-yellow-500/20 text-yellow-300 text-[11px] px-2.5 py-1 rounded-full font-semibold inline-block">
                Show in your Account within 45 min.
              </span>
            </div>

            <div className="flex items-baseline mt-4">
              <span className="text-4xl font-extrabold text-white">$85</span>
              <span className="text-sm font-normal text-gray-400 ml-1">/ Lifetime</span>
            </div>

            {/* Feature List */}
            <div className="mt-6 border-t border-white/10 pt-5 text-sm space-y-3.5 text-gray-200 font-medium">
              <p className="flex items-center gap-2">
                <span className="text-[#00C950] font-bold">✓</span> 12 Videos Access
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#00C950] font-bold">✓</span> 8 PDF pr 800
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#00C950] font-bold">✓</span> 2nd Level Benefit 20%
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#00C950] font-bold">✓</span> 7/24 Support
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#00C950] font-bold">✓</span> <b>35000 with incentive</b>
              </p>
            </div>
          </div>

          <Link
            to="/register"
            className="flex items-center justify-center w-full mt-8 p-3 bg-gradient-to-r from-blue-600 to-[#00C950] hover:opacity-90 rounded-xl font-bold text-white text-sm transition-all shadow-lg"
          >
            Choose Premium
          </Link>
        </div>

        {/* ================= CARD 3: STUDENT PLAN ================= */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
          <div>
            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-bold inline-block">
              STUDENT TIER • 80-DAY
            </span>
            <h3 className="font-bold text-xl text-gray-900 mt-4">Student Plan</h3>
            <p className="text-xs text-gray-500">Expire After 80 Days</p>
            
            <div className="mt-3">
              <span className="bg-yellow-100 text-yellow-700 text-[11px] px-2.5 py-1 rounded-full font-semibold inline-block">
                Show in your Account within 45 min.
              </span>
            </div>

            <div className="flex items-baseline mt-4">
              <span className="text-4xl font-extrabold text-gray-900">$65</span>
              <span className="text-sm font-normal text-gray-500 ml-1">/ 80 days</span>
            </div>

            {/* Feature List */}
            <div className="mt-6 border-t border-gray-100 pt-5 text-sm space-y-3.5 text-gray-700 font-medium">
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 12 videos access
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 6 PDF pr 600
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> 1st level Benefits 15%
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> <b>25000 with incentive</b>
              </p>
            </div>
          </div>

          <Link
            to="/register"
            className="flex items-center justify-center w-full mt-8 p-3 bg-[#8257ff] hover:bg-[#6f42ec] text-white rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg"
          >
            Get Student Access
          </Link>
        </div>

      </div>
    </div>
  );
};

>>>>>>> f77442eb0f987ea25bd6616b52935ef79ea34515
export default Pricing;