import React from 'react'
import './Posts.css'
import { Card, Flex, Avatar } from 'antd';
import { AiOutlineHeart, AiOutlineDislike, AiOutlineWarning } from "react-icons/ai";
import { BiComment, BiRepost } from "react-icons/bi";

const { Meta } = Card;
const PostInfo = [
    {
        "avatar": "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
        "username": "JOMUD",
        "title": "CS Debate",
        "content": "Which one do you think first when u see cs\nComment 0 for computer science\nComment 1 for customer service\n",
        "hashtag": ["#cs", "#debate"]
    },
    {
        "avatar": "https://api.dicebear.com/7.x/miniavs/svg?seed=7",
        "username": "CSDOG",
        "title": "CS tips",
        "content": "1. quit your job\n2. go to teach computer\n3. go to play lottery...",
        "hashtag": ["#cs"]
    },
    {
        "avatar": "https://api.dicebear.com/7.x/miniavs/svg?seed=6",
        "username": "CSDOG",
        "title": "Why",
        "content": "Why must god hate me",
        "hashtag": ["#why", "#justwhy"]
    }
]
function Posts() {
    return (
        <Flex vertical className='scroll' style={{ height: '90vh' }}>


            {PostInfo.map((key, val) => {
                let text = "";
                for (let i=0; i< key.hashtag.length; i++) {
                    text += key.hashtag[i] + ' ';
                }
                return <Card
                className='postcard'
                    actions={[
                        <AiOutlineHeart key="like" color='red' />,
                        <BiComment key="comment" color='blue' />,
                        <AiOutlineDislike key="dislike" color='black' />,
                        <BiRepost key="repost" color='green' />,
                        <AiOutlineWarning key="report" color='black' />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={key.avatar} />}
                        title={key.username}

                    />
                    <h3 className='title'>{key.title}</h3>
                    <pre className='content'>{key.content}
                    </pre>
                    <pre className='hashtag'>{text}</pre>
                </Card>
            })}


        </Flex>
    )
}

export default Posts