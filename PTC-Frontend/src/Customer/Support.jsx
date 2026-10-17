/* eslint-disable no-unused-vars */
import React from "react";
import ActiveNav from "../components/ActiveNav";

const Support = () => {
  return (
    <div className="min-h-screen bg-[#F8FBFF]">
      <ActiveNav />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl font-bold">Support</h1>
        <p className="text-sm text-gray-500 mt-1">Need help? Contact us anytime</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="font-bold">Contact Support</h3>
            <div className="mt-4 space-y-3">
              <a href="https://wa.me/923001234567" target="_blank" className="flex items-center justify-between p-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366]/20 transition">
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center text-white">💬</div><div><p className="font-bold text-sm">WhatsApp Support</p><p className="text-xs text-gray-600">Fast response • 10am - 10pm</p></div></div>
                <span className="text-sm">→</span>
              </a>
              <div className="flex items-center justify-between p-4 bg-[#F9FBFD] border rounded-xl">
                <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center text-white">✉️</div><div><p className="font-bold text-sm">Email Us</p><p className="text-xs text-gray-600">support@semarketing.com</p></div></div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="font-bold">FAQs</h3>
            <div className="mt-4 space-y-3">
              {[
                { q: "Withdrawal kab milega?", a: "24 hours ke andar Easypaisa / JazzCash / LocalBanks me." },
                { q: "Ad reward kitna hai?", a: "Depends on Ads, fixed for all users." },
                { q: "Plan kaise upgrade karun?", a: "Plans page pe jaake Upgrade Now dabao." },
              ].map((f,i)=>(
                <div key={i} className="p-3 bg-[#F8FBFF] border border-gray-100 rounded-xl">
                  <p className="font-semibold text-sm">{f.q}</p>
                  <p className="text-xs text-gray-600 mt-1">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Support;