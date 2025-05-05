import React from 'react'
import styles from './styles.module.css'
import Button from '@/components/common/Button/Button'
import { ServiceContent as ServiceContentType } from '@/types/serviceTypes'

interface ServiceContentProps {
  content: ServiceContentType
}

const ServiceContent: React.FC<ServiceContentProps> = ({ content }) => {

  if (!content) {
    return <div className={styles.empty}>Zəhmət olmasa bir servis seçin</div>
  }

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{content.title}</h2>

      <p className={styles.description}>{content.description}</p>

      <div className={styles.buttons}>
        <Button
          variant='primary'
          icon='phone'
          onClick={() => console.log('Əlaqəyə keç')}
        >
          Bizimlə əlaqə saxlayın
        </Button>

        <Button
          variant='secondary'
          icon='eye'
          onClick={() => console.log('İşlərimizə nəzər yetirin')}
        >
          İşlərimizə nəzər yetirin
        </Button>
      </div>
    </div>
  )
}

export default ServiceContent
