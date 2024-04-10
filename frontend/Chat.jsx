import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Flex, Skeleton, SkeletonCircle, Text, useColorModeValue} from '@chakra-ui/react'
import ChatTarget from './ChatTarget.jsx';
import ChatRoom from './ChatRoom.jsx';
import { GiConversation } from "react-icons/gi";
import useStore from './UserContext.jsx';
import { useRecoilState } from 'recoil';
import { chatAtom, selectChatAtom } from './atoms/messageAtom.js';
 
const Chat = () => {
  const { currentloginID, setcurrentloginID } = useStore();
  const [loadingChatTargets, setLoadingChatTargets] = useState(true);
  const [chats, setChats] = useRecoilState(chatAtom);
  const [selectChat, setSelectChat] = useRecoilState(selectChatAtom);

  const getChatRooms = async () => {

    await fetch('http://localhost:8080/api/messageText/chatRooms', {
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
        setChats(data);
        setLoadingChatTargets(false);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    getChatRooms();
  }, [currentloginID, setChats]);

  return (
    <ChakraProvider>
      <Box position={"relative"} w={"100%"} p={4}>  
        <Flex gap={4} flexDirection={{base:"column", md:"row"}} maxW={{sm:"400px", md:"full"}} mx={"auto"}>
          <Flex flex={30} gap={2} flexDirection={"column"} maxW={{sm: "250px", md: "full"}} mx={"auto"}>
            <Text fontWeight={700} color={useColorModeValue("gray.600","gray.400")}>
              Your Friends
            </Text>
            {loadingChatTargets && 
              [0,1,2,3,4].map((_,i) =>(
                <Flex key={i} gap={4} alignItems={"center"} p={"1"} borderRadius={"md"}>
                  <Box>
                    <SkeletonCircle size={"10"} />
                  </Box>
                  <Flex w={"full"} flexDirection={"column"} gap={3}>
                    <Skeleton h={"10px"} w={"80px"} />
                    <Skeleton h={"8px"} w={"90%"} />
                  </Flex>
                </Flex>
              ))}
              {!loadingChatTargets && (
                chats.map((ChatRoom) => (
                  <ChatTarget key={ChatRoom._id} ChatRoom={ChatRoom} />
                ))
              )}       
          </Flex>
          {!selectChat._id && (
            <Flex flex={70} borderRadius={"md"} p={2} flexDir={"column"} alignItems={"center"} justifyContent={"center"} height={"400px"}>
              <GiConversation size={100} />
              <Text fontSize={20}>
                Start Message to your friends!
              </Text>
          </Flex>
          )}
          {selectChat._id && <ChatRoom />}
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Chat;