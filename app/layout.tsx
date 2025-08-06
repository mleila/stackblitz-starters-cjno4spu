import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Law Brothers - Award-Winning Personal Injury Attorneys',
  description: 'Led by Shawn and Shervin Lalezary, the Law Brothers represent the injured and have recovered more than $500 Million for their clients. Personal injury attorneys with offices throughout California, Texas, and the West Coast.',
  keywords: ['personal injury', 'attorneys', 'law brothers', 'Shawn Lalezary', 'Shervin Lalezary', 'California lawyers', 'car accident', 'vehicle accident', 'product liability'],
  authors: [{ name: 'Law Brothers' }],
  creator: 'Law Brothers',
  publisher: 'Law Brothers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Law Brothers - Award-Winning Personal Injury Attorneys',
    description: 'Led by Shawn and Shervin Lalezary, the Law Brothers represent the injured and have recovered more than $500 Million for their clients.',
    url: 'https://lawbrothers.com',
    siteName: 'Law Brothers',
    images: [
      {
        url: 'https://lawbrothers.com/wp-content/themes/lalezary/images/attorney.png',
        width: 800,
        height: 600,
        alt: 'Law Brothers Attorneys',
      },
      {
        url: 'https://lawbrothers.com/wp-content/uploads/2020/07/shawn-bio.jpg',
        width: 400,
        height: 400,
        alt: 'Shawn Lalezary - Personal Injury Attorney',
      },
      {
        url: 'https://lawbrothers.com/wp-content/uploads/2020/08/shervin-bio.jpg',
        width: 400,
        height: 400,
        alt: 'Shervin Lalezary - Personal Injury Attorney',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Law Brothers - Award-Winning Personal Injury Attorneys',
    description: 'Led by Shawn and Shervin Lalezary, the Law Brothers represent the injured and have recovered more than $500 Million for their clients.',
    images: ['https://lawbrothers.com/wp-content/themes/lalezary/images/attorney.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}