import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import ClientTranslationProvider from '@/providers/ClientTranslationProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function LocalLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
}) {

  const locale = useLocale();
  
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientTranslationProvider>
          {children}
        </ClientTranslationProvider>
        </body>
    </html>
  )
}
