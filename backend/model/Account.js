import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const accountSchema = new Schema({

    userID: {
        type: String,
        required: true,
        unique: true,        
        default: () => uuidv4().substring(0, 6),
    },

    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    personalBio: {
        type: String,
        default: "Presonal Bio == NULL...",
    },

    personalIcon: {
        filename: String,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },

    isPrivate: {
        type: Boolean,
        default: true,
    },

    isSuspended: {
        type: Boolean,
        default: false,
    },

},{ 
    timestamps: true 
}

);

export default mongoose.model("Account", accountSchema);