import { suspendUser, deleteUser, getAllUser, getAllReport, getPostReport } from "../controller/adminController.js";
import express from "express";

const adminRouter = express.Router();

adminRouter.patch("/suspendUser", suspendUser);
adminRouter.delete("/deleteUser", deleteUser);
adminRouter.get("/getAllUser", getAllUser);
adminRouter.get("/getAllReport", getAllReport);
adminRouter.post("/getPostReport", getPostReport);

export default adminRouter