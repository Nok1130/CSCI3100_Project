import { useState, useContext ,useEffect} from 'react'
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
            });
            console.log("ID: ", currentloginID);
            
            window.location.href = '/home';
            
        }
        catch(error){
            console.log('Error:', error);
            window.location.href = '/login?loginFailed=true';    

            
        }
        
    };

    

 /*

    const { MongoClient } = require('mongodb');

    
    const handleLogin = async () => {
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
      
        const uri = 'mongodb+srv://uniconadmin:123@unicondb.lwxmdyy.mongodb.net/?retryWrites=true&w=majority&appName=uniconDB'; // Replace with your MongoDB URI
        const client = new MongoClient(uri);
      
        try {
          await client.connect();
      
          const database = client.db('test'); // Replace with your database name
          const usersCollection = database.collection('users'); // Replace with your collection name
      
          const user = await usersCollection.findOne({
            username: username,
            password: password,
          });
      
          if (user) {
            // User exists logic
            console.log('User exists');
            setcurrentloginID(user.userID);
            console.log("ID: ", currentloginID);
            // Redirect to "/home" page or perform any other actions
          } else {
            // User does not exist logic
            console.log('User does not exist');
            // Remain on the same page or perform any other actions
          }
        } catch (error) {
          // Handle error
          console.log('MongoDB error:', error);
        } finally {
          // Close the MongoDB connection
          await client.close();
        }
      };
      
*/






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


