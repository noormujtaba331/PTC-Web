/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActiveDashboard from "../components/ActiveDashboard";

const Dashboard = () => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
  const UserName = currentUser?.fullName || currentUser?.name || "User";

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn") || !currentUser) {
      navigate("/login");
    }
  }, []);

  const [planStatus, setPlanStatus] = useState(() => {
    try {
      const storedPayload = localStorage.getItem("se_payment_payload");
      if (storedPayload) {
        const data = JSON.parse(storedPayload);
        return (
          data?.status || localStorage.getItem("se_plan_status") || "Pending"
        );
      }
      return localStorage.getItem("se_plan_status") || "Pending";
    } catch {
      return localStorage.getItem("se_plan_status") || "Pending";
    }
  });

  const [planName, setPlanName] = useState(() => {
    return localStorage.getItem("se_plan_name") || "";
  });

  const [todaysAds] = useState(() => {
    return parseInt(localStorage.getItem("se_todays_ads") || "12");
  });

  const [watchedAds, setWatchedAds] = useState(() => {
    return parseInt(localStorage.getItem("se_watched_ads") || "0");
  });

  const [balance, setBalance] = useState(() => {
    return parseFloat(localStorage.getItem("se_balance") || "0");
  });

  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(null);

  const perAdReward = 2.5;
  const progress = todaysAds > 0 ? (watchedAds / todaysAds) * 100 : 0;

  const adsList = Array.from({ length: todaysAds }, (_, i) => ({
    id: i + 1,
    title: `BBC World Promotion Video #${i + 1}`,
    duration: "30s",
    reward: perAdReward,
    watched: i < watchedAds,
  }));

  // ❌ NO localStorage.setItem for watched/balance - sirf read hai, write nahi
  // Agar tujhe save karna hai to ye useEffect hata de, maine hata diya hai
  // useEffect(() => {
  //   localStorage.setItem("se_watched_ads", watchedAds.toString());
  // }, [watchedAds]);

  const handleWatchAd = (id) => {
    setShowVideoModal(id);
    setTimeout(() => {
      setShowVideoModal(null);
      if (id > watchedAds) {
        setWatchedAds((p) => p + 1);
        setBalance((p) => p + perAdReward);
      }
    }, 3000);
  };

  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentProof, setPaymentProof] = useState(null);
  const [proofPreview, setProofPreview] = useState(null);
  const [formData, setFormData] = useState({
    senderName: "",
    senderNumber: "",
    transactionId: "",
  });

  const [savedPayload, setSavedPayload] = useState(() => {
    const stored = localStorage.getItem("se_payment_payload");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return null;
      }
    }
    return null;
  });

  const easypaisaAccount = {
    title: "SE MARKETING SOLUTION",
    number: "0345-1234567",
    name: "Ali Arqam",
  };

  const plans = [
    {
      id: "starter",
      name: "Starter Plan",
      price: 45,
      priceText: "$45",
      days: "20 Days",
      tier: "BASIC TIER",
    },
    {
      id: "student",
      name: "Student Plan",
      price: 65,
      priceText: "$65",
      days: "80 Days",
      tier: "STUDENT TIER • 80-DAY ACCESS",
      popular: true,
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: 85,
      priceText: "$85",
      days: "Lifetime",
      tier: "PREMIUM TIER • LIFETIME",
    },
  ];

  const getStatusStyle = () => {
    if (planStatus === "Active")
      return "bg-green-50 text-green-600 border-green-100";
    if (planStatus === "Review")
      return "bg-yellow-50 text-yellow-600 border-yellow-100";
    return "bg-gray-100 text-gray-500 border-gray-200";
  };

  const handleProofChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPaymentProof(file);
      setProofPreview(URL.createObjectURL(file));
    }
  };

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setPaymentProof(null);
    setProofPreview(null);
    setFormData({ senderName: UserName, senderNumber: "", transactionId: "" });
    setShowPurchaseModal(true);
  };

  const handlePurchaseSubmit = (e) => {
    e.preventDefault();
    if (!paymentProof) {
      alert("Please upload payment proof");
      return;
    }

    const payload = {
      userName: UserName,
      userEmail: currentUser?.email || "",
      selectedPlan: {
        id: selectedPlan.id,
        name: selectedPlan.name,
        price: selectedPlan.price,
        priceText: selectedPlan.priceText,
        days: selectedPlan.days,
      },
      easypaisaReceiver: {
        title: easypaisaAccount.title,
        number: easypaisaAccount.number,
      },
      senderDetails: {
        name: formData.senderName,
        easypaisaNumber: formData.senderNumber,
        transactionId: formData.transactionId,
        amount: selectedPlan.price,
      },
      paymentProof: {
        fileName: paymentProof.name,
        fileType: paymentProof.type,
        fileSize: `${(paymentProof.size / 1024).toFixed(2)} KB`,
        preview: proofPreview,
      },
      submittedAt: new Date().toISOString(),
      status: "Review",
    };

    localStorage.setItem("se_payment_payload", JSON.stringify(payload));
    localStorage.setItem("se_plan_status", "Review");
    localStorage.setItem("se_plan_name", payload.selectedPlan.name);

    setSavedPayload(payload);
    setPlanName(payload.selectedPlan.name);
    setPlanStatus("Review");
    setShowPurchaseModal(false);
  };

  // ✅ DEV BUTTON - LOCALSTORAGE ME CHANGE NAHI KAREGA
  const handleMakeActiveForDev = () => {
    // Sirf state change, localStorage touch nahi
    setPlanStatus("Active");
    setPlanName((prev) => prev || "Student Plan");
    console.log("DEV: Status Active (memory only) - localStorage untouched");
  };

  const clearStorage = () => {
    localStorage.removeItem("se_payment_payload");
    localStorage.removeItem("se_plan_status");
    localStorage.removeItem("se_plan_name");
    setSavedPayload(null);
    setPlanStatus("Pending");
    setPlanName("");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (
    planStatus === "Pending" ||
    planStatus === "Review" ||
    planStatus === "Expired"
  ) {
    return (
      <div className="min-h-screen bg-[#F9FBFD]">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3 border-b sticky top-0 bg-white z-40">
          <Link to="/dashboard" className="flex gap-2 items-center">
            <div className="w-7 h-7 bg-[#2563EB] rounded-lg text-white flex items-center justify-center font-bold text-">
              SE
            </div>
            <div className="leading-none">
              <p className="font-bold text-">SE MARKETING</p>
              <p className="text- text-[#2563EB] font-bold tracking-widest">
                SOLUTION
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <span
              className={`hidden sm:flex items-center gap-1.5 text- font-bold border px-3 py-1 rounded-full ${getStatusStyle()}`}
            >
              ● {planStatus} {planName ? `- ${planName}` : ""}
            </span>
            <button
              onClick={handleLogout}
              className="text- border px-3 py-1.5 rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-4 sm:p-6">
          <div className="bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#2563EB]/20 rounded-full blur-2xl"></div>
            <p className="text- tracking-widest text-blue-300">WELCOME BACK</p>
            <p className="text- sm:text- font-extrabold mt-1">
              Hey! {UserName} 👋
            </p>

            {planStatus === "Review" && savedPayload ? (
              <>
                <p className="text- text-yellow-300 mt-2 font-bold">
                  ● Your plan is on review
                </p>
                <p className="text- text-gray-300 mt-1">
                  Your payment for {savedPayload.selectedPlan.name} (
                  {savedPayload.selectedPlan.priceText}) is under verification.
                </p>
              </>
            ) : (
              <p className="text- text-gray-300 mt-1">
                Your plan is currently <b>{planStatus}</b>. Please purchase a
                plan to activate earning.
              </p>
            )}

            {/* ✅ SIRF EK BUTTON - FOR DEVELOPMENT TESTING */}
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text- tracking-widest text-gray-400 font-bold">
                FOR DEVELOPMENT TESTING
              </p>
              <div className="flex flex-wrap gap-2 mt-3 items-center">
                <button
                  onClick={handleMakeActiveForDev}
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl text- font-bold transition shadow"
                >
                  Active
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 w-full max-w-md text-center shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <div className="w-14 h-14 bg-[#E6FFF4] rounded-full flex items-center justify-center mx-auto">
                💬
              </div>
              <h2 className="font-bold text- mt-4">Connect with Admin</h2>
              <p className="text- text-gray-500 mt-1">
                Verification usually takes 45 minutes.
              </p>
              <div className="mt-5 bg-[#F8FBFF] border border-gray-100 rounded-xl p-4 text-left">
                <p className="text- tracking-widest text-gray-400">
                  PLAN STATUS
                </p>
                <p
                  className={`font-bold mt-1 text- ${planStatus === "Active" ? "text-green-600" : planStatus === "Review" ? "text-yellow-600" : "text-gray-600"}`}
                >
                  ● {planStatus} {planName && `- ${planName}`}
                </p>
                <p className="text- text-gray-500 mt-1">{currentUser?.email}</p>
              </div>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="mt-5 w-full bg-[#25D366] text-white py-3 rounded-xl text- font-bold flex justify-center gap-2"
              >
                💬 Connect on WhatsApp
              </a>
              <button
                onClick={clearStorage}
                className="mt-3 text- text-gray-400 underline"
              >
                Clear Payment (Test)
              </button>
            </div>
          </div>

          <div
            id="plans"
            className="py-12 px-4 sm:px-6 lg:px-10 bg-[#F9FBFD] text-center"
          >
            <span className="bg-[#E6FFF4] border border-green-100 text-[#00A651] text-sm px-4 py-1.5 rounded-full font-bold tracking-widest">
              MEMBERSHIP TIERS
            </span>
            <h2 className="text- sm:text- md:text- font-extrabold mt-4 leading-tight max-w- mx-auto">
              Choose Your Plan & Scale Your Daily Income
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto text-left items-stretch">
              {/* CARD 1 - STARTER */}
              <div className="bg-white border border-gray-100 rounded- p-6 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="bg-gray-100 text-gray-600 text- px-3 py-1 rounded-full w-fit font-bold tracking-widest">
                  BASIC TIER
                </span>
                <h3 className="font-bold text- mt-4">Starter Plan</h3>
                <p className="text- text-gray-500 mt-1">Expire After 20 Days</p>
                <span className="mt-3 bg-yellow-100 text-yellow-700 text- px-2.5 py-1 rounded-full w-fit font-medium">
                  Show in your Account within 45 min.
                </span>
                <p className="text- font-extrabold mt-4">
                  $45
                  <span className="text- font-normal text-gray-500">
                    {" "}
                    / 20 days
                  </span>
                </p>
                <div className="mt-6 border-t border-gray-100 pt-5 text- space-y-2.5 text-gray-600">
                  <p className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span> 6 videos
                    access
                  </p>
                  <p className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span> 3
                    Assignment pr 400
                  </p>
                  <p className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span> 1st
                    Level Benefit 15%
                  </p>
                  <p className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>{" "}
                    <b className="text-[#0F172A]">20000 with incentive</b>
                  </p>
                </div>
                <button
                  onClick={() => handlePlanClick(plans[0])}
                  className="flex items-center justify-center w-full mt-4 p-2 bg-[#F1F5F9] hover:bg-[#0F172A] hover:text-white rounded-xl font-bold text- transition"
                >
                  Choose Starter
                </button>
              </div>

              {/* CARD 2 - PREMIUM (MOST POPULAR) */}
              <div className="bg-[#0F172A] text-white border-2 border-blue-600 rounded- p-6 flex flex-col relative shadow-[0_20px_60px_rgba(37,99,235,0.25)] lg:scale-[1.03] lg:-mt-2">
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-[#00C950] text-white text- px-5 py-1.5 rounded-full font-bold whitespace-nowrap shadow-lg z-10">
                  MOST POPULAR
                </span>
                <span className="bg-white/10 text-gray-300 text- px-3 py-1 rounded-full w-fit mt-4 tracking-widest">
                  PREMIUM TIER • LIFETIME
                </span>
                <h3 className="font-bold text- mt-4">Premium Plan</h3>
                <p className="text- text-gray-400 mt-1">Lifetime Access</p>
                <span className="mt-3 bg-yellow-500/20 text-yellow-300 text- px-2.5 py-1 rounded-full w-fit">
                  Show in your Account within 45 min.
                </span>
                <p className="text- font-extrabold mt-4">
                  $85
                  <span className="text- font-normal text-gray-400">
                    {" "}
                    / Lifetime
                  </span>
                </p>
                <div className="mt-6 border-t border-white/10 pt-5 text- space-y-2.5 text-gray-300">
                  <p className="flex gap-2">
                    <span className="text-green-400">✓</span> 12 Videos Access
                  </p>
                  <p className="flex gap-2">
                    <span className="text-green-400">✓</span> 8 PDF pr 800
                  </p>
                  <p className="flex gap-2">
                    <span className="text-green-400">✓</span> 2nd Level Benefit
                    20%
                  </p>
                  <p className="flex gap-2">
                    <span className="text-green-400">✓</span> 7/24 Support
                  </p>
                  <p className="flex gap-2">
                    <span className="text-green-400">✓</span>{" "}
                    <b className="text-white">35000 with incentive</b>
                  </p>
                </div>
                <button
                  onClick={() => handlePlanClick(plans[2])}
                  className="flex p-2 mt-4 items-center justify-center w-full bg-gradient-to-r from-blue-600 to-[#00C950] rounded-xl font-bold text-white text-"
                >
                  Choose Premium
                </button>
              </div>

              {/* CARD 3 - STUDENT */}
              <div className="bg-white border border-gray-100 rounded- p-6 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="bg-gray-100 text-gray-600 text- px-3 py-1 rounded-full w-fit font-bold tracking-widest">
                  STUDENT TIER • 80-DAY ACCESS
                </span>
                <h3 className="font-bold text- mt-4">Student Plan</h3>
                <p className="text- text-gray-500 mt-1">Expire After 80 Days</p>
                <span className="mt-3 bg-yellow-100 text-yellow-700 text- px-2.5 py-1 rounded-full w-fit font-medium">
                  Show in your Account within 45 min.
                </span>
                <p className="text- font-extrabold mt-4">
                  $65
                  <span className="text- font-normal text-gray-500">
                    {" "}
                    / 80 days
                  </span>
                </p>
                <div className="mt-6 border-t border-gray-100 pt-5 text- space-y-2.5 text-gray-600">
                  <p className="flex gap-2">
                    <span className="text-green-500 font-bold">◉</span> 12
                    videos access
                  </p>
                  <p className="flex gap-2">
                    <span className="text-green-500 font-bold">◉</span> 6 PDF pr
                    600
                  </p>
                  <p className="flex gap-2">
                    <span className="text-green-500 font-bold">◉</span> 1st
                    level Benefits 15%
                  </p>
                  <p className="flex gap-2">
                    <span className="text-green-500 font-bold">◉</span>{" "}
                    <b className="text-[#0F172A]">25000 with incentive</b>
                  </p>
                </div>
                <button
                  onClick={() => handlePlanClick(plans[1])}
                  className="flex items-center justify-center w-full  mt-4 p-2 bg-[#F1F5F9] hover:bg-[#0F172A] hover:text-white rounded-xl font-bold text- transition"
                >
                  Get Student Access
                </button>
              </div>
            </div>
          </div>
          
        </div>

        {showPurchaseModal && selectedPlan && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-6">
              <div className="flex justify-between">
                <h3 className="font-bold text-">
                  Complete Payment - {selectedPlan.priceText}
                </h3>
                <button
                  onClick={() => setShowPurchaseModal(false)}
                  className="w-8 h-8 bg-gray-100 rounded-full"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handlePurchaseSubmit} className="mt-4 space-y-3">
                <input
                  required
                  value={formData.senderName}
                  onChange={(e) =>
                    setFormData({ ...formData, senderName: e.target.value })
                  }
                  placeholder="Full Name"
                  className="w-full border rounded-xl px-3 py-2.5 text-"
                />
                <input
                  required
                  value={formData.senderNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, senderNumber: e.target.value })
                  }
                  placeholder="Easypaisa Number"
                  className="w-full border rounded-xl px-3 py-2.5 text-"
                />
                <input
                  required
                  value={formData.transactionId}
                  onChange={(e) =>
                    setFormData({ ...formData, transactionId: e.target.value })
                  }
                  placeholder="Transaction ID"
                  className="w-full border rounded-xl px-3 py-2.5 text-"
                />
                <label className="w-full border-2 border-dashed rounded-xl p-4 flex flex-col items-center cursor-pointer">
                  <span className="text-">📷 Upload Proof</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProofChange}
                    className="hidden"
                    required
                  />
                  {proofPreview && (
                    <img
                      src={proofPreview}
                      alt="proof"
                      className="w-16 h-16 mt-2 rounded"
                    />
                  )}
                </label>
                <button
                  type="submit"
                  className="w-full bg-[#0F172A] text-white py-3 rounded-xl text- font-bold"
                >
                  Submit Proof
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <ActiveDashboard
      userName={UserName}
      userEmail={currentUser?.email}
      balance={balance}
      watchedAds={watchedAds}
      todaysAds={todaysAds}
      progress={progress}
      planName={planName}
      onWatchAd={handleWatchAd}
      showVideoModal={showVideoModal}
      adsList={adsList}
    />
  );
};

export default Dashboard;
