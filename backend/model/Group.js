import mongoose from "mongoose";

const Schema = mongoose.Schema;

const groupSchema = new Schema({

    groupID: {
        type: String,
        required: true,
        unique: true,
    },

    groupName: {
        type: String,
        required: true,
    },

    personalBio: {
        type: String,
        default: "Group Bio == NULL...",
    },

    groupMember: {
        type: [String],
        default: [],
        required: true,
    },

    groupAdmin: {
        type: [String],
        default: [],
        required: true,
    },


},{ 
    timestamps: true 
}

);

export default mongoose.model("Group", groupSchema)