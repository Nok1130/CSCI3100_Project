import React, { useState } from 'react';
import { ChakraProvider, Input, InputRightElement, InputGroup} from '@chakra-ui/react'
import { IoSendSharp } from "react-icons/io5"
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { chatAtom, selectChatAtom } from './atoms/messageAtom.js';
import useStore from './UserContext.jsx';

const SendMessageInput = ({setMessages}) => {
  const [messageText, setMessageText] = useState("");
  const selectChat = useRecoilValue(selectChatAtom);
  const { currentloginID, setcurrentloginID } = useStore();
  const setChats = useSetRecoilState(chatAtom);

  console.log(messageText);
  console.log(selectChat.userID);
  console.log(currentloginID);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if(!messageText) return;
    await fetch("/api/messageText", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: currentloginID,
        message: messageText,
        recipientId: selectChat.userID,
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMessageText("");
        setMessages((messages) => [...messages, data]);
        setChats(prevChats => {
          const updatedChats = prevChats.map(ChatRoom => {
            if (ChatRoom._id === selectChat._id) {
              return {
                ...ChatRoom,
                lastMessage:{
                  text: messageText,
                  sender: data.sender
                }
              }
            }
             return ChatRoom;
          })
          return updatedChats;
        })
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <ChakraProvider>
        <form onSubmit={handleSendMessage}>
            <InputGroup>
                <Input w={"full"} color={"white"} placeholder='Type message here' onChange={(e) => setMessageText(e.target.value)} value={messageText} />
                <InputRightElement onClick={handleSendMessage} cursor={"pointer"}>
                <IoSendSharp color='white' />
                </InputRightElement>
            </InputGroup>
        </form>
    </ChakraProvider>
  );
};

export default SendMessageInput;