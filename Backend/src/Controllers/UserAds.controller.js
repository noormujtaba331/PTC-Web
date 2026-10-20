import mongoose from "mongoose";
import UserAdsStats from "../Models/UserAdsStats.model.js";
import Ads from "../Models/Ads.model.js";
import User from "../Models/User.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../Configs/Config.js";

const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const getTodayString = () => {
  const d = new Date();
  return d.toISOString().split('T')[0];
};

async function getTodayAds(req, res) {
  try {
    const token = req.cookies.refreshToken;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    if (!user.planName || user.planName === "") {
      return res.status(401).json({ message: "No Active plan" });
    }

    const todayStr = getTodayString();

    let userAdsStats = await UserAdsStats.findOne({
      userId: user._id,
      date: todayStr
    });

    if (userAdsStats) {
      return res.status(200).json({
        success: true,
        message: "Existing ads",
        date: userAdsStats.date,
        todayAds: userAdsStats.todayAds,
        watchedCount: userAdsStats.todayAdsWatched,
        adsList: userAdsStats.ads,
      });
    }

    const adsToday = await Ads.find({ adStatus: "Active" });
    if (adsToday.length === 0) {
      return res.status(404).json({ message: "No Ads Available" });
    }

    const adLimit = user.planName === "Starter Plan" ? 6 : 12;
    const shuffledAds = shuffleArray(adsToday);
    const randomAdsForUser = shuffledAds.slice(0, adLimit);

    try {
      userAdsStats = await UserAdsStats.create({
        userId: user._id,
        email: user.email,
        date: todayStr,
        todayAds: randomAdsForUser.length,
        todayAdsWatched: 0,
        ads: randomAdsForUser,
        remainingAds: randomAdsForUser.map(ad => ad._id),
        watchedAds: [],
      });
    } catch (err) {
      if (err.code === 11000) {
        userAdsStats = await UserAdsStats.findOne({
          userId: user._id,
          date: todayStr
        });
      } else {
        throw err;
      }
    }

    return res.status(200).json({
      success: true,
      message: "New ads assigned",
      date: userAdsStats.date,
      todayAds: userAdsStats.todayAds,
      watchedCount: userAdsStats.todayAdsWatched,
      adsList: userAdsStats.ads,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
}

async function watchAd(req, res) {
  try {
    const token = req.cookies.refreshToken;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    const todayStr = getTodayString();
    const userAdsStats = await UserAdsStats.findOne({
      userId: user._id,
      date: todayStr
    });

    if (!userAdsStats) return res.status(404).json({ message: "No ads assigned for today" });

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Ad ID" });
    }

    if (userAdsStats.watchedAds.includes(id)) {
      return res.status(400).json({ message: "Ad already watched" });
    }

    // Ad object se reward nikalna (jo userAdsStats ke andar saved hai)
    const currentAd = userAdsStats.ads.find(ad => ad._id.toString() === id);
    const adReward = currentAd ? (currentAd.reward || 0) : 0;

    // 1. Stats update karo
    userAdsStats.todayAdsWatched += 1;
    userAdsStats.remainingAds.pull(id);
    userAdsStats.watchedAds.push(id);
    await userAdsStats.save();

    // 2. User ka Balance aur Earnings update karo
    user.balance += adReward;
    user.todayEarnings += adReward;
    user.totalEarnings += adReward;
    user.todayAdsWatched += 1;
    user.totalAdsWatched += 1;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Reward Added!",
      balance: user.balance,
      todayEarnings: user.todayEarnings,
      totalEarnings: user.totalEarnings,
      date: userAdsStats.date,
      todayAds: userAdsStats.todayAds,
      watchedCount: userAdsStats.todayAdsWatched,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
}

export { getTodayAds, watchAd };