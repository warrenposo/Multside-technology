import React from 'react';
import Slider from 'react-slick'; // Import the Slider component
import styles from './Review.module.css'; // Import your CSS module

import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

// Custom Left Arrow
const PrevArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
    &#9664; {/* Left arrow character */}
  </div>
);

// Custom Right Arrow
const NextArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
    &#9654; {/* Right arrow character */}
  </div>
);

const Review = () => {
  const reviews = [
    {
      text: "Multiside did a very nice job on Camera, Solar and Biometic installation at Ecofrend Cleaning Solution premises. ”",
      stars: 5,
      author: "Wilson mwangi",
    },
    {
      text: "“Excellent Customer Services in Installation & maintenance of Security Systems,Access Control,CCTV Surveillance & Telecom Systems”",
      stars: 5,
      author: "David Onyango",
    },
    {
      text: "“Your customer support is the best I have experienced. Thanks for quality services. All your efforts are greatly appreciated on our end.”",
      stars: 5,
      author: "Godfrey Ochieng",
    },
  ];

  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 5000, // 5 seconds per slide
    arrows: true, // Enable left/right arrows
    prevArrow: <PrevArrow />, // Custom left arrow
    nextArrow: <NextArrow />, // Custom right arrow
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>What Our Customers Say</h2>
      <Slider {...settings} className={styles.slider}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <p className={styles.reviewText}>{review.text}</p>
            <div className={styles.stars}>
              {Array.from({ length: review.stars }).map((_, starIndex) => (
                <span key={starIndex} className={styles.star}>★</span>
              ))}
            </div>
            <p className={styles.author}>{review.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
