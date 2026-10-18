/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Main CTA Card */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0a0d14] text-white p-10 sm:p-16 text-center shadow-2xl">
          
          {/* Background Ambient Glow FX */}
          <div className="absolute -top-16 -left-16 w-60 h-60 bg-purple-600/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -top-12 -right-12 w-52 h-52 bg-lime-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-12 w-52 h-52 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-200 border border-white/10 mb-6">
              <span className="text-lime-400 font-bold">✨</span>
              <span>Ready when you are</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Start unlocking your growth potential today.
            </h2>

            {/* Description Subtext */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              Join 5,000+ teams building smarter with SeMarketing.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/register" className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-gray-950 px-6 py-3 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg">
                <span>Get Started Free</span>
                <span>→</span>
              </Link>
              <a href="#plans" className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-6 py-3 rounded-full text-sm font-semibold transition-all">
                See Pricing
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;