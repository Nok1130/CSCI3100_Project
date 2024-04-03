import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const groupSchema = new Schema({

    chatID: {
        type: String,
        required: true,
        default: () => uuidv4().substring(0, 6),
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

},{ 
    timestamps: true 
}

);

export default mongoose.model("Message", groupSchema)