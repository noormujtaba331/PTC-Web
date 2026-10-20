/* eslint-disable no-unused-vars */
import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

const EarningsPage = () => {
  const { currentUser } = useOutletContext();
  const navigate = useNavigate();

  return (
    <div className="space-y-6 font-sans">
      {/* Page Title */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 flex justify-between items-center shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-gray-900">My Earnings</h2>
          <p className="text-xs text-gray-500 mt-1">Track your current balance, plan details, and withdraw your funds.</p>
        </div>
        <span className="text-xs bg-purple-50 text-[#8257ff] px-3 py-1 rounded-full font-bold border border-purple-100">
          {currentUser?.planStatus || 'Inactive'}
        </span>
      </div>

      {/* Top 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Current Balance Card */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
            👛
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Current balance</p>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-2">
              ${currentUser?.balance?.toFixed(2) || '0.00'}
            </h3>
          </div>
        </div>

        {/* Plan Card */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
            📈
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Plan</p>
            <h3 className="text-xl font-bold text-gray-900 mt-2">
              {currentUser?.planName || 'No active plan'}
            </h3>
          </div>
        </div>

        {/* Withdrawable Card */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
            💵
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Withdrawable</p>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-2">
              ${currentUser?.balance?.toFixed(2) || '0.00'}
            </h3>
          </div>
        </div>

      </div>

      {/* Ready to Cash Out Banner */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-gray-900">Ready to cash out?</h4>
          <p className="text-xs text-gray-500 mt-0.5">
            Withdraw your available balance securely anytime.
          </p>
        </div>
        
        <button 
          onClick={() => navigate('/dashboard/withdraw')}
          className="px-6 py-3 bg-[#8257ff] hover:bg-[#6c42e8] text-white rounded-xl text-xs font-bold transition shadow-md flex items-center space-x-2 whitespace-nowrap"
        >
          <span>💳</span>
          <span>Withdraw Now</span>
        </button>
      </div>

    </div>
  );
};

export default EarningsPage;