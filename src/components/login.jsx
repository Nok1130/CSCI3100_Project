import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from '../assets/Unicon.svg';
import {BrowserRouter, Route, Routes,NavLink,useNavigate,Link} from 'react-router-dom';

import './login.css';


function Login(){
    document.body.style = 'background: #5295ff;';
    const placeholderColor = 'ffffff'; 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const handleForgotPassword = () => {
        // Perform forgot password logic here
    };

    const handleSignup = () => {
        // Perform signup logic here
    };

    return (
       
        <div className="login_container">
            <img src={logo} alt="Logo" />
            <br/><br/><br/>
            <input
            className="login_input"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="USERNAME"
                required
                style={{ '::placeholder': { color: placeholderColor } }}
            />

            <input
             className="login_input"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="PASSWORD"
                required
                style={{ '::placeholder': { color: placeholderColor } }}
            />
            <br/>
            <button  className="login_btn" onClick={handleLogin}>Login</button>

            <a href="#" onClick={handleForgotPassword}>
                Forgot Password?
            </a>


            <div>
                <div className='password_layout_container '>
                    <p>Don't have an account?    </p> 
                        <Link to='/signup'>
                            <button  className="login_signup_btn"onClick={handleSignup}>   Sign Up</button>
                        </Link>
                </div>
            </div>





            
        </div>
        
    );
}

export default Login;


