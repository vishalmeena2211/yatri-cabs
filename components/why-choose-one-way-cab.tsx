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
                    <img src="https://www.yatricabs.com/_next/static/media/moving-car.4058733c.gif" alt="Illustration of a red car on a road" />
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
                    gap: 5px;
                }
                .column {
                    background-color: #f0f0f0;
                    border: 1px solid black;
                    border-radius: 20px;
                    padding: 20px;
                    // margin: 0 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    position: relative;
                    flex:1;
                }
                .column:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                }
                .column ul {
                    padding: 5px 5px 0px 20px;
                    text-align: left;
                }
                .column li {
                    margin-bottom: 10px;
                    font-size: 16px;
                    line-height: 1.6;
                }
                .column li:last-child {
                    margin-bottom: 0px;
                }
                .illustration {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border:none;
                    max-height: 250px;
                    padding: 0px;
            }
                .illustration img{
                    height: 100%;
                    object-fit: cover;
                    width: 100%;
                    border-radius: 10px;
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
                @media (max-width: 1024px) {
                    .heading {
                        font-size: 28px;
                    }
                    .column {
                        flex: 1 1 45%;
                    }
                    .footer {
                        font-size: 16px;
                    }
                }
                @media (max-width: 768px) {
                    .heading {
                        font-size: 24px;
                    }
                    .column {
                        flex: 1 1 100%;
                    }
                    .footer {
                        font-size: 14px;
                    }
                }
                @media (max-width: 480px) {
                    .container{
                        padding: 5px;
                    }
                    .heading {
                        font-size: 14px;
                    }
                    .column {
                        padding: 0px;
                        border-radius: 10px;
                    }
                    .column li {
                        font-size: 6px;
                        margin-bottom: 5px;
                    }
                    .footer {
                        font-size: 8px;
                    }
                }
            `}</style>
        </div>
    );
};

export default WhyChooseOneWayCab;