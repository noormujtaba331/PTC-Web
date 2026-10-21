import express from "express";
import { createAd, updateAd, deleteAd, getAllAds } from "../Controllers/Ads.controller.js";
import {  getTodayAds, watchAd } from "../Controllers/UserAds.controller.js";

const router = express.Router();


router.post("/create-ad", createAd);
router.put("/update-ad/:id", updateAd);
router.delete("/delete-ad/:id", deleteAd);
router.get("/today-ads", getTodayAds); // pehle wale 2 routes ki jaga bas ye ek
router.get("/all-ads", getAllAds);
router.post("/watched/:id", watchAd);

export default router;

