import React, { useState, useContext, useEffect } from 'react'
import UserContext from './UserContext.jsx';
import { LikeOutlined, FireFilled, DownloadOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Descriptions, Row, Col, Statistic, Button, Tabs, Modal, Form, Input, Result } from "antd";
import { Link, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import EditProfile from './EditProfile.jsx';
import ENV from '../backend/ENV.js';
import path from 'path';
import useStore from './UserContext.jsx';

const { Meta } = Card;
const { TextArea } = Input;

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUserProfile, setCurrentUserProfile] = useState(null);
  const [currentUserFollow, setCurrentUserFollow] = useState({
    followerUsernames: [],
    followingUsernames: [],
    followerCount: 0,
    followingCount: 0
  });

  const [userPosts, setUserPosts] = useState();
  
  const [newPersonalProfile, setNewPersonalProfile] = useState({
    username: '',
    oldPassword: '',
    newPassword: '',
    personalBio: '',
  })
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

  const { currentloginID, setcurrentloginID } = useStore();

  const getUserProfile = async () => {
    console.log("Profile ID :", currentloginID);
    await fetch('http://localhost:8080/api/user/getUserProfileFromUserID', {
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
        setCurrentUserProfile(data.user);
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
        userID: currentloginID
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCurrentUserFollow({
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

  const getAllPostOfUser = async () => {
    console.log("Get all post of user");
    await fetch('http://localhost:8080/api/post/getAllPostOfUser', {
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
        setUserPosts(data.post);
        console.log("Userposts: ", userPosts);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const follow = async () => {
    console.log("Follow button pressed");
  }

  const handleEditProfile = () => {
    console.log("Edit Profile pressed");
    console.log(newPersonalProfile);

    fetch('http://localhost:8080/api/user/updateUserProfile', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: currentloginID,
        newUsername: newPersonalProfile.username,
        oldPassword: newPersonalProfile.oldPassword,
        newPassword: newPersonalProfile.newPassword,
        personalBio: newPersonalProfile.personalBio
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    getUserProfile();
    getUserFollow();
    getAllPostOfUser();
  }, [currentloginID]); // Depend on currentloginID

  console.log("Profile :", currentUserProfile);
  console.log("Profile ID :", currentloginID);
  console.log("Profile Follow :", currentUserFollow);

  const user = [
    {
      children: <h1>{currentUserProfile?.username}</h1>,
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
      children: <h2>{currentUserProfile?.personalBio}</h2>,
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
          <th className="large">USERNAME</th>
          <th className="large">CONTENT</th>
        </tr>
        {userPosts?.map((key, index) => {
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
        <div>
          <Avatar></Avatar>
        </div>
    },
  ];

  const [form] = Form.useForm();

  return (
    <div>
      <>
        <Button type="primary" onClick={showModal}>Edit Personal Profile</Button>
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
      </>
      <Flex vertical className='scroll' style={{ height: '90vh' }}>
      
      <Descriptions layout="vertical" column={1} items={user} />
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Follower" value={currentUserFollow?.followerCount} prefix={<LikeOutlined />} />
        </Col>
        <Col span={12}>
          <Statistic title="Following" value={currentUserFollow?.followingCount} prefix={<FireFilled />}/>
        </Col>
        {/* <Col>
          <Button type='primary' onClick={() => follow()}>Follow!</Button>
        </Col> */}
      </Row>
      <Tabs defaultActiveKey="1" items={post}/>
      </Flex>


    </div>
  )
}

export default Profile