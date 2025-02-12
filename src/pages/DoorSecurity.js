import React from 'react';
import './doorSecurity.css';
import doorSecurityImage from '../Assets/door_system.png';

const DoorSecurity = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Door Security</h1>
        <div className="image-container">
          <img src={doorSecurityImage} alt="Door Security" className="security-image" />
        </div>
        <div className="blocks-container">
          <div className="block left-block">
            <h2>Who We Are</h2>
            <p>
              Multside is a leading provider of advanced security solutions, specializing in state-of-the-art door security systems. With years of experience in the industry, we have built a reputation for delivering reliable, innovative, and cost-effective security solutions tailored to meet the unique needs of our clients.
            </p>
          </div>
          <div className="block middle-block">
            <h2>Our Door Security Solutions</h2>
            <p>
              We offer a wide range of door security products and services to cater to residential, commercial, and industrial clients. Our solutions include:
            </p>
            <ul>
              <li><strong>Smart Locks:</strong> Our high-tech smart locks offer keyless entry, remote access, and real-time monitoring through mobile apps.</li>
              <li><strong>Biometric Access Control:</strong> Enhance security with fingerprint or facial recognition technology for restricted areas.</li>
              <li><strong>Reinforced Doors:</strong> We provide durable, tamper-proof doors designed to resist break-ins and forced entry.</li>
            </ul>
          </div>
          <div className="block right-block">
            <h2>Why Choose Multside?</h2>
            <p>
              Choosing the right security provider is crucial for ensuring the safety of your property. Here’s why Multside is the preferred choice for many customers:
            </p>
            <ul>
              <li><strong>Expertise:</strong> Our team of security professionals has extensive experience in designing and installing advanced security systems.</li>
              <li><strong>Customization:</strong> We understand that every client has different security needs, and we tailor our solutions accordingly.</li>
              <li><strong>Technology-Driven:</strong> We use cutting-edge technology to provide the most effective security solutions available in the market.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorSecurity;
