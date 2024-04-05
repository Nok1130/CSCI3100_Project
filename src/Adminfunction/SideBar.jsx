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
                    SideBarData.map((keys,val) => 
                    <div className='sideBaritem'>
                    <NavLink to={keys.link} key={val} className="link" activeClassName="active" >
                        <div className='icon'>{keys.icon}</div>
                        <div className='title'>{keys.title}</div>
                    </NavLink>
                    </div>
                    )
          
                }
            </div>
             
        </div>
     );
};
 
export default SideBar;