
import React, { useState } from 'react';
import {BrowserRouter, Route, Routes,NavLink,useNavigate,Link} from 'react-router-dom';
import './signup.css';




const Signup=()=> {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedpassword, setConfirmedPassword] = useState('');
    const [email, setEmail] = useState('');
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
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const [isChecked, setIsChecked] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform signup logic here
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('ConfirmedPassword:', confirmedpassword);
        console.log('Email:', email);
    };
    
    /*
    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
    }
*/
    return (
        <div className='signup_container'> 
      

            <div className='signup_form_container'>
                <div className='left'> 
                    <h1 className='roboto-regular'>Welcome To</h1> 
                    <h1 >Unicon</h1> 
                </div >

                <div className='right'>
                    <form onSubmit={handleSubmit} className='form_container'>
                        <h1>Sign Up</h1>
                        <h6>Create A Account Express Opinions Freely And Anonymously</h6>
                       

                        <input type="text" value={username} className="input_signup" onChange={handleUsernameChange} placeholder='Username' required/>
                    
                        <br />
                        <div className='password_layout_container'>
                        <input type="password" value={password} className="input_password" onChange={handlePasswordChange} placeholder='Password' required />
                    
                        <br />
                        
                        <input type="password" value={confirmedpassword} className="input_password" onChange={handleConfirmedPasswordChange} placeholder='Confirm Password' required/>
                    
                        <br />
                        



                        </div>
                        <input type="email" value={email} className="input_signup" onChange={handleEmailChange} placeholder='University email' required />
                    
                        <br />

                        <label>
                            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange } className='term_labe' requried />
                            I've read and agree with <b>Terms of Service</b> and <b> Privacy Policy</b>
                        </label>

                        <br />

                        <button type="submit" className='btn'>Sign Up</button>

                        
                    </form>
                    
                        <div>
                            <div className='password_layout_container '>
                                <p>Already have an account?</p> 
                                    <Link to='/login'>
                                        <button type='button' className='btn_login' >
                                            Login
                                        </button>
                                    </Link>
                            </div>
                        </div>
                </div> 
            </div>
        </div>       
    );
};
export default Signup;
