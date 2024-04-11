/* eslint-disable no-unused-vars */
import UserModel from "../model/User.js";
import { v4 as uuidv4 } from "uuid";

// getting the user profile as a json file from the database
const getUserProfileFromUsername = async (req, res, next) => {
    const username = req.body.username;
    try {
        let user = await UserModel.findOne({ username });
        if (!user) {
            return next(new Error("User Profile not found"));
        }

        return res.status(200).json({ user });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getUserProfile: ", error.message);
    }
};

const getUserProfileFromUserID = async (req, res, next) => {
    const userID = req.body.userID;
    try {
        let user = await UserModel.findOne({ userID });
        if (!user) {
            return next(new Error("User Profile not found"));
        }

        return res.status(200).json({ user });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getUserProfile: ", error.message);
    }
};

// update the user profile
const updateUserProfile = async (req, res) => {
    // const userID = req.user.userID;
    // console.log(userID);
    const { userID, newUsername, oldPassword, newPassword, personalBio } = req.body;
    console.log(userID, newUsername, oldPassword, newPassword, personalBio);

    try {
        let user = await UserModel.findOne({ userID });
        if (!user) {
            throw new Error("User Profile not found");
        }

        if (oldPassword !== user.password) {
            throw new Error("Wrong old password");
        }

        user.username = newUsername || user.username;
        user.password = newPassword || user.password;
        user.personalBio = personalBio || user.personalBio;

        const updatedUserProfile = await user.save();
        return res.status(200).json({ updatedUserProfile });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in updateUserProfile: ", error.message);
    }
};

const updateUserProfileIcon = async (req, res) => {
    console.log(req.body.userID);
    console.log(req.file);
    try {
        const icon = req.file;
        if (!icon) {
            return new Error("No file uploaded");
        }
        let user = await UserModel.findOne({ userID : req.body.userID });
        console.log(user);
        if (!user) {
            return new Error("User Profile not found");
        }
        user.personalIcon = icon.filename;
        const updatedUserProfile = await user.save();
        return res.status(200).json({ updatedUserProfile });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in updateUserProfileIcon: ", error.message);
    }
};

// create a new user profile with the given data
const signUpNewUser = async (req, res) => {
    let userID = uuidv4().substring(0, 6);
    const { username, email, password, major } = req.body;

    // check if all fields are filled
    if (!userID || !username || !email || !password || !major) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // check if the user already exists
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    try {
        // create a new user profile
        const user = await UserModel.create({ userID, username, email, password, major });
        return res.status(201).json({ user });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in createUserProfile: ", error.message);
    } 
};

const signInUser = async (req, res, next) => {
    const { username, password } = req.body;

    // check if all fields are filled
    if (!username || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // check if the user exists and the correctness of the password
    try {
        let user = await UserModel.findOne({ username });

        // if user not found
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // check if the password is correct
        if (user.password !== password) {
            return res.status(401).json({ message: "Wrong password" });
        }

        // check if the user is suspended
        if (user.isSuspended) {
            return res.status(401).json({ message: "Your account has been suspended" });
        }

        // if everything is correct, create and assign a token using userID
        res.status(200).json({ 
            user,
        });

        console.log("Successfully signed in as: ", user.username, " with email: ", user.email);
    }
    catch (error) {
        // middleware
        next(error);
        res.status(500).json({ error: error.message });
        console.log("Error in signInUser: ", error.message);
    }
};

const searchUser = async (req, res) => {
    const { username } = req.query;
    console.log("username: ", username);
    try {
        // const user = await UserModel.findOne({ username });
        const users = await UserModel.find({
            "username": { $regex: username, $options: 'i' }
          }).sort({
            "username.length": 1 // Sorts in ascending order by nickname length
          });
        if (!users) {
            return res.status(404).json({ message: "Search user not found" });
        }

        return res.status(200).json({ users });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in searchUser: ", error.message);
    }
};

export { getUserProfileFromUserID, getUserProfileFromUsername, updateUserProfile, updateUserProfileIcon, signUpNewUser, signInUser, searchUser };

