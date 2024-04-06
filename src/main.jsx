import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './components/signup.jsx' 
import Login from './components/login.jsx' 
import { BrowserRouter, Route } from 'react-router-dom';

import App from "./App.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    
      
      
    </BrowserRouter>
  </React.StrictMode>
);
