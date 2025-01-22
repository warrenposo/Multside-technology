import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer visibility

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img
          src={require('../Assets/logo a.png')}
          alt="Multiside Technologies Logo"
          className={styles.logoImage}
        />
      </div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleDrawer}>
        ☰
      </div>

      {/* Drawer Menu */}
      <div className={`${styles.drawer} ${drawerOpen ? styles.open : ''}`}>
        <ul className={styles.drawerLinks}>
          <li>
            <Link to="home" smooth={true} duration={500} className={styles.navLink} onClick={toggleDrawer}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className={styles.navLink} onClick={toggleDrawer}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className={styles.navLink} onClick={toggleDrawer}>
              Services
            </Link>
          </li>
          <li>
            <Link to="reviews" smooth={true} duration={500} className={styles.navLink} onClick={toggleDrawer}>
              Reviews
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className={styles.navLink} onClick={toggleDrawer}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
