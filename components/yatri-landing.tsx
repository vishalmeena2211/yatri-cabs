"use client"

import React from 'react';
import Image from 'next/image';

const YatriLanding: React.FC = () => {
    return (
        <div className="yatri-container">
            <h1 className="yatri-heading">
                WHY <span className="yatri-green">YATRI</span> ?
            </h1>
            <div className="yatri-content">
                <div className="yatri-image">
                    <Image
                        layout="responsive"
                        width={500}
                        height={250}
                        src="https://www.yatricabs.com/_next/static/media/car.32d36d5d.svg"
                        alt="Yatri Car with Customers"
                    />
                </div>
                <div className="yatri-features">
                    <FeatureItem
                        icon="🚩"
                        title="FAST RESPONSE TIME"
                        description="Experience The Best Car Rental Service With Driver For Local Or Outstation Trips. Enjoy Prompt Response Times And Seamless Car Hire Service, Ensuring You Get On The Road Quickly"
                    />
                    <FeatureItem
                        icon="👥"
                        title="VAST FLEET"
                        description="We Offer A Wide Range Of Rental Cars Including Sedans, SUVs, MUVs, Premium Sedans, And Tempo Travellers To Meet All Your Needs."
                    />
                    <FeatureItem
                        icon="📱"
                        title="EASY TO ORDER"
                        description="Easily Book A Cab Online Through Our User-Friendly Website, Mobile Application, Or By Calling Our Customer Support Team."
                    />
                    <FeatureItem
                        icon="💰"
                        title="GREAT TARIFFS"
                        description="Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly Competitive Compared To Other Operators. Book Online Cabs At The Best Prices With Yatri Car Rental."
                    />
                </div>
            </div>
            <style jsx>{`
                .yatri-container {
                    font-family: Arial, sans-serif;
                    margin: 0 auto;
                    padding: 20px;
                }
                .yatri-heading {
                    font-size: 36px;
                    text-align: center;
                    color: #333;
                    margin-bottom: 20px;
                }
                .yatri-green {
                    color: #2e7d32;
                }
                .yatri-content {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                .yatri-image {
                    text-align: center;
                }
                .yatri-features {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                }
                @media (min-width: 768px) {
                    .yatri-content {
                        flex-wrap: nowrap;
                    }
                   
                    .yatri-features {
                    grid-template-columns: 1fr;
                    
                    }
                }
                @media (min-width: 1024px) {
                    .yatri-heading {
                        font-size: 48px;
                    }
                }
            `}</style>
        </div>
    );
};

interface FeatureItemProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
    return (
        <div className="feature-item">
            <div className="feature-icon">{icon}</div>
            <div className="feature-content">
                <h2 className="feature-title">{title}</h2>
                <p className="feature-description">{description}</p>
            </div>
            <style jsx>{`
                .feature-item {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 20px;
                }
                .feature-icon {
                    font-size: 24px;
                    margin-right: 15px;
                    min-width: 30px;
                }
                .feature-title {
                    color: #2e7d32;
                    font-size: 16px;
                    margin: 0 0 5px 0;
                }
                .feature-description {
                    color: #666;
                    font-size: 14px;
                    line-height: 1.5;
                    margin: 0;
                }
                @media (min-width: 768px) {
                    .feature-title {
                        font-size: 18px;
                    }
                }
            `}</style>
        </div>
    );
};

export default YatriLanding;