import React from 'react';
import styles from './BrandExperience.module.css'; // Create a separate CSS file for styles

const BrandExperience = () => {
  const brands = [
    { name: 'Lendplus', logo: '/path/to/bayer_logo.png' }, // Replace with actual logo paths
    { name: 'Facts', logo: '/path/to/lilly_logo.png' },
    { name: 'Hill view residents', logo: '/path/to/gsk_logo.png' },
    { name: 'Victoria bank Limited', logo: '/path/to/pfizer_logo.png' },
    { name: 'Inter build limited', logo: '/path/to/nhs_logo.png' },
    { name: 'Xylem', logo: '/path/to/diageo_logo.png' },
    { name: 'Rising Freight limited', logo: '/path/to/fanisi_logo.png' },
    { name: 'Broll kenya Limited', logo: '/path/to/tarmac_logo.png' },
    { name: 'Blackwood Hodge limited', logo: '/path/to/ballymore_logo.png' },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Brand Experience</h2>
      <div className={styles.divider}></div>
      <div className={styles.grid}>
        {brands.map((brand, index) => (
          <div key={index} className={styles.card}>
            <img
              src={brand.logo}
              alt={brand.name}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandExperience;
