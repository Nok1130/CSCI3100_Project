import React, { useState, useContext, useEffect } from 'react'
import UserContext from './UserContext.jsx';


function Profile() {
  const [currentUserProfile, setCurrentUserProfile] = useState(null);
  const [currentUserFollow, setCurrentUserFollow] = useState(null);

  const { currentloginID, setCurrentloginID } = useContext(UserContext);

  const getUserProfile = async () => {
    console.log("Profile ID :", currentloginID);
    await fetch('http://localhost:5001/api/user/getUserProfileFromUserID', {
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
    await fetch ('http://localhost:5001/api/follower/getAllFollowerAndFollowing?userID=${currentloginID}', {
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
        setCurrentUserFollow(data.followerUsernames);
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
  console.log("Profile Follow :", currentUserFollow?.followList);
  return (
    <div>
      <h1>Profile</h1>
      <h2>Username: {currentUserProfile?.username}</h2>
      <h2>Personal Bio: {currentUserProfile?.personalBio}</h2>
      <h2>Personal Icon: {currentUserProfile?.personalIcon}</h2>
    </div>
  )
}

export default Profile