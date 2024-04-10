/* eslint-disable no-unused-vars */
import express from "express";
import { createPost, getAllPostOfUser, likePost, dislikePost, getPost, createComment, repost, reportPost, getAllPost, searchPostByHashtag } from "../controller/postController.js";
import multer from "multer";
import path from "path";
import ENV from "../ENV.js";

const postRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(ENV.__dirname, 'public'));
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
postRouter.post("/repost", repost);
postRouter.post("/createPost", upload.single('postContent'), createPost);
/*
    In front-end code for uploading post
        const formData = new FormData();
        formData.append('postContent', photoFile); // 'photoFile' is the File object to upload
        formData.append('userID', '1d1564'); // Include 'userID' text field
        formData.append('nickname', 'John'); // Include 'nickname' text field
        formData.append('postTitle', 'My Post Title'); // Include 'postTitle' text field
        formData.append('postText', 'My Post Text'); // Include 'postText' text field
        formData.append('hashtag', 'myhashtag'); // Include 'hashtag' text field
  
        fetch('/updateUserProfileIcon', {
          method: 'POST',
          body: formData
        });

    On the server side, Multer will process the file data and add it to the req.file object, 
    and it will process the text fields and add them to the req.body object. 
    So, in your route handler, you can access the uploaded file with req.file, 
    and you can access the userID with req.body.userID.
*/
postRouter.post("/getAllPostOfUser", getAllPostOfUser);
postRouter.post("/createComment", createComment);
postRouter.post("/getPost", getPost);
postRouter.get("/getAllPost", getAllPost);
postRouter.post("/searchPostByHashtag", searchPostByHashtag);

export default postRouter;