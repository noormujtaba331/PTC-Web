/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ActiveNav from "../components/ActiveNav";

const Plans = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null") || {};
  const currentPlan = localStorage.getItem("se_plan_name") || "No Plan";

  const plans = [
    { name: "Starter Plan", price: "$45", duration: "20 days" },
    { name: "Student Plan", price: "$65", duration: "80 days" },
    { name: "Premium Plan", price: "$85", duration: "Lifetime" },
  ];

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setFormData({
      name: currentUser.fullName || currentUser.name || "",
      phone: currentUser.phone || "",
      email: currentUser.email || "",
    });
    setShowModal(true);
  };

  const handleConnectAdmin = () => {
    if (!formData.name || !formData.phone) {
      alert("Name aur Phone zaroori hai!");
      return;
    }
    // 【entity-WhatsApp¦canonical_name=WhatsApp】 pe admin ko message
    const message = `Hi Admin, I want to buy ${selectedPlan.name} - ${selectedPlan.price}/${selectedPlan.duration}%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ACurrent Plan: ${currentPlan}`;
    const adminNumber = "923001234567"; // <-- Yahan apna admin number daal de
    window.open(`https://wa.me/${adminNumber}?text=${message}`, "_blank");
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FBFF]">
      <ActiveNav />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl font-bold">Plans</h1>
        <p className="text-sm text-gray-500 mt-1">
          Current Plan: <span className="font-bold text-[#2563EB]">{currentPlan}</span>
        </p>

        <div id="plans" className="py-12 px-4 sm:px-6 lg:px-10 bg-[#F9FBFD] text-center rounded-2xl mt-6">
          <span className="bg-[#E6FFF4] border border-green-100 text-[#00A651] text-xs px-4 py-1.5 rounded-full font-bold tracking-widest">
            MEMBERSHIP TIERS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-4 leading-tight max-w-3xl mx-auto">
            Choose Your Plan & Scale Your Daily Income
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto text-left items-stretch">
            
            {/* CARD 1 - STARTER */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all">
              <span className="bg-gray-100 text-gray-600 text- px-3 py-1 rounded-full w-fit font-bold tracking-widest">BASIC TIER</span>
              <h3 className="font-bold text-xl mt-4">Starter Plan</h3>
              <p className="text-sm text-gray-500 mt-1">Expire After 20 Days</p>
              <span className="mt-3 bg-yellow-100 text-yellow-700 text-xs px-2.5 py-1 rounded-full w-fit">Show in your Account within 45 min.</span>
              <p className="text-3xl font-extrabold mt-4">$45<span className="text-sm font-normal text-gray-500"> / 20 days</span></p>
              <div className="mt-6 border-t pt-5 text-sm space-y-2.5 text-gray-600">
                <p>✓ 6 videos access</p>
                <p>✓ 3 Assignment pr 400</p>
                <p>✓ 1st Level Benefit 15%</p>
                <p>✓ <b className="text-[#0F172A]">20000 with incentive</b></p>
              </div>
              <button onClick={() => handlePlanClick(plans[0])} className="w-full mt-6 p-2.5 bg-[#F1F5F9] hover:bg-[#0F172A] hover:text-white rounded-xl font-bold text-sm transition">Choose Starter</button>
            </div>

            {/* CARD 2 - PREMIUM */}
            <div className="bg-[#0F172A] text-white border-2 border-blue-600 rounded-2xl p-6 flex flex-col relative shadow-[0_20px_60px_rgba(37,99,235,0.25)] lg:scale-[1.03] lg:-mt-2">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-[#00C950] text-white text- px-5 py-1.5 rounded-full font-bold whitespace-nowrap">MOST POPULAR</span>
              <span className="bg-white/10 text-gray-300 text- px-3 py-1 rounded-full w-fit mt-4 tracking-widest">PREMIUM TIER • LIFETIME</span>
              <h3 className="font-bold text-xl mt-4">Premium Plan</h3>
              <p className="text-sm text-gray-400 mt-1">Lifetime Access</p>
              <span className="mt-3 bg-yellow-500/20 text-yellow-300 text-xs px-2.5 py-1 rounded-full w-fit">Show in your Account within 45 min.</span>
              <p className="text-3xl font-extrabold mt-4">$85<span className="text-sm font-normal text-gray-400"> / Lifetime</span></p>
              <div className="mt-6 border-t border-white/10 pt-5 text-sm space-y-2.5 text-gray-300">
                <p>✓ 12 Videos Access</p><p>✓ 8 PDF pr 800</p><p>✓ 2nd Level Benefit 20%</p><p>✓ 7/24 Support</p><p>✓ <b className="text-white">35000 with incentive</b></p>
              </div>
              <button onClick={() => handlePlanClick(plans[2])} className="w-full mt-6 p-2.5 bg-gradient-to-r from-blue-600 to-[#00C950] rounded-xl font-bold text-white text-sm">Choose Premium</button>
            </div>

            {/* CARD 3 - STUDENT */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all">
              <span className="bg-gray-100 text-gray-600 text- px-3 py-1 rounded-full w-fit font-bold tracking-widest">STUDENT TIER • 80-DAY</span>
              <h3 className="font-bold text-xl mt-4">Student Plan</h3>
              <p className="text-sm text-gray-500 mt-1">Expire After 80 Days</p>
              <span className="mt-3 bg-yellow-100 text-yellow-700 text-xs px-2.5 py-1 rounded-full w-fit">Show in your Account within 45 min.</span>
              <p className="text-3xl font-extrabold mt-4">$65<span className="text-sm font-normal text-gray-500"> / 80 days</span></p>
              <div className="mt-6 border-t pt-5 text-sm space-y-2.5 text-gray-600">
                <p>◉ 12 videos access</p><p>◉ 6 PDF pr 600</p><p>◉ 1st level Benefits 15%</p><p>◉ <b className="text-[#0F172A]">25000 with incentive</b></p>
              </div>
              <button onClick={() => handlePlanClick(plans[1])} className="w-full mt-6 p-2.5 bg-[#F1F5F9] hover:bg-[#0F172A] hover:text-white rounded-xl font-bold text-sm transition">Get Student Access</button>
            </div>

          </div>
        </div>
      </div>

      {/* ===== POPUP MODAL - CONNECT WITH ADMIN ===== */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div onClick={() => setShowModal(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          
          <div className="relative bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in">
            {/* Header */}
            <div className="bg-[#0F172A] p-5 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">Connect with Admin</h3>
                <p className="text-xs text-gray-400 mt-1">You selected: <span className="text-white font-bold">{selectedPlan?.name}</span></p>
              </div>
              <button onClick={() => setShowModal(false)} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">✕</button>
            </div>

            {/* Form */}
            <div className="p-6 space-y-4">
              <div className="bg-[#F8FBFF] border border-blue-100 rounded-xl p-3 flex justify-between items-center">
                <div><p className="text- tracking-widest text-gray-500 font-bold">SELECTED PLAN</p><p className="font-bold text-sm">{selectedPlan?.name}</p></div>
                <p className="font-extrabold text-[#2563EB]">{selectedPlan?.price}</p>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700">Full Name *</label>
                <input value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} placeholder="Your Name" className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-[#2563EB] outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-700">Phone / 【entity-WhatsApp¦canonical_name=WhatsApp】 *</label>
                <input value={formData.phone} onChange={e=>setFormData({...formData, phone: e.target.value})} placeholder="03XX-XXXXXXX" className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-[#2563EB] outline-none" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-700">Email</label>
                <input value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})} placeholder="email@example.com" className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-[#2563EB] outline-none bg-gray-50" />
              </div>

              <button onClick={handleConnectAdmin} className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition">
                <span>💬</span> Connect with Admin
              </button>
              <p className="text- text-gray-500 text-center">Admin will activate your plan within 45 minutes after payment confirmation</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plans;