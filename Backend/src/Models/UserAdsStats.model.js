import mongoose from "mongoose";

const userAdsStatsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  todayAds: { type: Number, default: 0 },
  todayAdsWatched: { type: Number, default: 0 },
  ads: [{
    _id: mongoose.Schema.Types.ObjectId,
    adTitle: String,
    adUrl: String,
    reward: Number,
    time: Number,
    adStatus: String,
    createdAt: String
  }],
  remainingAds: [{ type: mongoose.Schema.Types.ObjectId }],
  watchedAds: [{ type: mongoose.Schema.Types.ObjectId }],
}, { timestamps: true });

userAdsStatsSchema.index({ userId: 1, date: 1 }, { unique: true });

export default mongoose.model("UserAdsStats", userAdsStatsSchema);