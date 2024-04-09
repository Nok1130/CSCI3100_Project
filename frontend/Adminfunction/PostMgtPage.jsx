import React from "react";
import SearchBar from "./SeachBar";
import { PostInfo } from "./PostInfo"
import {Button} from 'antd';
import { SuspendBtn } from "./SuspendBtn";
import {useState,useEffect} from 'react';
import EditPost from "./EditPost";
import Report from './Report';
import './Admin.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


function PostMgtPage(){
    const [results,setResults] = useState(null);
    const [EditState,setEditState] = useState(false);
    const [editIndex,setEditIndex] = useState(null);
    const [editPost,setEditPost] = useState("content");
    const [dataset,setDataSet] = useState(null);
    const [showReportState,setShowReportState] = useState(false);
    const [reportIndex,setReportIndex] = useState(0);
    const [reportData,setReportData] = useState([]);
    useEffect(()=>{
        Aos.init()
    },[])
    useEffect(() => {
        const getPost = async () => {
       
              const response = await fetch('http://localhost:8080/api/post/getAllPost');
              const data = await response.json();
              console.log(data.post);
    
                setDataSet(data.post);
                setResults(data.post);
          };
        getPost();
      }, []);
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
     const showReport = async (postID) =>{
       
        const response = await fetch('http://localhost:8080/api/admin/getPostReport',{
             method:'POST',
             headers :{
                'Content-Type':'application/json'
             },
             body: JSON.stringify({
                 postID:postID
             })
       })

       const data = await response.json();
       console.log(data);
       setReportData(data.reports);
       setShowReportState(true);
     }

     const handleEdit = (targetIndex,postText) =>{
        EditState? setEditState(false): setEditState(true);
        setEditIndex(targetIndex);
        console.log("edit user");
        setEditPost(postText);
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
          <div className="mainPostmgt" >
           <SearchBar children="Search Post" getResult={getResults} data={dataset}/>
         <table>              
               <tr data-aos = "fade-left">
                   <th className="large">POSTID</th>
                   <th className="large" >USERNAME</th>
                   <th className="large">CONTENT</th>
                   <th className="large">ACTIONS</th>
               </tr>
               <tbody data-aos = "fade-left">
               {results?.map((key,index) =>{
                return (
                <tr >
                    <td className="username" key={key.postID}>{key.postID}</td>
                    <td className="username">{key.username}</td>
                    <td className="overflow-hidden" style={{width:'10px'}}>{key.postText}</td>
                    <td style={{display:'flex', justifyContent:'space-evenly'}}>
                        <Button type="primary" 
                        className="editBtn"
                        onClick={() => handleEdit(index,key.postText)}>Edit</Button>

                        <SuspendBtn SuspendState={key.isSuspend} onClick={() => handleSuspend(index)} className='suspendBTN'/>

                        <Button 
                        onClick={()=> showReport(key.postID)} className="reportBtn">
                        View Report
                        </Button>

                    </td>
                </tr>
                        );         
                    })}
                    </tbody>
           </table>
        
           
           {
               EditState && <EditPost onSumbit={onSubmit} close={() => setEditState(false)} content={editPost}/>
            }
            
          {showReportState && <Report report={reportData} close={() => setShowReportState(false)}/>}

            
        

          
        </div>
        </div>
        );
}
 
export default PostMgtPage;