/* eslint-disable no-unused-vars */
import express from "express";
import { createPost, getAllPostOfUSer, likeAndDislikePost, likeAndDislikeCount, repost } from "../controller/postController.js";
import { createComment, getAllCommentOfPost } from "../controller/commentController.js";

const postRouter = express.Router();

postRouter.post("/likeAndDislikePost/:postID", likeAndDislikePost);
postRouter.get("/likeAndDislikeCount/:postID", likeAndDislikeCount);
postRouter.post("/repost/:postID", repost);
postRouter.post("/createPost", createPost);
postRouter.get("/getAllPostOfUSer", getAllPostOfUSer);
postRouter.post("/createComment", createComment);
postRouter.get("/getAllCommentOfPost", getAllCommentOfPost);

export default postRouter;