import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      {/* Replace text with a logo image */}
      <div className="navbar-logo">
        <img 
          src={require('../Assets/logo a.png')} // Updated path to the logo
          alt="Multiside Technologies Logo"
          style={{ height: '70px', width: 'auto' }} // Adjust size as needed
        />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="nav-link">About Us</Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} className="nav-link">Services</Link>
        </li>
        <li>
          <Link to="reviews" smooth={true} duration={500} className="nav-link">Reviews</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="nav-link">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
