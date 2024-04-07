import { suspendUser, deleteUser, getAllUser } from "../controller/adminController.js";
import express from "express";

const adminRouter = express.Router();

adminRouter.patch("/suspendUser", suspendUser);
adminRouter.delete("/deleteUser", deleteUser);
adminRouter.get("/getAllUser", getAllUser);

export default adminRouter