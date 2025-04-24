import React from 'react'
import {useState} from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
<div className="nav-logo">
      <img src={logo} alt="" />
      <p>OEM Auto Parts Chattogram</p> </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("exterior-parts")}}><Link style={{ textDecoration: 'none' }} to='/exterior-parts'>Exterior Parts</Link>{menu==="Exterior Parts"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("interior-parts")}}><Link style={{ textDecoration: 'none' }} to='/exterior-parts'>Interior Parts</Link>{menu==="Interior Parts"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Contact")}}><Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>{menu==="Contact"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar
