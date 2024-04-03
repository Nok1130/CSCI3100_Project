import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const commentSchema = new Schema({

    commentID: {
        type: String,
        required: true,
        unique: true,
        default: () => uuidv4().substring(0, 6),
    },

    userID: {
        type: String,
        required: true,
        ref: "Account",
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

    
},{ 
    timestamps: true 
}

);


export default mongoose.model("Comment", commentSchema);