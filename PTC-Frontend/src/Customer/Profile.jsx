/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActiveNav from "../components/ActiveNav";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  // --- CURRENT USER FROM LOCALSTORAGE ---
  const storedUser = JSON.parse(localStorage.getItem("currentUser") || "null");
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

  const [userData, setUserData] = useState(() => {
    return {
      fullName: storedUser?.fullName || storedUser?.name || "User",
      email: storedUser?.email || "",
      phone: storedUser?.phone || "",
      cnic: storedUser?.cnic || "",
      easypaisa: storedUser?.phone || localStorage.getItem("se_easypaisa") || "0345-1234567",
      joinDate: storedUser?.createdAt ? new Date(storedUser.createdAt).toLocaleDateString() : "Today",
      plan: localStorage.getItem("se_plan_name") || "No Plan",
      planStatus: localStorage.getItem("se_plan_status") || "Pending",
      planExpiry: localStorage.getItem("se_plan_expiry") || "Not Active",
      referralCode: storedUser?.referralCode || "N/A",
      totalEarned: parseFloat(localStorage.getItem("se_total_earned") || "0"),
      totalWithdrawn: parseFloat(localStorage.getItem("se_total_withdrawn") || "0"),
    };
  });

  const [balance, setBalance] = useState(() => parseFloat(localStorage.getItem("se_balance") || "0"));
  const [todaysAds] = useState(() => parseInt(localStorage.getItem("se_todays_ads") || "12"));
  const [watchedAds] = useState(() => parseInt(localStorage.getItem("se_watched_ads") || "0"));

  const UserName = userData.fullName;
  const userInitial = UserName.charAt(0).toUpperCase();

  const menuItems = [
    { label: "Dashboard", icon: "🏠", path: "/dashboard" },
    { label: "Profile", icon: "👤", path: "/profile", active: true },
    { label: "My Ads", icon: "▶", count: "12", path: "/my-ads" },
    { label: "Assignments", icon: "📝", count: "6", path: "/assignments" },
    { label: "Plans", icon: "💳", path: "/plans" },
    { label: "Earnings", icon: "💰", path: "/earnings" },
    { label: "Withdrawals", icon: "🏦", path: "/withdrawals" },
    { label: "Support", icon: "💬", path: "/support" },
  ];

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login");
    }
  }, []);

  const handleSave = () => {
    // currentUser update
    const updatedCurrentUser = {
      ...storedUser,
      fullName: userData.fullName,
      name: userData.fullName,
      email: userData.email,
      phone: userData.phone,
      cnic: userData.cnic,
    };
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));
    localStorage.setItem("se_easypaisa", userData.easypaisa);

    // users array me bhi update
    const updatedUsers = storedUsers.map(u => 
      u.email === storedUser.email ? { ...u, ...updatedCurrentUser } : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setIsEditing(false);
    alert("Profile Updated! LocalStorage me save ho gaya.");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const stats = [
    { label: "Total Earned", value: `$${(userData.totalEarned + balance).toFixed(2)}`, icon: "💰", color: "bg-green-50 text-green-600" },
    { label: "Total Withdrawn", value: `$${userData.totalWithdrawn}`, icon: "🏦", color: "bg-blue-50 text-blue-600" },
    { label: "Current Balance", value: `$${balance.toFixed(2)}`, icon: "💳", color: "bg-[#0F172A] text-white" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FBFF]">
      <ActiveNav />

      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your personal information and account settings</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* LEFT - Profile Card */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 bg-[#0F172A] text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto">{userInitial}</div>
              <h3 className="font-bold text-lg mt-4">{userData.fullName}</h3>
              <p className="text-sm text-gray-500 mt-1 truncate">{userData.email}</p>
              <span className={`inline-flex mt-3 items-center gap-1.5 text-xs font-bold border px-3 py-1 rounded-full ${userData.planStatus === "Active" ? "bg-green-50 text-green-600 border-green-100" : "bg-yellow-50 text-yellow-600 border-yellow-100"}`}>● {userData.plan} • {userData.planStatus}</span>
              
              <div className="mt-4 text-left space-y-2">
                <div className="flex justify-between text-sm"><span className="text-gray-500">Joined</span><span className="font-medium">{userData.joinDate}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Phone</span><span className="font-medium">{userData.phone || "N/A"}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">CNIC</span><span className="font-medium">{userData.cnic || "N/A"}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Referral</span><span className="font-medium">{userData.referralCode}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Plan Expiry</span><span className="font-medium">{userData.planExpiry}</span></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {stats.map((s, i) => (
                <div key={i} className={`rounded-2xl p-4 ${s.color.includes("bg-[#0F172A]") ? "bg-[#0F172A] text-white" : "bg-white border border-gray-100"}`}>
                  <p className="text-sm">{s.icon} <span className="text- tracking-widest font-bold opacity-70 ml-1">{s.label}</span></p>
                  <p className="text-lg font-bold mt-1">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Personal Information</h3>
                <button onClick={() => isEditing ? handleSave() : setIsEditing(true)} className={`text-xs px-4 py-2 rounded-lg font-bold transition ${isEditing ? "bg-[#2563EB] text-white" : "bg-[#0F172A] text-white"}`}>{isEditing ? "Save Changes" : "Edit"}</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                <div>
                  <label className="text-xs font-semibold text-gray-600">Full Name</label>
                  <input disabled={!isEditing} value={userData.fullName} onChange={e => setUserData({...userData, fullName: e.target.value})} className={`w-full mt-1 border rounded-xl px-3 py-2.5 text-sm ${isEditing ? "border-blue-300 bg-white" : "border-gray-200 bg-gray-50"}`} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600">Email Address</label>
                  <input disabled value={userData.email} className="w-full mt-1 border rounded-xl px-3 py-2.5 text-sm border-gray-200 bg-gray-100 text-gray-500" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600">Phone Number</label>
                  <input disabled={!isEditing} value={userData.phone} onChange={e => setUserData({...userData, phone: e.target.value})} className={`w-full mt-1 border rounded-xl px-3 py-2.5 text-sm ${isEditing ? "border-blue-300 bg-white" : "border-gray-200 bg-gray-50"}`} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600">CNIC / ID</label>
                  <input disabled={!isEditing} value={userData.cnic} onChange={e => setUserData({...userData, cnic: e.target.value})} className={`w-full mt-1 border rounded-xl px-3 py-2.5 text-sm ${isEditing ? "border-blue-300 bg-white" : "border-gray-200 bg-gray-50"}`} />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-600">Easypaisa Number</label>
                  <input disabled={!isEditing} value={userData.easypaisa} onChange={e => setUserData({...userData, easypaisa: e.target.value})} className={`w-full mt-1 border rounded-xl px-3 py-2.5 text-sm ${isEditing ? "border-blue-300 bg-white" : "border-gray-200 bg-gray-50"}`} />
                </div>
              </div>

              {isEditing && <p className="text- text-gray-500 mt-3">Note: Email change nahi ho sakta, baaki sab update ho jayega localStorage me.</p>}
            </div>

            <div className="bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] rounded-2xl p-5 text-white flex justify-between items-center">
              <div><p className="font-bold">Need Help?</p><p className="text-sm text-gray-300 mt-1">Contact admin on WhatsApp for support</p></div>
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-4 py-2 rounded-xl text-sm font-bold">Chat 💬</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;