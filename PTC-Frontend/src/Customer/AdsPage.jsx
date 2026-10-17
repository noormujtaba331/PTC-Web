/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ActiveNav from "../components/ActiveNav";

const getYouTubeId = (url) => {
  const reg = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(reg);
  return match ? match[1] : null;
};

const AdPage = () => {
  const UserName = "Ali Arqam";
  const userInitial = UserName.charAt(0).toUpperCase();

  const [showSideMenu, setShowSideMenu] = useState(false);
  const [balance, setBalance] = useState(18.5);
  const [watchedAds, setWatchedAds] = useState([1]);
  const [playingId, setPlayingId] = useState(null);
  const [timer, setTimer] = useState(0);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [activeAd, setActiveAd] = useState(null);
  const captchaShownRef = useRef(false);

  const ads = [
    { id: 1, title: "【entity-BBC¦canonical_name=BBC】 World Promotion #1", url: "https://www.youtube.com/watch?v=ysz5S6PUM-U", durationSec: 10, reward: 0.05, platform: "YouTube" },
    { id: 2, title: "Earn While You Watch", url: "https://www.youtube.com/watch?v=jNQXAC9IVRw", durationSec: 15, reward: 2.5, platform: "YouTube" },
    { id: 3, title: "Marketing Secrets", url: "https://www.youtube.com/watch?v=9bZkp7q19f0", durationSec: 12, reward: 2.5, platform: "YouTube" },
    { id: 4, title: "Big Buck Bunny Promo", url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4", durationSec: 10, reward: 2.5, platform: "MP4" },
    { id: 5, title: "How SE Marketing Works", url: "https://www.youtube.com/watch?v=ScMzIvxBSi4", durationSec: 15, reward: 3.0, platform: "YouTube" },
    { id: 6, title: "Student Success Story", url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk", durationSec: 10, reward: 2.5, platform: "YouTube" },
  ];

  const menuItems = [
    { label: "Dashboard", icon: "🏠", path: "/dashboard" },
    { label: "Profile", icon: "👤", path: "/profile" },
    { label: "My Ads", icon: "▶️", active: true, count: `${ads.length}`, path: "/my-ads" },
    { label: "Assignments", icon: "📝", count: "6", path: "/assignments" },
    { label: "Plans", icon: "💳", path: "/plans" },
    { label: "Earnings", icon: "💰", path: "/earnings" },
  ];

  // Timer
  useEffect(() => {
    let interval;
    if (playingId && timer > 0 && !showCaptcha) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    } else if (playingId && timer === 0 && !showCaptcha && !captchaShownRef.current) {
      captchaShownRef.current = true;
      setShowCaptcha(true);
    }
    return () => clearInterval(interval);
  }, [playingId, timer, showCaptcha]);

  const startAd = (ad) => {
    setActiveAd(ad);
    setPlayingId(ad.id);
    setTimer(ad.durationSec);
    setShowCaptcha(false);
    setIsRobotChecked(false);
    captchaShownRef.current = false;
  };

  const handleCaptchaConfirm = () => {
    if (!isRobotChecked) return alert("Please verify you are not a robot");
    if (!watchedAds.includes(activeAd.id)) {
      setWatchedAds(prev => [...prev, activeAd.id]);
      setBalance(b => b + activeAd.reward);
    }
    setPlayingId(null);
    setShowCaptcha(false);
    setActiveAd(null);
  };

  const totalEarnedToday = ads.filter(a => watchedAds.includes(a.id)).reduce((s, a) => s + a.reward, 0);
  const remaining = ads.length - watchedAds.length;

  return (
    <div className="min-h-screen bg-[#F8FBFF]">
     <ActiveNav/>

      <div className="max-w- mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div>
            <h1 className="text- sm:text- font-bold">My Ads</h1>
            <p className="text- text-gray-500 mt-1">Watch Ads and Earn</p>
          </div>
          <div className="flex gap-2">
            <div className="bg-white border border-gray-100 rounded-xl px-4 py-2 text-center"><p className="text- tracking-widest text-gray-500 font-bold">WATCHED</p><p className="text- font-bold">{watchedAds.length}/{ads.length}</p></div>
            <div className="bg-[#0F172A] text-white rounded-xl px-4 py-2 text-center"><p className="text- tracking-widest text-gray-400 font-bold">EARNED TODAY</p><p className="text- font-bold">${totalEarnedToday.toFixed(2)}</p></div>
          </div>
        </div>

        <div className="mt-6 bg-white border border-gray-100 rounded- p-4">
          <div className="flex justify-between text-"><span className="text-gray-500">Daily Progress</span><span className="font-bold">{Math.round((watchedAds.length/ads.length)*100)}% • {remaining} left</span></div>
          <div className="w-full h-2 bg-gray-100 rounded-full mt-2"><div className="h-full bg-[#00C950] rounded-full transition-all" style={{ width: `${(watchedAds.length/ads.length)*100}%` }}></div></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {ads.map(ad => {
            const isWatched = watchedAds.includes(ad.id);
            const isPlaying = playingId === ad.id;
            const ytId = getYouTubeId(ad.url);
            return (
              <div key={ad.id} className="bg-white border border-gray-100 rounded- overflow-hidden hover:shadow-lg transition-all">
                <div className="relative bg-black aspect-video w-full overflow-hidden">
                  {isPlaying ? (
                    ytId ? (
                      <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${ytId}?autoplay=1&controls=1&rel=0`} title={ad.title} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    ) : (
                      <video className="w-full h-full" src={ad.url} controls autoPlay />
                    )
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-white">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-">▶</div>
                      <p className="font-bold text- mt-3">{ad.title}</p>
                      <p className="text- text-gray-400 mt-1">{ad.platform} • {ad.durationSec}s • ${ad.reward}</p>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <p className="font-bold text- truncate">{ad.title}</p>
                  <p className="text- text-gray-500 mt-0.5">{ad.platform} • Reward ${ad.reward}</p>

                  <div className="mt-3">
                    {isWatched ? (
                      <div className="bg-green-50 border border-green-200 text-green-700 text- font-bold px-3 py-2.5 rounded-xl text-center">✓ Ad Completed</div>
                    ) : isPlaying ? (
                      !showCaptcha ? (
                        <div className="bg-[#F8FBFF] border border-blue-100 rounded-xl p-3">
                          <div className="flex justify-between text-"><span className="text-gray-500">Watching...</span><span className="font-bold text-[#2563EB]">{timer}s left</span></div>
                          <div className="w-full h-2 bg-gray-200 rounded-full mt-2"><div className="h-full bg-[#2563EB] rounded-full" style={{ width: `${((ad.durationSec - timer)/ad.durationSec)*100}%` }}></div></div>
                        </div>
                      ) : (
                        <div className="bg-white border border-gray-200 rounded-xl p-3">
                          <p className="text- font-bold">Verify you are human</p>
                          <label className="flex items-center gap-2 mt-3 p-2.5 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input type="checkbox" checked={isRobotChecked} onChange={(e) => setIsRobotChecked(e.target.checked)} className="w-5 h-5" />
                            <span className="text-">I am not a robot</span>
                            <span className="ml-auto text- bg-gray-100 px-1.5 py-0.5 rounded">reCAPTCHA</span>
                          </label>
                          <button onClick={handleCaptchaConfirm} className="w-full mt-3 bg-[#0F172A] text-white py-2.5 rounded-xl text- font-bold">Confirm & Complete Ad</button>
                        </div>
                      )
                    ) : (
                      <button onClick={() => startAd(ad)} className="w-full bg-[#2563EB] hover:bg-blue-700 text-white py-2.5 rounded-xl text- font-bold">Watch Ad</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdPage;