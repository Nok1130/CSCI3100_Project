import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FollowerSchema = new Schema({

    // the user who are going to follow others
    follower: { 
        type: String,
        required: true,
    },

    // the user who are going to being follow
    following: { 
        type: String,
        required: true,
    },

    isAccepted: {
        type: Boolean,
        default: false,
    },

},{ 
    timestamps: true 
}

);

export default mongoose.model("Follower", FollowerSchema)