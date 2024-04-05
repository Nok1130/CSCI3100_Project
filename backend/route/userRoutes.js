/* eslint-disable no-unused-vars */
import { getUserProfileFromUserID, getUserProfileFromUsername, updateUserProfile, signUpNewUser, signInUser, searchUser } from "../controller/userController.js";
import express from "express";
import { auth } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.get("/getUserProfileFromUserID", auth, getUserProfileFromUserID);
userRouter.get("/getUserProfileFromUserName", auth, getUserProfileFromUsername);
userRouter.put("/updateUserProfile", auth, updateUserProfile);
userRouter.post("/signUpNewUser", signUpNewUser);
userRouter.post("/signInUser", signInUser);
userRouter.get("/searchUser", searchUser);

export default userRouter;

