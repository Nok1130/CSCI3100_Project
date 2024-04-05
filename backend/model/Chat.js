import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const chatSchema = new Schema({

    chatID : {
        type: String,
        required: true,
        default: () => uuidv4().substring(0, 6),
    },

    paticipant: {
        type: [String],
        required: true,
        validate: [arrayLimit, '{PATH} expects array of length 2.'],
    },

},{ 
    timestamps: true 
}

);

function arrayLimit(val) {
    return val.length == 2;
  }  

export default mongoose.model("Chat", chatSchema)