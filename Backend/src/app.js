import express from 'express';
import morgan from 'morgan';
import connectDB from "./Configs/db.js";
import authRoutes from "./Routes/Auth.Routes.js";
import adsRoutes from "./Routes/Ads.route.js";
import adminStatsRoutes from "./Routes/AdminStats.route.js";
import withdrawRoutes from "./Routes/Withdraw.route.js";
import userDetsRoutes from "./Routes/userDets.route.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

connectDB();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/api/ads', adsRoutes);
app.use('/api/admin', adminStatsRoutes, userDetsRoutes);
app.use('/api/withdraw', withdrawRoutes);


export default app;
