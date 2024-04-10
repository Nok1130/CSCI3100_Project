/* eslint-disable no-unused-vars */
import postModel from "../model/Post.js";
import reportModel from "../model/Report.js";
import { v4 as uuidv4 } from "uuid";

const createPost = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const postID = uuidv4().substring(0, 6)
    const content = req.file;
    const { userID, nickname, postTitle, postText, hashtag, postCategory } = req.body;
    try {
        if (!userID || !nickname || !postTitle || !postText || !postCategory) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const contentFilename = content === undefined ? "" : content.filename;
        const hashtagList = hashtag === undefined ? [] :  hashtag.split(" ");
        const newPost = await postModel.create({ postID, userID, nickname, postTitle, postText, postContent: contentFilename, hashtag : hashtagList, postCategory });
        return res.status(201).json({ newPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in createPost: ", error.message);
    }
};

// // get all posts
// const getAllPostOfUser = async (req, res) => {
//     const { nicknames, postCategorys, hashtag } = req.query;
//     try {
        
//         if (!post) {
//             return res.status(404).json({ message: "Post not found" });
//         }
//         return res.status(200).json({ post });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//         console.log("Error in getPost: ", error.message);
//     }
// };

//search post
const searchPost = async (req, res) => {
    const { nicknames, postCategorys, hashtags } = req.query;
    try {
        var post = await postModel.find({});
        if (hashtags === "") {
            post = await postModel.find({ nickname : { $in:  nicknames }, postCategory: { $in:  postCategorys } }).sort( { "createdAt": -1 } );
            
          } else {
            post = await postModel.find({ postCategory: { $in:  postCategorys }, hashtag : hashtags }).sort( { "createdAt": -1 } );
          }
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

const unlikePost = async (req, res) => {
    const { userID, postID } = req.body;

    try {
        const post = await postModel.findOne({ postID: postID });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        post.like.pull(userID);
        await post.save();
        return res.status(200).json({ post });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in unliking post: ", error.message);
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

const undislikePost = async (req, res) => {
    const { userID, postID } = req.body;

    try {
        const post = await postModel.findOne({ postID: postID });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        post.dislike.pull(userID);
        await post.save();
        return res.status(200).json({ post });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in unliking post: ", error.message);
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
    const { repostUserID, repostNickname, postID } = req.body;

    try {
        if (!repostUserID || !postID) {
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
            userID is set to repostUserID;
            username is set to repostNickname;
            originalAuthor is set to original post username;
            isRepost set to true, repostBy is set;
            This generates a repost which displays the original repost
        */

        const newPost = await postModel.create({
            postID: uuidv4().substring(0, 6),
            userID: repostUserID,
            username: repostNickname,
            nickname: repostNickname,
            hashtag: post.hashtag,
            originalAuthor: post.username,
            repostBy: repostUserID,
            isRepost: true,
            isSuspended: post.isSuspended,
            postTitle: post.postTitle,
            postCategory: post.postCategory,
            postText: post.postText,
            postContent: post.postContent,
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

export { createPost, likePost, dislikePost, getPost, createComment, repost, reportPost, searchPost, unlikePost, undislikePost,getAllPost }