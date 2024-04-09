import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FollowerSchema = new Schema({

    // the user who are going to follow others, this is userID
    follower: { 
        type: String,
        required: true,
    },

    // the user who are going to being follow, this is userID
    following: { 
        type: String,
        required: true,
    },

    isAccepted: {
        type: Boolean,
        default: true,
    },

},{ 
    timestamps: true 
}

);

export default mongoose.model("Follower", FollowerSchema)