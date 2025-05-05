'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter as useNextRouter } from 'next/navigation'
import { NAV_ITEMS, SOCIAL_LINKS } from '../../../utils/constants'
import styles from './styles.module.css'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Header: React.FC = () => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const nextRouter = useNextRouter()
  
  const t = useTranslations('Services')

  const handleLanguageChange = (locale: string) => {
    const newPath = pathname?.replace(/^\/(az|en)/, `/${locale}`) || `/${locale}`
    nextRouter.push(newPath)
    setIsLangDropdownOpen(false)
  }
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href='/'>
          <Image
            src='/icons/logo/logo.svg'
            width={158}
            height={25}
            alt='birainy-logo'
          />
        </Link>
      </div>
      <div className={styles.rightContainer}>
        <nav className={styles.navigation}>
          {NAV_ITEMS.map(item => (
            <Link href={item.path} key={item.id}>
              <span className={styles.navLink}>{t(item.title)}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.rightSection}>
          <div className={styles.socialIcons}>
            {SOCIAL_LINKS.map(social => (
              <Link
                href={social.url}
                key={social.id}
                className={styles.socialIcon}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.name}
              >
                {social.icon === 'instagram' && (
                  <Image
                    src='/icons/social/insta.svg'
                    width={24}
                    height={24}
                    alt='birainy-instagram'
                  />
                )}
                {social.icon === 'linkedin' && (
                  <Image
                    src='/icons/social/in.svg'
                    width={24}
                    height={24}
                    alt='birainy-linkedin'
                  />
                )}
                {social.icon === 'tiktok' && (
                  <Image
                    src='/icons/social/tiktok.svg'
                    width={24}
                    height={24}
                    alt='birainy-tiktok'
                  />
                )}
              </Link>
            ))}
          </div>

          <Link href='#'>
            <span className={styles.contactButton}>{t("contactus")}</span>
          </Link>

          <div className={styles.languageSelector} ref={dropdownRef}>
            <button 
              className={styles.langToggle}
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              aria-expanded={isLangDropdownOpen}
              aria-label="Dil seçimi"
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M2 12H22'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            
            {isLangDropdownOpen && (
              <div className={styles.langDropdown}>
                <button 
                  className={styles.langOption} 
                  onClick={() => handleLanguageChange('az')}
                >
                  <Image
                    src="/icons/flags/az.svg"
                    width={24}
                    height={18}
                    alt="Azərbaycan dili"
                  />
                  <span>Az</span>
                </button>
                <button 
                  className={styles.langOption} 
                  onClick={() => handleLanguageChange('en')}
                >
                  <Image
                    src="/icons/flags/en.svg"
                    width={24}
                    height={18}
                    alt="English language"
                  />
                  <span>En</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header