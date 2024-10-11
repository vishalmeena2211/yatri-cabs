"use client"

import React from 'react';
import Image from 'next/image';
import styles from './yatri-landing.module.css';
import { CAR_IMAGE } from '@/lib/images';
import { featuresItems } from '@/lib/static';
import { FeatureItemProps } from '@/lib/types';

// Main component for the Yatri Landing page
const YatriLanding: React.FC = () => {
    return (
        <div className={styles.yatriContainer}>
            <h1 className={styles.yatriHeading}>
                WHY <span className={styles.yatriGreen}>YATRI</span> ?
            </h1>
            <div className={styles.yatriContent}>
                {/* Section for displaying the car image */}
                <div className={styles.yatriImage}>
                    <img
                        src={CAR_IMAGE}
                        alt="Yatri Car with Customers"
                    />
                </div>
                {/* Section for displaying the feature items */}
                <div className={styles.yatriFeatures}>
                    {featuresItems.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            imageUrl={feature.imageUrl}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Component for displaying individual feature items
const FeatureItem: React.FC<FeatureItemProps> = ({ imageUrl, title, description }) => {
    return (
        <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
                <Image
                    src={imageUrl}
                    alt={title}
                    width={30}
                    height={30}
                />
            </div>
            <div className={styles.featureContent}>
                <h2 className={styles.featureTitle}>{title}</h2>
                <p className={styles.featureDescription}>{description}</p>
            </div>
        </div>
    );
};

export default YatriLanding;