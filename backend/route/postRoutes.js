/* eslint-disable no-unused-vars */
import express from "express";
import { createPost, getAllPostOfUSer, likeAndDislikePost, likeAndDislikeCount, repost } from "../controller/postController.js";

const router = express.Router();

router.post("/likeAndDislikePost/:postID", likeAndDislikePost);
router.get("/likeAndDislikeCount/:postID", likeAndDislikeCount);
router.post("/repost/:postID", repost);
router.post("/createPost", createPost);
router.get("/getAllPostOfUSer", getAllPostOfUSer);

export default router;