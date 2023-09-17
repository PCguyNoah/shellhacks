import React, { useState } from 'react';
import axios from 'axios';

function Registration() {

    // States for each input field
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bio, setBio] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you can use the state values to send the data to your server.
        // e.g., using axios
        const formData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            bio
        };

        // axios.post('/your-endpoint', formData).then(response => ...).catch(error => ...);
    };

    return (
        <div className="body">
            <div className="greenBorder">
                <button type="submit" className="submit-button">Submit</button>
            </div>
            <div className="registrationContainer"> 
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>

                    {/* First Name input */}
                    <div className="input-box">
                        <label htmlFor="firstname">First Name:</label>
                        <input 
                            tabIndex="0" 
                            type="text" 
                            id="firstName" 
                            name="firstname" 
                            placeholder="Enter First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required 
                        />
                    </div>

                    {/* Last Name input */}
                    <div className="input-box">
                        <label htmlFor="lastname">Last Name:</label>
                        <input 
                            tabIndex="0" 
                            type="text" 
                            id="lastName" 
                            name="lastname" 
                            placeholder="Enter Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required 
                        />
                    </div>

                    {/* Email input */}
                    <div className="input-box">
                        <label htmlFor="email">Email:</label>
                        <input 
                            tabIndex="0" 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter an Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>

                    {/* Password input */}
                    <div className="input-box">
                        <label htmlFor="password">Password:</label>
                        <input 
                            tabIndex="0" 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Enter a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>

                    {/* Phone Number input */}
                    <div className="input-box">
                        <label htmlFor="phonenumber">Phone Number:</label>
                        <input 
                            tabIndex="0" 
                            type="text" 
                            id="phone" 
                            name="phonenumber" 
                            placeholder="Enter a phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required 
                        />
                    </div>

                    {/* Bio input */}
                    <div className="input-box">
                        <label htmlFor="Bio">Bio:</label>
                        <input 
                            tabIndex="0" 
                            type="text" 
                            id="Bio" 
                            name="Bio" 
                            placeholder="Tell us about yourself"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            required 
                        />
                    </div>

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Registration;
