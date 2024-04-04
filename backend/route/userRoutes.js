/* eslint-disable no-unused-vars */
import { getUserProfile, updateUserProfile, signUpNewUser, signInUser, searchUser, suspendUser, deleteUser } from "../controller/userController.js";
import express from "express";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/getUserProfile", auth, getUserProfile);
router.put("/updateUserProfile", auth, updateUserProfile);
router.post("/signUpNewUser", signUpNewUser);
router.post("/signInUser", signInUser);
router.get("/searchUser", searchUser);
router.patch("/suspendUser", suspendUser);
router.delete("/deleteUser", deleteUser);



export default router;

