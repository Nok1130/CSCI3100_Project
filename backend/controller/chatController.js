import ChatModel from "../model/Chat.js";
import MessageModel from "../model/Message.js";


const createMessage = async (req, res) => {
    const { chatID, sender, receiver, text } = req.body;
    try {
        if (sender === receiver || !chatID || !sender || !receiver || !text) {
            return res.status(404).json({ message: "Chat not found" });
        }
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
        if (sender === receiver || !sender || !receiver) {
            return res.status(404).json({ message: "Chat not found" });
        }
        const newChat = await ChatModel.create({ paticipant : [sender, receiver] });
        return res.status(201).json({ newChat });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in createChat: ", error.message);
    }
};

const getChat = async (req, res) => {
    const { sender, receiver } = req.query;
    try {
        if (sender === receiver || !sender || !receiver) {
            return res.status(404).json({ message: "Chat not found" });
        }
        const chat = await ChatModel.findOne({             
            $or: [
                { participant: [sender, receiver] },
                { participant: [receiver, sender] }
            ] 
    });
        if (!chat) {
            return res.status(404).json({ message: "Chat not found" });
        }

        return res.status(200).json({ chat });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getChat: ", error.message);
    }
};

const getAllMessage = async (req, res) => {
    const { chatID } = req.query;
    try {
        if (!chatID) {
            return res.status(404).json({ message: "Chat not found" });
        }
        const message = await MessageModel.find({ chatID : chatID });
        if (!message) {
            return res.status(404).json({ message: "Message not found" });
        }   
        return res.status(200).json({ message });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getMessage: ", error.message);
    }
};

export { createMessage, createChat, getChat, getAllMessage };

