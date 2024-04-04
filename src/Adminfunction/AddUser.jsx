import React,{useState} from 'react';
import './AddUser.css';
import {Input} from 'antd';
import {UserOutlined ,MailOutlined} from '@ant-design/icons';
const AddUser = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formState);
   }
    return ( 
        <div className='addContainer' >
            <div className='addClass'>
                <form>

                    <div>
                       
                         <Input placeholder="username" size="large"  value={formState.username} onChange={(e) => handleChange(e)} prefix={<UserOutlined />}/>
                    </div>
                    <br/>
                    <div>
                        
                         <Input placeholder="email" size="large" value={formState.email} onChange={handleChange}prefix={<MailOutlined />}/>
                    </div>
                    <br/>
                    <button type='submit' className='submitbtn' onClick={handleSubmit}>ADD</button>
                </form>
            </div>
           
        </div>
     );
}
 
export default AddUser;