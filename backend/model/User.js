import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import ENV from '../ENV.js';

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    userID: {
        type: String,
        required: true,
        unique: true,        
        default: () => uuidv4().substring(0, 6),
    },

    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
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
        type: String,
        default: ""
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },
    
    isPrivate: {
        type: Boolean,
        default: false,
    },

    isVerified: {
        type: Boolean,
        default: false,
    },
    
    isSuspended: {
        type: Boolean,
        default: false,
    },

},{ 
    timestamps: true 
}
);

UserSchema.methods.generateJWT = async function () {
    return jwt.sign({ email: this.email }, ENV.ACCESS_TOKEN_SECRET, {
        expiresIn: "1 day",
    });
}

export default mongoose.model("User", UserSchema);