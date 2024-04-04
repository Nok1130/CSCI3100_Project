/* eslint-disable no-unused-vars */
import express from "express";
import { likeAndDislikePost, likeAndDislikeCount } from "../controller/likeAndDislikeController.js";

const router = express.Router();
router.post("/:postID", likeAndDislikePost);
router.get("/:postID", likeAndDislikeCount);