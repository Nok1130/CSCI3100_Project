import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageTextSchema = new Schema({

    chatRoomId: {
        type: Schema.Types.ObjectId,
        ref: "ChatRoom"
    },

    sender: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },

    text: {
        type: String
    },

},{ 
    timestamps: true 
}

);

export default mongoose.model("MessageText", messageTextSchema)
