import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import ENV from '../ENV.js';
import { compare } from "bcrypt";

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

    major: {
        type: String,
        required: true,
    },

    university: {
        type: String,
        default: "CUHK",
    },

    nickname: {
        type: [Array],
    },

    personalBio: {
        type: String,
        default: "Presonal Bio == NULL...",
    },

    personalIcon: {
        filename: String,
        path: String,
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

UserSchema.pre('save', function(next) {
    this.nickname = [this.major, this.username];
    next();
});

UserSchema.methods.generateJWT = async function () {
    return jwt.sign({ userID: this.userID, username: this.username, isAdmin: this.isAdmin }, ENV.ACCESS_TOKEN_SECRET, {
        expiresIn: "1 day",
    });
}

UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await compare(enteredPassword, this.password);
}

export default mongoose.model("User", UserSchema);