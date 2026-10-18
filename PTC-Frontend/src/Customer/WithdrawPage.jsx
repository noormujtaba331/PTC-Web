/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const WithdrawPage = () => {
  const [formData, setFormData] = useState({
    amount: '',
    accountHolderName: '',
    bankName: '',
    accountNumber: '',
    ibanRouting: '',
    note: '',
  });

  const availableBalance = 0.00;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (availableBalance <= 0) {
      alert("You don't have any balance available to withdraw yet.");
      return;
    }
    alert("Withdrawal request submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-10">
      
      {/* Top Banner: Available Balance */}
      <div className="bg-gradient-to-r from-[#8257ff] to-[#6f42ec] rounded-3xl p-6 text-white shadow-lg flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2 text-xs font-medium text-purple-100">
            <span>👛</span>
            <span>Available balance</span>
          </div>
          <h2 className="text-3xl font-extrabold mt-1">$0.00</h2>
        </div>
      </div>

      {/* Main Card: Withdrawal Request Form */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Withdrawal request</h3>
          <p className="text-xs text-gray-500 mt-1">
            Enter the amount and the bank account where you'd like to receive it.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Amount (USD) */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Amount (USD)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">
                $
              </span>
              <input
                type="number"
                name="amount"
                step="0.01"
                placeholder="0.00"
                value={formData.amount}
                onChange={handleChange}
                className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8257ff]/20 focus:border-[#8257ff] transition"
              />
            </div>
          </div>

          {/* Account Holder Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Account holder name
            </label>
            <input
              type="text"
              name="accountHolderName"
              placeholder=""
              value={formData.accountHolderName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8257ff]/20 focus:border-[#8257ff] transition"
            />
          </div>

          {/* Bank Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Bank name
            </label>
            <input
              type="text"
              name="bankName"
              placeholder=""
              value={formData.bankName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8257ff]/20 focus:border-[#8257ff] transition"
            />
          </div>

          {/* Account Number */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Account number
            </label>
            <input
              type="text"
              name="accountNumber"
              placeholder=""
              value={formData.accountNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8257ff]/20 focus:border-[#8257ff] transition"
            />
          </div>

          {/* IBAN / Routing (optional) */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              IBAN / Routing (optional)
            </label>
            <input
              type="text"
              name="ibanRouting"
              placeholder=""
              value={formData.ibanRouting}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8257ff]/20 focus:border-[#8257ff] transition"
            />
          </div>

          {/* Note (optional) */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Note (optional)
            </label>
            <input
              type="text"
              name="note"
              placeholder=""
              value={formData.note}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8257ff]/20 focus:border-[#8257ff] transition"
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={availableBalance <= 0}
            className={`w-full py-3.5 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-2 shadow-md ${
              availableBalance > 0
                ? 'bg-[#8257ff] hover:bg-[#6f42ec] text-white cursor-pointer'
                : 'bg-purple-200 text-white cursor-not-allowed'
            }`}
          >
            <span>🚀</span>
            <span>Send</span>
          </button>
        </form>

        {/* Bottom Helper Note */}
        <p className="text-[11px] text-gray-400 text-center font-medium">
          You don't have any balance available to withdraw yet.
        </p>

      </div>
    </div>
  );
};

export default WithdrawPage;