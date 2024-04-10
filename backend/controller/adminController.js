import UserModel from "../model/User.js";
import ReportModel from "../model/Report.js";

const suspendUser = async (req, res) => {
    const { userID } = req.body;

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
    const { userID } = req.body;

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

const getAllUser = async (req, res) => {
    try {
        const users = await UserModel.find();
        return res.status(200).json({ users });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getAllUser: ", error.message);
    }
};

const getAllReport = async (req, res) => {
    try {
        const reports = await ReportModel.find();
        return res.status(200).json({ reports });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getAllReport: ", error.message);
    }
};

const getPostReport = async (req, res) => {
    const { postID } = req.body;
    try {
        const reports = await ReportModel.find({ postID: postID });
        return res.status(200).json({ reports });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getPostReport: ", error.message);
    }
};


export { suspendUser, deleteUser, getAllUser, getAllReport, getPostReport };