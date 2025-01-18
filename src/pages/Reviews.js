import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: '#3bcbd0', // Adjusted to match the blue-green gradient
        background: 'linear-gradient(180deg,rgb(171, 208, 59),rgb(168, 136, 30))', // Gradient effect
        color: 'white', // Ensure text is visible
        minHeight: '100vh', // Full-screen height
        padding: '20px',
      }}
    >
      {/* <h1>Introducing HAWKR.</h1>
      <p>Innovative vending machine technology.</p>
      <ul>
        <li>Real-time data delivery</li>
        <li>Individual machine control</li>
        <li>Advertisement syndication</li>
        <li>Built for scale to fit 100,000s of machines</li>
      </ul> */}
      <button
        style={{
          backgroundColor: 'white',
          color: '#3bcbd0',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Learn more
      </button>
    </div>
  );
};

export default Home;
