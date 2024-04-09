import {useState} from 'react';
import React from 'react';
import "./Admin.css";
import  {SideBarData} from './SideBarData.jsx';
import {Link,NavLink,Outlet} from 'react-router-dom';
const SideBar = () => {


    return ( 
        <div className="sidebar">
            
            <div className="mgtTools">
            <div style={{ color: '#D3D3D3', marginLeft: '20%' }}>Management Tools</div>
               
                   {         
                    SideBarData.map((keys,val) => 
                    <div className='sideBaritem'>
                    <NavLink to={keys.link} key={val} className="link" activeclassname="active" >
                        <div className='icon'>{keys.icon}</div>
                        <div className='title'>{keys.title}</div>
                    </NavLink>
                    </div>
                    )
          
                }
            </div>
             <Outlet />
        </div>
     );
};
 
export default SideBar;