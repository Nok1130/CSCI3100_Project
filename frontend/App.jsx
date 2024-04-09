/* eslint-disable no-unused-vars */
import './App.css'
import React, {useState} from 'react'
import {BrowserRouter, Route, Routes,NavLink,useNavigate,Navigate} from 'react-router-dom';
import Home from './Home.jsx';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
import Admin from './Adminfunction/Admin.jsx';
import UserMgtPage from './Adminfunction/userMgtPage.jsx';
import PostMgtPage from './Adminfunction/PostMgtPage.jsx';
import UserContext from './UserContext.jsx';
import { atom, RecoilRoot } from 'recoil';

function App() {

  // const currentUser = atom({
  //   key: 'currentUserID',
  //   default: '', 
  // });
  // const [currentloginID, setcurrentloginID] = useState('');

  return (
    <RecoilRoot>
      {/* <UserContext.Provider value={{ currentloginID, setcurrentloginID }}> */}
        <Routes>
            <Route path='/signup' exact element={<Signup />}/>
            <Route path='/login' exact element={<Login />}/>
            <Route path="/" element={<Navigate replace to="/signup" />} />
            <Route path="/Admin/*"  element={<Admin />}/>
            <Route path="/home/*" exact element={<Home />}/>
        </Routes>
      {/* </UserContext.Provider> */}
    </RecoilRoot>

      
   
  );
}

export default App;
