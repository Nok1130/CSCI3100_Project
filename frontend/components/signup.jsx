import React, { useState ,useContext, useEffect} from 'react';
import {BrowserRouter, Route, Routes,NavLink,useNavigate,Link} from 'react-router-dom';
import './signup.css';
import axios from 'axios';
import { Button } from "antd";
import logo from '../assets/Unicon.svg';
import useStore from '../UserContext.jsx';


/**
 * Represents the Signup component.
 * This component is responsible for rendering the signup form and handling user input.
 */


const Signup=()=> {

    document.body.style = 'background: #5295ff;';
    //State variables for form inputs.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedpassword, setConfirmedPassword] = useState('');
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');
    const [major, setMajor] = useState('');
    //Event handler for username input change.
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    //Event handler for password input change.
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    //Event handler for confirmedpassword input change.
    const handleConfirmedPasswordChange = (event) => {
        setConfirmedPassword(event.target.value);
    };
    //Event handler for email input change.
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    //Event handler for university input change.
    const handleUniversityChange = (event) => {   
        setUniversity(event.target.value);
    };
    //Event handler for major input change.
    const handleMajorChange = (event) => {
        setMajor(event.target.value);
    };
    //Event handler for checkbox change input change.
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const [isChecked, setIsChecked] = useState(false);

    
    
    //Event handler for submit change input change.
    const handleSubmit = (event) => {

        (async () => {
            // check if password and confirmed password match
            if (password !== confirmedpassword) {
                alert('Passwords do not match.');
                window.location.href = '/signup';
                return;
                
            }
            // check if the user has agreed to the terms of service and privacy policy
            if(!isChecked){
                alert("Please agree to the terms of service and privacy policy.");
                window.location.href = '/signup';
                return;
            }
                // prevent the default form submission behavior
                event.preventDefault();
                // Perform signup logic here
                //const { currentusername, setcurrentusername } = useContext(UserContext);         
                //try to fetch the username from the database   
                try{
                    //fetch the username from the database
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
                            //if the username is found in the database, alert the user and redirect to the signup page
                            if(data.user.username){
                                alert("Username already exists. Please try another username.");
                                window.location.href = '/signup';
                                return;
                            }
                        });
                       
                        
                    }
                    //catch any errors and console show error
                    catch(err){ console.log(err);}

                //try to fetch the email from the database
                try {
                    //fetch the email from the database 
                    await axios.post('http://localhost:8080/api/user/signUpNewUser', { username, password, email, university, major });
                } 
                //catch any errors and console show error
                catch (err) {
                    console.log(err);
                }
                /*axios.post('http://localhost:5001/api/user/signInUser',{username, password, email, university, major})
                .then (result => console.log(result))
                .catch(err => console.log(err));
                */
                //console log the user inputs
                console.log('Username:', username);
                console.log('Password:', password);
                //console.log('ConfirmedPassword:', confirmedpassword);
                console.log('Email:', email);
                console.log('Unveristy:', university);
                console.log('Major:', major);
                alert("Sign up successful!");
                //redirect to the login page
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
                            /* This is a multi-line comment within JSX */
                            <img src={logo} alt="Logo" />
                        </div>
                        <h1 className='roboto-regular'>Welcome To</h1> 
                        <h1 >Unicon</h1> 
                    </div >

                    <div className='right'>
                        {/* form container */}
                        <form onSubmit={handleSubmit} className='form_container'>
                            <h1>Sign Up</h1>
                            <h6>Create an account to express opinions freely and anonymously!</h6>
                        
                            {/* input fields for username*/}
                            <input type="text" autoComplete = 'off' name = 'username' onChange={(e)=>setUsername(e.target.value)} className="input_signup"  placeholder='Username' required/>
                        
                            <br />
                            {/* input fields for password*/}

                            <div className='password_layout_container'>
                            <input type="password" autoComplete = 'off' name = 'password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className='input_password'required />
                        
                            <br />
                            {/*input fields for confirmedpassword*/}

                            <input type="password" autoComplete = 'off' name = 'confirmedpassword' onChange={(e)=>setConfirmedPassword(e.target.value)}   className="input_password"placeholder='Confirm Password' required/>
                        
                            <br />
                            



                            </div>
                                                        {/*input fields for email*/}

                            <input type="email" autoComplete = 'off' name='email' onChange={(e)=>setEmail(e.target.value)}  className="input_signup"  placeholder='Email' required />
                        
                            <br />

                             {/*input fields for unversity*/}

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
                            
                                {/*input fields for checkbox*/}

                                <input type="checkbox" autoComplete = 'off'checked={isChecked} onChange={handleCheckboxChange } className='term_labe' requried />
                                I've read and agree with <b>Terms of Service</b> and <b> Privacy Policy</b>
                            </label>

                            <br />
                            {/*button fields for confirmedpassword*/}
                            <button type="submit" className='btn_signup'>Sign Up</button>

                            
                        </form>
                        
                            <div>
                               

                                <div className='password_layout_container '>
                                    <p>Already have an account?</p>

                                </div>
                            </div>
                            <div>
                                {/* Link to the login page */} 
                            <Link to='/login'>
                                        <Button type='default' className='btn_login' >
                                            Login
                                        </Button>
                                    </Link>
                            </div>
                    </div> 
                </div>
            </div>    
        </section>
        </div>
    );
};
export default Signup;
