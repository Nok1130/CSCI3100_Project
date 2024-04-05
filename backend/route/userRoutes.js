/* eslint-disable no-unused-vars */
import { getUserProfileFromUserID, getUserProfileFromUsername, updateUserProfile, signUpNewUser, signInUser, searchUser } from "../controller/userController.js";
import express from "express";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/getUserProfileFromUserName", auth, getUserProfileFromUsername);
router.put("/updateUserProfile", auth, updateUserProfile);
router.post("/signUpNewUser", signUpNewUser);
router.post("/signInUser", signInUser);
router.get("/searchUser", searchUser);

export default router;

