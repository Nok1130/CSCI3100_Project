import { useState, useContext ,useEffect} from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from '../assets/Unicon.svg';
import {BrowserRouter, Route, Routes,NavLink,useNavigate,Link} from 'react-router-dom';
import { Button } from "antd";
import './login.css';
import axios from 'axios';
import useStore from '../UserContext.jsx';



function Login(){
    document.body.style = 'background: #5295ff;';
    const placeholderColor = 'ffffff'; 
    //State variables for form inputs.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { currentloginID, setcurrentloginID } = useStore();
    
    let isAdmin = false;
    //Event handler for username input change.
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    //Event handler for password input change.
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    //Event handler for login button click.
    useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const loginFailed = urlParams.get('loginFailed');
    // If login failed, show an alert.
    if (loginFailed) {
        alert("Login failed. Please try again.");
      }
    }, []);
   
    //Event handler for login button click.
    const handleLogin = async() => {
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        
        // try to login
        try{
            //fetch user existence  from backend
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
            //if user exists, get user data
            .then(response => response.json())
            .then(data => {
                console.log('Data:', data);
                console.log(data.user);
                //set current login ID to userID
                setcurrentloginID(data.user.userID);
                //set isAdmin to user.isAdmin
                isAdmin=data.user.isAdmin;
            });
            console.log("ID: ", currentloginID);
            console.log("isAdmin: ", isAdmin);

            //if user is admin, redirect to admin page
            if(isAdmin){
                console.log('Admin Login');
                window.location.href = '/Admin';   
            }
            //if user is not admin, redirect to home page
            else
                window.location.href = '/home/recommend/post/All';

            
        }
        //if login fails, redirect to login page
        catch(error){
            console.log('Error:', error);
            //redirect to login page with error record
            window.location.href = '/login?loginFailed=true';    

            
        }

        
    };
    //Event handler for forgot password button click.
    const handleForgotPassword = () => {
        // Handle forgot password logic here
        console.log('Forgot password clicked');
    };

    return (
        <div className='bdy'>
                        {/*background animation */}

        <section>
        
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>
            <span className='animateSpan'></span>

                    
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
                        {/* Login button */} 
                            <button  className="login_btn" onClick={handleLogin}>Login</button>
                        

                        
                    


                        <div>
                            <div className='password_layout_container '>
                                <p>Don't have an account?    </p> 
                                <br />
                            </div>

                        </div>
                                  {/* Link to the login page */} 
                          
                            <Link to='/signup'>
                                <Button  className="login_signup_btn">Sign Up</Button>
                            </Link>





                        
                    </div>
            </section>
        </div>
        
    );
}

export default Login;


