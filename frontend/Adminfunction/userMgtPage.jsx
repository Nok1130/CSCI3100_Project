import React,{useState,useEffect} from "react";
import SearchBar from "./SeachBar";
import {Button,FloatButton} from 'antd';
import AddUser from "./AddUser";
import {FaPlus} from 'react-icons/fa6';
import { SuspendBtn } from "./SuspendBtn";
import Edit from "./Edit";
import "./Admin.css";

import Aos from 'aos';
import 'aos/dist/aos.css';


function UserMgtPage () {
    const [results,setResults] = useState(null);//store search result for display
    const [dataset,setDataSet] = useState(null); //store orginal dataset 
    const [SuspendBtnText,setSuspendBtnText] = useState('Suspend'); // handle form to add new row
    const [AddButtonState,setAddButtonState] = useState(false);
    const [EditState,setEditState] = useState(false);
    const [editIndex,setEditIndex] = useState(0);
  
    useEffect(()=>
    {
        Aos.init()
    },[])

    useEffect(() => {
        const getUser = async () => 
        {
              const response = await fetch('http://localhost:8080/api/admin/getAllUser');
              const data = await response.json();
              console.log(data);
              setDataSet(data.users);
              setResults(data.users);
        };
        getUser();
    }, []);

    const getUsers = async () => 
    {
        const response = await fetch('http://localhost:8080/api/admin/getAllUser');
        const data = await response.json();
        console.log(data);
        setDataSet(data.users);
        setResults(data.users);
    };

    const handleSubmit = async (newRow) =>
    {
     console.log(newRow);
     const response = await fetch('http://localhost:8080/api/user/signUpNewUser',
     {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: newRow.username,
            email: newRow.email,
            password: newRow.password,
            major: newRow.major
        })
     });
    getUsers();
    }

    const handleEdit = (targetIndex) =>
    {
        EditState? setEditState(false): setEditState(true);
        setEditIndex(targetIndex);
        console.log("edit user");
    }

    const handleEditSumbit = (newRow) =>
    {
        console.log(newRow);
        const change = results.map((key,index) =>
        {
            if(index === editIndex)
            {
                if(newRow.username !== "")
                {
                    key.username = newRow.username;
                }
                if(newRow.email !== "")
                {
                    key.email = newRow.email;
                }
                return key;
            }else
            {
                return key;
            }
        })
        
        // console.log(change);
        setResults(change);
        setDataSet(change);
    }

    const getResults = (result) =>
    {
       setResults(result);
    }

    const handleAdd = () => 
    {
        AddButtonState ? setAddButtonState(false) : setAddButtonState(true);
        console.log("add user");
    }


    const handleDelete = async (userID) =>
    {
        const response = await fetch('http://localhost:8080/api/admin/deleteUser',{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userID: userID
        })
    });
    getUsers();
    }

    const handleSuspend = (targetIndex) =>
    {
        console.log("entered");
        const change = results.map((key,index) => 
        {
            if(index === targetIndex)
            {
                 key.isSuspend = (!key.isSuspend);
                 return key;
            }else
            {
                return key;
            }
         })
        setResults(change);
    }
    return ( 
        <div className='usermgt'>
            <div className="mainUsermgt" >
                <SearchBar children='Search User' 
                           getResult={getResults} 
                           data={dataset} 
                />
                <table>
                    <thead>
                        <tr data-aos = "fade-left">
                            <th className="large">
                                USERNAME
                            </th>
                            <th className="large">
                                EMAIL
                            </th>
                            <th className="large">
                                ACTIONS
                            </th>
                        </tr>
                    </thead>
                    <tbody data-aos = "fade-left">
                        {results?.map((key,index) =>
                        { return(
                            <tr className="userRow" 
                                key={index} 
                                >
                                <td className="username">
                                    {key.username}
                                    </td>
                                <td className="email">
                                    {key.email}
                                    </td>
                                <td className="btn">
                                    <Button type="primary" 
                                            className="editBtn"
                                            onClick={() => handleEdit(index)}
                                            >
                                            Edit
                                            </Button>

                                    <SuspendBtn SuspendState={key.isSuspend} 
                                                onClick={() => handleSuspend(index)}
                                                className='suspendBTN'
                                                />
                                    
                                    <Button danger onClick={() => handleDelete(key.userID)} 
                                            className="deleteBtn">
                                                Delete
                                            </Button>
                                </td>
                            </tr>  
                            );   
                        }
                    )}
                    </tbody>
                </table>
                <FloatButton icon={<FaPlus />} 
                             onClick={handleAdd}
                             />
                {
                    AddButtonState && 
                        <AddUser onSubmit={handleSubmit} 
                                 close={() => setAddButtonState(false)}
                                 />
                }
                {
                    EditState && <Edit onSumbit={handleEditSumbit} 
                                       close={() => setEditState(false)}
                                       />
                }
            

            
            </div>
        </div>);
}
 
export default UserMgtPage;