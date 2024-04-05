import React,{useState} from 'react';
import './AddUser.css';
import {Input} from 'antd';
import {UserOutlined ,MailOutlined} from '@ant-design/icons';
const AddUser = ({close,onSubmit}) => {
        
    const [formState, setFormState] = useState({
        "username": '',
        "email": '',
        "isSuspend":false
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formState.username === '' || formState.email === ''){
            alert("Empty field");
        }if(formState.email.includes('cuhk.edu.hk')){
             onSubmit(formState);
        }else{
            alert("invalid email");
        }
        close();
    }

    return ( 
        <div className='addContainer' >
            <div className='addClass'>
                <form>

                    <div>
                       
                         <Input 
                            placeholder="username" 
                            size="large" 
                            name="username"
                            type='text'  
                            // value="" 
                            onChange={(e) => handleChange(e)} 
                            prefix={<UserOutlined />}
                         />
                    </div>
                    <br/>
                    <div>
                        
                         <Input 
                            placeholder="email" 
                            size="large" 
                            // value={formState.email} 
                            onChange={(e) => handleChange(e)} 
                            prefix={<MailOutlined />}
                            name="email"
                         />

                    </div>
                    <br/>
                    <button type='submit' className='addbtn' onClick={handleSubmit} >ADD</button>
                </form>
            </div>
           
        </div>
     );
}
 
export default AddUser;