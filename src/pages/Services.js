import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Service.module.css';

// Import images
import doorSecurityPic from '../Assets/door_system.png';
import cctvPic from '../Assets/CCtv_pic.png';
import fiberPic from '../Assets/fibreee-cable.png';
import carTrackerPic from '../Assets/car_tracker.png';
import fireDetectionPic from '../Assets/fire_detection.png';
import vehicleTrackingPic from '../Assets/managementm.png';

const Services = () => {
  const services = [
    {
      title: 'Door Security',
      description: 'Implement advanced door security systems...',
      image: doorSecurityPic,
      link: '/services/door-security', // Match with App.js route
    },
    {
      title: 'CCTV Installation',
      description: 'Expert installation of high-resolution CCTV systems...',
      image: cctvPic,
      link: '/services/cctv-installation', // Match with App.js route
    },
    {
      title: 'Fiber Installation',
      description: 'Specialized fiber optic cable installation...',
      image: fiberPic,
      link: '/services/fiber-installation', // Match with App.js route
    },
    {
      title: 'Car Tracker Installation',
      description: 'Equipping vehicles with state-of-the-art tracking devices...',
      image: carTrackerPic,
      link: '/services/car-tracker-installation', // Match with App.js route
    },
    {
      title: 'Fire Detection Installation',
      description: 'Install cutting-edge fire detection systems...',
      image: fireDetectionPic,
      link: '/services/fire-detection-installation', // Match with App.js route
    },
    {
      title: 'Vehicle Tracking Services',
      description: 'Delivering comprehensive vehicle tracking solutions...',
      image: vehicleTrackingPic,
      link: '/services/vehicle-tracking-services', // Match with App.js route
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <Link key={index} to={service.link} className={styles.cardLink}>
            <div className={styles.card}>
              <img src={service.image} alt={service.title} className={styles.cardImage} />
              <h2 className={styles.cardTitle}>{service.title}</h2>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
