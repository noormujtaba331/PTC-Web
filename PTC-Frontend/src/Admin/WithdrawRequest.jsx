/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import API from "../Configs/api.config"; // Tumhara central API config instance

export default function WithdrawRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const res = await API.get("/api/withdraw/admin/all");
      console.log("Withdraw Requests Response:", res.data); // Debugging
      
      if (res.data.success) {
        setRequests(res.data.requests);
      }
    } catch (error) {
      console.log("Error fetching withdraw requests:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const res = await API.put(`/api/withdraw/admin/status/${id}`, {
        status: newStatus,
      });

      if (res.data.success) {
        setRequests(requests.map(req => req._id === id ? { ...req, status: newStatus } : req));
        alert(`Request ${newStatus} successfully!`);
      }
    } catch (error) {
      console.log("Error updating status:", error);
      alert(error.response?.data?.message || "Failed to update status");
    }
  };

  if (loading) {
    return <div className="p-12 text-center text-gray-500 font-medium">Loading withdrawal requests...</div>;
  }

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900">Withdrawal Requests</h1>
        <p className="text-xs text-gray-500 mt-1">Manage user withdrawal requests and update statuses.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-[11px] uppercase tracking-wider">
                <th className="p-4">User Email</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Bank Details</th>
                <th className="p-4">Account No</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {requests.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50 transition">
                  <td className="p-4 font-medium text-gray-800">{item.email}</td>
                  <td className="p-4 font-bold text-emerald-600">${item.amount}</td>
                  <td className="p-4 text-gray-600">
                    <span className="block font-semibold">{item.bankName}</span>
                    <span className="text-[10px] text-gray-400">{item.accountHolderName}</span>
                  </td>
                  <td className="p-4 text-gray-600 font-mono text-xs">{item.accountNumber}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                      item.status === "Completed" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                      item.status === "Rejected" ? "bg-rose-50 text-rose-600 border border-rose-100" :
                      "bg-amber-50 text-amber-600 border border-amber-100"
                    }`}>
                      {item.status || "Pending"}
                    </span>
                  </td>
                  <td className="p-4 text-center space-x-2">
                    {item.status === "Pending" ? (
                      <>
                        <button
                          onClick={() => handleStatusUpdate(item._id, "Completed")}
                          className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition text-[11px] font-bold shadow-sm"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleStatusUpdate(item._id, "Rejected")}
                          className="px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl transition text-[11px] font-bold shadow-sm"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="text-[11px] text-gray-400 italic">No action</span>
                    )}
                  </td>
                </tr>
              ))}
              {requests.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-12 text-center text-gray-400 text-xs">
                    No withdrawal requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}