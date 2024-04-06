
import './App.css'
import { Button } from 'antd'
import {BrowserRouter, Route, Routes,NavLink,useNavigate,Navigate} from 'react-router-dom';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';



function App() {
 

  return (
    
  
    <Routes>
        <Route path='/signup' exact element={<Signup />}/>
        <Route path='/login' exact element={<Login />}/>
        <Route path="/" element={<Navigate replace to="/signup" />} />
    </Routes>
      
   
  );
}

export default App;
