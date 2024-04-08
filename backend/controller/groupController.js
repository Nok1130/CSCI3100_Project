import groupModel from "../model/Group.js";
import { v4 as uuidv4 } from "uuid";

const createGroup = async (req, res) => {
    const groupID = uuidv4().substring(0, 6);
    const { groupname, groupBio, groupAdmin } = req.body;
    if (!groupname || !groupBio || !groupAdmin) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try {
        if (!groupname || !groupBio || !groupAdmin) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const newGroup = await groupModel.create({ groupID, groupname, groupBio, groupAdmin : [groupAdmin] });
        return res.status(201).json({ newGroup });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in createGroup: ", error.message);
    }
};

const getGroup = async (req, res) => {
    const { groupID } = req.body;
    if (!groupID) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try {
        const group = await groupModel.findOne({ groupID });
        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        }
        return res.status(200).json({ group });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getGroup: ", error.message);
    }
};

const addGroupAdmin = async (req, res) => {
    const { groupID, groupAdmin } = req.body;
    if (!groupID || !groupAdmin) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try {
        if (!groupID || !groupAdmin) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const newGroup = await groupModel.findOneAndUpdate({ groupID }, { $push: { groupAdmin } });
        return res.status(201).json({ newGroup });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in addGroupAdmin: ", error.message);
    }
};

const getAllGroupAdmin = async (req, res) => {
    const { groupID } = req.body;
    if (!groupID) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try {
        const group = await groupModel.findOne({ groupID });
        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        }
        return res.status(200).json({ group });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getGroup: ", error.message);
    }
};

const getAllGroupOfUser = async (req, res) => {
    const { userID } = req.query;
    if (!userID) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try {
        const group = await groupModel.find({ groupAdmin : userID });
        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        }
        return res.status(200).json({ group });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getGroup: ", error.message);
    }
};


export { createGroup, getGroup, addGroupAdmin, getAllGroupAdmin, getAllGroupOfUser };