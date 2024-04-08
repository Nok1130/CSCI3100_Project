import { useState, useContext } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from '../assets/Unicon.svg';
import {BrowserRouter, Route, Routes,NavLink,useNavigate,Link} from 'react-router-dom';
import { Button } from "antd";
import './login.css';
import UserContext from '../UserContext.jsx';


function Login(){
    document.body.style = 'background: #5295ff;';
    const placeholderColor = 'ffffff'; 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { currentloginID, setcurrentloginID } = useContext(UserContext);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async() => {
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        
        await fetch('http://localhost:8080/api/user/signInUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })  
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.user);
            setcurrentloginID(data.user.userID);
        });
        console.log("ID: ", currentloginID);
        
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic here
        console.log('Forgot password clicked');
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
            <Link to="/home">
                <button  className="login_btn" onClick={handleLogin}>Login</button>
            </Link>


            <a href="#" onClick={handleForgotPassword}>
                Forgot Password?
            </a>


            <div>
                <div className='password_layout_container '>
                    <p>Don't have an account?    </p> 
                    <br />
                </div>

            </div>
                <Link to='/signup'>
                    <Button  className="login_signup_btn">Sign Up</Button>
                </Link>





            
        </div>
        
    );
}

export default Login;


