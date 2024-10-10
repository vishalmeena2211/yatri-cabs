"use client"

import React from 'react';
import Image from 'next/image';

const WhyChooseOneWayCab: React.FC = () => {
    return (
        <div className="container">
            <h1 className="heading">WHY CHOOSE ONE WAY CAB?</h1>
            <div className="content">
                <div className="column">
                    <ul>
                        <li>Instant Booking & Confirmation</li>
                        <li>Confirmed Booking Immediately</li>
                        <li>No Return Fare For One-Way Trip</li>
                        <li>Clean & Professional Cab Services</li>
                        <li>Transparent Billing With GPS Based Billing System</li>
                    </ul>
                </div>
                <div className="column illustration">
                    <Image src="https://www.yatricabs.com/_next/static/media/moving-car.4058733c.gif" alt="Illustration of a red car on a road" width={300} height={200} />
                </div>
                <div className="column">
                    <ul>
                        <li>Pick-Up From Your House</li>
                        <li>Dedicated Cab Just For You</li>
                        <li>Drop To Your Desired Destination</li>
                        <li>Completed More Than 20,000+ Oneway Trips</li>
                        <li>Multiple Payment Option Including Credit Card.</li>
                    </ul>
                </div>
            </div>
            <p className="footer">
                DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS <span className="highlight">INTERCITY CAR RENTALS</span> IN INDIA – WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN EVERY CITY. UNLEASH YOUR JOURNEY!
            </p>

            <style jsx>{`
                .container {
                    font-family: Arial, sans-serif;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                    text-align: center;
                }
                .heading {
                    color: #4CAF50;
                    font-size: 36px;
                    margin-bottom: 30px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                }
                .content {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 30px;
                    gap: 20px;
                }
                .column {
                    flex: 1;
                    background-color: #f0f0f0;
                    border-radius: 10px;
                    padding: 20px;
                    margin: 0 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .column:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                }
                .column ul {
                    list-style-type: none;
                    padding: 0;
                    text-align: left;
                }
                .column li {
                    margin-bottom: 10px;
                    font-size: 16px;
                    line-height: 1.6;
                }
                .illustration {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #e6f3ff;
                }
                .footer {
                    color: #666;
                    font-size: 18px;
                    line-height: 1.5;
                    margin-top: 20px;
                }
                .highlight {
                    color: #4CAF50;
                    font-weight: bold;
                }
                @media (max-width: 768px) {
                    .content {
                        flex-direction: column;
                    }
                    .column {
                        margin: 10px 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default WhyChooseOneWayCab;