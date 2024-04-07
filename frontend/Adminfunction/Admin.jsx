import React from 'react';
import "./Admin.css";
import SideBar from './SideBar.jsx';
import Home from './Home.jsx';
import UserMgtPage from './userMgtPage.jsx';
import PostMgtPage from './PostMgtPage.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './header.jsx'

function Admin(){
    return ( 
   
     <div className='admin'>


        <SideBar/>
         <Header/>
          <Routes>
              <Route path ='/' element={<UserMgtPage />} />
              <Route path='/UserManagement' element={<UserMgtPage />}/>
              <Route path='/PostManagement' element={<PostMgtPage />} />
      
          </Routes>
         
         
     
         
 
       </div>
     
     );
}
 
export default Admin;