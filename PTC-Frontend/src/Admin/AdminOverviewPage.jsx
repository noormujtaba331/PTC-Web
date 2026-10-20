/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../Configs/api.config';

const AdminOverviewPage = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activePlans: 0,
    pendingWithdrawals: 0
  });
  const [loading, setLoading] = useState(true);

  // Fetch admin stats from backend
  useEffect(() => {
    const fetchAdminStats = async () => {
      try {
        const res = await API.get('/api/admin/stats');
        console.log("Admin Stats Response:", res.data); // Debugging ke liye console log
        
        if (res.data && res.data.success && res.data.stats) {
          setStats({
            totalUsers: res.data.stats.totalUsers || 0,
            activePlans: res.data.stats.activePlans || 0,
            pendingWithdrawals: res.data.stats.pendingWithdrawals || 0
          });
        }
      } catch (error) {
        console.error("Error fetching admin stats, using fallback:", error);
        // Fallback mock stats agar API fail ho jaye
        setStats({
          totalUsers: 0,
          activePlans: 0,
          pendingWithdrawals: 0
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAdminStats();
  }, []);

  if (loading) {
    return (
      <div className="p-12 text-center text-gray-500 font-medium bg-white rounded-3xl border border-gray-100">
        Loading dashboard overview...
      </div>
    );
  }

  return (
    <div className="space-y-6 font-sans">
      
      {/* 1. ADMIN HEADER BANNER */}
      <div className="bg-gradient-to-r from-[#8257ff] to-[#6f42ec] rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            🛡️ Admin Control Center
          </span>
          <h2 className="text-3xl font-extrabold mt-3">
            Admin Dashboard Overview
          </h2>
          <p className="text-purple-100 text-xs sm:text-sm mt-2 max-w-xl">
            Manage user memberships, review withdrawal requests, and monitor account activities seamlessly.
          </p>
        </div>
      </div>

      {/* 2. STATS CARDS GRID (3 CARDS) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Total Users */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm shadow-sm">
              👥
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">Live</span>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">Total Users</p>
            <h4 className="text-2xl font-extrabold text-gray-900 mt-1">{stats.totalUsers}</h4>
          </div>
        </div>

        {/* Active Plans */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm shadow-sm">
              💳
            </div>
            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">Active</span>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">Active Plans</p>
            <h4 className="text-2xl font-extrabold text-gray-900 mt-1">{stats.activePlans}</h4>
          </div>
        </div>

        {/* Pending Withdrawals */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm shadow-sm">
              ⏳
            </div>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-100">Pending</span>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">Pending Withdrawals</p>
            <h4 className="text-2xl font-extrabold text-gray-900 mt-1">{stats.pendingWithdrawals}</h4>
          </div>
        </div>

      </div>

      {/* 3. QUICK MANAGEMENT SHORTCUTS */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Quick Management Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <Link to="/admin/users" className="p-4 rounded-2xl border border-gray-100 hover:border-[#8257ff] transition bg-gray-50/50 flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm group-hover:scale-105 transition">👥</div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Manage Users & Plans</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Activate user plans & statuses</p>
            </div>
          </Link>

          <Link to="/admin/withdrawals" className="p-4 rounded-2xl border border-gray-100 hover:border-[#8257ff] transition bg-gray-50/50 flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#8257ff] flex items-center justify-center font-bold text-sm group-hover:scale-105 transition">💵</div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Withdrawal Requests</h4>
              <p className="text-[11px] text-gray-500 mt-0.5">Approve or reject cashouts</p>
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
};

export default AdminOverviewPage;