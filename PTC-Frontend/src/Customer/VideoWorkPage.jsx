/* eslint-disable no-unused-vars */
import React from 'react';

const VideoWorkPage = () => {
  return (
    <div className="space-y-6">

      {/* Main Card */}
      <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center min-h-[420px]">
        
        {/* Lock Icon Box */}
        <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-lg mb-4 shadow-sm">
          🔒
        </div>

        {/* Heading */}
        <h3 className="text-lg font-bold text-gray-900">No active plan</h3>

        {/* Description */}
        <p className="text-xs text-gray-500 max-w-sm mt-2 mb-6 leading-relaxed">
          You don't have an active plan yet. Once the admin activates your plan, your videos will appear here.
        </p>

        {/* Coming Soon Badge */}
        <div className="mb-6">
          <span className="bg-purple-50 text-[#8257ff] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Coming soon
          </span>
        </div>

        {/* Contact Admin Button */}
        <button className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-xl text-xs font-bold transition shadow-sm flex items-center space-x-2">
          <span>🎧</span>
          <span>Contact Admin</span>
        </button>

      </div>
    </div>
  );
};

export default VideoWorkPage;