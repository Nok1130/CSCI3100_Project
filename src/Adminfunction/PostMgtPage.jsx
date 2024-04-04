import React from "react";
import SearchBar from "./SeachBar";
import { PostInfo } from "./PostInfo"
import {Button} from 'antd';

import {useState} from 'react';
PostInfo.filter(Boolean)


function PostMgtPage(){
    const [results,setResults] = useState(PostInfo);
   
     const getResults = (result) =>{
        setResults(result);
     }
     
    return (
    <div className="PostMgt">
       <div className="mainPostmgt">
           <SearchBar children="Search Post" getResult={getResults}/>
         <table>              
               <tr>
                   <th className="large">POSTID</th>
                   <th className="large" >USERNAME</th>
                   <th className="large">CONTENT</th>
                   <th className="large">ACTIONS</th>
               </tr>
               {results?.map((key,val) =>{
                   return (
                    <tr>
                        <td className="username" key={key.postId}>{key.postId}</td>
                        <td className="username">{key.username}</td>
                        <td className="username">{key.content}</td>
                        <td className="btn"><Button type="primary" className="editBtn">Edit</Button><Button type="primary" className="suspendBtn" danger>Suspend</Button><Button>View Report</Button></td>
                    </tr>
                         );         
                    })}
           </table>
        
           
           
        
        

          
        </div>
        </div>
        );
}
 
export default PostMgtPage;