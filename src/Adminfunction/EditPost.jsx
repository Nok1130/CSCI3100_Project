import React,{useState} from 'react';
import './AddUser.css';
import {Input} from 'antd';
import {UserOutlined ,MailOutlined} from '@ant-design/icons';
import {Button} from 'antd';
const EditPost = ({close,onSumbit,content}) => {
        
    const [contents, setContent] = useState(content);

    const handleChange = (e) => {
       setContent(e.target.value);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
         onSumbit(contents);
        close();
    }

    return ( 
        <div className='addContainer' >
            <div className='addClass'>
                <form>

                    <div>
                       
                         <Input.TextArea 
                            // defaultValue={content} 
                            size="large"
                            style={{height:'200px'}} 
                            name="content"
                            type='text' 
                            value={contents} 
                            onChange={(e) => handleChange(e)} 
                            prefix={<UserOutlined />}
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

export default EditPost;
