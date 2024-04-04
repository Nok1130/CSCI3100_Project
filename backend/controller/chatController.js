import ChatModel from "../model/Chat.js";
import MessageModel from "../model/Message.js";


const createMessage = async (req, res) => {
    const { chatID, sender, receiver, text } = req.body;
    try {
        const newMessage = await MessageModel.create({ chatID : chatID, sender : sender, receiver : receiver, text : text });
        return res.status(201).json({ newMessage });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in createMessage: ", error.message);
    }
};

const createChat = async (req, res) => {
    const { sender, receiver } = req.body;
    try {
        const newChat = await ChatModel.create({ sender, receiver });
        return res.status(201).json({ newChat });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in createChat: ", error.message);
    }
};

const getChat = async (req, res) => {
    const { sender, receiver } = req.body;
    try {
        const chat = await ChatModel.findOne({ sender, receiver });
        if (!chat) {
            return res.status(404).json({ message: "Chat not found" });
        }

        return res.status(200).json({ chat });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getChat: ", error.message);
    }
};

export { createMessage, createChat, getChat };

