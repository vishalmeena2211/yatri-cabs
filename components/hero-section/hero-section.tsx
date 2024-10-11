'use client'

import React from 'react';
import Image from 'next/image';
import DynamicBookingForm from '../booking-form/dynamic-booking-form';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <main className="hero-content">
        <h1 className="hero-title">
          INDIA'S <span className="highlight">LEADING  <br /> </span>
          <span className="highlight">ONE-WAY INTER-CITY <br /> </span>
          CAB  SERVICE PROVIDER
        </h1>
        <DynamicBookingForm />
      </main>

      <footer className="footer-banner">
        <div className="banner-item left">
          <h2>Transparent Billing</h2>
          <p>GPS Based Billing | No Km Tampering</p>
        </div>
        <div className="banner-item center">
          <h3>Download Now!</h3>
          <div className="app-stores">
            <Image src="https://www.yatricabs.com/_next/static/media/Google_play.f4f741e9.svg" alt="Get it on Google Play" width={150} height={50} />
            <Image src="https://www.yatricabs.com/_next/static/media/app_store.e55a83b4.svg" alt="Download on the App Store" width={150} height={50} />
          </div>
        </div>
        <div className="banner-item right">
          <h2>No return fare</h2>
          <p>One-Way cab fare | No hidden charges</p>
        </div>
      </footer>

      <style jsx>{`
        .hero-container {
          font-family: Arial, sans-serif;
          // background-image: url('https://www.yatricabs.com/_next/static/media/header.bc9e4e77.png');
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          height:auto;
        }

        .hero-content {
          background: linear-gradient(to right,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url('https://www.yatricabs.com/_next/static/media/header.bc9e4e77.png');
          background-size: cover;
          background-position: center;
          color: white;
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          item-align: center;
          justify-content: center;
          gap: 2rem;
          margin: 0 auto;
          width: 100%;
          // padding: 1rem 1rem 0 1rem;
        }

        .hero-title {
          font-size: 3.1rem;
          line-height: 1.2;
          font-weight: 400;
          margin: 0;
        }

        .highlight {
          color: #4CAF50;
          font-weight: bold;
        }

        .footer-banner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          background-color: #d9d9d9;
          color: black;
          padding: 1rem;
          border-radius: 50px;
          transform: translateY(-50%);
        }

        

        .banner-item {
          flex: 1;
          flex-direction: column;
          text-align: center;
          padding: 0 1rem;
        }

        .banner-item h2 {
          margin: 0 0 0.5rem 0;
          font-size: 1.7rem;
          font-weight: bold;
        }
        .banner-item h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.2rem;
          font-weight: bold;
        }

        .banner-item p {
          margin: 0;
          font-size: 1rem;
        }

        .app-stores {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          margin-top: 0.5rem;
        }
        @media (max-width: 768px) {

          .hero-content{
          padding: 4px 12px;
          gap: 4px;
          min-height: calc(100vh - 50px);
        }
          .left{
          order: 1;
          width: 50%;
        }

        .center{
          order: 3;
          width: 100%;
        }

        .right{
          order: 2;
          width: 50%;
        } 

          .hero-title {
            font-size: 2rem;
          }

          .footer-banner {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            transform: translateY(0);
            margin-top: 1rem;
          }
          
          .banner-item {
            padding: 0.5rem 0;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .footer-banner {
            flex-wrap: wrap;
          }

          .banner-item {
            flex-basis: 50%;
            padding: 0.5rem 0;
          }

          .banner-item:last-child {
            flex-basis: 100%;
          }
        }

        @media (min-width: 1025px) {
          .hero-content {
            flex-direction: row;
            align-items: center;
            padding: 0 2rem;
          }

          .banner-item p {
          font-size: 1.5rem;
        }

        .banner-item h2 {
          font-size: 2.7rem;
        }
        .banner-item h3 {
          font-size: 1.7rem;
        }

          .hero-title {
            flex: 1;
          },
        }
      `}</style>
    </div>
  );
};

export default HeroSection;