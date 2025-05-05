import React, { PropsWithChildren } from 'react'
import styles from './styles.module.css'

const ContainerLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default ContainerLayout
