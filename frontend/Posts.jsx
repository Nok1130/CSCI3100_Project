import { React, useEffect, useState } from 'react'
import axios from 'axios';
import './Posts.css'
import { Card, Flex, Avatar, Image, Modal, Button, Input, Select, Form } from 'antd';
import { AiOutlineHeart, AiOutlineDislike, AiOutlineWarning, AiFillHeart, AiFillDislike } from "react-icons/ai";
import { BiComment, BiRepost } from "react-icons/bi";
import { searchPost } from '../backend/controller/postController';
import ENV from '../backend/ENV.js';
import { useLocation } from 'react-router-dom';
import useStore from './UserContext.jsx';

const { Meta } = Card;

function Posts({ data }) {
    const { currentloginID, setcurrentloginID } = useStore();
    const { currentuniversity, setcurrentuniversity } = useStore();
    const { currentmajor, setcurrentmajor } = useStore();
    const { currentusername, setcurrentusername } = useStore();
    const [form] = Form.useForm();

    var search = data;
    console.log('search')
    console.log(search);
    const location = useLocation();
    const [posts, setPosts] = useState([]);
    const [reload, setReload] = useState(false);
    const [currentUserFollow, setCurrentUserFollow] = useState(['Engineering']);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [loading, setLoading] = useState(false);
    let postCategoryquery = '';
    const postCategorys = ['All', currentuniversity, currentmajor];
    const [isReportVisible, setisReportVisible] = useState(false);
    const [ReportReason,setReportReason] = useState("");
    const [reportpostID,setreportpostID] = useState(null);

    if ([location.pathname.split('/').pop()] == 'All') {
        postCategoryquery = postCategorys.map(postCategory => `postCategorys=${postCategory}`).join('&');
    } else {
        postCategoryquery = `postCategorys=${[location.pathname.split('/').pop()]}`;
    }
    const showComments = (post) => {
        setCurrentPost(post);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const { TextArea } = Input;
    const onFinish = async (values) => {
        setReload(false);
        console.log(values);
        console.log(JSON.stringify({
            username: values.username,
            postID: currentPost.postID,
            commentContent: values.commentContent
        }));
        try {
            const response = await fetch('http://localhost:8080/api/post/createComment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: values.username,
                    postID: currentPost.postID,
                    commentContent: values.commentContent
                })

            });

            console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

        } catch (error) {
            console.error('Error:', error);
        }
        form.resetFields();
        setReload(true);
        setIsModalVisible(false);
        

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const getUserFollow = async () => {
        
        try {
            setLoading(true);
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
                console.log('datausername' + profileData.user.username);
                setLoading(false);
                return profileData.user.username;
            }));
            console.log('username' + usernames);
            setCurrentUserFollow(usernames);
            console.log("followname" + currentUserFollow);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getUserFollow();
    }, [])

    useEffect(() => {
        console.log('currentFollow' + currentUserFollow)
        var queryString = '';
        var following = [currentuniversity, currentmajor]
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
        console.log('like' + inputpostID)
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
        console.log('like' + inputpostID)
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
        console.log('like' + inputpostID)
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
        console.log('like' + inputpostID)
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

    const repost = async (inputpostID) => {
        console.log('repost' + JSON.stringify({
            repostUserID: currentloginID,
            repostNickname: currentusername,
            postID: inputpostID}))
        setReload(false);
        try {
            const response = await fetch('http://localhost:8080/api/post/repost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    repostUserID: currentloginID,
                    repostNickname: currentusername,
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


    const reportPost =  (postID) => {
        setreportpostID(postID);
        setisReportVisible(true);
        console.log("reportPost");
    }

    const onReportSubmit = async () => {
        setisReportVisible(false);
        console.log(ReportReason);
        const response = await fetch('http://localhost:8080/api/post/reportPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: currentloginID,
                postID: reportpostID,
                reportReason: ReportReason
            })

        });

        console.log(response.ok)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
    }
    return (
        <Flex vertical className='scroll' style={{ height: '90vh' }}>

            {posts.map((post, index) => (
                <Card
                    key={post.postID}
                    className='postcard'
                    // loading={loading&&!reload}
                    actions={[
                        post.like.includes(currentloginID) ? <div><AiFillHeart key='unlike' color='red' onClick={() => unlikepost(post.postID)} /><p className='count'>{post.like.length}</p></div> : <div><AiOutlineHeart key='like' color='red' onClick={() => likepost(post.postID)} /><p className='count'>{post.like.length}</p></div>,
                        <BiComment key="comment" color='blue' onClick={() => showComments(post)} />,
                        post.dislike.includes(currentloginID) ? <div><AiFillDislike key="dislike" color='black' onClick={() => undislikepost(post.postID)} /><p className='count'>{post.dislike.length}</p></div> : <div><AiOutlineDislike key="dislike" color='black' onClick={() => dislikepost(post.postID)} /><p className='count'>{post.like.length}</p></div>,
                        <BiRepost key="repost" color='green' onClick={() => repost(post.postID)} />,
                        <AiOutlineWarning key="report" color='black' onClick={() => reportPost(post.postID)}/>,
                    ]}
                >
                
                    <Meta
                        avatar={<Avatar src={getAvater(post.nickname)} />}
                        title={post.nickname}

                    />
                     {post.isRepost ? <Flex><pre>Orginally posted by </pre><b style={{alignSelf: 'center'}}>{post.originalAuthor}</b></Flex> : null }
                    <h3 className='title'>{post.postTitle}</h3>
                    <pre className='content'>{post.postText}
                    </pre>
                    <pre className='hashtag'>{post.hashtag.map(hashtag => `#${hashtag}`).join(' ')}</pre>
                    {post.postContent !== '' && (
                        post.postContent.split('.').pop().toLowerCase() === 'mp4' ? <video width="320" height="240" controls>
                            <source src={'/public/uploads/' + post.postContent} type="video/mp4" />
                        </video> : <Image src={'/public/uploads/' + post.postContent} alt={'/public/uploads/' + post.postContent} />

                    )}
                   


                </Card>

            ))}
            <Modal title="Comments" open={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}
                styles={{ body: { overflowY: 'auto', maxHeight: '100vh' }}}>
                {currentPost && Object.entries(currentPost.comments).map(([username, comment], index) => (
                    <Card key={index} classNames='comments' style={{justifySelf: 'center'}}>
                        <Meta
                            avatar={<Avatar src={getAvater(username)} />}
                            title={username}
                        />
                        <pre>{comment}</pre>

                    </Card>
                ))}
                <Form name="basic"
                    form={form}
                    style={{
                        width: '100%',
                        background: 'none',
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">
                    <Form.Item name="username" rules={[{ required: true, message: 'Please select an identity!' }]}>
                        <Select placeholder="Select post identity">
                            <Option value={currentusername}>{currentusername}</Option>
                            <Option value={currentuniversity}>{currentuniversity}</Option>
                            <Option value={currentmajor}>{currentmajor}</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="commentContent" rules={[{ required: true, message: 'Please input your comment!' }]}>
                        <TextArea style={{background: 'none'}} placeholder="Input your comment" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            
             
            <Modal
            title="Report Post"
            centered
            open={isReportVisible}
            onOk={onReportSubmit}
            okText='Report'
            onCancel={() => setisReportVisible(false)}
            width={1000}
            >
            <Input.TextArea
                    onChange={(e) => setReportReason(e.target.value)}
                    placeholder="Input your report reason"
                    style={{ backgroundColor: 'white', height: '500px' }}
                    />
          </Modal>
        </Flex>
    )
}

export default Posts