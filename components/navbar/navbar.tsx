'use client'

// Importing images and icons
import { CLOCK_IMAGE, LOGO_IMAGE, PROFILE_IMAGE } from '@/lib/images'
import { BiDownload } from 'react-icons/bi'
import styles from './navbar.module.css'

// Navbar component definition
export default function Navbar() {
  return (
    <header className={styles.header}>
      {/* Logo section */}
      <div className={styles.logo}>
        <img src={LOGO_IMAGE} alt="Yatri Cabs Logo" />
      </div>
      
      {/* Contact section */}
      <div className={styles.contact}>
        <img src={CLOCK_IMAGE} alt='mobile number' className={styles.contactHours} />
        <span className={styles.contactNumber}>+917860663399</span>
      </div>
      
      {/* User actions section */}
      <div className={styles.userActions}>
        {/* Download app button */}
        <div className={styles.downloadApp}>
          <BiDownload size={32} />
          <span className={styles.downloadText}>Download App</span>
        </div>
        
        {/* User profile section */}
        <div className={styles.userProfile}>
          <img src={PROFILE_IMAGE} alt="User Icon" />
          <span className={styles.userName}>Hi, Ravi</span>
        </div>
      </div>
    </header>
  )
}
