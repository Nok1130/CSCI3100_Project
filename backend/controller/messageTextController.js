import ChatRoom from '../model/ChatRoom.js';
import MessageText from '../model/MessageText.js';
import User from "../model/User.js";

async function sendMessage(req, res) {
    try {
        const { recipientId, message } = req.body;
        const userID = req.body.userID;     //need change back to userID

        let user1 = await User.findOne({ userID });    //need change back to userID
        console.log(user1);
        const senderId = user1._id;

        // userID = recipientId;
        // let user2 = await User.findOne({ userID });
        // recipientId = user2._id;

        console.log(senderId);
        console.log(recipientId);
        let chatRoom = await ChatRoom.findOne({ participant: { $all: [senderId, recipientId] } });
        console.log("chatRoom:", chatRoom);
         if(!chatRoom) {
            chatRoom = new ChatRoom({ participant: [senderId, recipientId], lastMessage: { text: message, sender: senderId } });
            await chatRoom.save();
        }
        const newMessage = new MessageText({ chatRoomId: chatRoom._id, sender: senderId, text: message });
        await Promise.all([ newMessage.save(), chatRoom.updateOne({lastMessage: { text: message, sender: senderId }})]);

        res.status(200).json(newMessage)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getMessages(req, res) {
    const { otherUserId } = req.params;
    const userID = req.body.userID;
    console.log("otherUserId" + otherUserId);
    try {
        let user = await User.findOne({ userID });
        const userRealId = user._id;

        const chatRoom = await ChatRoom.findOne({ participant: { $all: [userRealId, otherUserId] } });
        if (!chatRoom) {
            return res.status(404).json({ error: "Chatroom not found" });
        }
        
        const messages = await MessageText.find({ chatRoomId: chatRoom._id }).sort({"createdAt": 1}) ;
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getChatRooms(req, res) {
    const userID = req.body.userID;
    try {
        let user = await User.findOne({ userID });
        const _id = user._id;
        let chatRoom = await ChatRoom.find({ participant: _id }).populate({ path: "participant", select: "username personalIcon userID"});
        chatRoom.forEach(ChatRoom => {
            ChatRoom.participant = ChatRoom.participant.filter(
                participant => participant._id.toString() !== _id.toString()
            );
        });

        res.status(200).json(chatRoom);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { sendMessage, getMessages, getChatRooms };