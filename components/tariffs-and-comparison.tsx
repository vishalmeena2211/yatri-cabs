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
                    <h2>WHY CHOOSE AC BUS OR <br /> AC TRAIN FOR YOUR <span className="highlight">ONE-WAY</span> JOURNEY?</h2>
                    <p>Our oneway Car Rental service is cheaper than AC bus and 2-tier AC train ticket fares. It reduces your travel time, and you travel in your own private space, allowing you to fully enjoy your journey. Our one way taxi will come to your doorstep and take you to your desired destination. So, book your Cheapest one way cab from Lucknow to Gorakhpur or Varanasi to Bareilly</p>
                    <span>Read More...</span>
                </div>
                <div className="image-content">
                    <img
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
                    align-items: center;
                    margin-top: 40px;
                }
                .text-content {
                    max-width: 700px;
                    margin-bottom: 20px;
                }
                .text-content h2 {
                    color: #333;
                    font-size: 36px;
                    margin-bottom: 10px;
                }
                .text-content p {
                    color: #555;
                    font-size: 22px;
                }
                .text-content span {
                    color: #555;
                    font-weight: bold;
                }
                .highlight {
                    color: #4CAF50;
                }
                .image-content {
                    position: relative;
                    max-width: 50%;
                }
                .image-content img {
                    height: auto;
                    width: 100%;
                    object-fit: cover;
                }

                @media (max-width: 768px) {
                    .tariff-grid {
                        column-gap: 5px;
                    }
                    .tariff-header, .tariff-cell {
                        font-size: 12px;
                        padding: 8px;
                    }
                    .text-content h2 {
                        font-size: 16px;
                    }
                    .text-content p {
                        font-size: 12px;
                    }
                }

                @media (max-width: 480px) {
                    .container {
                        padding: 4px;
                    }
                    .text-content {
                        max-width: 50%;
                    }
                    .tariff-header, .tariff-cell {
                        font-size: 6px;
                        padding: 3px 5px;
                    }
                    .text-content h2 {
                        font-size: 14px;
                    }
                    .text-content p {
                        font-size: 10px;
                    }
                    .text-content span {
                    font-size: 10px;
                }
                }
            `}</style>
        </div>
    );
};

export default TariffsAndComparison;
