"use client"

import React from 'react';
import styles from './info-sections.module.css'; 
import { InfoItemProps, InfoSectionProps } from '@/lib/types'; 
import { discoveringIndia, whyChooseYatri } from '@/lib/static'; 

// Component for rendering individual info items
const InfoItem: React.FC<InfoItemProps> = ({ title, content }) => {
  return (
    <li className={styles.infoItem}>
      {title && <strong>{title}</strong>} {/* Render title if it exists */}
      <p>{content}</p> {/* Render content */}
    </li>
  );
};

// Component for rendering a section of info items
const InfoSection: React.FC<InfoSectionProps> = ({ title, items }) => {
  return (
    <section className={styles.infoSection}>
      <h2 className={styles.sectionTitle}>{title}</h2> {/* Render section title */}
      <ul className={styles.infoList}>
        {items?.map((item, index) => (
          <InfoItem key={index} {...item} /> // Render each info item
        ))}
      </ul>
    </section>
  );
};

// Main component for rendering all info sections
const YatriInfoSections: React.FC = () => {
  return (
    <div className={styles.yatriInfoSections}>
      <InfoSection {...discoveringIndia} /> {/* Render 'Discovering India' section */}
      <InfoSection {...whyChooseYatri} /> {/* Render 'Why Choose Yatri' section */}
    </div>
  );
};

export default YatriInfoSections; // Export the main component