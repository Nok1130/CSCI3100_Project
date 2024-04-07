import {React, useEffect, useState} from 'react'
import axios from 'axios';
import './Posts.css'
import { Card, Flex, Avatar } from 'antd';
import { AiOutlineHeart, AiOutlineDislike, AiOutlineWarning } from "react-icons/ai";
import { BiComment, BiRepost } from "react-icons/bi";
import { getAllPostOfUser } from '../backend/controller/postController';
import { useLocation } from 'react-router-dom';

const { Meta } = Card;

function Posts() {
    const location = useLocation();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    let postCategoryquery = '';
    const postCategorys = ['all', 'engineering', 'SEEM'];
    console.log([location.pathname.split('/').pop()]);
    if ([location.pathname.split('/').pop()] == 'all') {
        postCategoryquery = postCategorys.map(postCategory => `postCategorys=${postCategory}`).join('&');
    } else {
        postCategoryquery = `postCategorys=${[location.pathname.split('/').pop()]}`;
    }

    const followers = ['Macro', 'Johnny'];
    followers.push('Engineering');
    followers.push('CUHK');
    const followersquery = followers.map(follower => `nicknames=${follower}`).join('&');
    const queryString = postCategoryquery+'&'+followersquery;
    console.log(queryString)
    useEffect(() => {
        console.log('run');
        setLoading(true);
        
        axios
            .get(`http://localhost:5001/api/post/getAllPostOfUser?${queryString}`)
            .then((response) => {
                console.log(response.data.post)
                setPosts(response.data.post);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [location]);

    return (
        <Flex vertical className='scroll' style={{ height: '90vh' }}>


            {posts.map((post, index) => (
            <Card
                key={post.postID}
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
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                        title={post.nickname}

                    />
                    <h3 className='title'>{post.postTitle}</h3>
                    <pre className='content'>{post.postText}
                    </pre>
                    <pre className='hashtag'>{post.hashtag}</pre>
                </Card>
            ))}
        
        </Flex>
    )
}

export default Posts