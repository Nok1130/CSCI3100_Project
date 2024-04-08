import React,{useState} from 'react';
import './Report.css';
import {Input} from 'antd';
import {UserOutlined ,MailOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import { Typography,Divider } from 'antd';
import {TiDeleteOutline} from 'react-icons/ti';
import { CloseOutlined } from '@ant-design/icons';

const{Title} = Typography;

const Report = ({report,close}) => {
        
    return ( 
        <div className='reportContainer' >
            <div className='reportClass'>
                <div className='delete'>
                     <CloseOutlined 
                        style={{ 
                           fontSize: '35px'
                              }}
                        onClick={close}
                />  
                </div>
             
              <Title level={2}>Report Reason</Title>
                <Divider/>
                <div className='reasonContainer'>

                {
                    report?.map((item,index)=> <div className="reportItems">user{item.userID}{"  "}:{"   "} {item.reportReason}</div>)
                }
                </div>
            </div>
           
        </div>
     );
}

export default Report;
