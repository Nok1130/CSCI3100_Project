import { useState, useContext ,useEffect} from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from '../assets/Unicon.svg';
import {BrowserRouter, Route, Routes,NavLink,useNavigate,Link} from 'react-router-dom';
import { Button } from "antd";
import './login.css';
import UserContext from '../UserContext.jsx';
import axios from 'axios';


function Login(){
    document.body.style = 'background: #5295ff;';
    const placeholderColor = 'ffffff'; 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { currentloginID, setcurrentloginID } = useContext(UserContext);
    
    let isAdmin = false;

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    
    useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const loginFailed = urlParams.get('loginFailed');
    if (loginFailed) {
        alert("Login failed. Please try again.");
      }
    }, []);
   

    const handleLogin = async() => {
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        
        try{
            await fetch('http://localhost:5001/api/user/signInUser', {
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
                isAdmin=data.user.isAdmin;
            });
            console.log("ID: ", currentloginID);
            console.log("isAdmin: ", isAdmin);


            if(isAdmin){
                console.log('Admin Login');
                window.location.href = '/Admin';   
            }
            else
                window.location.href = '/home';
            
        }
        catch(error){
            console.log('Error:', error);
            window.location.href = '/login?loginFailed=true';    

            
        }
        
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
            
                <button  className="login_btn" onClick={handleLogin}>Login</button>
            


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


