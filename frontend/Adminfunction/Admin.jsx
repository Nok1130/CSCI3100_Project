import React, { useEffect } from 'react';
import "./Admin.css";
import SideBar from './SideBar.jsx';
import UserMgtPage from './userMgtPage.jsx';
import PostMgtPage from './PostMgtPage.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './header.jsx'

function Admin(){

    const getAllUser = async () => {
        const response = await fetch('http://localhost:5001/api/admin/getAllUser');
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        getAllUser();
    }, []);

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