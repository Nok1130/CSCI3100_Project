import React,{useState} from 'react';
import './Report.css';
import {Input} from 'antd';
import {UserOutlined ,MailOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import { Typography,Divider } from 'antd';
import {TiDeleteOutline} from 'react-icons/ti';

const{Title} = Typography;

const Report = ({report,close}) => {
        
    return ( 
        <div className='reportContainer' >
            <div className='reportClass'>
                <TiDeleteOutline 
                        style={{ 
                            marginTop: 0,
                            marginLeft: 0,
                            fontSize: '35px'
                              }}
                        onClick={close}
                />
              <Title level={2}>Report Reason</Title>
                <Divider/>
                <div className='reasonContainer'>

                {
                    report.map((item,index)=> <div className="reportItems">{item}</div>)
                }
                </div>
            </div>
           
        </div>
     );
}

export default Report;
