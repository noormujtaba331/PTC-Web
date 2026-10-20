<<<<<<< HEAD
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
 
import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import API from '../Configs/api.config';

const VideoWorkPage = () => {

const openWhatsApp = () => {
  const phoneNumber = "923056937190"; // <-- yahan apna WhatsApp number dal de, bina + ke, 92 se start
  const message = `Hello Admin, I need help. My account: ${currentUser?.email || currentUser?.username || ""}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

  const { currentUser } = useOutletContext();
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeAd, setActiveAd] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [captcha, setCaptcha] = useState(null);
  const [captchaInput, setCaptchaInput] = useState('');
  const intervalRef = useRef(null);

  // Robust URL converter for YouTube and direct video links
  const getEmbedUrl = (url) => {
    if (!url) return "";
    if (url.includes("/embed/")) return url;

    let videoId = "";
    try {
      if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1]?.split("?")[0];
      } else if (url.includes("watch?v=")) {
        videoId = url.split("watch?v=")[1]?.split("&")[0];
      } else if (url.includes("shorts/")) {
        videoId = url.split("shorts/")[1]?.split("?")[0];
      } else if (url.includes("embed/")) {
        videoId = url.split("embed/")[1]?.split("?")[0];
      }
    } catch (err) {
      console.log("Error parsing video URL:", err);
    }

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;
    }
    
    return url;
  };

  // Fallback sample ads agar backend se data na aaye
  const fallbackSampleAds = [
    { _id: 'fb_1', adTitle: 'Test Video 1: Big Buck Bunny', adUrl: 'https://youtu.be/N_HkPPTZcQs', time: 15, reward: 0.03, watched: false },
    { _id: 'fb_2', adTitle: 'Test Video 2: Elephants Dream', adUrl: 'https://www.youtube.com/watch?v=e-ORhEE9VVg', time: 15, reward: 0.04, watched: false },
    { _id: 'fb_3', adTitle: 'Test Video 3: Cinematic Clip', adUrl: 'https://youtu.be/N_HkPPTZcQs', time: 15, reward: 0.03, watched: false }
  ];

const fetchAds = async () => {
    try {
      setLoading(true);
      const res = await API.get("/api/ads/today-ads");
      const list = res.data.ads || res.data.adsList || res.data;
      const watchedIds = (res.data.watchedAds || []).map(id => id.toString());

      if (Array.isArray(list) && list.length > 0) {
        // Watched IDs ko string mein convert karke check karna
        const formattedAds = list.map(ad => ({
          ...ad,
          watched: watchedIds.includes(ad._id.toString()) || ad.watched
        }));
        setAds(formattedAds);
      } else {
        setAds(fallbackSampleAds);
      }
    } catch (e) {
      console.error("Error fetching ads, using fallback:", e);
      setAds(fallbackSampleAds);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Background-safe Timer using Timestamps
  useEffect(() => {
    if (!activeAd || captcha) return;
    const need = activeAd.time || activeAd.duration || 15;
    const start = Date.now() - seconds * 1000;
    
    intervalRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      setSeconds(elapsed);
      if (elapsed >= need) {
        clearInterval(intervalRef.current);
        const n1 = Math.floor(Math.random() * 10) + 1;
        const n2 = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ adId: activeAd._id, n1, n2, ans: n1 + n2 });
      }
    }, 1000);
    
    return () => clearInterval(intervalRef.current);
  }, [activeAd, captcha]);

  const openAd = (ad) => {
    if (ad.watched) return;
    setActiveAd(ad);
    setSeconds(0);
    setCaptcha(null);
  };

  const closeAd = () => {
    clearInterval(intervalRef.current);
    setActiveAd(null);
    setSeconds(0);
    setCaptcha(null);
  };

  const handleClaim = async () => {
    if (parseInt(captchaInput) !== captcha.ans) {
      alert("Wrong Captcha! Try again.");
      return;
    }

    try {
      const adId = captcha.adId;
      if (adId.toString().startsWith('fb_')) {
        // Test mode local state update
        setAds(prev => prev.map(item => item._id === adId ? { ...item, watched: true } : item));
        alert("Reward Added! (Test Mode)");
        closeAd();
      } else {
        const res = await API.post(`/api/ads/watched/${adId}`);
        if (res.data.success) {
          // Instant UI update: specific ad ko watched mark karna, baaki normal rahein
          setAds(prev => prev.map(item => item._id === adId ? { ...item, watched: true } : item));
          alert("Reward Added Successfully!");
          closeAd();
          // Optional: background mein fresh data sync karne ke liye
          fetchAds();
        }
      }
    } catch (e) {
      alert(e.response?.data?.message || "Failed to complete ad");
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm flex items-center justify-center min-h-[420px]">
        <p className="text-gray-500 text-sm font-medium">Loading video ads...</p>
      </div>
    );
  }

  // Check if plan is inactive
  if (!currentUser?.planStatus || currentUser?.planStatus !== 'Active') {
    return (
      <div className="space-y-6 font-sans">
        <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center min-h-[420px]">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-lg mb-4 shadow-sm">🔒</div>
          <h3 className="text-lg font-bold text-gray-900">No active plan</h3>
          <p className="text-xs text-gray-500 max-w-sm mt-2 mb-6 leading-relaxed">
            You don't have an active plan yet. Once the admin activates your plan, your daily video ads will appear here.
          </p>
          <div className="mb-6">
            <span className="bg-purple-50 text-[#8257ff] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Inactive Account</span>
          </div>
         <button 
  onClick={openWhatsApp}
  className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-xl text-xs font-bold transition shadow-sm flex items-center space-x-2"
>
  <span>🎧</span>
  <span>Contact Admin</span>
</button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 font-sans">
      <div className="bg-white p-6 rounded-3xl border border-gray-100 flex justify-between items-center shadow-sm">
        <div>
          <h3 className="font-bold text-lg text-gray-900">Today's Video Work</h3>
          <p className="text-xs text-gray-500 mt-1">Watch videos to earn daily rewards on your active plan.</p>
        </div>
        <span className="text-xs bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full font-bold border border-emerald-100">Plan Active</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ads.map((ad) => (
          <div key={ad._id} className="bg-white p-4 rounded-3xl border border-gray-100 space-y-3 shadow-sm flex flex-col justify-between">
            <div 
              onClick={() => openAd(ad)} 
              className={`aspect-video bg-black rounded-2xl flex items-center justify-center relative overflow-hidden group ${ad.watched ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <span className="text-white text-4xl group-hover:scale-110 transition">▶</span>
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                {ad.time || ad.duration || 15}s
              </span>
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">{ad.adTitle || ad.title}</h4>
              <p className="text-xs text-gray-500 mt-1">
                Time: {ad.time || ad.duration || 15}s | Reward: <b className="text-[#8257ff]">${ad.reward || ad.rewardAmount || 0}</b>
              </p>
            </div>
            <button 
              onClick={() => openAd(ad)} 
              disabled={ad.watched} 
              className={`w-full py-2.5 rounded-xl text-xs font-bold transition ${
                ad.watched ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-[#8257ff] hover:bg-[#6c42e8] text-white shadow-md"
              }`}
            >
              {ad.watched ? "Watched ✓" : "Watch & Earn"}
            </button>
          </div>
        ))}
      </div>

      {activeAd && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-3xl p-6 sm:p-8 space-y-4 shadow-2xl relative">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="font-bold text-gray-900">{activeAd.adTitle || activeAd.title}</h3>
                <p className="text-xs text-gray-500">
                  Time: {activeAd.time || activeAd.duration || 15}s | Reward: ${activeAd.reward || activeAd.rewardAmount || 0}
                </p>
              </div>
              <button 
                onClick={closeAd} 
                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-bold flex items-center justify-center transition"
              >
                ✕
              </button>
            </div>

            {/* IFRAME PLAYER */}
            <div className="aspect-video bg-black rounded-2xl overflow-hidden relative shadow-inner">
              <iframe
                src={getEmbedUrl(activeAd.adUrl || activeAd.videoUrl || activeAd.url)}
                title={activeAd.adTitle || activeAd.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-bold">
                {seconds}s / {activeAd.time || activeAd.duration || 15}s
              </div>
            </div>

            {captcha ? (
              <div className="bg-purple-50 p-6 rounded-2xl text-center space-y-3 border border-purple-100">
                <div className="w-12 h-12 bg-[#8257ff] text-white rounded-2xl flex items-center justify-center mx-auto text-xl font-bold shadow-md">🤖</div>
                <h4 className="font-bold text-base text-gray-900">Human Verification Required</h4>
                <p className="font-bold text-lg text-gray-800">{captcha.n1} + {captcha.n2} = ?</p>
                <input 
                  type="number" 
                  value={captchaInput} 
                  onChange={(e) => setCaptchaInput(e.target.value)} 
                  placeholder="Enter answer" 
                  className="border border-gray-200 rounded-xl px-4 py-3 text-center w-full max-w-xs outline-none focus:border-[#8257ff] font-bold bg-white" 
                />
                <button 
                  onClick={handleClaim} 
                  className="w-full max-w-xs mx-auto py-3 bg-[#8257ff] hover:bg-[#6c42e8] text-white rounded-xl font-bold transition shadow-md block"
                >
                  Claim Reward
                </button>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-2xl text-xs flex justify-between items-center border border-gray-100">
                <span className="text-orange-600 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span> Watching {seconds}s...
                </span>
                <span className="font-bold text-[#8257ff]">Reward ${activeAd.reward || activeAd.rewardAmount || 0}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

=======
/* eslint-disable no-unused-vars */
import React from 'react';

const VideoWorkPage = () => {
  return (
    <div className="space-y-6">

      {/* Main Card */}
      <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center min-h-[420px]">
        
        {/* Lock Icon Box */}
        <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#8257ff] flex items-center justify-center text-lg mb-4 shadow-sm">
          🔒
        </div>

        {/* Heading */}
        <h3 className="text-lg font-bold text-gray-900">No active plan</h3>

        {/* Description */}
        <p className="text-xs text-gray-500 max-w-sm mt-2 mb-6 leading-relaxed">
          You don't have an active plan yet. Once the admin activates your plan, your videos will appear here.
        </p>

        {/* Coming Soon Badge */}
        <div className="mb-6">
          <span className="bg-purple-50 text-[#8257ff] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Coming soon
          </span>
        </div>

        {/* Contact Admin Button */}
        <button className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-xl text-xs font-bold transition shadow-sm flex items-center space-x-2">
          <span>🎧</span>
          <span>Contact Admin</span>
        </button>

      </div>
    </div>
  );
};

>>>>>>> f77442eb0f987ea25bd6616b52935ef79ea34515
export default VideoWorkPage;