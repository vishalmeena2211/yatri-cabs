"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LOGO_IMAGE } from '@/lib/images';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  // State to manage the email input value
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    // Clear the email input after submission
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo Section */}
        <div className={styles.logo}>
          <Image src={LOGO_IMAGE} alt="Yatri Cabs Logo" width={150} height={50} />
        </div>
        
        {/* Navigation Links */}
        <nav className={styles.footerNav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/news">News</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
        
        {/* Newsletter Subscription Form */}
        <div className={styles.newsletter}>
          <h3>Newsletter</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <button className={styles.newsletterButton} type="submit" aria-label="Subscribe to newsletter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className={styles.copyright}>
        All Copyrights are reserved by YATRI CABS
      </div>
    </footer>
  );
};

export default Footer;