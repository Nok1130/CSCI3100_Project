import { React, useEffect, useState } from 'react'
import axios from 'axios';
import './Posts.css'
import { Card, Flex, Avatar, Image } from 'antd';
import { AiOutlineHeart, AiOutlineDislike, AiOutlineWarning } from "react-icons/ai";
import { BiComment, BiRepost } from "react-icons/bi";
import { searchPost } from '../backend/controller/postController';
import ENV from '../backend/ENV.js';
import { useLocation } from 'react-router-dom';

const { Meta } = Card;

function Posts({ data }) {
    var search = data;
    console.log('search')
    console.log(search);
    const location = useLocation();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    let postCategoryquery = '';
    const postCategorys = ['all', 'engineering', 'computer_science'];
    if ([location.pathname.split('/').pop()] == 'all') {
        postCategoryquery = postCategorys.map(postCategory => `postCategorys=${postCategory}`).join('&');
    } else {
        postCategoryquery = `postCategorys=${[location.pathname.split('/').pop()]}`;
    }

    const followers = ['Macro', 'Johnny', 'CSDOG'];
    followers.push('Engineering');
    followers.push('Computer Science');
    useEffect(() => {
        var queryString = '';
        if (search == '' | search == undefined) {
            const followersquery = followers.map(follower => `nicknames=${follower}`).join('&');
            queryString = postCategoryquery + '&' + followersquery + '&hashtags=';
        } else {
            const hashtagquery = `hashtags=${search}`;
            queryString = postCategoryquery + '&' + hashtagquery;
        }

        console.log(queryString)
        console.log('run');
        setLoading(true);

        axios
            .get(`http://localhost:8080/api/post/searchPost?${queryString}`)
            .then((response) => {
                console.log(response.data.post)
                setPosts(response.data.post);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [location, search]);





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
                    <pre className='hashtag'>{post.hashtag.map(hashtag => `#${hashtag}`).join(' ')}</pre>
                    {post.postContent !== '' && (
                        post.postContent.split('.').pop().toLowerCase() === 'mp4' ? <video width="320" height="240" controls>
                            <source src={'/uploads/' + post.postContent} type="video/mp4" />
                        </video> : <Image src={'/uploads/'+post.postContent} alt={'/uploads/'+post.postContent}/>

                    )}
                    {/* {post.postContent !== '' ? <Image src={'/uploads/'+post.postContent} alt={'/uploads/'+post.postContent}/> : null} */}


                </Card>
            ))}

        </Flex>
    )
}

export default Posts