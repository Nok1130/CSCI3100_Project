/* eslint-disable no-unused-vars */
import { getUserProfileFromUserID, getUserProfileFromUsername, updateUserProfile, updateUserProfileIcon, signUpNewUser, signInUser, searchUser } from "../controller/userController.js";
import express from "express";
import multer from "multer";
import path from "path";
import ENV from "../ENV.js";
// import { auth } from "../middleware/auth.js";

const userRouter = express.Router();
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
        fileSize: 1024 * 1024 * 5
    },
});

userRouter.get("/getUserProfileFromUserID", getUserProfileFromUserID);
userRouter.get("/getUserProfileFromUserName", getUserProfileFromUsername);
userRouter.patch("/updateUserProfile", updateUserProfile);
userRouter.patch("/updateUserProfileIcon", upload.single('photo'), updateUserProfileIcon);
/*
    In front-end code for updating user profile icon
        const formData = new FormData();
        formData.append('photo', photoFile); // 'photoFile' is the File object to upload
        formData.append('userID', '1d1564'); // Include 'userID' text field

        fetch('/updateUserProfileIcon', {
        method: 'PATCH',
        body: formData
        });

    On the server side, Multer will process the file data and add it to the req.file object, 
    and it will process the text fields and add them to the req.body object. 
    So, in your route handler, you can access the uploaded file with req.file, 
    and you can access the userID with req.body.userID.
*/
userRouter.post("/signUpNewUser", signUpNewUser);
userRouter.post("/signInUser", signInUser);
userRouter.get("/searchUser", searchUser);

export default userRouter;

