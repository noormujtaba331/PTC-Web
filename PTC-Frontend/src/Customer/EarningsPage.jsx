/* eslint-disable no-unused-vars */
import React from 'react';

const EarningsPage = () => {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">My Earnings</h2>
      </div>

      {/* Top 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Current Balance Card */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm mb-4">
            👛
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Current balance</p>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-2">$0.00</h3>
          </div>
        </div>

        {/* Plan Card */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm mb-4">
            📈
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Plan</p>
            <h3 className="text-xl font-bold text-gray-900 mt-2">No active plan</h3>
          </div>
        </div>

        {/* Withdrawable Card */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm mb-4">
            💵
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Withdrawable</p>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-2">$0.00</h3>
          </div>
        </div>

      </div>

      {/* Ready to Cash Out Banner */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-gray-900">Ready to cash out?</h4>
          <p className="text-xs text-gray-500 mt-0.5">
            Withdraw your available balance anytime.
          </p>
        </div>
        
        <button className="px-6 py-3 bg-[#8257ff] hover:bg-[#6f42ec] text-white rounded-xl text-xs font-bold transition shadow-md flex items-center space-x-2 whitespace-nowrap">
          <span>💳</span>
          <span>Withdraw</span>
        </button>
      </div>

    </div>
  );
};

export default EarningsPage;