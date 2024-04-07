import React from "react";
import SearchBar from "./SeachBar";
import { PostInfo } from "./PostInfo"
import {Button} from 'antd';
import { SuspendBtn } from "./SuspendBtn";
import {useState} from 'react';
import EditPost from "./EditPost";
import Report from './Report';
import './Admin.css';

function PostMgtPage(){
    const [results,setResults] = useState(PostInfo.filter(Boolean));
    const [EditState,setEditState] = useState(false);
    const [editIndex,setEditIndex] = useState(null);
    const [editPost,setEditPost] = useState("content");
    const [dataset,setDataSet] = useState(PostInfo);
    const [showReportState,setShowReportState] = useState(false);
    const [reportIndex,setReportIndex] = useState(0);

     const getResults = (result) =>{
        setResults(result);
     }
     const onSubmit = (post) =>{
        console.log(post);
         results.map((key,index) => {
             if(index === editIndex){
                 key.content = post;
                 return key;
             }else{screenLeft
                return key;
             }
         })
     }
     const showReport = (targetIndex) =>{
        setShowReportState(!showReportState);
         setReportIndex(targetIndex);
     }

     const handleEdit = (targetIndex) =>{
        EditState? setEditState(false): setEditState(true);
        setEditIndex(targetIndex);
        console.log("edit user");
        const post = results[targetIndex].content;
        setEditPost(post);
    }

     const handleSuspend = (targetIndex) =>{
     
       const change = results.map((key,index) => {
           if(index === targetIndex){
              key.isSuspend = (!key.isSuspend);
              return key;
           }else{
            return key;
           }
       })
       setResults(change);
    
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
               {results?.map((key,index) =>{
                return (
                <tr>
                    <td className="username" key={key.postId}>{key.postId}</td>
                    <td className="username">{key.username}</td>
                    <td className="contentContainer">{key.content}</td>
                    <td className="btn">
                        <Button type="primary" 
                        className="editBtn"
                        onClick={() => handleEdit(index)}>Edit</Button>

                        <SuspendBtn SuspendState={key.isSuspend} onClick={() => handleSuspend(index)}/>

                        <Button 
                        onClick={()=> showReport(index)}>
                        View Report
                        </Button>

                    </td>
                </tr>
                        );         
                    })}
           </table>
        
           
           {
               EditState && <EditPost onSumbit={onSubmit} close={() => setEditState(false)} content={editPost}/>
            }
            
          {showReportState && <Report report={results[reportIndex]?.report} close={() => setShowReportState(false)}/>}

            
        

          
        </div>
        </div>
        );
}
 
export default PostMgtPage;