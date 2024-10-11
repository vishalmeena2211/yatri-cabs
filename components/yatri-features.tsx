"use client"

import React from 'react';

const features = [
  {
    image: "https://www.yatricabs.com/_next/static/media/green-hand.5b134ac5.svg",
    title: "RETURN FARE, NOT FAIR!",
    description: "Why Pay For Return Journey When You Are Travelling Oneway? Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost For Your One Way Travel."
  },
  {
    image: "https://www.yatricabs.com/_next/static/media/green-location.e0e5d9cc.svg",
    title: "GPS BASED BILLING SYSTEM",
    description: "Since The GPS Data Captures The Actual Distance And Time Traveled, It Reduce The Chance Of Kilometer Tampering Or Discrepancies In Billing."
  },
  {
    image: "https://www.yatricabs.com/_next/static/media/green-driving.ef936839.svg",
    title: "NOW AVAILABLE ROUTES ARE!",
    description: "Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Kanpur"
  }
];

const YatriFeatures: React.FC = () => {
  return (
    <div className="yatri-container">
      <div className="feature-boxes">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <FeatureBox
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
            {index < features.length - 1 && <hr />}
          </React.Fragment>
        ))}
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
          color: #777;
          font-size: 20px;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .feature-boxes {
            flex-direction: row;
            flex-wrap: wrap;
          }
             .yatri-container {
          padding: 20px 10px;
        }
          .main-heading {
            font-size: 16px;
            margin-bottom: 10px;
          }
             .description {
          font-size: 11px;
          line-height: 1.2;
        }
        }
      `}</style>
    </div>
  );
};

interface FeatureBoxProps {
  image: string;
  title: string;
  description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ image, title, description }) => {
  return (
    <div className="feature-box">
      <img src={image} alt='temp' className="image" />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <style jsx>{`
        .feature-box {
          flex: 1;
          text-align: center;
          padding: 20px;
        }
        .image {
          color: #4CAF50;
          margin-bottom: 10px;
          width: 100px;
          height: 100px;
        }
        .title {
          color: #4CAF50;
          font-size: 22px;
          margin-bottom: 10px;
        }
        .description {
          color: #666;
          font-size: 18px;
          line-height: 1.4;
        }
        @media (max-width: 768px) {
          .feature-box {
            padding: 10px;
          }
          .image {
            width: 20px;
            height: 20px;
          }
          .title {
            font-size: 10px;
            font-weight: 500;
          }
          .description {
            font-size: 8px;
            line-height: 1.2;
          }
        }
      `}</style>
    </div>
  );
};

export default YatriFeatures;
