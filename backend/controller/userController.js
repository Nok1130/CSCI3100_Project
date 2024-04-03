/* eslint-disable no-unused-vars */
import UserModel from "../model/User.js";
import { v4 as uuidv4 } from "uuid";

// getting the user profile as a json file from the database
const getUserProfile = async (req, res) => {
    const { userID } = req.params;

    try {
        // query the user database using userID
        let user = await UserModel.findOne({ userID });

        // if user not found
        if (!user) {
            return res.status(404).json({ message: "User not found" });
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
    const { userID } = req.params;
    const { username, password, personal_bio} = req.body;

    try {
        // query the user database using userID
        let user = await UserModel.findOne({ userID });

        // if user not found
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // update the user profile
        user.username = username;
        user.password = password;
        user.personal_bio = personal_bio;

        await user.save();
        return res.status(200).json({ user });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in updateUserProfile: ", error.message);
    }
};

// create a new user profile with the given data
const signUpNewUser = async (req, res) => {
    let userID = uuidv4().substring(0, 6);
    const { username, email, password } = req.body;

    // check if all fields are filled
    if (!userID || !username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // check if the user already exists
    const existingUser = await UserModel.findOne({ userID });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    try {
        // create a new user profile
        const user = await UserModel.create({ userID, username, email, password });
        return res.status(201).json({ user });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in createUserProfile: ", error.message);
    } 
};

const signInUser = async (req, res) => {
    const { email, password } = req.body;

    // check if all fields are filled
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // check if the user exists and the correctness of the password
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid account" });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Wrong password" });
    }}
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in signInUser: ", error.message);
    }
};

const suspendUser = async (req, res) => {
    const { userID } = req.params;

    try {
        // query the user database using userID
        const user = await UserModel.findOne({ userID });

        // if user not found
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // update the user profile
        user.isSuspended = true;
        await user.save();
        return res.status(200).json({ user });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in suspendUser: ", error.message);
    }
};

const deleteUser = async (req, res) => {
    const { userID } = req.params;

    try {
        // query the user database using userID
        const user = await UserModel.findOne({ userID });

        // if user not found
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // delete the user profile
        await UserModel.deleteOne({ userID });
        return res.status(200).json({ message: "User deleted successfully" });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in delelteUser: ", error.message);
    }
};


export { getUserProfile, updateUserProfile, signUpNewUser, signInUser, suspendUser, deleteUser };

