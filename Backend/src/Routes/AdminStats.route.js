import express from "express";
import { getAdminStats } from "../Controllers/getAdminStats.contoller.js";

const router = express.Router();

router.get("/stats", getAdminStats);

export default router;