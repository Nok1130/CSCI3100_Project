import React from 'react';
import { ChakraProvider, Flex, Text, Avatar} from '@chakra-ui/react'
import { useRecoilValue } from 'recoil';
import { selectChatAtom } from './atoms/messageAtom.js';

const MessageBox = ({ haveMessage, MessageText}) => {
  const selectChat = useRecoilValue(selectChatAtom);
  return (
    <ChakraProvider>
      {haveMessage ? (
        <Flex gap={2} alignSelf={"flex-end"}>
            <Text borderRadius={"md"} maxW={"350px"} bg={"blue.400"} p={1} color={"white"}>
              {MessageText.text}
            </Text>
            <Avatar src='' w={7} h={7} /> 
        </Flex>
      ) : (
        <Flex gap={2}>
            <Avatar src={"../backend/uploads/" + selectChat.personalIcon} w={7} h={7} />
            <Text borderRadius={"md"} maxW={"350px"} bg={"gray.400"} p={1} color={"white"}>
              {MessageText.text}
            </Text>
        </Flex>
      )}
    </ChakraProvider>
  );
};

export default MessageBox;