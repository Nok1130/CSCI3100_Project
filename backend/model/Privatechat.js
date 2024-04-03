import mongoose from "mongoose";

const Schema = mongoose.Schema;

const groupSchema = new Schema({

    chatID : {
        type: String,
        required: true,
    },

    paticipant1 : {
        type: String,
        required: true,
    },

    paticipant2 : {
        type: String,
        required: true,
    },

},{ 
    timestamps: true 
}

);

export default mongoose.model("Privatechat", groupSchema)