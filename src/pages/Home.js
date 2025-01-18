import React from 'react';
import styles from './home.module.css';
import homepageImage from '../Assets/homepagepic-removebg.png';  // Import the image

const Home = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1>Mult-Side Technologies</h1>
          <p>Keeping You Safe and Secure</p>
        </div>

        <div className={styles.imageContainer}>
          <img 
            src={homepageImage}  // Use the imported image
            alt="Technology"      // Always add an alt text for accessibility
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
