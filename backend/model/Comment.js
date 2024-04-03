import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const commentSchema = new Schema({

    commentID: {
        type: String,
        required: true,
        unique: true,
        default: () => uuidv4(),
    },

    userID: {
        type: String,
        required: true,
        ref: "Account",
    },

    createTime: {
        type: Date,
        default: Date.now,
    },

    postID: {
        type: String,
        required: true,
        ref: "Post",
    },

    commentContent: {
        type: String,
        required: true,
    },

    
});


export default mongoose.model("Comment", commentSchema);