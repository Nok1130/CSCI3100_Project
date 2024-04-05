/* eslint-disable no-unused-vars */
import postModel from "../model/Post.js";
import LikeModel from "../model/Like.js";
import DislikeModel from "../model/Dislike.js";
import { v4 as uuidv4 } from "uuid";

const createPost = async (req, res) => {
    const postID = uuidv4().substring(0, 6)
    const { username, nickname, postTitle, postText, postImage, postVideo } = req.body;
    try {
        if (!username || !nickname || !postTitle || !postText) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const newPost = await postModel.create({ postID, username, nickname, postTitle, postText, postImage, postVideo });
        return res.status(201).json({ newPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in createPost: ", error.message);
    }
};

const getAllPostOfUSer = async (req, res) => {
    const { username } = req.query;
    try {
        const post = await postModel.find({ username : username });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.status(200).json({ post });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getPost: ", error.message);
    }
};

// create a new like or dislike info
const likeAndDislikePost = async (req, res) => {
    const { userID, postID, isLike } = req.body;

    try {
        if (isLike) {
            const newLike = await LikeModel.create({ userID, postID });
            return res.status(201).json({ newLike });
        }
        else {
            const newDislike = await DislikeModel.create({ userID, postID });
            return res.status(201).json({ newDislike });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in like or dislike post: ", error.message);
    }

}

const likeAndDislikeCount = async (req, res) => {
    const { postID } = req.body;
    try {
        const likeCount = await LikeModel.countDocuments({ postID });
        const dislikeCount = await DislikeModel.countDocuments({ postID });
        return res.status(200).json({ likeCount, dislikeCount });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in likeCount: ", error.message);
    } 
}

const repost = async (req, res) => {
    const { repostUsername, repostNickname, postID } = req.body;

    try {
        if (!repostUsername || !postID) {
            return res.status(404).json({ message: "Required fields missing" });
        }
        const post = await postModel.findOne({ postID: postID });

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        /*
            Generate a new post which has the following properties:
            Everything else is the same with original post except:
            postId is newly generated;
            isRepost set to true, repostBy is set;
            This generates a repost which displays the original repost
        */

        const newPost = await postModel.create({
            postID: uuidv4().substring(0, 6),
            username: post.username,
            nickname: repostNickname,
            hashtag: post.hashtag,
            repostBy: repostUsername,
            isRepost: true,
            postTitle: post.postTitle,
            postCategory: post.postCategory,
            postText: post.postText,
            postImage: post.postImage,
            postVideo: post.postVideo,
        });

        res.status(201).json({ newPost });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in repost: ", error.message);
    }
}

export { createPost, getAllPostOfUSer, likeAndDislikePost, likeAndDislikeCount, repost }