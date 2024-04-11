import React from 'react';
import { ChakraProvider, Flex, Stack, Text, useColorModeValue, WrapItem, Avatar, AvatarBadge, useColorMode} from '@chakra-ui/react'
import { BsCheck2All } from "react-icons/bs"
import { useRecoilState } from 'recoil';
import { selectChatAtom } from './atoms/messageAtom.js';

const ChatTarget = ({ChatRoom}) => {
    const user = ChatRoom.participant[0];
    const lastMessage = ChatRoom.lastMessage;
    const [selectChat, setSelectChat] = useRecoilState(selectChatAtom);

    return (
        <ChakraProvider>
            <Flex gap={4} alignItems={"center"} p={"1"} _hover={{cursor: "pointer", bg: "#3e3e3e", color:"white"}} borderRadius={"md"} 
                onClick={() =>
                    setSelectChat({
                        _id: ChatRoom._id,
                        userID: user._id,
                        username: user.username,
                        personalIcon: user.personalIcon,
                        mock: ChatRoom.mock,
                    })
                }
                bg={selectChat._id === ChatRoom._id ? "#3e3e3e" : ""}
                color={selectChat._id === ChatRoom._id ? "white" : ""}
            >
                <WrapItem>
                    <Avatar size={{base: "xs", sm: "sm", md: "md"}} src={"../backend/uploads/" + user.personalIcon}>
                    <AvatarBadge boxSize='1em' bg='green.500' />
                    </Avatar>
                </WrapItem>
                <Stack direction={"column"} fontSize={"sm"}>
                    <Text fontWeight={"700"} display={"flex"} alignItems={"center"}>
                        {user.username}
                    </Text>

                    <Text fontWeight={"xs"} display={"flex"} alignItems={"center"} gap={1}>
                        {lastMessage.sender !== user._id ? <BsCheck2All size={16} /> : ""}
                        {lastMessage.text.length > 18 ? lastMessage.text.substring(0, 18) + "..." : lastMessage.text}
                    </Text>
                </Stack>
            </Flex>
        </ChakraProvider>
    );
  };
  
  export default ChatTarget;