import React, { PropsWithChildren } from 'react'
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'
import ContainerLayout from '../ContainerLayout/ContainerLayout'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ContainerLayout>
        <Header />
        {children}
      </ContainerLayout>
      <Footer />
    </>
  )
}

export default MainLayout
