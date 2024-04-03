import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FollowerSchema = new Schema({

    follower: {
        type: String,
        required: true,
        ref: "Account",
    },

    following: {
        type: String,
        required: true,
        ref: "Account",
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