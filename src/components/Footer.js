import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>MULT-SIDE</h2>
          <p>Technologies</p>
          <p>
            Keeping you safe and secure
          </p>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Center Section */}
        <div className={styles.linksSection}>
          <h3>Quick links</h3>
          <ul>
            <li><a href="#digital-marketing">Digital Marketing</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#developers">Developers</a></li>
            <li><a href="#services">Our Services</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className={styles.contactSection}>
          <h3>Contact Us</h3>
          <p>KE NAIROBI, KENYA</p>
          <p>K-MALL,</p>
          <p>Kiambu Rd, Nairobi</p>
          <p>+254727676338</p>
        </div>
      </div>

      {/* Social Links */}
      <div className={styles.socialSection}>
        <h3>Follow Us</h3>
        <div className={styles.socialIcons}>
          <a href="#instagram" className={styles.icon}>📷</a>
          <a href="#tiktok" className={styles.icon}>🎵</a>
          <a href="#linkedin" className={styles.icon}>🔗</a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>
          © 2025 | All Rights Reserved &nbsp;
          <a href="#privacy-policy">Privacy Policy</a> | 
          <a href="#terms-conditions">Terms & Conditions</a> | 
          <a href="#cookies-policy">Cookies Policy</a> | 
          <a href="#sla">Service Level Agreement</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
