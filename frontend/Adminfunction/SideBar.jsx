import {useState} from 'react';
import React from 'react';
import "./Admin.css";
import  {SideBarData} from './SideBarData.jsx';
import {Link,NavLink,Outlet} from 'react-router-dom';
import { Avatar } from 'antd';
import useStore from '../UserContext.jsx';
const SideBar = () => {
    const { currentloginID, setcurrentloginID } = useStore();
    console.log(currentloginID);

    return ( 
        <div className="sidebar">
            
            <div className="mgtTools">
                <div style={{ color: '#D3D3D3', marginLeft: '20%' }}>Management Tools</div>
                
                    {         
                        SideBarData.map((keys,val) => 
                        <div className='sideBaritem'>
                        <NavLink to={keys.link} key={val} className="link" activeclassname="active" >
                            <div className='icon' key={keys.icon}>{keys.icon}</div>
                            <div className='title'key={keys.title}>{keys.title}</div>
                        </NavLink>
                        </div>
                        )
            
                    }
                </div>
                <div className='userNow' style={{ fontFamily: 'Roboto, sans-serif' }}>
                
                    <div>Hello, Welcome Back</div>
                    <div> 
                    Admin {currentloginID}
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    </div>
                   
                </div>
             <Outlet />
        </div>
     );
};
 
export default SideBar;