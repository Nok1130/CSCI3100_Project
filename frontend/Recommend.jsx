import { React, useEffect, useState } from "react";
import './Recommend.css';
import { Menu, Flex } from 'antd';
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Users from "./Users";
import Posts from "./Posts";
import GroupAccounts from './GroupAccounts';



function Recommend({ data, selectedkey }) {
  const menuselectedkey = JSON.stringify(selectedkey).split('/').pop().replace(/"/g, '').replace(/]/g, '');;;
  console.log('key: '+menuselectedkey);
  const navbar_items = [
    {
      label: 'Posts',
      key: `/home/recommend/post/${menuselectedkey}`,
    },
    {
      label: 'Users',
      key: '/home/recommend/user',
    },

  ]
  const navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState([location.pathname]);
  console.log(navbar_items);
  const onClick = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };

  useEffect(() => {
    setCurrent([location.pathname]);
    console.log(current+' '+location.pathname);
}, [location])

  return (
    <Flex vertical gap="small" style={{ flex: '1' }}>
      <Menu theme="light" className="navigation_bar" style={{ background: 'none', alignItems: 'center', position: 'sticky', top: '0' }} onClick={onClick} defaultSelectedKeys={current} SelectedKeys={current} mode="horizontal" items={navbar_items} />
      <Routes>
        <Route path='/user/*' element={<Users data={data} />} />
        <Route path='/post/*' element={<Posts data={data} />} />
        <Route path='/groupaccount/*' element={<GroupAccounts />} />
      </Routes>
    </Flex>

  );
}

export default Recommend;