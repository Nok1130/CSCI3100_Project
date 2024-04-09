import { React, useEffect, useState } from 'react'
import axios from 'axios';
import './Posts.css'
import { Card, Flex, Avatar, Image } from 'antd';
import { AiOutlineHeart, AiOutlineDislike, AiOutlineWarning, AiFillHeart, AiFillDislike } from "react-icons/ai";
import { BiComment, BiRepost } from "react-icons/bi";
import { searchPost } from '../backend/controller/postController';
import ENV from '../backend/ENV.js';
import { useLocation } from 'react-router-dom';
import useStore from './UserContext.jsx';

const { Meta } = Card;

function Posts({ data }) {
    const { currentloginID, setcurrentloginID } = useStore();
    var search = data;
    console.log('search')
    console.log(search);
    const location = useLocation();
    const [posts, setPosts] = useState([]);
    const [reload, setReload] = useState(false);
    const [currentUserFollow, setCurrentUserFollow] = useState(['Engineering']);
    const usermajor = 'computer_science';
    const userfaculty = 'engineering';
    const [likedPost, setLikedPost] = useState(false);
    const [loading, setLoading] = useState(false);
    let postCategoryquery = '';
    const postCategorys = ['all', 'engineering', 'computer_science'];
    if ([location.pathname.split('/').pop()] == 'all') {
        postCategoryquery = postCategorys.map(postCategory => `postCategorys=${postCategory}`).join('&');
    } else {
        postCategoryquery = `postCategorys=${[location.pathname.split('/').pop()]}`;
    }

    const getUserFollow = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/follower/getAllFollowerAndFollowing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userID: currentloginID
                })
            });
            const data = await response.json();
            const userIds = data.followingUsernames;
            console.log(userIds);
    
            // Fetch usernames for each user ID
            const usernames = await Promise.all(userIds.map(async (id) => {
                console.log({
                    userID: id
                });
                const response = await fetch('http://localhost:8080/api/user/getUserProfileFromUserID', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userID: id
                    })
                });
                const profileData = await response.json();
                console.log('datausername'+profileData.user.username);
                return profileData.user.username;
            }));
            console.log('username'+usernames);
            setCurrentUserFollow(usernames);
            console.log("followname"+currentUserFollow);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getUserFollow();
    }, [])

    useEffect(() => {
        console.log('currentFollow'+ currentUserFollow)
        var queryString = '';
        var following = [userfaculty, usermajor]
        if (search == '' | search == undefined) {
            const followersquery = currentUserFollow.concat(following).map(follower => `nicknames=${follower}`).join('&');
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
    }, [location, search, reload]);

    function getAvater(inputusername) {
        var personalIcon = 'https://api.dicebear.com/7.x/miniavs/svg?seed=8';
        // console.log(inputusername + "---------------------------------")
        // fetch('http://localhost:8080/api/user/getUserProfileFromUsername', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username: inputusername
        //     })
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(inputusername + 'data: ' + data.user.personalIcon);
        //         if (data.user.personalIcon === "") {
        //             personalIcon = 'https://api.dicebear.com/7.x/miniavs/svg?seed=8';
        //         } else {
        //             personalIcon = ('/uploads/' + data.user.personalIcon);
        //         }
        //         console.log(inputusername + 'icon:' + personalIcon)




        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //         personalIcon = 'https://api.dicebear.com/7.x/miniavs/svg?seed=8';
        //     });

        // console.log(inputusername + 'icon:' + personalIcon)
        return personalIcon

    }


    const likepost = async (inputpostID) => {
        console.log('like'+inputpostID)
        setReload(false);
        try {
            const response = await fetch('http://localhost:8080/api/post/likePost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userID: currentloginID,
                    postID: inputpostID
                })

            });
            
            console.log(response.ok)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
        } catch (error) {
            console.error('Error:', error);
        }
        setReload(true);
    };

    const unlikepost = async (inputpostID) => {
        console.log('like'+inputpostID)
        setReload(false);
        try {
            const response = await fetch('http://localhost:8080/api/post/unlikePost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userID: currentloginID,
                    postID: inputpostID
                })

            });
            
            console.log(response.ok)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
        } catch (error) {
            console.error('Error:', error);
        }
        setReload(true);
    };

    const dislikepost = async (inputpostID) => {
        console.log('like'+inputpostID)
        setReload(false);
        try {
            const response = await fetch('http://localhost:8080/api/post/dislikePost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userID: currentloginID,
                    postID: inputpostID
                })

            });
            
            console.log(response.ok)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
        } catch (error) {
            console.error('Error:', error);
        }
        setReload(true);
    };

    const undislikepost = async (inputpostID) => {
        console.log('like'+inputpostID)
        setReload(false);
        try {
            const response = await fetch('http://localhost:8080/api/post/undislikePost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userID: currentloginID,
                    postID: inputpostID
                })

            });
            
            console.log(response.ok)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
        } catch (error) {
            console.error('Error:', error);
        }
        setReload(true);
    };



    return (
        <Flex vertical className='scroll' style={{ height: '90vh' }}>

            {posts.map((post, index) => (
                <Card
                    key={post.postID}
                    className='postcard'
                    actions={[
                        post.like.includes(currentloginID) ? <AiFillHeart key='unlike' color='red' onClick={()=>unlikepost(post.postID)} /> : <AiOutlineHeart key='like' color='red' onClick={()=>likepost(post.postID)}/>,
                        <BiComment key="comment" color='blue' />,
                        post.dislike.includes(currentloginID) ? <AiFillDislike key="dislike" color='black' onClick={()=>undislikepost(post.postID)}/> : <AiOutlineDislike key="dislike" color='black' onClick={()=>dislikepost(post.postID)}/>,
                        <BiRepost key="repost" color='green' />,
                        <AiOutlineWarning key="report" color='black' />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={getAvater(post.nickname)} />}
                        title={post.nickname}

                    />
                    <h3 className='title'>{post.postTitle}</h3>
                    <pre className='content'>{post.postText}
                    </pre>
                    <pre className='hashtag'>{post.hashtag.map(hashtag => `#${hashtag}`).join(' ')}</pre>
                    {post.postContent !== '' && (
                        post.postContent.split('.').pop().toLowerCase() === 'mp4' ? <video width="320" height="240" controls>
                            <source src={'/uploads/' + post.postContent} type="video/mp4" />
                        </video> : <Image src={'/uploads/' + post.postContent} alt={'/uploads/' + post.postContent} />

                    )}
                    {/* {post.postContent !== '' ? <Image src={'/uploads/'+post.postContent} alt={'/uploads/'+post.postContent}/> : null} */}


                </Card>
            ))}

        </Flex>
    )
}

export default Posts