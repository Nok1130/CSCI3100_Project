/* eslint-disable no-unused-vars */
import { getUserProfile, updateUserProfile, signUpNewUser, signInUser, suspendUser, deleteUser } from "../controller/userController.js";
import dotenv from "dotenv";
dotenv.config();
import express from "express";

const router = express.Router();

router.post("/getUserProfile", getUserProfile);
router.post("/updateUserProfile", updateUserProfile);
router.post("/signUpNewUser", signUpNewUser);
router.post("/signInUser", signInUser);
router.post("/suspendUser", suspendUser);
router.post("/deleteUser", deleteUser);



export default router;

