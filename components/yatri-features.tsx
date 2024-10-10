"use client"

import React from 'react';

const YatriFeatures: React.FC = () => {
    return (
        <div className="yatri-container">
            <div className="feature-boxes">
                <FeatureBox
                    icon="🖐️"
                    title="RETURN FARE, NOT FAIR!"
                    description="Why Pay For Return Journey When You Are Travelling Oneway? Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost For Your One Way Travel."
                />
                <hr />
                <FeatureBox
                    icon="📍"
                    title="GPS BASED BILLING SYSTEM"
                    description="Since The GPS Data Captures The Actual Distance And Time Traveled, It Reduce The Chance Of Kilometer Tampering Or Discrepancies In Billing."
                />
                 <hr />
                <FeatureBox
                    icon="🚕"
                    title="NOW AVAILABLE ROUTES ARE!"
                    description="Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Kanpur"
                />
            </div>

            <h1 className="main-heading">INDIA'S PREMIER INTERCITY AND LOCAL TAXI SERVICES</h1>
            <p className="description">
                At Yatri Car Rental, We Pride Ourselves On Being A Top-Tier Online Oneway Car Rental & Cab Booking Service, Delivering Reliable And Premium Outstation And Local Taxi Services. With Over A Decade Of Experience, Instead Of Self-Drive Car Rental, We Have Become The Leading Driver-Driven One Way Car Rental Company In India, Renowned For Our Extensive Coverage Across The Country
            </p>

            <style jsx>{`
        .yatri-container {
          font-family: Arial, sans-serif;
          margin: 0 auto;
          padding: 20px;
        }
        .feature-boxes {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }
        .main-heading {
          text-align: center;
          color: #555;
          font-size: 24px;
          margin-bottom: 20px;
        }
        .description {
          text-align: center;
          color: #666;
          font-size: 16px;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .top-banner, .feature-boxes {
            flex-direction: column;
            align-items: center;
          }
          .top-banner > span {
            margin-bottom: 10px;
          }
        }
      `}</style>
        </div>
    );
};

interface FeatureBoxProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, description }) => {
    return (
        <div className="feature-box">
            <div className="icon">{icon}</div>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <style jsx>{`
        .feature-box {
          flex: 1;
          text-align: center;
          padding: 20px;
          border-right: 1px solid #eee;
        }
        .feature-box:last-child {
          border-right: none;
        }
        .icon {
          font-size: 36px;
          color: #4CAF50;
          margin-bottom: 10px;
        }
        .title {
          color: #4CAF50;
          font-size: 18px;
          margin-bottom: 10px;
        }
        .description {
          color: #666;
          font-size: 14px;
          line-height: 1.4;
        }
        @media (max-width: 768px) {
          .feature-box {
            border-right: none;
            border-bottom: 1px solid #eee;
            padding: 20px 0;
          }
          .feature-box:last-child {
            border-bottom: none;
          }
        }
      `}</style>
        </div>
    );
};

export default YatriFeatures;