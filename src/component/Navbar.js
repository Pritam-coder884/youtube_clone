import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <input type="text"  placeholder='Search'/>
      <button>Sign In</button>
    </div>
  )
}

export default Navbar