/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import {BrowserRouter, Route, Routes,NavLink,useNavigate,Navigate} from 'react-router-dom';
import Home from './Home.jsx';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
import Admin from './Adminfunction/Admin.jsx';



function App() {

  return (
    
  
    <Routes>
        <Route path='/signup' exact element={<Signup />}/>
        <Route path='/login' exact element={<Login />}/>
        <Route path="/" element={<Navigate replace to="/signup" />} />
        <Route path="/post" element={<Navigate to="recommend/post/all" />} />
        <Route path="/admin" exact element={<Admin />}/>
        <Route path="/home" exact element={<Home />}/>
    </Routes>
      
   
  );
}

export default App;
