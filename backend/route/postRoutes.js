/* eslint-disable no-unused-vars */
import express from "express";
import { createPost, getAllPostOfUSer, likePost, dislikePost, getPost, repost, reportPost } from "../controller/postController.js";
import { createComment, getAllCommentOfPost } from "../controller/commentController.js";

const postRouter = express.Router();

postRouter.post("/likePost", likePost);
postRouter.post("/dislikePost", dislikePost);
postRouter.post("/reportPost", reportPost);
postRouter.post("/repost/:postID", repost);
postRouter.post("/createPost", createPost);
postRouter.get("/getAllPostOfUSer", getAllPostOfUSer);
postRouter.post("/createComment", createComment);
postRouter.get("/getAllCommentOfPost", getAllCommentOfPost);
postRouter.get("/getPost", getPost);

export default postRouter;