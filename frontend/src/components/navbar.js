import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo">demoApp</Link>
        <div className="nav-links">
            <Link to="/login">Login</Link>
            <Link to="/register" >Register</Link>
        </div>
    </nav>
  );
};

export default Navbar;