/* eslint-disable no-unused-vars */
import express from "express";
import { createPost, getAllPostOfUser, likePost, dislikePost, getPost, createComment, repost, reportPost, searchPost } from "../controller/postController.js";
import multer from "multer";
import path from "path";
import ENV from "../ENV.js";

const postRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(ENV.__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
// Create Multer instance
const upload = multer({ 
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 20
    },
});

postRouter.post("/likePost", likePost);
postRouter.post("/dislikePost", dislikePost);
postRouter.post("/reportPost", reportPost);
postRouter.post("/repost/:postID", repost);
postRouter.post("/createPost", upload.single('postContent'), createPost);
postRouter.get("/getAllPostOfUSer", getAllPostOfUser);
postRouter.post("/createComment", createComment);
postRouter.get("/getPost", getPost);
postRouter.get("/searchPost", searchPost);


export default postRouter;