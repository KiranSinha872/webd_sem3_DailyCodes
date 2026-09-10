import React from 'react'
import logo from './assets/logo.svg'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Zerodha Logo on the left */}
        <div className="navbar-logo">
          <a href="#">
            <img src={logo} alt="Zerodha logo" className="logo-image" />
          </a>
        </div>

        {/* Navigation items on the right */}
        <div className="navbar-right">
          <ul className="navbar-links">
            <li><a href="#">Signup</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Support</a></li>
          </ul>

          {/* Hamburger menu icon */}
          <div className="hamburger-menu" title="Menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
