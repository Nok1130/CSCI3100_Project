import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dislikeSchema = new Schema({

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

},{ 
    timestamps: true 
}

);

export default mongoose.model("Dislike", dislikeSchema);