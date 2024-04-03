import mongoose from "mongoose";

const Schema = mongoose.Schema;

const likeSchema = new Schema({

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

    createTime: {
        type: Date,
        default: Date.now,
    },


});

export default mongoose.model("Like", likeSchema);
