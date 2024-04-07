import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const reportSchema = new Schema({

    reportID: {
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

    postID: {
        type: String,
        required: true,
        ref: "Post",
    },

    reportReason: {
        type: String,
        required: true,
    },

    createTime: {
        type: Date,
        default: Date.now,
    },

    
});

export default mongoose.model("Report", reportSchema);