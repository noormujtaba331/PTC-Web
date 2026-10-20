import User from "../Models/User.model.js";
import crypto from "crypto";

// Helper function: Node.js Crypto module se password hash karne ke liye
const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString("hex");
    crypto.pbkdf2(password, salt, 1000, 64, "sha512", (err, derivedKey) => {
      if (err) reject(err);
      resolve(`${salt}:${derivedKey.toString("hex")}`);
    });
  });
};

// 1. Saare users ki list fetch karne ke liye
export async function getAllUsers(req, res) {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Server Error" });
  }
}

// 2. Admin dwara user ki details aur plan update karne ke liye
export async function updateUserByAdmin(req, res) {
  try {
    const { userId } = req.params;
    const { name, email, password, address, cnic, planName, planStatus, balance } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    if (address !== undefined) user.address = address;
    if (cnic !== undefined) user.cnic = cnic;
    if (planName !== undefined) user.planName = planName;
    if (planStatus !== undefined) user.planStatus = planStatus;
    if (balance !== undefined) user.balance = balance;

    // Agar new password enter hua ho toh Node crypto se hash karna
    if (password && password.trim() !== "") {
      user.password = await hashPassword(password);
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: "User updated successfully!",
      user,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Server Error" });
  }
}

// 3. Admin dwara user delete karne ke liye
export async function deleteUserByAdmin(req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully!",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Server Error" });
  }
}