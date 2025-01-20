import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.content}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.paragraph}>
          Multside Technologies, established in October 2016, is dedicated to
          delivering comprehensive and integrated business solutions that prioritize
          quality, security, and reliability. Our mission is to empower businesses
          to innovate and grow through advanced computing and communication
          technologies.
        </p>
        <p className={styles.paragraph}>
          We are committed to organizational excellence by fostering a knowledgeable
          and trusted workforce, strategically investing in skills, modern tools, and
          cutting-edge technology to meet the evolving needs of our clients. Whether
          supporting small businesses, medium enterprises, or large corporations, we
          provide tailored solutions that address current challenges while preparing
          for future opportunities.
        </p>
        <p className={styles.paragraph}>
          Our collaborative approach combines diverse expertise to deliver comprehensive
          answers, ensuring the highest levels of service and satisfaction for our clients
          worldwide.
        </p>
      </div>
    </div>
  );
};

export default About;
