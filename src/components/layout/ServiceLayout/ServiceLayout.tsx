import React, { ReactNode } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

const ServiceLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div className={styles.leftArea}>
          <div className={styles.logo}>
            <div className={styles.star}>
              <Image
                src='/icons/common/star.svg'
                alt='star'
                width={36}
                height={36}
              />
            </div>
            <h1 className={styles.title}>Xidmətlərimiz</h1>
          </div>
          <div className={styles.description}>
            <p>
              Şirkət daxilindəki prosesləri və müştərilərlə əlaqəni
              avtomatlaşdırılmış şəkildə həyata keçirtmək və bazarda innovativ
              şəkildə inkişaf etmək üçün bizim xidmətlərdən yararlanın.
            </p>
          </div>
        </div>
        <Link href='/az/contact' className={styles.logoRight}>
          <div className={styles.arrow}>
            <Image src='/icons/common/arrow.svg' alt='arrow-birainy' width={58} height={46} />
          </div>
          <svg viewBox='0 0 100 100' width='136' height='136'>
            <path
              id='curve'
              fill='transparent'
              d='M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0'
            />
            <text fill='white'>
              <textPath href='#curve' fontSize='8' letterSpacing='0'>
               SİFARİŞ ET ⚡ SİFARİŞ ET ⚡ SİFARİŞ ET ⚡ SİFARİŞ ET ⚡
              </textPath>
            </text>

            <g>
              <animateTransform
                attributeName='transform'
                begin='0s'
                dur='15s'
                type='rotate'
                from='0 50 50'
                to='360 50 50'
                repeatCount='indefinite'
              />
            </g>
          </svg>
        </Link>
      </section>

      <hr className={styles.divider} />

      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default ServiceLayout
