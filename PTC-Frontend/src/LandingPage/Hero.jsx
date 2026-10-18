/* eslint-disable no-unused-vars */
import React from 'react';
import dashboardMockup from '../assets/heroimg.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#e8e3ff] via-[#f7f5ff] to-[#f4f8e8] pt-5 md:py-24 px-6 lg:px-12">
      <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          
          {/* New Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-gray-800 shadow-sm border border-purple-100 cursor-pointer hover:bg-white transition">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-grey-600 ">New — v3.0 launch • Meet the smarter dashboard</span>
            <span className="text-purple-600 font-bold">→</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
            Unlock your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8257ff] to-[#5b32db]">earning potential</span> with a premium digital platform.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
            SEMarketing gives creators, teams, and businesses everything they need to grow revenue — elegant dashboards, instant payouts, and analytics that actually make sense.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link to="/register" className="flex items-center space-x-2 bg-[#8257ff] hover:bg-[#6f42ec] text-white px-7 py-3.5 rounded-full text-base font-medium shadow-md hover:shadow-lg transition-all">
              <span>Get Started</span>
              <span>→</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-2 bg-white hover:bg-gray-50 px-10 py-3.5 text-gray-800 border border-gray-200 rounded-full text-base font-medium shadow-sm transition-all">
              <span>Advertise</span>
            </Link>
          </div>

          {/* Trust Rating Section */}
          <div className="flex items-center space-x-4 pt-4">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-indigo-500"></div>
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-purple-600"></div>
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-green-500"></div>
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-white bg-yellow-600"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-900">Trusted by 5,000+ teams</span>
              <div className="flex items-center space-x-1 text-xs text-yellow-500 font-semibold">
                <span>★★★★★</span>
                <span className="text-gray-600 font-normal">4.9 average rating</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Illustration / Dashboard Mockup Column */}
        <div className="lg:col-span-6">
          <img src={dashboardMockup} alt="Dashboard Mockup" className="w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Hero;