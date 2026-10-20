import Withdraw from "../Models/Withdraw.model.js";
import User from "../Models/User.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../Configs/Config.js";

async function requestWithdraw(req, res) {
  try {
    const token = req.cookies.refreshToken;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    const { amount, accountHolderName, bankName, accountNumber, ibanRouting, note } = req.body;
    if (!amount || !accountHolderName || !bankName || !accountNumber) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const withdrawAmount = Number(amount);
    if (user.balance < withdrawAmount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    user.balance -= withdrawAmount;
    await user.save();

    const newWithdraw = await Withdraw.create({
      userId: user._id,
      email: user.email,
      amount: withdrawAmount,
      accountHolderName,
      bankName,
      accountNumber,
      ibanRouting,
      note,
      status: "Pending"
    });

    return res.status(201).json({
      success: true,
      message: "Withdraw request submitted successfully",
      withdraw: newWithdraw,
      remainingBalance: user.balance
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
}

async function getAllWithdrawRequests(req, res) {
  try {
    const requests = await Withdraw.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      requests
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
}

async function updateWithdrawStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Pending", "Completed", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const withdrawReq = await Withdraw.findById(id);
    if (!withdrawReq) {
      return res.status(404).json({ message: "Withdraw request not found" });
    }

    if (withdrawReq.status === "Pending" && status === "Rejected") {
      const user = await User.findById(withdrawReq.userId);
      if (user) {
        user.balance += withdrawReq.amount;
        await user.save();
      }
    }

    withdrawReq.status = status;
    await withdrawReq.save();

    return res.status(200).json({
      success: true,
      message: `Withdraw request marked as ${status}`,
      request: withdrawReq
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
}

export { requestWithdraw, getAllWithdrawRequests, updateWithdrawStatus };