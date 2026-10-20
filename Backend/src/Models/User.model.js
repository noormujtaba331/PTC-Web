import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
    unique: true,
  },
  referralCode: {
    type: String,
    required: true,
    unique: false,
  },
  balance: {
    type: Number,
    default: 0,
  },
  todayEarnings: {
    type: Number,
    default: 0,
  },
  totalEarnings: {
    type: Number,
    default: 0,
  },
  planName: {
    type: String,
    default: "",
  },
  planStatus: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Inactive",
  },
  todayAdsWatched: {
    type: Number,
    default: 0,
  },
  todayAds: {
    type: Number,
    default: 0,
  },
  totalAdsWatched: {
    type: Number,
    default: 0,
  },
  isTermsAgreed: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);
