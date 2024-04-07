import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({

    chatID: {
        type: String,
        required: true,
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

export default mongoose.model("Message", messageSchema)
