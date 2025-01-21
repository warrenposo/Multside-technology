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
      text: "“I’ve had the pleasure of working with the team at Mult-side on a variety of different projects over the past year. They always develop creative, cost-effective, practical solutions to meet our needs and deliver those solutions with a high level of professionalism and responsiveness. The team are very customer-focused and efficient and it’s a pleasure to work with them.”",
      stars: 5,
      author: "Hill view Residents Association",
    },
    {
      text: "“The professionalism and expertise demonstrated by this company have been outstanding. They take the time to understand our needs and consistently deliver solutions that exceed our expectations. A truly valuable partner!”",
      stars: 5,
      author: "Facts Africa Limited",
    },
    {
      text: "“Their innovative approach and attention to detail are remarkable. They ensured our project was completed on time and to the highest standard. Highly recommend their services for any business needs.”",
      stars: 5,
      author: "Victoria Commercial Bank",
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
