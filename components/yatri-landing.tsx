"use client"

import React from 'react';
import Image from 'next/image';

const features = [
    {
        imageUrl: "https://www.yatricabs.com/_next/static/media/fast.902977f5.svg",
        title: "FAST RESPONSE TIME",
        description: "Experience The Best Car Rental Service With Driver For Local Or Outstation Trips. Enjoy Prompt Response Times And Seamless Car Hire Service, Ensuring You Get On The Road Quickly"
    },
    {
        imageUrl: "https://www.yatricabs.com/_next/static/media/peoples.1f196f36.svg",
        title: "VAST FLEET",
        description: "We Offer A Wide Range Of Rental Cars Including Sedans, SUVs, MUVs, Premium Sedans, And Tempo Travellers To Meet All Your Needs."
    },
    {
        imageUrl: "https://www.yatricabs.com/_next/static/media/router.2953c188.svg",
        title: "EASY TO ORDER",
        description: "Easily Book A Cab Online Through Our User-Friendly Website, Mobile Application, Or By Calling Our Customer Support Team."
    },
    {
        imageUrl: "https://www.yatricabs.com/_next/static/media/doller.8cb6fc6a.svg",
        title: "GREAT TARIFFS",
        description: "Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly Competitive Compared To Other Operators. Book Online Cabs At The Best Prices With Yatri Car Rental."
    }
];

const YatriLanding: React.FC = () => {
    return (
        <div className="yatri-container">
            <h1 className="yatri-heading">
                WHY <span className="yatri-green">YATRI</span> ?
            </h1>
            <div className="yatri-content">
                <div className="yatri-image">
                    <img
                        src="https://www.yatricabs.com/_next/static/media/car.32d36d5d.svg"
                        alt="Yatri Car with Customers"
                    />
                </div>
                <div className="yatri-features">
                    {features.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            imageUrl={feature.imageUrl}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
            <style jsx>{`
                .yatri-container {
                    font-family: Arial, sans-serif;
                    margin: 0 auto;
                    padding: 20px;
                }
                .yatri-heading {
                    font-size: 32px;
                    text-align: center;
                    color: #555;
                    margin-bottom: 20px;
                    font-weight: bold;
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
                .yatri-image img {
                   height; 100%;
                   width: 100%;
                   object-fit: cover;
                }
                .yatri-features {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    column-gap: 20px;
                }
                @media (min-width: 768px) {
                    .yatri-heading {
                        font-size: 36px;
                    }
                    .yatri-content {
                        flex-wrap: nowrap;
                    }
                    .yatri-features {
                        max-width: 500px;
                        grid-template-columns: 1fr;
                    }
                    .yatri.image{
                        flex: 1;
                    }
                    
                }
                @media (min-width: 1024px) {
                    .yatri-heading {
                        font-size: 48px;
                    }
                    .yatri-features {
                        max-width: 800px;
                    }
                }
            `}</style>
        </div>
    );
};

interface FeatureItemProps {
    imageUrl: string;
    title: string;
    description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ imageUrl, title, description }) => {
    return (
        <div className="feature-item">
            <div className="feature-icon">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={30}
                    height={30}
                />
            </div>
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
                    margin-right: 15px;
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
                .feature-title {
                    color: #2e7d32;
                    font-size: 8px;
                    margin: 0 0 5px 0;
                }
                .feature-description {
                    color: #666;
                    font-size: 6px;
                    line-height: 1.5;
                    margin: 0;
                }
                @media (min-width: 768px) {
                    .feature-title {
                        font-size: 18px;
                    }
                    .feature-description {
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    );
};

export default YatriLanding;