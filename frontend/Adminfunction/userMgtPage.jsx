import React from "react";
import SearchBar from "./SeachBar";
import { UserInfo } from "./UserInfo";
import {Button} from 'antd';
import {useState} from 'react';
import AddUser from "./AddUser";
import {FloatButton} from 'antd';
import {FaPlus} from 'react-icons/fa6';
import { SuspendBtn } from "./SuspendBtn";
import Edit from "./Edit";

function UserMgtPage () {
    const [results,setResults] = useState(UserInfo);//store search result for display
    const [dataset,setDataSet] = useState(UserInfo); //store orginal dataset 
    const [SuspendBtnText,setSuspendBtnText] = useState('Suspend'); // handle form to add new row
    const [AddButtonState,setAddButtonState] = useState(false);
    const [EditState,setEditState] = useState(false);
    const [editIndex,setEditIndex] = useState(0);

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