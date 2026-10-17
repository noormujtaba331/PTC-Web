/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActiveNav from "./ActiveNav";

const ActiveDashboard = (props) => {
  const navigate = useNavigate();

  // --- LOCALSTORAGE SE DATA ---
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null") || {};
  const UserName = props.userName || currentUser.fullName || currentUser.name || "User";
  const UserEmail = props.userEmail || currentUser.email || "";
  const userInitial = UserName.charAt(0).toUpperCase();

  const [todaysAds] = useState(() => {
    return props.todaysAds || parseInt(localStorage.getItem("se_todays_ads") || "12");
  });

  const [watchedAds, setWatchedAds] = useState(() => {
    return props.watchedAds ?? parseInt(localStorage.getItem("se_watched_ads") || "0");
  });

  const [balance, setBalance] = useState(() => {
    return props.balance ?? parseFloat(localStorage.getItem("se_balance") || "0");
  });

  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(null);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const perAdReward = 2.5;
  const progress = todaysAds > 0 ? (watchedAds / todaysAds) * 100 : 0;

  const planName = localStorage.getItem("se_plan_name") || "Student Plan";
  const planStatus = localStorage.getItem("se_plan_status") || "Active";

  // Save balance & watched to localstorage
  useEffect(() => {
    localStorage.setItem("se_watched_ads", watchedAds.toString());
    localStorage.setItem("se_balance", balance.toString());
  }, [watchedAds, balance]);

  const adsList = Array.from({ length: todaysAds }, (_, i) => ({
    id: i + 1,
    title: `BBC World Promotion Video #${i + 1}`,
    duration: "30s",
    reward: perAdReward,
    watched: i < watchedAds,
  }));

  const menuItems = [
    { label: "Dashboard", icon: "🏠", path: "/dashboard", active: true },
    { label: "Profile", icon: "👤", path: "/profile" },
    { label: "My Ads", icon: "▶", count: todaysAds.toString(), path: "/my-ads" },
    { label: "Assignments", icon: "📝", count: "6", path: "/assignments" },
    { label: "Plans", icon: "💳", path: "/plans" },
    { label: "Earnings", icon: "💰", path: "/earnings" },
    { label: "Withdrawals", icon: "🏦", path: "/withdrawals" },
    { label: "Support", icon: "💬", path: "/support" },
  ];

  const handleWatchAd = (id) => {
    if (props.onWatchAd) {
      props.onWatchAd(id);
      return;
    }
    setShowVideoModal(id);
    setTimeout(() => {
      setShowVideoModal(null);
      if (id > watchedAds) {
        setWatchedAds(p => p + 1);
        setBalance(p => p + perAdReward);
      }
    }, 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F8FBFF]">
<ActiveNav/>

      {/* ===== MAIN ===== */}
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Main Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Welcome back, {UserName} — your daily ads are ready.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <p className="text- tracking-widest text-gray-500 font-bold">TODAY'S AD COUNT</p>
            <p className="text-2xl font-bold mt-1">{todaysAds}</p>
            <p className="text-xs text-gray-500 mt-1">Assigned for today</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <p className="text- tracking-widest text-gray-500 font-bold">ADS WATCHED</p>
            <p className="text-2xl font-bold mt-1">{watchedAds} / {todaysAds}</p>
            <div className="w-full h-1.5 bg-gray-100 rounded-full mt-3"><div className="h-full bg-[#00C950] rounded-full transition-all" style={{ width: `${progress}%` }}></div></div>
            <p className="text-xs text-green-600 mt-2 font-medium">{Math.round(progress)}% completed</p>
          </div>
          <div className="bg-[#0F172A] text-white rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#2563EB]/20 rounded-full blur-xl"></div>
            <p className="text- tracking-widest text-gray-400 font-bold">CURRENT BALANCE</p>
            <p className="text-2xl font-extrabold mt-1">${balance.toFixed(2)}</p>
            <p className="text-xs text-gray-400 mt-1">Today's Earning: ${(watchedAds * perAdReward).toFixed(2)}</p>
           <Link to="/withdrawals"><button className="w-full mt-4 bg-white text-[#0F172A] py-2.5 rounded-xl text-sm font-bold hover:bg-gray-100 transition">Withdraw Now →</button></Link>
            <p className="text- text-gray-500 mt-2 text-center">Min withdraw $10.00</p>
          </div>
        </div>

        <div className="mt-6 bg-white border border-gray-100 rounded-2xl p-5">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Today's Ads</h3>
            <span className="text-sm text-gray-500">{todaysAds - watchedAds} remaining</span>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {(props.adsList || adsList).map((ad) => (
              <div key={ad.id} className="bg-[#F9FBFD] border border-gray-100 rounded-xl p-3.5 flex gap-3 items-center hover:border-gray-200 transition">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white">▶</div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate flex items-center gap-2">{ad.title} {ad.watched && <span className="text- bg-green-50 text-green-600 px-1.5 py-0.5 rounded-full">Watched</span>}</p>
                  <p className="text-xs text-gray-500">YouTube • {ad.duration} • Reward ${ad.reward}</p>
                </div>
                {ad.watched ? <span className="text-xs text-green-600 font-bold">✓ Done</span> : <Link to="/my-ads"><button className="bg-[#2563EB] hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition">Watch</button></Link>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {(props.showVideoModal ?? showVideoModal) && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
            <div className="w-full h-32 bg-black rounded-xl flex items-center justify-center text-white">▶ Playing Ad {props.showVideoModal ?? showVideoModal}...</div>
            <p className="font-bold mt-4">Please wait 3 seconds</p>
            <p className="text-sm text-gray-500 mt-1">Your reward will be added automatically</p>
          </div>
        </div>
      )}

      {showWithdraw && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-5 w-full max-w-sm shadow-2xl">
            <div className="flex justify-between items-center"><h3 className="font-bold">Withdraw Balance</h3><button onClick={() => setShowWithdraw(false)} className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">✕</button></div>
            <div className="mt-4 bg-[#F8FBFF] border border-gray-100 rounded-xl p-3"><p className="text- text-gray-500 tracking-widest">Available Balance</p><p className="text-lg font-bold">${balance.toFixed(2)}</p><p className="text-xs text-gray-500">{UserName} • {UserEmail}</p></div>
            <input type="number" placeholder="Enter amount (Min $10)" className="w-full mt-3 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-blue-500 outline-none" />
            <select className="w-full mt-2 border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none"><option>Local Bank</option><option>Easypaisa</option><option>【entity-JazzCash¦canonical_name=JazzCash】</option></select>
            <button className="w-full mt-3 bg-[#2563EB] text-white py-2.5 rounded-xl text-sm font-bold">Request Withdrawal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveDashboard;