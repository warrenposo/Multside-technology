import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img 
          src={require('../Assets/logo a.png')} 
          alt="Multiside Technologies Logo" 
          style={{ height: '70px', width: 'auto' }} 
        />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Desktop Links */}
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

      {/* Mobile Menu */}
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="home" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Home</Link>
        <Link to="about" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>About Us</Link>
        <Link to="services" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Services</Link>
        <Link to="reviews" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Reviews</Link>
        <Link to="contact" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Contact Us</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
