import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const groupSchema = new Schema({

    groupID: {
        type: String,
        required: true,
        unique: true,
        default: () => uuidv4().substring(0, 6),
    },

    groupname: {
        type: String,
        required: true,
    },

    groupBio: {
        type: String,
        default: "This is a group account. No bio yet.",
    },

    groupAdmin: {
        type: [String],
        required: true,
    },


},{ 
    timestamps: true 
}

);

export default mongoose.model("Group", groupSchema)