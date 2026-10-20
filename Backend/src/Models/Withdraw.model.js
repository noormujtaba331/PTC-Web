import mongoose from "mongoose";

const withdrawSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  accountHolderName: { type: String, required: true },
  bankName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  ibanRouting: { type: String },
  note: { type: String },
  status: { type: String, enum: ["Pending", "Completed", "Rejected"], default: "Pending" }
}, { timestamps: true });

export default mongoose.model("Withdraw", withdrawSchema);