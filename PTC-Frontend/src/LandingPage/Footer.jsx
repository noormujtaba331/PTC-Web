/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Section: Branding, Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          
          {/* Brand Info & Contact Info (Left Column) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo & Name */}
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-[#8257ff] flex items-center justify-center text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                SE Marketing
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-sm">
              Empowering businesses with innovative digital solutions, professional services, and scalable technology to accelerate growth.
            </p>

            {/* Contact Details */}
            <div className="space-y-2.5 text-xs text-gray-600 pt-1">
              <div className="flex items-center space-x-2.5">
                <span className="text-[#8257ff]">✉</span>
                <a href="mailto:hello@semarketing.com" className="hover:text-gray-900 transition">
                  hello@semarketing.com
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="text-[#8257ff]">📞</span>
                <span>+92 305 6937190</span>
              </div>
            
            </div>

          </div>

          {/* Navigation Columns (Right Side) */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-8 pt-2">
            
            {/* Product Column */}
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                Product
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
                <li><a href="#features" className="hover:text-gray-900 transition">Features</a></li>
                <li><a href="#dashboards" className="hover:text-gray-900 transition">How It Works</a></li>
                <li><a href="#plans" className="hover:text-gray-900 transition">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-gray-900 transition">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-gray-900 transition">FAQ</a></li>
              </ul>
            </div>


          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 SE Marketing. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition">Terms</a>
            <a href="#" className="hover:text-gray-600 transition">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;