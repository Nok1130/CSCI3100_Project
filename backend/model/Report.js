import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const reportSchema = new Schema({

    reportID: {
        type: String,
        required: true,
        unique: true,
        default: () => uuidv4().substring(0, 6),
    },

    userID: {
        type: String,
        required: true,
    },

    postID: {
        type: String,
        required: true,
    },

    reportReason: {
        type: String,
        required: true,
    },
    
},{ 
    timestamps: true 
}

);

export default mongoose.model("Report", reportSchema);