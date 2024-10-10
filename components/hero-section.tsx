"use client"

import React from 'react';
import Image from 'next/image';
import DynamicBookingForm from './dynamic-booking-form';

const HeroSection: React.FC = () => {

    return (
        <div className="hero-container">
            <main className="hero-content">
                <h1 className="hero-title">
                    INDIA'S <span className="highlight">LEADING</span><br />
                    <span className="highlight">ONE-WAY INTER-CITY</span><br />
                    CAB SERVICE PROVIDER
                </h1>
                <DynamicBookingForm />
            </main>

            <footer className="footer-banner">
                <div className="banner-item">
                    <h3>Transparent Billing</h3>
                    <p>GPS Based Billing | No Km Tampering</p>
                </div>
                <hr />
                <div className="banner-item">
                    <h3>Download Now!</h3>
                    <div className="app-stores">
                        <Image src="https://www.yatricabs.com/_next/static/media/Google_play.f4f741e9.svg" alt="Get it on Google Play" width={120} height={40} />
                        <Image src="https://www.yatricabs.com/_next/static/media/app_store.e55a83b4.svg" alt="Download on the App Store" width={120} height={40} />
                    </div>
                </div>
                <hr />
                <div className="banner-item">
                    <h3>No return fare</h3>
                    <p>One-Way cab fare | No hidden charges</p>
                </div>
            </footer>

            <style jsx>{`
        .hero-container {
          font-family: Arial, sans-serif;
          background-image: url('https://www.yatricabs.com/_next/static/media/header.bc9e4e77.png');
          background-size: cover;
          background-position: center;
          color: white;
          height: 80vh;
          display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 3rem;
        }
        .hero-content {
          display: flex;
          justify-content: space-between;
          padding: 2rem;
        }
        .hero-title {
          font-size: 2.5rem;
          line-height: 1.2;
        }
        .highlight {
          color: #4CAF50;
        }
        .form-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .input-group {
          display: flex;
          flex-direction: column;
        }
        .explore-cabs {
          width: 100%;
          padding: 0.5rem;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 1rem;
        }
        .footer-banner {
          display: flex;
          justify-content: space-between;
          background-color: #d9d9d9;
          color: black;
          padding: 1rem;
          border-radius: 10px;
          margin: 0 1rem;
          transform: translateY(50%);
        }
        .banner-item {
          width: 100%;
          text-align: center;
        }
        .app-stores {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
          }
          .form-inputs {
            grid-template-columns: 1fr;
          }
          .footer-banner {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
        </div>
    );
};

export default HeroSection;