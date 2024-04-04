import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const groupSchema = new Schema({

    chatID: {
        type: String,
        required: true,
        default: () => uuidv4().substring(0, 6),
    },

    sender: {
        type: String,
        required: true,
    },

    receiver: {
        type: String,
        required: true,
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