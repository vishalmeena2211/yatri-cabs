"use client"

import React from 'react';
import Image from 'next/image';

const TariffsAndComparison: React.FC = () => {
    return (
        <div className="container">
            <div className="tariff-section">
                <div className="tariff-grid">
                    <div className="tariff-header">Car Type</div>
                    <div className="tariff-header">Model Includes</div>
                    <div className="tariff-header">Passengers</div>
                    <div className="tariff-header">Ideal For</div>
                    <div className="tariff-header">Fare</div>

                    <div className="tariff-cell">AC Sedans</div>
                    <div className="tariff-cell">Etios, Amaze, Dzire etc.</div>
                    <div className="tariff-cell">4 Pax</div>
                    <div className="tariff-cell">Comfortable trips with small families</div>
                    <div className="tariff-cell">Rs.11/KM</div>

                    <div className="tariff-cell">AC Hatchbacks</div>
                    <div className="tariff-cell">Wagon R, Celerio, Micra etc.</div>
                    <div className="tariff-cell">4 Pax</div>
                    <div className="tariff-cell">Budget trips over short distances</div>
                    <div className="tariff-cell">Rs.11/KM</div>

                    <div className="tariff-cell">AC SUV</div>
                    <div className="tariff-cell">Ertiga, Xylo etc.</div>
                    <div className="tariff-cell">6-7 Pax</div>
                    <div className="tariff-cell">Premium trips with large families</div>
                    <div className="tariff-cell">Rs.13/KM</div>
                </div>
            </div>

            <div className="comparison-section">
                <div className="text-content">
                    <h2>WHY CHOOSE AC BUS OR AC TRAIN FOR <br />YOUR <span className="highlight">ONE-WAY</span> JOURNEY?</h2>
                    <p>Our oneway Car Rental service is cheaper than AC bus and 2-tier AC train ticket fares. It reduces your travel time, and you travel in your own private space, allowing you to fully enjoy your journey. Our one way taxi will come to your doorstep and take you to your desired destination. So, book your Cheapest one way cab from Lucknow to Gorakhpur or Varanasi to Ayodhya with our reliable Oneway car rental service with driver. Experience the convenience of our taxi service, where you can rent a car effortlessly and enjoy seamless cab booking. Choose our car hire option for a hassle-free and comfortable travel experience. We offer outstation cab and intercity travel services, ensuring a smooth and enjoyable Luxury ride wherever you need to go.</p>
                </div>
                <div className="image-content">
                    <Image
                        width={500}
                        height={300}
                        src="https://www.yatricabs.com/_next/static/media/book-taxi.87de5656.gif" alt="Smartphone app illustration" />
                </div>
            </div>

            <style jsx>{`
                .container {
                    font-family: Arial, sans-serif;
                    margin: 0 auto;
                    padding: 20px;
                }
                .tariff-section {
                    margin-bottom: 40px;
                }
                .tariff-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    column-gap: 10px;
                    row-gap: 10px;
                }
                .tariff-header {
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px;
                    text-align: center;
                    font-weight: bold;
                }
                .tariff-cell {
                    background-color: #c0e3b6;
                    padding: 10px;
                    text-align: center;
                }
                .comparison-section {
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: 40px;
                }
                .text-content {
                    max-width: 600px;
                    margin-bottom: 20px;

                }
                .text-content h2 {
                    color: #333;
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                .text-content p {
                    color: #555;
                    font-size: 16px;
                    line-height: 1.5;
                }
                .highlight {
                    color: #4CAF50;
                }
                .image-content {
                    max-width: 100%;
                }
                .image-content img {
                    max-width: 100%;
                    height: auto;
                }

                @media (max-width: 768px) {
                    .tariff-grid {
                        column-gap: 5px;
                        row-gap: 5px;
                    }
                    .tariff-header, .tariff-cell {
                        font-size: 14px;
                        padding: 8px;
                    }
                    .comparison-section {
                        flex-direction: column;
                    }
                    .text-content h2 {
                        font-size: 20px;
                    }
                    .text-content p {
                        font-size: 14px;
                    }
                }

                @media (max-width: 480px) {
                    .tariff-header, .tariff-cell {
                        font-size: 12px;
                        padding: 6px;
                    }
                    .text-content h2 {
                        font-size: 18px;
                    }
                    .text-content p {
                        font-size: 12px;
                    }
                }
            `}</style>
        </div>
    );
};

export default TariffsAndComparison;
