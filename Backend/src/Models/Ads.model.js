import mongoose from "mongoose";

const adsSchema = new mongoose.Schema({
    adTitle: {
        type: String,
        required: true
    },
    adUrl: {
        type: String,
        required: true
    },
    reward: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true // Expiry date lazmi hogi
    },
    adStatus: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Ads", adsSchema);
