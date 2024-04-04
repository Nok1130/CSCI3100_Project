import React from "react";
import SearchBar from "./SeachBar";
import { UserInfo } from "./UserInfo";
import {Button} from 'antd';
import {useState} from 'react';
import AddUser from "./AddUser";
import {FloatButton} from 'antd';
import {FaPlus} from 'react-icons/fa6';

function UserMgtPage () {
const [results,setResults] = useState(UserInfo);//store search result for display
const [dataset,setDataSet] = useState(UserInfo); //store orginal dataset 
const [SuspendBtnText,setSuspendBtnText] = useState('Suspend'); // handle form to add new row
const [AddButtonState,setAddButtonState] = useState(false);

 const handleSubmit = (newRow) =>{
     setDataSet([...dataset,newRow]);
     setResults([...dataset,newRow]);
    
 }
 const getResults = (result) =>{
    setResults(result);
 }

 const handleAdd = () => {
    AddButtonState ? setAddButtonState(false) : setAddButtonState(true);
    console.log("add user");
}
 const handleSuspend = (targetIndex) =>{
    if(SuspendBtnText === 'Suspend'){
        setSuspendBtnText('UnSuspend');
    }else{
        setSuspendBtnText('Suspend');
    }
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
                                    className="editBtn">
                                    Edit
                            </Button>

                            <Button type="primary" 
                                    className="suspendBtn" 
                                    danger 
                                    onClick={(index) => handleSuspend(index)}>
                                    Suspend
                            </Button>
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
           

           
        </div>
    </div> );
}
 
export default UserMgtPage;