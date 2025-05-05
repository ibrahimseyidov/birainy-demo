import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { footerData } from '@/data/footerData';

const Footer: React.FC = () => {
 
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <h2 className={styles.title}>{footerData.title}</h2>
          <div className={styles.followSection}>
            <span className={styles.followText}>{footerData.followUs}</span>
            <div className={styles.socialIcons}>
              {footerData.socialMedia.map((social, index) => (
                <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <Image src={`/icons/social/${social.name}.svg`} alt='instagram' width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.navigationSection}>
          {footerData.navigation.map((item, index) => (
            <Link key={index} href={item.url} className={styles.navLink}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className={styles.officesSection}>
          {footerData.offices.map((office, index) => (
            <div key={index} className={styles.officeBlock}>
              <h3 className={styles.officeCountry}>{office.country}</h3>
              <p className={styles.officeAddress}>{office.address}</p>
            </div>
          ))}
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <div className={styles.partnerSection}>
            <div className={styles.partnerIcon}>
              <Image 
                src="/icons/common/partner.svg" 
                alt="Partner Icon" 
                width={40} 
                height={40} 
              />
            </div>
            <span className={styles.partnerText}>Partner with</span>
            <div className={styles.microsoftLogo}>
              <Image 
                src="/icons/common/microsoft.svg" 
                alt="Microsoft Logo" 
                width={100} 
                height={25} 
              />
            </div>
          </div>

          <div className={styles.contactSection}>
            {footerData.contact.phones.map((phone, index) => (
              <a key={index} href={`tel:${phone.replace(/\s/g, '')}`} className={styles.contactItem}>
                {phone}
              </a>
            ))}
            <a href={`mailto:${footerData.contact.email}`} className={styles.contactItem}>
              {footerData.contact.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;