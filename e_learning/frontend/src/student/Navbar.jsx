// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="link">Home</Link>
                <div className="menu">
                    <Link to="/courses" className="link">Courses</Link>
                    <Link to="/about" className="link">About Us</Link>
                    <Link to="/feedback" className="link">Feedback</Link>
                    <Link to="/profile" className="link">Profile</Link>
                    <Link to="/login" className="link">Register</Link>
                    <Link to="/login" className="link">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
