
import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/book">Book</Link>
          <Link to="/auth">User Authentication</Link>
        </li>
      </ul>
    </div>
  );
};


export default Navbar;