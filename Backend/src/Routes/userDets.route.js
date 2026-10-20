import express from "express";
import { getAllUsers, updateUserByAdmin, deleteUserByAdmin } from "../Controllers/userDets.controller.js";

const router = express.Router();




// User Management routes
router.get("/users", getAllUsers);
router.put("/update-user/:userId", updateUserByAdmin);
router.delete("/delete-user/:userId", deleteUserByAdmin);


export default router;