import User from "../Models/User.model.js";
import Withdraw from "../Models/Withdraw.model.js";

async function getAdminStats(req, res) {
  try {
    const totalUsers = await User.countDocuments();
   const activePlans = await User.countDocuments({ planStatus: "Active" });
   const pendingWithdrawals = await Withdraw.countDocuments({ status: "Pending" });

    return res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        activePlans,
        pendingWithdrawals,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
}

export { getAdminStats };