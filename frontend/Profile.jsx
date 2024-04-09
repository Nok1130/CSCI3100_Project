import React, { useState, useContext, useEffect } from 'react'
import UserContext from './UserContext.jsx';
import { LikeOutlined, FireFilled, DownloadOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Descriptions, Row, Col, Statistic, Button, Tabs } from "antd";
import { Link, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import EditProfile from './EditProfile.jsx';
import ENV from '../backend/ENV.js';
import path from 'path';
import useStore from './UserContext.jsx';

const { Meta } = Card;


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

  // fetch(`http://localhost:3000/api/user?userID=${currentloginID}`)
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error(error));

  useEffect(() => {
    getUserProfile();
    getUserFollow();
  }, [currentloginID]); // Depend on currentloginID

  // useEffect(() => {
  // }, [currentloginID]); // Depend on currentloginID

  console.log("Profile :", currentUserProfile);
  console.log("Profile ID :", currentloginID);
  console.log("Profile Follow :", currentUserFollow);

  const items = [
    {
      label: "Username",
      children: <h2>{currentUserProfile?.username}</h2>,
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
      label: "Personal Bio",
      children: <h3>{currentUserProfile?.personalBio}</h3>,
    }

  ];

  const post = [
    {
      key: '1',
      label: 'Post',
      children: <div>Hello</div>
    },
    {
      key: '2',
      label: 'Repost',
      children: <div>Helloooo</div>,
    },
  ];

  return (
    <div>
      {/* <Avatar></Avatar>
      <Card title="Profile"></Card>
      <h2>Username: {currentUserProfile?.username}</h2>
      <h2>Personal Bio: {currentUserProfile?.personalBio}</h2>
      <h2>Personal Icon: {currentUserProfile?.personalIcon}</h2>
      <h2>Follower Count: {currentUserFollow?.followerCount}</h2>
      <h2>Following Count: {currentUserFollow?.followingCount}</h2>
      <h2>Follower Usernames: {currentUserFollow?.followerUsernames}</h2>
      <h2>Following Usernames: {currentUserFollow?.followingUsernames}</h2> */}

      <Flex vertical className='scroll' style={{ height: '90vh' }}>
      <Routes>
        <Route path="/home/profile" element={<Profile />}>
          <Route path="editprofile" element={<EditProfile />} />
        </Route>
      </Routes>
      <Link to="/home/profile/editprofile">
        <Button shape='round' icon={<SettingOutlined />} size="small" ></Button>
      </Link>
      
      <Descriptions layout="vertical" column={1} items={items} />
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Follower" value={currentUserFollow?.followerCount} prefix={<LikeOutlined />} />
        </Col>
        <Col span={12}>
          <Statistic title="Following" value={currentUserFollow?.followingCount} prefix={<FireFilled />}/>
        </Col>
      </Row>
      <Tabs defaultActiveKey="1" items={post}/>
      </Flex>


    </div>
  )
}

export default Profile