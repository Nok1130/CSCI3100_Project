App.css'

import { Button } from 'antd'
import {BrowserRouter, Route, Routes,NavLink,useNavigate,Navigate} from 'react-router-dom';
import Home from './Home.jsx';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';



function App() {
 

  return (
    
  
    <Routes>
        <Route path='/signup' exact element={<Signup />}/>
        <Route path='/login' exact element={<Login />}/>
        <Route path="/" element={<Navigate replace to="/signup" />} />
        <Route path="/post" element={<Navigate to="recommend/post/all" />} />
    </Routes>
      
   
  );
}

export default App;
