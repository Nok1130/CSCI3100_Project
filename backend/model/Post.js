import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const postSchema = new Schema({

    postID: {
        type: String,
        required: true,
        unique: true,
        default: () => uuidv4().substring(0, 6),
    },

    userID: {
        type: String,
        required: true,
    },

    nickname: {
        type: String,
        required: true,
    },

    hashtag: {
        type: [String],
        default: [],
    },

    repostBy: {
        type: String,
    },

    isRepost: {
        type: Boolean,
        default: false,
    },

    isSuspended: {
        type: Boolean,
        default: false,
    },

    postCategory: {
        type: String,
    },
    
    postTitle: {
        type: String,
        required: true,
    },

    postText: {
        type: String,
        required: true,
    },

    postContent: {
        type: String,
        default: "",

    },

    like: {
        type: [String],
        default: [],
    },

    dislike : {
        type: [String],
        default: [],
    },

    comments: {
        type: Map,
        default: {},
        // format : {username : comment}
    }

},{ 
    timestamps: true 
}
);

export default mongoose.model("Post", postSchema);