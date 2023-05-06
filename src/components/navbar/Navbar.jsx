import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">P3D-Ticket Booking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButtons" onClick={()=>alert('already LoggedIn')}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
