/* eslint-disable no-unused-vars */
import postModel from "../model/Post.js";
import reportModel from "../model/Report.js";
import { v4 as uuidv4 } from "uuid";

const createPost = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const postID = uuidv4().substring(0, 6)
    const content = req.file;
    const { userID, nickname, postTitle, postText, hashtag } = req.body;
    try {
        if (!userID || !nickname || !postTitle || !postText) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const contentFilename = content === undefined ? "" : content.filename;
        const hashtagList = hashtag === undefined ? [] : [hashtag];
        const newPost = await postModel.create({ postID, userID, nickname, postTitle, postText, postContent: contentFilename, hashtag : hashtagList });
        return res.status(201).json({ newPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in createPost: ", error.message);
    }
};

const searchPostByHashtag = async (req, res) => {
    const { hashtag } = req.body;
    try {
        const post = await postModel.find({ hashtag : hashtag });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.status(200).json({ post });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getPost: ", error.message);
    }
}

// get all posts
const getAllPostOfUser = async (req, res) => {
    const { userID } = req.body;
    try {
        const post = await postModel.find({ userID: userID });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.status(200).json({ post });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getPost: ", error.message);
    }
};

const getPost = async (req, res) => {
    const { postID } = req.body;
    try {
        const post = await postModel.findOne({ postID: postID });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.status(200).json({ post });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getPost: ", error.message);
    }
}

const getAllPost = async (req, res) => {
    try {
        const post = await postModel.find();
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.status(200).json({ post });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getPost: ", error.message);
    }
}

// create a new like or dislike info
const likePost = async (req, res) => {
    const { userID, postID } = req.body;

    try {
        const post = await postModel.findOne({ postID: postID });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        post.like.push(userID);
        await post.save();
        return res.status(201).json({ post });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in like or dislike post: ", error.message);
    }

}

const dislikePost = async (req, res) => {
    const { userID, postID } = req.body;

    try {
        const post = await postModel.findOne({ postID: postID });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        post.dislike.push(userID);
        await post.save();
        return res.status(201).json({ post });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in like or dislike post: ", error.message);
    }

}

const createComment = async (req, res) => {
    const { username, postID, commentContent } = req.body;
    if (!username || !commentContent) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try {
        const post = await postModel.findOne({ postID: postID });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        post.comments.set(username, commentContent);
        await post.save();
        return res.status(201).json({ post });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in createComment: ", error.message);
    }
};

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
            isSuspended: post.isSuspended,
            postTitle: post.postTitle,
            postCategory: post.postCategory,
            postText: post.postText,
            postImage: post.postImage,
            postVideo: post.postVideo,
            like: post.like,
            dislike: post.dislike,
            comments: post.comments,

        });

        res.status(201).json({ newPost });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in repost: ", error.message);
    }
}

const reportPost = async (req, res) => {
    const { userID, postID, reportReason } = req.body;

    try {
        if (!userID || !postID || !reportReason) {
            return res.status(404).json({ message: "Required fields missing" });
        }
        const post = await postModel.findOne({ postID: postID });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        const newReport = await reportModel.create({ userID, postID, reportReason });
        return res.status(201).json({ newReport });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in reportPost: ", error.message);
    }
}

export { createPost, getAllPostOfUser, likePost, dislikePost, getPost, getAllPost, createComment, repost, reportPost, searchPostByHashtag }