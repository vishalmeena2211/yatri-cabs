"use client"

import Image from 'next/image'
import { BiDownload, BiUser } from 'react-icons/bi'

const Navbar = () => {
    return (
        <div>
            <header className="header">
                <div className="logo">
                    <Image src="https://www.yatricabs.com/_next/static/media/logo.46ab0671.png" alt="Yatri Cabs Logo" width={150} height={50} />
                </div>
                <div className="contact">
                    <Image width={250} height={50} src='https://www.yatricabs.com/_next/static/media/nav-contact-clock.c4a6ceb2.svg' alt='mobile number' className="contact-hours" />
                    <span className="contact-number">+917860663399</span>
                </div>
                <div className="user-actions">
                    <button className="download-app">
                        <BiDownload />
                    </button>
                    <button className="user-profile">
                        <BiUser />
                        Hi, Ravi
                    </button>
                </div>
            </header>
            <style jsx>
                {`
                    .header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background-color: white;
                        padding: 0 1rem;
                    }
                    .contact {
                        display: flex;
                        align-items: center;
                        position: relative;
                    }
                    .contact-hours {
                        background-color: #4CAF50;
                        // padding: 0.5rem;
                        border-radius: 5px;
                        margin-right: 0.5rem;
                    }
                    .contact-number {
                        position: absolute;
                        right: 6px;
                        color: white;
                        font-weight: bold;
                    }
                    .user-actions {
                        display: flex;
                        gap: 1rem;
                    }
                    @media (max-width: 768px) {
                        .logo img {
                            width: 50px;
                            height: auto;
                        }
                        .contact-hours {
                            width: 100px;
                            height: auto;
                        }
                        .contact-number {
                            font-size: 0.8rem;
                        }
                        .user-profile {
                            font-size: 0.8rem;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Navbar
