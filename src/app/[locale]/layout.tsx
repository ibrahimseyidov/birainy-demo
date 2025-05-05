import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import MainLayout from '@/components/layout/MainLayout/MainLayout'

import '@/styles/reset.css'

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
}) 

export default async function LocaleLayout ({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale} className={roboto.className}>
      <body>
        <NextIntlClientProvider>
            <MainLayout>{children}</MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
