import React, { useEffect, useState } from 'react';
import { ChakraProvider, Flex, Skeleton, SkeletonCircle, Divider, Text, useColorModeValue, Avatar} from '@chakra-ui/react'
import MessageBox from './MessageBox.jsx';
import SendMessageInput from './SendMessageInput.jsx';
import './Chat.css'
import { selectChatAtom } from './atoms/messageAtom.js';
import { useRecoilState } from 'recoil';
import useStore from './UserContext.jsx';

const ChatRoom = () => {
  const { currentloginID, setcurrentloginID } = useStore();
  const [selectChat, setSelectChat] = useRecoilState(selectChatAtom);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    setLoadingMessages(true);
    setMessages([]);
    await fetch(('/api/messageText/' + selectChat.userID), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: currentloginID
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMessages(data);
        setLoadingMessages(false);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    getMessages();
  }, [currentloginID, selectChat.userID]);
  return (
    <ChakraProvider>
      <Flex flex={70} bg={useColorModeValue("gray.600", "gray.dark")} p={1} borderRadius={"md"} flexDirection={"column"} h={"full"}>
        <Flex w={"full"} h={12} alignItems={"center"} gap={2}>
            <Avatar size={"sm"} src={"../backend/uploads/" + selectChat.personalIcon}  />
            <Text display={"flex"} alignItems={"center"} color={"white"}>
              {selectChat.username}
            </Text>
        </Flex>

        <Divider />

        <Flex flexDir={"column"} gap={4} my={4} h={"500px"} maxH={{sm:"300px", md:"450px"}} overflowY={"auto"}>
            {loadingMessages && 
                [...Array(5)].map((_, i) => (
                    <Flex key={i} gap={2} alignItems={"center"} p={1} borderRadius={"md"} alignSelf={i%2===0 ? "flex-start":"flex-end"}>
                        {i%2===0 && <SkeletonCircle size={7} />}
                        <Flex flexDir={"column"} gap={2}>
                            <Skeleton h={"8px"} w={"250px"} />
                        </Flex>
                        {i%2!==0 && <SkeletonCircle size={7} />}
                    </Flex>
                ))
            }
            {/* <MessageBox haveMessage={true}/>
            <MessageBox haveMessage={false}/>
            <MessageBox haveMessage={false}/>
            <MessageBox haveMessage={false}/>
            <MessageBox haveMessage={false}/>
            <MessageBox haveMessage={true}/> */}
            {!loadingMessages &&(
              messages.map((MessageText) => (
                <MessageBox key={MessageText._id} MessageText={MessageText} haveMessage={MessageText.sender !== selectChat.userID} />
              ))
            )}
        </Flex>
        <SendMessageInput setMessages={setMessages}/>
      </Flex>
    </ChakraProvider>
  );
};

export default ChatRoom;