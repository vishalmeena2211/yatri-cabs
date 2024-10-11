'use client'

import { BiDownload } from 'react-icons/bi'

export default function Navbar() {
    return (
        <header className="header">
            <div className="logo">
                <img src="https://www.yatricabs.com/_next/static/media/logo.46ab0671.png" alt="Yatri Cabs Logo" />
            </div>
            <div className="contact">
                <img src='https://www.yatricabs.com/_next/static/media/nav-contact-clock.c4a6ceb2.svg' alt='mobile number' className="contact-hours" />
                <span className="contact-number">+917860663399</span>
            </div>
            <div className="user-actions">
                <div className="download-app">
                    <BiDownload size={32} />
                    <span className="download-text">Download App</span>
                </div>
                <div className="user-profile">
                    <img src="https://www.yatricabs.com/_next/static/media/user.dee45a96.svg" alt="User Icon" />
                    <span className="user-name">Hi, Ravi</span>
                </div>
            </div>
            <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: white;
          padding: 8px 16px;
          white-space: nowrap;
        }

        .logo {
          flex-shrink: 0;
          margin-right: 16px;
        }

        .logo img {
          height: 60px;
          width: auto;
        }

        .contact {
          position: relative;
          display: flex;
          align-items: center;
          margin-right: 16px;
        }

        .contact-hours {
          height: 60px;
          width: auto;
        }

        .contact-number {
          position: absolute;
          right: 10px;
          color: white;
          font-weight: bold;
          font-size: 18px;
        }

        .user-actions {
          display: flex;
          align-items: center;
        }

        .download-app {
          border-radius: 50%;
          padding: 8px;
          margin-right: 16px;
        }

        .user-profile, .download-app {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .user-profile img {
          width: 32px;
          height: 32px;
          margin-right: 8px;
        }

        .user-name, .download-text {
          font-size: 14px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .header {
            padding: 4px 12px;
            height: 50px;

          }

          .logo img {
            height: 30px;
          }

          .contact-hours {
            height: 30px;
          }

          .contact-number {
            font-size: 10px;
            right: 4px;
          }

          .download-app {
            display: none;
          }

          .user-profile img {
            width: 24px;
            height: 24px;
            margin-right: 4px;
          }

          .user-name{
            font-size: 10px;
          }
        }
      `}</style>
        </header>
    )
}
