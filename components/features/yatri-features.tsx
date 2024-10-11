"use client"

import React from 'react';
import styles from './yatri-features.module.css'; // Importing CSS module for styling
import { features } from '@/lib/static'; // Importing features data
import { FeatureBoxProps } from '@/lib/types'; // Importing types for props

// Main component for Yatri Features
const YatriFeatures: React.FC = () => {
  return (
    <div className={styles.yatriContainer}>
      <div className={styles.featureBoxes}>
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <FeatureBox
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
            {index < features.length - 1 && <hr />} {/* Render a horizontal rule between feature boxes */}
          </React.Fragment>
        ))}
      </div>

      <h1 className={styles.mainHeading}>INDIA'S PREMIER INTERCITY AND LOCAL TAXI SERVICES</h1>
      <p className={styles.description}>
        At Yatri Car Rental, We Pride Ourselves On Being A Top-Tier Online Oneway Car Rental & Cab Booking Service, Delivering Reliable And Premium Outstation And Local Taxi Services. With Over A Decade Of Experience, Instead Of Self-Drive Car Rental, We Have Become The Leading Driver-Driven One Way Car Rental Company In India, Renowned For Our Extensive Coverage Across The Country
      </p>
    </div>
  );
};

// Component for individual feature box
const FeatureBox: React.FC<FeatureBoxProps> = ({ image, title, description }) => {
  return (
    <div className={styles.featureBox}>
      <img src={image} alt='temp' className={styles.image} /> {/* Feature image */}
      <h2 className={styles.title}>{title}</h2> {/* Feature title */}
      <p className={styles.description}>{description}</p> {/* Feature description */}
    </div>
  );
};

export default YatriFeatures; // Exporting the main component
