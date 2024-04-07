import mongoose from "mongoose";

const Schema = mongoose.Schema;

const groupSchema = new Schema({

    chatID: {
        type: String,
        required: true,
    },

    messageID: {
        type: String,
        required: true,
    },

    sender: {
        type: String,
        required: true,
        ref: "Account",
    },

    receiver: {
        type: String,
        required: true,
        ref: "Account",
    },

    text: {
        type: String,
        required: true,
    },

    createTime: {
        type: Date,
        default: Date.now,
    },

});

export default mongoose.model("Message", groupSchema)