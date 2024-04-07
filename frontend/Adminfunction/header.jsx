import React from 'react'
import new_logo from '../assets/new_logo.png';
import { Typography } from 'antd';

const {Title} = Typography;

export default function Header() {
  return (
    <div className='header'>
        <img src={new_logo} alt='logo' id="logo" style={{height:50,width:75}}/>
        <Title level={2} type="secondary">Admin</Title>
    </div>
  )
}
