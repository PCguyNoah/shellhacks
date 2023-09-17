import React, { useState } from "react";
import axios from 'axios';
import './Login.css';

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            email,
            password,
        };
        /*
        try {
            // Send a POST request to the backend
            const response = await axios.post('/api/login', formData);
        
            if (response.status === 200) {
              // Handle a successful response from the server
              console.log('Response from server:', response.data);
            } else {
              // Handle the case where the server response is not successful
              console.error('Request failed');
            }
          } catch (error) {
            // Handle any errors that occur during the request
            console.error('Error:', error);
          }
        */
      
    };

    return (
    <div className="main">
        <h1 class="invstr-button">Welcome to investr!</h1>
        <div className="loginForm">
            <div className="container">
            <div className="subhead">Login</div>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h5 className="enter-input">Email Address</h5>
                    <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
                    />
                </div>

                <div className="form-group">
                    <h5 className="enter-input">Password</h5>
                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    />
                </div>

                <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Login;