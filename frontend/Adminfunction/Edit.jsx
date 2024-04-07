import React,{useState} from 'react';
import './AddUser.css';
import {Input} from 'antd';
import {UserOutlined ,MailOutlined} from '@ant-design/icons';
import {Button} from 'antd';
const Edit = ({close,onSumbit}) => {
        
    const [formState, setFormState] = useState({
        "username": '',
        "email": '',
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
     
       if(formState.email.length>0){
           if(formState.email.includes('cuhk.edu.hk')){
                onSumbit(formState);
            }else{
                alert("invalid email");
            }    
       }
       if(formState.username.length>0){
        console.log(formState);
         onSumbit(formState);
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
                    <div className="btnEdit">
                        <button type='submit'
                             className='submitbtn' 
                             onClick={handleSubmit} >
                             EDIT
                        </button>
                         <Button 
                            onClick={close}>
                                CANCEL
                        </Button>

                    </div>
                   
                </form>
            </div>
           
        </div>
     );
}

export default Edit;