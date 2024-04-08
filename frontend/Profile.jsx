import React, { useState, useContext } from 'react'
import UserContext from './UserContext.jsx';


function Profile() {
  const [currentUserProfile, setCurrntUserProfile] = useState(null);

  const { currentloginID, setcurrentloginID } = useContext(UserContext);

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
        setCurrntUserProfile(data.user);
      })
      .catch(error => {
        console.error(error);
      });
  
  }

  console.log("Profile :", currentUserProfile);
  console.log("Profile ID :", currentloginID);
  return (
    <div>Profile</div>
  )
}

export default Profile