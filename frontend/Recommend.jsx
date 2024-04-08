import React from "react";
import './Recommend.css';
import {useState, useEffect} from 'react';
import { Menu, Flex } from 'antd';
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Users from "./Users";
import Posts from "./Posts";
import GroupAccounts from './GroupAccounts';

const navbar_items = [
    {
        label: 'Posts',
        key: '/home/recommend/post/all',
    },
    {
        label: 'Users',
        key: '/home/recommend/user',
    },
    {
        label: 'Group Accounts',
        key: '/home/recommend/groupaccount',
    }
]

function Recommend({data}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [current, setCurrent] = useState([location.pathname]);
    const onClick = (e) => {
        navigate(e.key);
        setCurrent(e.key);
      };

    return (
        <Flex vertical gap="small" style={{flex: '1'}}>
        <Menu theme="light" className="navigation_bar" style={{background: 'none', alignItems: 'center', position: 'sticky', top: '0'}} onClick={onClick} defaultSelectedKeys={current} mode="horizontal" items={navbar_items} />
        <Routes>
          <Route path='/user/*' element={<Users />} />
          <Route path='/post/*' element={<Posts data={data}/>} />
          <Route path='/groupaccount/*' element={<GroupAccounts />} />
        </Routes>
      </Flex>

    );
}

export default Recommend;