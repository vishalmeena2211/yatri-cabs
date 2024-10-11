"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the newsletter subscription
        console.log('Subscribing email:', email);
        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo">
                    <Image src="https://www.yatricabs.com/_next/static/media/logo.46ab0671.png" alt="Yatri Cabs Logo" width={150} height={50} />
                </div>
                <nav className="footer-nav">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/news">News</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                </nav>
                <div className="newsletter">
                    <h3>Newsletter</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                        <button className='news_letter_button' type="submit" aria-label="Subscribe to newsletter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            <div className="copyright">
                All Copyrights are reserved by YATRI CABS
            </div>

            <style jsx>{`
        .footer {
          background-color: #1a1a1a;
          color: white;
          padding: 2rem 1rem;
          font-family: Arial, sans-serif;
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          margin-bottom: 1rem;
        }
        .footer-nav {
          display: flex;
          gap: 10px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        .footer-nav a {
          color: white;
          text-decoration: none;
        }
        .footer-nav a:hover {
          text-decoration: underline;
        }
        .newsletter {
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .newsletter form {
          display: flex;
        }
        .newsletter input {
          border: none;
          padding: 0 0 0 1rem;
          
          border-radius: 22px 0 0 22px;
          background-color: #fff;
        }
        .newsletter button {
          background-color: #000;
          border: 1px solid white;
          width: 80px;
          color: white;
          cursor: pointer;
          border-radius: 0 22px 22px 0;
        }
        .copyright {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {

          .newsletter {
            flex-direction: column;

            }
            .footer-nav {
            gap: 4px;
            }
        
      `}</style>
        </footer>
    );
};

export default Footer;