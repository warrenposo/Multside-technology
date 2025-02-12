import React from 'react';
import styles from './home.module.css';
import backgroundVideo from '../Assets/backgroundvid.mp4'; // Import the video

const Home = () => {
  return (
    <div className={styles.banner}>
      {/* Video Background */}
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.gradientText}>MULT-SIDE TECHNOLOGIES</h1>
          <p className={styles.tagline}>Keeping You Safe and Secure</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
