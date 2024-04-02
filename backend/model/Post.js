import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const postSchema = new Schema({

    postID: {
        type: String,
        required: true,
        unique: true,
        default: () => uuidv4(),
    },

    hashtag: {
        type: [String],
    },

    userID: {
        type: String,
        required: true,
    },

    createTime: {
        type: Date,
        default: Date.now,
    },

    postTopic: {
        type: String,
        required: true,
    },

    postDesciption: {
        type: String,
        required: true,
    },

    postImage: {
        filename: String,
    },

    postVideo: {
        filename: String,
    },


});

export default mongoose.model("Post", postSchema);