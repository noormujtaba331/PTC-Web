/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SElogo from "../assets/SElogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'How it works', href: '/#dashboards' },
    { name: 'Pricing', href: '/#plans' },
   { name: 'Testimonials', href: '/#testimonials' },
    { name: 'FAQ', href: '/#faq' },
    
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-[#e8e3ff] via-[#f7f5ff] to-[#f4f8e8] px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer">
          <div className="">
          <img src={SElogo} alt="" className="h-12" lg:h-15 />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            SEMarketing
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveNav(link.name)}
              className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                activeNav === link.name
                  ? 'text-[#8257ff] font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.name}
              {/* Active Tab Bottom Indicator */}
              {activeNav === link.name && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8257ff] rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="flex items-center space-x-2 bg-[#8257ff] hover:bg-[#6f42ec] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>Get Started</span>
            <span className="text-base">→</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-purple-200/50 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => {
                setActiveNav(link.name);
                setIsOpen(false);
              }}
              className={`text-sm font-medium ${
                activeNav === link.name ? 'text-[#8257ff]' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-3 pt-2">
            <Link to="/login" className="text-sm font-medium text-gray-700">
              Login
            </Link>
            <Link to="/register" className="flex items-center justify-center space-x-2 bg-[#8257ff] text-white px-5 py-2.5 rounded-full text-sm font-medium">
              <span>Get Started</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;