import {useState} from 'react';
import React from 'react';
import "./Admin.css";
import  {SideBarData} from './SideBarData.jsx';
import {Link,NavLink} from 'react-router-dom';
const SideBar = () => {

    return ( 
        <div className="sidebar">
            <div className="mgtTools">
                   {         
                    SideBarData.map((key,val) => 
                    <div className='sideBaritem'>
                    <NavLink to={key.link} key={val} className="link" activeClassName="active">
                        <div className='icon'>{key.icon}</div>
                        <div className='title'>{key.title}</div>
                    </NavLink>
                    </div>
                    )
          
                }
            </div>
             
        </div>
     );
};
 
export default SideBar;