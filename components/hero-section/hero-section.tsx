'use client'

import React from 'react';
import Image from 'next/image';
import DynamicBookingForm from '../booking-form/dynamic-booking-form';
import styles from './hero-section.module.css';
import { APP_STORE_IMAGE, GOOGLE_PLAY_IMAGE } from '@/lib/images';

// HeroSection component definition
const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <main className={styles.heroContent}>
        {/* Main title of the hero section */}
        <h1 className={styles.heroTitle}>
          INDIA'S <span className={styles.highlight}>LEADING  <br /> </span>
          <span className={styles.highlight}>ONE-WAY INTER-CITY <br /> </span>
          CAB  SERVICE PROVIDER
        </h1>
        {/* Dynamic booking form component */}
        <DynamicBookingForm />
      </main>

      <footer className={styles.footerBanner}>
        {/* Left banner item */}
        <div className={`${styles.bannerItem} ${styles.left}`}>
          <h2>Transparent Billing</h2>
          <p>GPS Based Billing | No Km Tampering</p>
        </div>
        <hr className='hr' />
        {/* Center banner item with app download links */}
        <div className={`${styles.bannerItem} ${styles.center}`}>
          <h3>Download Now!</h3>
          <div className={styles.appStores}>
            <Image src={GOOGLE_PLAY_IMAGE} alt="Get it on Google Play" width={150} height={50} />
            <Image src={APP_STORE_IMAGE} alt="Download on the App Store" width={150} height={50} />
          </div>
        </div>
        <hr className='hr' />
        {/* Right banner item */}
        <div className={`${styles.bannerItem} ${styles.right}`}>
          <h2>No return fare</h2>
          <p>One-Way cab fare | No hidden charges</p>
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;