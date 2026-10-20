/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import API from "../Configs/api.config";

export default function WithdrawPage() {
  const [formData, setFormData] = useState({
    amount: "",
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    ibanRouting: "",
    note: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Minimum $5 validation
    if (Number(formData.amount) < 5) {
      alert("Minimum withdrawal amount is $5");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await API.post("/api/withdraw/request", formData);
      if (res.data.success) {
        alert("Withdrawal request submitted successfully!");
        setFormData({
          amount: "",
          accountHolderName: "",
          bankName: "",
          accountNumber: "",
          ibanRouting: "",
          note: "",
        });
      }
    } catch (error) {
      console.log("Error submitting withdrawal:", error);
      alert(error.response?.data?.message || "Failed to submit request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100 font-sans">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Withdrawal Request</h2>
        <p className="text-sm text-gray-500 mt-1">
          Enter the amount and the bank account where you'd like to receive it.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount (USD) - Min $5</label>
          <input
            type="number"
            min="5"
            step="0.01"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            placeholder="$ 5.00"
            className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff]"
          />
          {formData.amount !== "" && Number(formData.amount) < 5 && (
            <p className="text-xs text-red-500 mt-1">Minimum amount is $5</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Account holder name</label>
          <input
            type="text"
            name="accountHolderName"
            value={formData.accountHolderName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bank name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Account number</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">IBAN / Routing (optional)</label>
          <input
            type="text"
            name="ibanRouting"
            value={formData.ibanRouting}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Note (optional)</label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8257ff]"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[#8257ff] text-white font-medium rounded-xl hover:bg-[#6c42e8] transition shadow-md shadow-[#8257ff]/20 flex items-center justify-center space-x-2 disabled:opacity-60"
        >
          <span>🚀 {loading ? "Sending..." : "Send"}</span>
        </button>
      </form>
    </div>
  );
}