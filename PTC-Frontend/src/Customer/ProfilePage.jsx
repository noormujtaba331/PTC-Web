<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React from 'react';
import { useOutletContext } from 'react-router-dom';

const ProfilePage = () => {
  // Parent layout se logged-in user ka data
  const { currentUser } = useOutletContext();

  // Name initials generate karne ke liye (e.g. "Noor Mujtaba" -> "NM")
  const getInitials = (name) => {
    if (!name) return 'US';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const displayName = currentUser?.name || currentUser?.fullName || 'User';

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10 font-sans">
      
      {/* 1. TOP HEADER USER CARD */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center space-x-4">
        {/* Avatar Circle */}
        <div className="w-16 h-16 rounded-3xl bg-[#8257ff] text-white flex items-center justify-center font-bold text-xl shadow-md">
          {getInitials(displayName)}
        </div>
        
        {/* User Basic Info */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {displayName}
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            {currentUser?.email || 'N/A'}
          </p>
        </div>
      </div>

      {/* 2. PERSONAL DETAILS CARD */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
        
        {/* Section Title */}
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            PERSONAL DETAILS
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          
          {/* Full Name */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
              👤
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                FULL NAME
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {displayName}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
              ✉️
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                EMAIL
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {currentUser?.email || 'N/A'}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
              📞
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                PHONE
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {currentUser?.phone || 'Not Provided'}
              </p>
            </div>
          </div>

          {/* Country */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
              🌐
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                COUNTRY
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {currentUser?.country || 'Pakistan'}
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
              📍
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                ADDRESS
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {currentUser?.address || 'N/A'}
              </p>
            </div>
          </div>

          {/* CNIC / ID */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
              🆔
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                CNIC / ID
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {currentUser?.cnic || 'N/A'}
              </p>
            </div>
          </div>

          {/* Referral Code */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
              🔑
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                REFERRAL CODE
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {currentUser?.referralCode || 'N/A'}
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

=======
/* eslint-disable no-unused-vars */
import React from 'react';
import { useOutletContext } from 'react-router-dom';


const ProfilePage = () => {
  // Parent layout se logged-in user ka data
  const { currentUser } = useOutletContext();

  // Name initials generate karne ke liye (e.g. "Noor Mujtaba" -> "NM")
  const getInitials = (name) => {
    if (!name) return 'US';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      
      {/* 1. TOP HEADER USER CARD */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center space-x-4">
        {/* Avatar Circle */}
        <div className="w-16 h-16 rounded-3xl bg-[#8257ff] text-white flex items-center justify-center font-bold text-xl shadow-md">
          {getInitials(currentUser?.fullName)}
        </div>
        
        {/* User Basic Info */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {currentUser?.fullName || 'Noor Mujtaba'}
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            {currentUser?.email || 'noormujtaba331@gmail.com'}
          </p>
        </div>
      </div>

      {/* 2. PERSONAL DETAILS CARD */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
        
        {/* Section Title */}
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            PERSONAL DETAILS
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          
          {/* Full Name */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0">
              👤
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                FULL NAME
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {currentUser?.fullName || 'Noor Mujtaba'}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0">
              ✉️
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                EMAIL
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {currentUser?.email || 'noormujtaba331@gmail.com'}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0">
              📞
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                PHONE
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {currentUser?.phone || '+923218172023'}
              </p>
            </div>
          </div>

          {/* Country */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0">
              🌐
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                COUNTRY
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {currentUser?.country || 'Pakistan'}
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0">
              📍
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                ADDRESS
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {currentUser?.address || 'North karchi 5c4'}
              </p>
            </div>
          </div>

          {/* CNIC / ID */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0">
              🆔
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                CNIC / ID
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {currentUser?.cnic || '123456765432123456'}
              </p>
            </div>
          </div>

          {/* Referral Code */}
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-xs font-bold shrink-0">
              🔑
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                REFERRAL CODE
              </p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">
                {currentUser?.referralCode || 'SE-0702'}
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

>>>>>>> f77442eb0f987ea25bd6616b52935ef79ea34515
export default ProfilePage;