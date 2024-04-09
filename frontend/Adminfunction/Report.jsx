import React,{useState,useEffect} from 'react';
import './Report.css';
import {Input} from 'antd';
import {UserOutlined ,MailOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import { Typography,Divider } from 'antd';
import {TiDeleteOutline} from 'react-icons/ti';
import { CloseOutlined } from '@ant-design/icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const{Title} = Typography;

const Report = ({report,close}) => {
    useEffect(()=>{
        Aos.init()
    },[])
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
                <div className='reasonContainer' data-aos = "fade-left">

                {
                    report?.map((item,index)=> <div className="reportItems">user{item.userID}{"  "}:{"   "} {item.reportReason}</div>)
                }
                </div>
            </div>
           
        </div>
     );
}

export default Report;
