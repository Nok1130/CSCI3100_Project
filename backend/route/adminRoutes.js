import { suspendUser, deleteUser } from "../controller/adminController.js";
import express from "express";

const router = express.Router();

router.patch("/suspendUser", suspendUser);
router.delete("/deleteUser", deleteUser);

export default router