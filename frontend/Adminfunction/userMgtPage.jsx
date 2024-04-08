import React from "react";
import SearchBar from "./SeachBar";
import { UserInfo } from "./UserInfo";
import {Button} from 'antd';
import {useState,useEffect} from 'react';
import AddUser from "./AddUser";
import {FloatButton} from 'antd';
import {FaPlus} from 'react-icons/fa6';
import { SuspendBtn } from "./SuspendBtn";
import Edit from "./Edit";
import "./Admin.css";
// import {getAllUser} from "../backend/controller/adminController";
// import UserModel from "../model/User.js";

function UserMgtPage () {
    const [results,setResults] = useState(null);//store search result for display
    const [dataset,setDataSet] = useState(null); //store orginal dataset 
    const [SuspendBtnText,setSuspendBtnText] = useState('Suspend'); // handle form to add new row
    const [AddButtonState,setAddButtonState] = useState(false);
    const [EditState,setEditState] = useState(false);
    const [editIndex,setEditIndex] = useState(0);
  


    useEffect(() => {

        const getUser = async () => {
          try {
            const response = await fetch('http://localhost:5001/api/admin/getAllUser', {
              method: 'GET',
            })
            // const data = await response.json();
            // console.log(data); // Log the fetched data
            .then(response => response.json())
            .then(data => {

            console.log(data);
              //console.log(data.users);
              setDataSet(data.users);
              setResults(data.users);
          })
          } catch (error) {
            console.log("error");
            // Handle any errors that occur during the fetch request
          }
        };
      
        getUser();
      }, []);


    // useEffect(() => {
    //     return (getUser()
    //             );
    // });
//  const getUser = async () =>{

//     await null
//     // console.log("data");
//         // const response = await fetch('/api/admin/getAllUser2',{
//         //       method: 'GET'
//         //   })
//         //   .then(response => response.json()).then(data => {
//         //     console.log(response);
//         //     console.log(data);
//         //       //console.log(data.users);
//         //       //setDataSet(data.users);
//         //       //setResults(data.users);
//         //   })
    
//         // const data = await response.json();
//         // console.log(data);
   
//  };


 const handleSubmit = (newRow) =>{
     setDataSet([...dataset,newRow]);
     setResults([...dataset,newRow]);
     
    }
    const handleEdit = (targetIndex) =>{
        EditState? setEditState(false): setEditState(true);
        setEditIndex(targetIndex);
        console.log("edit user");
    }
    const handleEditSumbit = (newRow) =>{
            console.log(newRow);
         const change = results.map((key,index) => {
                if(index === editIndex){
                    if(newRow.username !== ""){
                        key.username = newRow.username;
                    }
                    if(newRow.email !== ""){
                        key.email = newRow.email;
                    }
                    return key;
                }else{
                    return key;
                }
            })
        
        // console.log(change);
        setResults(change);
        setDataSet(change);
    }

    const getResults = (result) =>{
       setResults(result);
        }

 const handleAdd = () => {
    AddButtonState ? setAddButtonState(false) : setAddButtonState(true);
    console.log("add user");
}

 const handleSuspend = (targetIndex) =>{
    console.log("entered");
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
    <div className='usermgt'>
        <div className="mainUsermgt">
            <SearchBar children='Search User' getResult={getResults} data={dataset}/>
            <table>
               
                <tr>
                    <th id="usernameheader">USERNAME</th>
                    <th id="emailheader">EMAIL</th>
                    <th id="actionheader">ACTIONS</th>
                </tr>
                {results?.map((key,index) =>
                {
                   return (
                    <tr className="userRow" key={index}>
                        <td className="username">{key.username}</td>
                        <td className="email">{key.email}</td>
                        <td className="btn">
                            <Button type="primary" 
                                    className="editBtn"
                                    onClick={() => handleEdit(index)}
                                    >
                                    Edit
                            </Button>

                            <SuspendBtn SuspendState={key.isSuspend} onClick={() => handleSuspend(index)}/>
                        </td>
                    </tr>  
                        );   
                }
                )}
            </table>
            <FloatButton icon={<FaPlus />} onClick={handleAdd}/>
            {
                AddButtonState && <AddUser onSubmit={handleSubmit} close={() => setAddButtonState(false)}/>
            }
            {
                 EditState && <Edit onSumbit={handleEditSumbit} close={() => setEditState(false)}/>
            }
           

           
        </div>
    </div> );
}
 
export default UserMgtPage;