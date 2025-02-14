import React from 'react';
import './cartracker.css';
import carTrackerImage from '../Assets/car_tracker.png';

const CarTracking = () => {
  return (
    <div className="carTracking-page-container">
      <div className="carTracking-content-container">
        <h1 className="carTracking-title">Car Tracking Installation</h1>
        <div className="carTracking-image-container">
          <img src={carTrackerImage} alt="Car Tracking" className="carTracking-image" />
        </div>
        <div className="carTracking-blocks-container">
          <div className="carTracking-block carTracking-left-block">
            <h2>Who We Are</h2>
            <p>
              Multside is a trusted provider of vehicle security solutions, specializing in GPS car tracking installations...
            </p>
          </div>
          <div className="carTracking-block carTracking-middle-block">
            <h2>Our Car Tracking Solutions</h2>
            <p>Our car tracking services include:</p>
            <ul>
              <li><strong>GPS Tracking:</strong> Real-time location updates.</li>
              <li><strong>Geo-Fencing:</strong> Set boundaries and receive alerts.</li>
              <li><strong>Anti-Theft Solutions:</strong> Remote engine shutdown.</li>
            </ul>
          </div>
          <div className="carTracking-block carTracking-right-block">
            <h2>Why Choose Multside?</h2>
            <p>Here’s why you should trust us:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTracking;
