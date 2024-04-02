import React from "react";
import SearchBar from "./SeachBar";

function PostMgtPage(){
    return (
    <div className="PostMgt">
       <div className="mainPostmgt">
           
           <SearchBar/>
           <div className="postHeader">
               <div id="postid">POSTID</div>
               <div id="usernameheader">USERNAME</div>
               <div id="emailheader">CONTENT</div>
               <div id="actionheader">ACTIONS</div>
           </div>
           <hr/>
        

          
       </div>
        </div>
        );
}
 
export default PostMgtPage;