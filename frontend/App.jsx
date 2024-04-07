import './App.css'
import Testing from './Testing'


import { Button } from 'antd'
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
        <Route path="/home/*" exact element={<Home />} />
        <Route path="/admin" exact element={<Admin />}/>
    </Routes>
      
   
  );
}

export default App;
