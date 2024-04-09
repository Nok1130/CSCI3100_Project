import React from 'react'
import new_logo from '../assets/new_logo.png';
import { Typography } from 'antd';
import {IoIosLogOut} from 'react-icons/io';
import './Admin.css';
import { useNavigate } from 'react-router-dom';
import useStore from '../UserContext.jsx';
const {Title} = Typography;


export default function Header() {
  const { currentloginID, setcurrentloginID, removecurrentloginID } = useStore();
  const navigate = useNavigate();
  return (
    <div className='header'>
       <div className='headerAlign'>
         <img src={new_logo} alt='logo' id="logo" style={{height:50,width:75}}/> 
         <Title level={2} type="secondary">
            <span className='adminHeader'>A</span>
            <span className='adminHeader'>d</span>
            <span className='adminHeader'>m</span>
            <span className='adminHeader'>i</span>
            <span className='adminHeader'>n</span>
           </Title>
       
        </div>
       
        <div ><IoIosLogOut size='35' onClick={()=>{
          navigate('/login', { replace: true })
          removecurrentloginID();
        }}
        className='logoutbtn'/></div>
    </div>
  )
}
