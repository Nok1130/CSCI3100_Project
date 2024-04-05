import commentModel from "../model/Comment.js";
import { v4 as uuidv4 } from "uuid";

const createComment = async (req, res) => {
    const commentID = uuidv4().substring(0, 6);
    const { userID, postID, commentContent } = req.body;
    if (!userID || !postID || !commentContent) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try {
        const newComment = await commentModel.create({ commentID, userID, postID, commentContent });
        return res.status(201).json({ newComment });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in createComment: ", error.message);
    }
};

const getAllCommentOfPost = async (req, res) => {
    const { postID } = req.query;
    if (!postID) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try {
        const comment = await commentModel.find({ postID });
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        return res.status(200).json({ comment });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getComment: ", error.message);
    }
};

export { createComment, getAllCommentOfPost }