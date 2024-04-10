import mongoose from "mongoose";

const Schema = mongoose.Schema;

const chatRoomSchema = new Schema({

    // chatID : {
    //     type: String,
    //     required: true,
    //     default: () => uuidv4().substring(0, 6),
    // },

    participant: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }],
        

    lastMessage: {
        text: {
            type: String
        },
        sender: { 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        },
    },

},{ 
    timestamps: true 
}

); 

export default mongoose.model("ChatRoom", chatRoomSchema)