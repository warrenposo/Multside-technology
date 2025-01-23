import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if the screen is mobile

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Update the isMobile state whenever the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      {/* Desktop Links - Visible only on desktop */}
      {!isMobile && (
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
      )}

      {/* Mobile Menu - Visible only on mobile */}
      {isMobile && (
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="home" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>About Us</Link>
          <Link to="services" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Services</Link>
          <Link to="reviews" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Reviews</Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link" onClick={toggleMenu}>Contact Us</Link>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
