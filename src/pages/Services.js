import React from 'react';
import styles from './Service.module.css';

const Services = () => {
  const services = [
    {
      title: 'Security',
      description: 'High-tech security systems for homes and businesses.',
      image: '/src/Assets/security_pic.jpg', // Replace with the actual path for the Security service image
    },
    {
      title: 'Internet',
      description: 'Fast and reliable internet installation and maintenance.',
      image: '/src/Assets/internet_pic.jpg', // Replace with the actual path for the Internet service image
    },
    {
      title: 'CCTV Installation',
      description: 'Top-notch CCTV camera setups to ensure safety and monitoring.',
      image: 'src/Assets/camera_pic.jpg', // Correct relative path for CCTV Installation
    },
    {
      title: 'Fiber Installation',
      description: 'Expert fiber optic cabling for high-speed connections.',
      image: '/src/Assets/fiber_pic.jpg', // Replace with the actual path for Fiber Installation
    },
    {
      title: 'Car tracker installation',
      description: 'Reliable and modern construction services.',
      image: '/src/Assets/construction_pic.jpg', // Replace with the actual path for Construction service image
    },
    {
      title: 'Fire Detection installation',
      description: 'Reliable and modern construction services.',
      image: '/src/Assets/construction_pic.jpg', // Replace with the actual path for Construction service image
    },
    {
      title: 'Vehicle tracking services',
      description: 'Reliable and modern construction services.',
      image: '/src/Assets/construction_pic.jpg', // Replace with the actual path for Construction service image
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <img
              src={service.image}
              alt={service.title}
              className={styles.cardImage}
            />
            <h2 className={styles.cardTitle}>{service.title}</h2>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
