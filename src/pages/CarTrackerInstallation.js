import React from 'react';
import './cartracker.css';
import carTrackerImage from '../Assets/car_tracker.png';

const CarTracking = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Car Tracking Installation</h1>
        <div className="image-container">
          <img src={carTrackerImage} alt="Car Tracking" className="tracking-image" />
        </div>
        <div className="blocks-container">
          <div className="block left-block">
            <h2>Who We Are</h2>
            <p>
              Multside is a trusted provider of vehicle security solutions, specializing in GPS car tracking installations. We offer cutting-edge tracking systems to help individuals and businesses monitor their vehicles in real time.
            </p>
          </div>
          <div className="block middle-block">
            <h2>Our Car Tracking Solutions</h2>
            <p>
              Our car tracking services include:
            </p>
            <ul>
              <li><strong>GPS Tracking:</strong> Real-time location updates and movement history.</li>
              <li><strong>Geo-Fencing:</strong> Set boundaries and receive alerts when your vehicle moves outside designated areas.</li>
              <li><strong>Anti-Theft Solutions:</strong> Remote engine shutdown and recovery assistance in case of theft.</li>
            </ul>
          </div>
          <div className="block right-block">
            <h2>Why Choose Multside?</h2>
            <p>
              Here’s why you should trust Multside for your car tracking needs:
            </p>
            <ul>
              <li><strong>24/7 Monitoring:</strong> Keep track of your vehicle anytime, anywhere.</li>
              <li><strong>Reliable Technology:</strong> Our systems use the latest GPS and GSM technology for precise tracking.</li>
              <li><strong>Enhanced Security:</strong> Prevent theft and unauthorized use with real-time alerts and remote control features.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTracking;
