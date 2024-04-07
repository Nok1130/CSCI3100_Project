import { createMessage, createChat, getChat, getAllMessage } from "../controller/chatController.js";
import express from "express";
const router = express.Router();

router.post("/createMessage", createMessage);
router.post("/createChat", createChat);
router.get("/getChat", getChat);
router.get("/getAllMessage", getAllMessage);

export default router