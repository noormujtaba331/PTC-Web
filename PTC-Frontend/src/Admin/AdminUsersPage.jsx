/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import API from '../Configs/api.config';

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modals States
  const [viewUser, setViewUser] = useState(null); // Details Popup
  const [editUser, setEditUser] = useState(null); // Edit Modal
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    cnic: '',
    planName: '',
    planStatus: 'Inactive',
    balance: 0
  });

  // Fetch all users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await API.get('/api/admin/users');
      if (res.data.success) {
        setUsers(res.data.users);
      }
    } catch (error) {
      console.log('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete User
  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await API.delete(`/api/admin/delete-user/${userId}`);
      if (res.data.success) {
        alert("User deleted successfully");
        fetchUsers();
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to delete user");
    }
  };

  // Open Edit Modal
  const handleOpenEdit = (user) => {
    setEditUser(user);
    setFormData({
      name: user.name || '',
      email: user.email || '',
      password: '', // Leave empty unless updating
      address: user.address || '',
      cnic: user.cnic || '',
      planName: user.planName || '',
      planStatus: user.planStatus || 'Inactive',
      balance: user.balance || 0
    });
  };

  // Submit Edit Form
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.put(`/api/admin/update-user/${editUser._id}`, formData);
      if (res.data.success) {
        alert("User updated successfully!");
        setEditUser(null);
        fetchUsers();
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update user");
    }
  };

  if (loading) {
    return (
      <div className="p-12 text-center text-gray-500 font-medium bg-white rounded-3xl border border-gray-100">
        Loading users list...
      </div>
    );
  }

  return (
    <div className="space-y-6 font-sans">
      
      {/* Page Header */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 flex justify-between items-center shadow-sm">
        <div>
          <h3 className="font-bold text-lg text-gray-900">Users Management</h3>
          <p className="text-xs text-gray-500 mt-1">Manage user plans, credentials, balances, and account statuses.</p>
        </div>
        <span className="text-xs bg-purple-50 text-[#8257ff] px-3 py-1.5 rounded-full font-bold border border-purple-100">
          Total Users: {users.length}
        </span>
      </div>

      {/* USERS CARDS GRID */}
      {users.length === 0 ? (
        <div className="bg-white p-12 rounded-3xl text-center border border-gray-100">
          <p className="text-sm font-semibold text-gray-700">No users found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user._id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{user.name}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{user.email}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    user.planStatus === 'Active' 
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                      : 'bg-amber-50 text-amber-600 border border-amber-100'
                  }`}>
                    {user.planStatus || 'Inactive'}
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Plan:</span>
                    <span className="font-bold text-gray-800">{user.planName || 'No Plan'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Balance:</span>
                    <span className="font-bold text-[#8257ff]">${user.balance?.toFixed(2) || '0.00'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">CNIC:</span>
                    <span className="font-medium text-gray-800">{user.cnic || 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-50">
                <button
                  onClick={() => setViewUser(user)}
                  className="py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl text-[11px] font-bold transition text-center"
                >
                  👁️ Details
                </button>
                <button
                  onClick={() => handleOpenEdit(user)}
                  className="py-2 bg-purple-50 hover:bg-purple-100 text-[#8257ff] rounded-xl text-[11px] font-bold transition text-center"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-[11px] font-bold transition text-center"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 1. VIEW DETAILS POPUP MODAL */}
      {viewUser && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-gray-900 text-lg">User Profile Overview</h3>
              <button 
                onClick={() => setViewUser(null)} 
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full font-bold text-xs transition"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-gray-700">
              <div className="bg-gray-50 p-4 rounded-2xl space-y-2 border border-gray-100">
                <p><strong>Full Name:</strong> {viewUser.name}</p>
                <p><strong>Email:</strong> {viewUser.email}</p>
                <p><strong>CNIC / ID:</strong> {viewUser.cnic || 'N/A'}</p>
                <p><strong>Address:</strong> {viewUser.address || 'N/A'}</p>
                <p><strong>Referral Code:</strong> {viewUser.referralCode || 'N/A'}</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-2xl space-y-2 border border-purple-100">
                <p><strong>Plan Name:</strong> {viewUser.planName || 'None'}</p>
                <p><strong>Plan Status:</strong> {viewUser.planStatus || 'Inactive'}</p>
                <p><strong>Current Balance:</strong> ${viewUser.balance?.toFixed(2) || '0.00'}</p>
                <p><strong>Total Earnings:</strong> ${viewUser.totalEarnings?.toFixed(2) || '0.00'}</p>
                <p><strong>Joined Date:</strong> {new Date(viewUser.createdAt).toLocaleDateString()}</p>
              </div>
            </div>

            <button
              onClick={() => setViewUser(null)}
              className="w-full py-3 bg-[#8257ff] hover:bg-[#6c42e8] text-white rounded-xl text-xs font-bold transition shadow-md"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      {/* 2. UPDATE / EDIT MODAL */}
      {editUser && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-gray-900 text-lg">Edit User Controls</h3>
              <button 
                onClick={() => setEditUser(null)} 
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full font-bold text-xs transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleUpdateSubmit} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#8257ff]"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#8257ff]"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700">
                  New Password <span className="text-gray-400 font-normal">(leave blank to keep current)</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter new password if changing"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#8257ff]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-700">CNIC</label>
                  <input
                    type="text"
                    value={formData.cnic}
                    onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                    className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#8257ff]"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700">Balance ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.balance}
                    onChange={(e) => setFormData({ ...formData, balance: parseFloat(e.target.value) || 0 })}
                    className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#8257ff]"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-700">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#8257ff]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-gray-700">Plan Name</label>
                  <select
                    value={formData.planName}
                    onChange={(e) => setFormData({ ...formData, planName: e.target.value })}
                    className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#8257ff]"
                  >
                    <option value="">No Plan</option>
                    <option value="Starter Plan">Starter Plan ($45)</option>
                    <option value="Student Plan">Student Plan ($65)</option>
                    <option value="Premium Plan">Premium Plan ($85)</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-gray-700">Plan Status</label>
                  <select
                    value={formData.planStatus}
                    onChange={(e) => setFormData({ ...formData, planStatus: e.target.value })}
                    className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#8257ff]"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#8257ff] hover:bg-[#6c42e8] text-white rounded-xl font-bold transition shadow-md mt-4"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminUsersPage;