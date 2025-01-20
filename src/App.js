import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import BrandExperience from './pages/BrandExperience'; // Import the new component
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div id="home" className="section">
        <Home />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="services" className="section">
        <Services />
        <BrandExperience /> {/* Add the Brand Experience section here */}
      </div>
      <div id="reviews" className="section">
        <Reviews />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
