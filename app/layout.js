import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    default: 'Elite Architecture & Construction',
    template: '%s | Elite Architecture & Construction'
  },
  description: 'Leading architecture and construction company specializing in residential and commercial projects. Expert design and build services.',
  keywords: 'architecture, construction, design, building, residential, commercial',
  authors: [{ name: 'Elite Architecture & Construction' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elitearchitecture.com',
    siteName: 'Elite Architecture & Construction',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Architecture & Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Architecture & Construction',
    description: 'Leading architecture and construction company',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
