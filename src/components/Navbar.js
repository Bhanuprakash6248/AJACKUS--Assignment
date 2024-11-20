import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import './Styles/Navbar.css';

const Navbar = () => {

  const navigate =useNavigate()
  
  return (
    <nav className="navbar">
      <div className="navbar-brand"><h3 onClick={()=>navigate("/")  } >User Management</h3></div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-head">Dashboard</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      
      </div>
    </nav> 
  );
};

export default Navbar;
