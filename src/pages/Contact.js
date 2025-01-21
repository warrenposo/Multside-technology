import React from 'react';
import styles from './Contact.module.css';

const Contactus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactDetails}>
        <h2>Contact Information</h2>
        <div className={styles.infoItem}>
          <span className={styles.icon}>📞</span>
          <div>
            <h4>Phone</h4>
            <p>+254727676338</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.icon}>📧</span>
          <div>
            <h4>Email Us</h4>
            <p>multsidetechnologies@gmail.com</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.icon}>📍</span>
          <div>
            <h4>Address</h4>
            <p>K-mall, Kiambu Rd</p>
          </div>
        </div>
      </div>

      <div className={styles.contactForm}>
        <h2>Send Us a Message</h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" placeholder="Full name" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" placeholder="Email address" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" placeholder="Phone Number" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message *</label>
            <textarea id="message" placeholder="Your message here.." rows="4" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
