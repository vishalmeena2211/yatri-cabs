"use client"

import React from 'react';
import styles from './tariffs-and-comparison.module.css';
import { BOOK_TAXI_IMAGE } from '@/lib/images';

// Functional component for displaying tariffs and comparison
const TariffsAndComparison: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* Section for displaying tariff details */}
            <div className={styles.tariffSection}>
                <div className={styles.tariffGrid}>
                    {/* Headers for the tariff table */}
                    <div className={styles.tariffHeader}>Car Type</div>
                    <div className={styles.tariffHeader}>Model Includes</div>
                    <div className={styles.tariffHeader}>Passengers</div>
                    <div className={styles.tariffHeader}>Ideal For</div>
                    <div className={styles.tariffHeader}>Fare</div>

                    {/* Tariff details for AC Sedans */}
                    <div className={styles.tariffCell}>AC Sedans</div>
                    <div className={styles.tariffCell}>Etios, Amaze, Dzire etc.</div>
                    <div className={styles.tariffCell}>4 Pax</div>
                    <div className={styles.tariffCell}>Comfortable trips with small families</div>
                    <div className={styles.tariffCell}>Rs.11/KM</div>

                    {/* Tariff details for AC Hatchbacks */}
                    <div className={styles.tariffCell}>AC Hatchbacks</div>
                    <div className={styles.tariffCell}>Wagon R, Celerio, Micra etc.</div>
                    <div className={styles.tariffCell}>4 Pax</div>
                    <div className={styles.tariffCell}>Budget trips over short distances</div>
                    <div className={styles.tariffCell}>Rs.11/KM</div>

                    {/* Tariff details for AC SUVs */}
                    <div className={styles.tariffCell}>AC SUV</div>
                    <div className={styles.tariffCell}>Ertiga, Xylo etc.</div>
                    <div className={styles.tariffCell}>6-7 Pax</div>
                    <div className={styles.tariffCell}>Premium trips with large families</div>
                    <div className={styles.tariffCell}>Rs.13/KM</div>
                </div>
            </div>

            {/* Section for displaying comparison with other travel options */}
            <div className={styles.comparisonSection}>
                <div className={styles.textContent}>
                    <h2>WHY CHOOSE AC BUS OR <br /> AC TRAIN FOR YOUR <span className={styles.highlight}>ONE-WAY</span> JOURNEY?</h2>
                    <p>Our oneway Car Rental service is cheaper than AC bus and 2-tier AC train ticket fares. It reduces your travel time, and you travel in your own private space, allowing you to fully enjoy your journey. Our one way taxi will come to your doorstep and take you to your desired destination. So, book your Cheapest one way cab from Lucknow to Gorakhpur or Varanasi to Bareilly</p>
                    <span>Read More...</span>
                </div>
                <div className={styles.imageContent}>
                    <img
                        src={BOOK_TAXI_IMAGE} alt="Smartphone app illustration" />
                </div>
            </div>

        </div>
    );
};

export default TariffsAndComparison;
