import User from "../Models/User.model.js";
import Session from "../Models/session.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../Configs/Config.js";

async function getMe(req, res) {
   const token = req.cookies.refreshToken;
      if (!token) return res.status(401).json({ message: "Unauthorized" });
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) return res.status(401).json({ message: "Unauthorized" });
      
      return res.status(200).json({
        success: true,
        user,
      });
}

async function register(req, res) {
  const {
    name,
    email,
    password,
    address,
    cnic,
    referralCode,
    planStatus,
    isTermsAgreed,
  } = req.body;

  if (!name || !email || !password || !address || !cnic || !referralCode) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const existingUser = await User.findOne({
    $or: [{ email }, { cnic }],
  });

  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "User already exists",
    });
  }

  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    address,
    cnic,
    referralCode,
    planStatus,
    isTermsAgreed,
  });

  const refreshToken = jwt.sign(
    {
      id: user._id,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  const session = await Session.create({
    user,
    ip: req.ip,
    userAgent: req.headers["user-agent"],
    refreshTokenHash,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  const accessToken = jwt.sign(
    {
      id: user._id,
    },
    JWT_SECRET,
    {
      expiresIn: "15m",
    },
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
    token: accessToken,
  });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const checkUser = await User.findOne({ email });

  const isPasswordValid =
    crypto.createHash("sha256").update(password).digest("hex") ===
    checkUser.password;

  if (!checkUser || !isPasswordValid) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  const refreshToken = jwt.sign(
    {
      id: checkUser._id,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  const session = await Session.create({
    user,
    ip: req.ip,
    userAgent: req.headers["user-agent"],
    refreshTokenHash,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  const accessToken = jwt.sign(
    {
      id: checkUser._id,
    },
    JWT_SECRET,
    {
      expiresIn: "15m",
    },
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(201).json({
    success: true,
    message: "User logged in successfully",
    user: checkUser,
    token: accessToken,
  });
}

async function refreshToken(req, res) {
  const token = req.cookies.refreshToken;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No refresh token provided",
    });
  }

  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const session = await Session.findOne({
    refreshTokenHash,
    revoked: "false",
  });
  if (!session) {
    return res.status(401).json({
      success: false,
      message: "Invalid refresh token",
    });
  }

  const decoded = jwt.verify(token, JWT_SECRET);
  const user = await User.findById(decoded.id);
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid refresh token",
    });
  }

  const accessToken = jwt.sign({ id: user._id }, JWT_SECRET, {
    expiresIn: "15m",
  });

  res.status(200).json({
    success: true,
    message: "Access token refreshed successfully",
    token: accessToken,
  });
}

async function logout(req, res) {
  const token = req.cookies.refreshToken;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No refresh token provided",
    });
  }

  const userCheck = jwt.verify(token, JWT_SECRET);
  const user = await User.findById(userCheck.id);
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid refresh token",
    });
  }
  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const session = await Session.findOne({
    refreshTokenHash,
    revoked: "false",
  });
  if (!session) {
    return res.status(401).json({
      success: false,
      message: "Invalid refresh token",
    });
  }

  session.revoked = "true";
  await session.save();

  res.clearCookie("refreshToken");
  res.status(200).json({
    success: true,
    session,
    message: "Logged out successfully",
  });
}

async function logoutAll(req, res) {
  const token = req.cookies.refreshToken;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No refresh token provided",
    });
  }

  const userCheck = jwt.verify(token, JWT_SECRET);
  const user = await User.findById(userCheck.id);
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid refresh token",
    });
  }
  console.log(user);

  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const session = await Session.find({
    user: user._id,
    revoked: "false",
  });
  if (!session) {
    return res.status(401).json({
      success: false,
      message: "Invalid refresh token",
    });
  }
  console.log(session);

  await Session.updateMany(
    { user: user._id, revoked: "false" },
    { revoked: "true" },
  );

  res.clearCookie("refreshToken");
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
    user,
  });
}

export { register, login, getMe, refreshToken, logout, logoutAll };
