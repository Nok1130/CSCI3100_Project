import React from "react";
import SearchBar from "./SeachBar";
import { UserInfo } from "./UserInfo";

function UserMgtPage () {
    
    return ( 
    <div className='usermgt'>
        <div className="mainUsermgt">
           
            <SearchBar/>
            <div className="userHeader">
                <div id="usernameheader">USERNAME</div>
                <div id="emailheader">EMAIL</div>
                <div id="actionheader">ACTIONS</div>
            </div>
            <hr/>
            <div className="userInfo">
            {
                
                UserInfo.map((key,val) =>{
                   return <div className="UserRow">
                        <div className="username">{key.username}</div>
                        <div className="email">{key.email}</div>
                        
                        <button id="editBtn">Edit</button>
                        <button id="suspendBtn">Suspend</button>
                        
                    </div>
                    })     
            }
            </div>

           
        </div>
    </div> );
}
 
export default UserMgtPage;