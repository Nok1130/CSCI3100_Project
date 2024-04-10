import { atom } from "recoil";

export const chatAtom = atom({
    key: 'chatAtom',
    default: []
});

export const selectChatAtom = atom({
    key: 'selectChatAtom',
    default: {
        _id: "",
        userID: "",
        username: "",
        personalIcon: "",
    }
});