"use client"

import React from 'react';
import styles from './why-choose-one-way-cab.module.css';
import { MOVING_CAR_IMAGE } from '@/lib/images';
import { leftColumnItems, rightColumnItems } from '@/lib/static';

// Functional component for the "Why Choose One Way Cab" section
const WhyChooseOneWayCab: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>WHY CHOOSE ONE WAY CAB?</h1>
            <div className={styles.content}>
                {/* Left column with list items */}
                <div className={styles.column}>
                    <ul>
                        {leftColumnItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                {/* Center column with an illustration */}
                <div className={`${styles.column} ${styles.illustration}`}>
                    <img src={MOVING_CAR_IMAGE} alt="Illustration of a red car on a road" />
                </div>
                {/* Right column with list items */}
                <div className={styles.column}>
                    <ul>
                        {rightColumnItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Footer text with highlighted span */}
            <p className={styles.footer}>
                DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS <span className={styles.highlight}>INTERCITY CAR RENTALS</span> IN INDIA – WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN EVERY CITY. UNLEASH YOUR JOURNEY!
            </p>
        </div>
    );
};

export default WhyChooseOneWayCab;