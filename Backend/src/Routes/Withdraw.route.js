import express from "express";
import { 
  requestWithdraw, 
  getAllWithdrawRequests, 
  updateWithdrawStatus 
} from "../Controllers/Withdraw.controller.js";

const router = express.Router();

router.post("/request", requestWithdraw);
router.get("/admin/all", getAllWithdrawRequests);
router.put("/admin/status/:id", updateWithdrawStatus);

export default router;