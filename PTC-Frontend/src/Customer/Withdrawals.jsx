/* eslint-disable no-unused-vars */
import React from "react";
import ActiveNav from "../components/ActiveNav";

const Withdrawals = () => {
  const balance = parseFloat(localStorage.getItem("se_balance") || "0");
  const history = JSON.parse(localStorage.getItem("se_withdraw_history") || "[]");

  return (
    <div className="min-h-screen bg-[#F8FBFF]">
      <ActiveNav />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Withdrawals</h1>
            <p className="text-sm text-gray-500 mt-1">Request and track your withdrawals</p>
          </div>
          <div className="bg-[#0F172A] text-white rounded-xl px-4 py-2">
            <p className="text- tracking-widest text-gray-400">BALANCE</p>
            <p className="font-bold">${balance.toFixed(2)}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-1 bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="font-bold">Request Withdrawal</h3>
            <input type="number" placeholder="Amount (Min $10)" className="w-full mt-4 border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-blue-500" />
            <select className="w-full mt-3 border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none">
              <option>Easypaisa</option>
              <option>【entity-JazzCash¦canonical_name=JazzCash】</option>
              <option>Bank Transfer</option>
            </select>
            <input type="text" placeholder="Account Number" className="w-full mt-3 border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none" />
            <button className="w-full mt-4 bg-[#2563EB] text-white py-2.5 rounded-xl text-sm font-bold">Submit Request</button>
            <p className="text- text-gray-500 mt-2 text-center">Min withdrawal $10.00 • 24h processing</p>
          </div>

          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="font-bold">History</h3>
            {history.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full mx-auto flex items-center justify-center text-xl">🏦</div>
                <p className="font-semibold mt-4 text-sm">No withdrawals yet</p>
                <p className="text-xs text-gray-500 mt-1">Your withdrawal history will show here</p>
              </div>
            ) : (
              <div className="mt-4 space-y-2">
                {history.map((w,i)=>(
                  <div key={i} className="flex justify-between items-center p-3 bg-[#F9FBFD] rounded-xl border">
                    <div><p className="font-bold text-sm">${w.amount}</p><p className="text-xs text-gray-500">{w.method}</p></div>
                    <span className="text-xs bg-yellow-50 text-yellow-600 px-2 py-1 rounded-full font-bold">{w.status}</span>
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
export default Withdrawals;