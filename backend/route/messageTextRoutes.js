import express from "express";
import { sendMessage, getMessages, getChatRooms } from "../controller/messageTextController.js";

const router = express.Router();

router.post("/chatRooms", getChatRooms);
router.post("/:otherUserId", getMessages);
router.post("/", sendMessage);

export default router