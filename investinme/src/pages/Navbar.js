// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="flex-container">
        <Link to="/home">Home</Link>
        <Link to="/profile">My Profile</Link>
        <Link to="/about">About</Link>
        
    </div>
  );
}

export default Navbar;
