import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Fiya Architectural Designs and Construction",
    template: "%s | Fiya Architectural Designs and Construction",
  },
  description:
    "Top-rated architecture and construction company in South Africa. Expert residential and commercial design solutions. Registered with SACAP and NHBRC. Transform your vision into reality.",
  keywords:
    "architecture, construction, design, building, residential, commercial",
  authors: [{ name: "Fiya Architectural Designs and Construction" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fadco.co.za",
    siteName: "Fiya Architectural Designs and Construction",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fiya Architectural Designs and Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiya Architectural Designs and Construction",
    description: "Leading architecture and construction company",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://fadco.co.za"),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://fadco.co.za",
  name: "Fiya Architectural Designs and Construction",
  description:
    "Professional architecture and construction services in South Africa",
  url: "https://fadco.co.za",
  logo: "https://fadco.co.za/logo.jpg",
  image: "https://fadco.co.za/og-image.jpg",
  sameAs: [
    "https://www.facebook.com/fadcogroup",
    "https://www.instagram.com/fadcogroup",
    "https://www.linkedin.com/company/fadcogroup",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZA",
    addressRegion: "Gauteng",
    streetAddress: "Johannesburg",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-26.2023",
    longitude: "28.0436",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Gauteng, South Africa",
  },
  knowsAbout: [
    "Architectural Design",
    "Construction Services",
    "House Plans",
    "Building Design",
    "Residential Architecture",
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "6",
  },
  contact: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+27-XX-XXX-XXXX",
    email: "info@fadco.co.za",
  },
};

export default function RootLayout({ children }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does FADco offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FADco offers architectural design, 3D visualizations, plan submissions, approvals, and full construction services including bricklaying, roofing, and tiling.",
        },
      },
      {
        "@type": "Question",
        name: "Is FADco registered and certified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we are SACAP-registered and NHBRC-certified, ensuring quality and compliance with all standards.",
        },
      },
      {
        "@type": "Question",
        name: "How long do projects take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timelines vary based on scope. We provide detailed schedules and maintain 100% on-time delivery.",
        },
      },
    ],
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Fiya Architectural Designs and Construction",
    areaOfSpecialization: [
      "Architectural Design",
      "Construction",
      "Residential",
      "Commercial",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </head>
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MMD3JKZ080"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MMD3JKZ080');
          `}
        </Script>
      </body>
    </html>
  );
}
