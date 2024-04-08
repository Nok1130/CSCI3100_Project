import { suspendUser, deleteUser, getAllUser, getAllReport } from "../controller/adminController.js";
import express from "express";

const adminRouter = express.Router();

adminRouter.patch("/suspendUser", suspendUser);
adminRouter.delete("/deleteUser", deleteUser);
adminRouter.get("/getAllUser", getAllUser);
adminRouter.get("/getAllReport", getAllReport);

export default adminRouter