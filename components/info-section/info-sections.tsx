"use client"

import React from 'react';

interface InfoItemProps {
    title?: string;
    content: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, content }) => {
    return (
        <li className="info-item">
            {title && <strong>{title}</strong>}
            <p>{content}</p>
            <style jsx>{`
        .info-item {
          margin-bottom: 1rem;
        }
        .info-item strong {
          display: block;
          margin-bottom: 0.5rem;
          color: #2estyle
        }
      `}</style>
        </li>
    );
};

interface InfoSectionProps {
    title: string;
    items: InfoItemProps[];
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, items }) => {
    return (
        <section className="info-section">
            <h2 className="section-title">{title}</h2>
            <ul className="info-list">
                {items?.map((item, index) => (
                    <InfoItem key={index} {...item} />
                ))}
            </ul>
            <style jsx>{`
        .info-section {
          background-color: #f5f5f5;
          padding: 2rem;
          margin-bottom: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .section-title {
          background-color: #2e7d32;
          color: white;
          padding: 0.5rem 1rem;
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          border-radius: 4px;
        }
        .info-list {
          padding: 0;
        }
        @media (max-width: 768px) {
          .info-section {
            padding: 0.5rem;
          }
          .section-title {
            font-size: 0.8rem;
          }
            .info-list {
                font-size: 0.5rem;
            }
        }
        }
      `}</style>
        </section>
    );
};

const YatriInfoSections: React.FC = () => {
    const discoveringIndia: InfoSectionProps = {
        title: "DISCOVERING INDIA'S DIVERSE LANDSCAPES, ONE SCENIC ROAD TRIP AT A TIME",
        items: [
            { content: "Experience the thrill of road travel with our reliable car rental and taxi service as we explore the diverse landscapes of India together, while conveniently taking care of the logistics and ensuring a safe journey." },
            { content: "Instead of worrying about the next stop in our chauffeur-driven cabs enjoy your next vacation. With a presence in over 2500 cities across India, we're here to take you wherever your heart desires, all at our rental service." },
            { content: "We cherish the freedom to stop anytime in the towns or provinces to savor cuisines and taste regional cultures along the way. These moments of discovery and joy are what make your travels unforgettable through our rent a car service." },
            { content: "No destination is too far or too close; we encourage you to explore the beauty around you with our taxi options. Pack your bags and let us seamlessly take care of the rest! You plan it, your way to make memories." },
            { content: "Planning your trip is a breeze with our friendly website, or you can chat with our travel experts on 7860663399 for personalized guidance and car rental. Our cab booking app simplifies the process, ensuring a hassle-free experience when you rent a car." },
            { content: "Our experienced drivers are your companions on the road, guiding you through India's best experiences with our car rental and taxi service. From booking to your safe return home, we're dedicated to ensuring you have an exceptional road trip." },
        ],
    };

    const whyChooseYatri: InfoSectionProps = {
        title: "WHY CHOOSE YATRI CAR RENTAL?",
        items: [
            { content: "Yatri Car Rental has been a trusted digital platform for booking local and outstation car rental and taxi services since 2014. Our primary goal is to offer our clients an exceptional car rental and cab booking experience, and we have great pride in our commitment to safety, reliability, and experienced drivers. These qualities are evident across all our car rental services, making us the preferred choice for those seeking rental cars and taxi services in India." },
            { content: "Real-Time GPS Tracking - At Yatri Car Rental, we are committed to providing dependable services in India. We guarantee that we won't cancel your booking without advance notification, and our rental cars are meticulously maintained to ensure a seamless and stress-free journey for our clients." },
            { title: "Safety is Our Priority", content: "Safety and comfort are paramount at Yatri Car Rental in India. We exclusively hire experienced and skilled drivers who possess in-depth knowledge of the city's roads and traffic regulations. Our drivers are committed to delivering excellent customer service and ensuring a comfortable and stress-free travel experience for passengers." },
            { title: "Expert Chauffeurs at Your Service", content: "Yatri Car Rental takes pride in selecting only the most skilled, knowledgeable, and courteous drivers to enhance the convenience and satisfaction of our clients." },
            { title: "Extensive Industry Experience", content: "With over 10 years of industry expertise, Yatri Car Rental is your go-to choice for premium car hire services." },
            { title: "Proven Track Record", content: "We place a strong emphasis on transparency in our billing system and consistently strive to provide a seamless and satisfactory experience for our customers. Our commitment to customer comfort and satisfaction is evident in our outstanding Google ratings, where we consistently receive ratings of 4.8 stars or higher." },
        ],
    };

    return (
        <div className="yatri-info-sections">
            <InfoSection {...discoveringIndia} />
            <InfoSection {...whyChooseYatri} />
            <style jsx>{`
        .yatri-info-sections {
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family: Arial, sans-serif;
        }
      `}</style>
        </div>
    );
};

export default YatriInfoSections;