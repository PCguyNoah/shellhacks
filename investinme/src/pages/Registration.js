import React, {useState} from "react";
import axios from 'axios';
import './Registration.css';


const Registration = () => {
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
        
    };

    return (
        <div className="body">
            <div className="greenBorder">
            <button type="submit" className="submit-button">Submit</button>

            </div>
            <div className="registrationContainer"> 
                <h2>Register</h2>
                <form action="/submit-path" method="post">
                    <div className="input-box">
                        <label htmlFor="firstname">First Name:</label>
                        <input tabIndex="0" type="text" id="firstName" name="firstname" placeholder="Enter First Name" required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="lastname">Last Name:</label>
                        <input tabIndex="0" type="text" id="lastName" name="lastname" placeholder="Enter Last Name"  required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="email">Email:</label>
                        <input tabIndex="0" type="text" id="email" name="email" placeholder="Eneter an Email" required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="password">Password:</label>
                        <input tabIndex="0" type="password" id="password" name="password" placeholder="Enter a place holder" required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="phonenumber">Phone Number:</label>
                        <input tabIndex="0" type="text" id="phone" name="phonenumber"  placeholder="Enter a phone number" required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="Bio">Bio:</label>
                        <input tabIndex="0" type="Bio" id="Bio" name="Bio"  placeholder="Tell us about yourself"required/>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Registration;