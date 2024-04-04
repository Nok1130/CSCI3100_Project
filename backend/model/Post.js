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

    hashtag: {
        type: [String],
        default: [],
    },

    userID: {
        type: String,
        required: true,
    },

    postCategory: {
        type: String,
        required: true,
    },
    
    postTitle: {
        type: String,
        required: true,
    },

    postText: {
        type: String,
        required: true,
    },

    postImage: {
        filename: String,
    },

    postVideo: {
        filename: String,
    },

},{ 
    timestamps: true 
}
);

export default mongoose.model("Post", postSchema);