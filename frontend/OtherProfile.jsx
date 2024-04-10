import React, { useState, useContext, useEffect } from 'react'
import { LikeOutlined, FireFilled, DownloadOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Descriptions, Row, Col, Statistic, Button, Tabs, Modal, Form, Input, Result, Table } from "antd";
import { Link, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import EditProfile from './EditProfile.jsx';
import ENV from '../backend/ENV.js';
import path from 'path';
import useStore from './UserContext.jsx';

const { TextArea } = Input;

const OtherProfile = () => {
  const { currentloginID, setcurrentloginID } = useStore();
  const location = useLocation();
  const viewingUserID = "448f40"
  // const viewingUserID = "2d1180"
  // const userID = location.pathname.split('/').pop();

  const [viewingUserProfile, setViewingUserProfile] = useState(null);
  const [viewingUserFollow, setViewingUserFollow] = useState({
    followerUsernames: [],
    followingUsernames: [],
    followerCount: 0,
    followingCount: 0
  });
  const [viewingUserPosts, setViewingUserPosts] = useState();
  const [followingViewingUser, setFollowingViewingUser] = useState(false);
  const [viewingUserPrivacy, setViewingUserPrivacy] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleConfirm = () => {
    setIsModalOpen(false);
    handleEditProfile();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getUserProfile = async () => {
    console.log("Viewing Profile ID :", viewingUserID);
    await fetch('http://localhost:8080/api/user/getUserProfileFromUserID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: viewingUserID
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setViewingUserProfile(data.user);
        console.log(viewingUserProfile)
        setViewingUserPrivacy(data.user.isPrivate);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const getUserFollow = async () => {
    await fetch ('http://localhost:8080/api/follower/getAllFollowerAndFollowing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: viewingUserID
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setViewingUserFollow({
          followerUsernames: data.followerUsernames,
          followingUsernames: data.followingUsernames,
          followerCount: data.followerCount,
          followingCount: data.followingCount
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    getUserProfile();
    getUserFollow();
    getAllPostOfUser();
  }, [viewingUserID]); // Depend on currentloginID

  const getAllPostOfUser = async () => {
    console.log("Get all post of user");
    await fetch('http://localhost:8080/api/post/getAllPostOfUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: viewingUserID
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setViewingUserPosts(data.post);
        console.log("Userposts: ", viewingUserPosts);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const checkIfFollow = async () => {
    await fetch('http://localhost:8080/api/follower/checkFollow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        follower: currentloginID,
        following: viewingUserID
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Follow status:", data);
        if (data.followStatus) {
          setFollowingViewingUser(true);
        }
        console.log("Following:", followingViewingUser);
      })
      .catch(error => {
        console.error(error);
      });
  }
  useEffect(() => {
    checkIfFollow();
  }, []);

  const follow = async () => {
    console.log("Follow button pressed");
    await fetch('http://localhost:8080/api/follower/followUserRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        follower: currentloginID,
        following: viewingUserID
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
    setFollowingViewingUser(!followingViewingUser);
  }

  const user = [
    {
      children: <h1>{viewingUserProfile?.username}</h1>,
    },
    {
      children: 
      <Avatar
        src="https://api.dicebear.com/8.x/croodles-neutral/svg?flip=false"     
        size={{
          xs: 24,
          sm: 32,
          md: 40,
          lg: 64,
          xl: 80,
          xxl: 100,
        }}
      />,
    },
    {
      children: <h2>{viewingUserProfile?.personalBio}</h2>,
    }

  ];

  const post = [
    {
      key: '1',
      label: 'Post',
      children: 
      <table>
        <tr>
          <th className="large">POSTID</th>
          <th className="large">TITLE</th>
          <th className="large">CONTENT</th>
        </tr>
        {viewingUserPosts?.map((key, index) => {
          return (
            <tr>
              <td>{key.postID}</td>
              <td>{key.postTitle}</td>
              <td>{key.postText}</td>
            </tr>
          )
        }
        )}
      </table>

    },
    {
      key: '2',
      label: 'Repost',
      children: 
        <table>
          <tr>
            <th className='large'>POSTID</th>
            <th className='large'>ORIGINAL AUTHOR</th>
            <th className='large'>TITLE</th>
            <th className='large'>CONTENT</th>
          </tr>
          {viewingUserPosts?.map((key, index) => {
            if(key.isRepost){
              return (
                <tr>
                  <td>{key.postID}</td>
                  <td>{key.originalAuthor}</td>
                  <td>{key.postTitle}</td>
                  <td>{key.postText}</td>
                </tr>
              )    
            }
          }
          )}
        </table>

    },
  ];

  return (
    <div>
    <Flex vertical className='scroll' style={{ height: '90vh' }}>
      {/* <>
        <Button type="primary" onClick={showModal} shape='rounded'>Edit Personal Profile</Button>
        <Modal title="Edit Personal Profile" open={isModalOpen} onOk={handleConfirm} onCancel={handleCancel} footer={[
          <Button key="submit" type="primary" onClick={handleConfirm}>Confirm</Button>,
          <Button key="back" type="primary" onClick={handleCancel}>Cancel</Button>,
          ]}>
          <Form
            layout={"horizontal"}
            form={form}
            style={{
            maxWidth: 600,
            }}
          >
            <Form.Item label="New Username">
              <Input placeholder="New Username" onChange={(e) => setNewPersonalProfile({ ...newPersonalProfile, username: e.target.value })}/>
            </Form.Item>
            <Form.Item label="Old password">
              <Input placeholder="Old password" onChange={(e) => setNewPersonalProfile({ ...newPersonalProfile, oldPassword: e.target.value })} />
            </Form.Item>
            <Form.Item label="New password">
              <Input placeholder="New password" onChange={(e) => setNewPersonalProfile({ ...newPersonalProfile, newPassword: e.target.value })} />
            </Form.Item>
            <Form.Item label="New Personal Bio">
              <TextArea rows={2}  placeholder="New Personal Bio" onChange={(e) => setNewPersonalProfile({ ...newPersonalProfile, personalBio: e.target.value })} />
            </Form.Item>
          </Form>
        </Modal>
      </> */}

      <Descriptions layout="vertical" column={1} items={user} />
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Follower" value={viewingUserFollow?.followerCount} prefix={<LikeOutlined />} />
        </Col>
        <Col span={12}>
          <Statistic title="Following" value={viewingUserFollow?.followingCount} prefix={<FireFilled />}/>
        </Col>
        <Col>
          {!followingViewingUser ? <Button type='primary' onClick={() => follow()}>Follow!</Button> : <Button type='primary' onClick={() => follow()}>You are following this user!</Button>}
        </Col>
      </Row>
      {viewingUserPrivacy ? <h1>This is an private account!</h1> : <Tabs defaultActiveKey="1" items={post}/>}

      </Flex>


    </div>
  )
}

export default OtherProfile