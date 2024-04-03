import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dislikeSchema = new Schema({

    userID: {
        type: String,
        required: true,
    },

    postID: {
        type: String,
        required: true,
    },

},{ 
    timestamps: true 
}

);

export default mongoose.model("Dislike", dislikeSchema);