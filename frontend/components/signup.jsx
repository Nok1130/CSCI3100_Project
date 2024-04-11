import React, { useState ,useContext, useEffect} from 'react';
import {BrowserRouter, Route, Routes,NavLink,useNavigate,Link} from 'react-router-dom';
import './signup.css';
import axios from 'axios';
import { Button } from "antd";
import logo from '../assets/Unicon.svg';
import useStore from '../UserContext.jsx';



const Signup=()=> {
    document.body.style = 'background: #5295ff;';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedpassword, setConfirmedPassword] = useState('');
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');
    const [major, setMajor] = useState('');
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleConfirmedPasswordChange = (event) => {
        setConfirmedPassword(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleUniversityChange = (event) => {   
        setUniversity(event.target.value);
    };
    const handleMajorChange = (event) => {
        setMajor(event.target.value);
    };


    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const [isChecked, setIsChecked] = useState(false);

    

    

    const handleSubmit = (event) => {

        (async () => {
            if (password !== confirmedpassword) {
                alert('Passwords do not match.');
                window.location.href = '/signup';
                return;
                
            }
            if(!isChecked){
                alert("Please agree to the terms of service and privacy policy.");
                window.location.href = '/signup';
                return;
            }
           
                event.preventDefault();
                // Perform signup logic here
                //const { currentusername, setcurrentusername } = useContext(UserContext);                
                try{
                    await fetch('http://localhost:8080/api/user/getUserProfileFromUsername', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                username: username
                            })  
                        })
                    
                        .then(response => response.json())
                        .then(data => {
                            console.log(data.user);
                            //setcurrentusername(data.user.username);
                            console.log(data.user.username);
                            console.log("username: founded");
                            if(data.user.username){
                                alert("Username already exists. Please try another username.");
                                window.location.href = '/signup';
                                return;
                            }
                        });
                       
                        
                    }
                    catch(err){ console.log(err);}

                try {
                    
                    await axios.post('http://localhost:8080/api/user/signUpNewUser', { username, password, email, university, major });
                } catch (err) {
                    console.log(err);
                }
                /*axios.post('http://localhost:5001/api/user/signInUser',{username, password, email, university, major})
                .then (result => console.log(result))
                .catch(err => console.log(err));
                */
                console.log('Username:', username);
                console.log('Password:', password);
                //console.log('ConfirmedPassword:', confirmedpassword);
                console.log('Email:', email);
                console.log('Unveristy:', university);
                console.log('Major:', major);
                alert("Sign up successful!");
                window.location.href = '/login';
            
               
        })();

        
   
        






    };
    
    /*
    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
    }
*/
    return (
        <div className='bdy'>
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

            <div className='signup_container'> 
        

                <div className='signup_form_container'>
                    <div className='left'> 
                        <div>
                            <img src={logo} alt="Logo" />
                        </div>
                        <h1 className='roboto-regular'>Welcome To</h1> 
                        <h1 >Unicon</h1> 
                    </div >

                    <div className='right'>
                        <form onSubmit={handleSubmit} className='form_container'>
                            <h1>Sign Up</h1>
                            <h6>Create an account to express opinions freely and anonymously!</h6>
                        

                            <input type="text" autoComplete = 'off' name = 'username' onChange={(e)=>setUsername(e.target.value)} className="input_signup"  placeholder='Username' required/>
                        
                            <br />
                            <div className='password_layout_container'>
                            <input type="password" autoComplete = 'off' name = 'password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='input_password'required />
                        
                            <br />
                            
                            <input type="password" autoComplete = 'off' name = 'confirmedpassword' onChange={(e)=>setConfirmedPassword(e.target.value)}   className="input_password"placeholder='Confirm Password' required/>
                        
                            <br />
                            



                            </div>
                            <input type="email" autoComplete = 'off' name='email' onChange={(e)=>setEmail(e.target.value)}  className="input_signup"  placeholder='University email' required />
                        
                            <br />


                            <div className='password_layout_container '>
                                <select name='university' onChange={(e)=>setUniversity(e.target.value)} className='input_select'>
                                    <option value="CUHK">Chinese University of Hong Kong</option>
                                    <option value="HKU">Hong Kong University</option>
                                    <option value="HKUST">Hong Kong University of Science and Technology</option>
                                    <option value="PolyU">Hong Kong Polytechnic University</option>
                                    <option value="CityU">City University of Hong Kong</option>
                                    <option value="HKBU">Hong Kong Baptist University</option>
                                    <option value="HKMU">Hong Kong Metropolitan University</option>
                                    <option value="LingnanU">Lingnan University</option>
                                    <option value="HSYU">Hong Kong Shue Yan University</option>
                                    <option value="EdUHK">Education University of Hong Kong</option>
                                    <option value="HSUHK">Hang Seng University of Hong Kong</option>
                                    <option value="SFU">Saint Francis University</option>
                                    
                                </select>
                                <input type="text" autoComplete = 'off' name = 'major' onChange={(e)=>setMajor(e.target.value)} className="input_password"  placeholder='Major' required/>


                            </div>









                            <label className="termsOfService">
                            
                                
                                <input type="checkbox" autoComplete = 'off'checked={isChecked} onChange={handleCheckboxChange } className='term_labe' requried />
                                I've read and agree with <b>Terms of Service</b> and <b> Privacy Policy</b>
                            </label>

                            <br />

                            <button type="submit" className='btn_signup'>Sign Up</button>

                            
                        </form>
                        
                            <div>
                                <div className='password_layout_container '>
                                    <p>Already have an account?</p>
                                    <Link to='/login'>
                                        <Button type='default' className='btn_login' >
                                            Login
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            
                    </div> 
                </div>
            </div>    
        </section>
        </div>
    );
};
export default Signup;
