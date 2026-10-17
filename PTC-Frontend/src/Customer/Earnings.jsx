/* eslint-disable no-unused-vars */
import React from "react";
import ActiveNav from "../components/ActiveNav";

const Earnings = () => {
  const balance = parseFloat(localStorage.getItem("se_balance") || "0");
  const watchedAds = parseInt(localStorage.getItem("se_watched_ads") || "0");
  const perAd = "Depends on Ad";

  return (
    <div className="min-h-screen bg-[#F8FBFF]">
      <ActiveNav />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl font-bold">Earnings</h1>
        <p className="text-sm text-gray-500 mt-1">Track your daily earnings and rewards</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <p className="text- tracking-widest text-gray-500 font-bold">TODAY'S EARNING</p>
            <p className="text-2xl font-bold mt-1">$0</p>
            <p className="text-xs text-gray-500 mt-1">{watchedAds} ads watched</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <p className="text- tracking-widest text-gray-500 font-bold">TOTAL EARNING</p>
            <p className="text-2xl font-bold mt-1">${balance.toFixed(2)}</p>
            <div className="w-full h-1.5 bg-gray-100 rounded-full mt-3"><div className="h-full bg-[#00C950] rounded-full" style={{width: `${Math.min(watchedAds*8,100)}%`}}></div></div>
          </div>
          <div className="bg-[#0F172A] text-white rounded-2xl p-5">
            <p className="text- tracking-widest text-gray-400 font-bold">PER AD REWARD</p>
            <p className="text-2xl font-extrabold mt-1">{perAd}</p>
            <p className="text-xs text-gray-400 mt-1">Fixed for all users</p>
          </div>
        </div>

        <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-6">
          <h3 className="font-bold">Recent Earnings</h3>
          <div className="mt-4">
            {watchedAds === 0 ? (
              <div className="py-12 text-center text-gray-500">
                <div className="w-16 h-16 bg-gray-50 rounded-full mx-auto flex items-center justify-center text-xl">💰</div>
                <p className="font-semibold mt-3 text-sm">No earnings yet</p>
                <p className="text-xs mt-1">Watch ads to start earning</p>
              </div>
            ) : (
              <div className="space-y-2">
                {Array.from({length: watchedAds}).map((_,i)=>(
                  <div key={i} className="flex justify-between items-center p-3 bg-[#F9FBFD] border rounded-xl">
                    <div className="flex items-center gap-3"><div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs">▶</div><div><p className="text-sm font-semibold">Ad #{i+1} Reward</p><p className="text-xs text-gray-500">Today</p></div></div>
                    <span className="text-sm font-bold text-green-600">+${perAd}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Earnings;