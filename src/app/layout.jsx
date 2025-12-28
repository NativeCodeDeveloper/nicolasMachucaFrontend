import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Dancing_Script } from "next/font/google";
import FloatingActionButtons from "@/componentes/FloatingActionButtons";
import Footer from "./Footer/page";
import Navbar from "@/componentes/Navbar";
import Script from 'next/script';

// ==========================
// SEO Metadata (App Router)
// ==========================
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  applicationName: 'Nicolás Machuca — Full‑Stack',
  title: {
    default: 'Nicolás Machuca | Desarrollador Full‑Stack',
    template: '%s | Nicolás Machuca',
  },
  description:
    'Desarrollador Full‑Stack (Next.js, Node.js, Express, MySQL/SQL Server). Construyo sitios y aplicaciones web rápidas, seguras y fáciles de mantener para startups y pymes. Trabajo remoto y por proyecto.',
  keywords: [
    'desarrollador full stack',
    'full stack developer',
    'next.js',
    'node.js',
    'express',
    'react',
    'tailwind css',
    'mysql',
    'sql server',
    'api rest',
    'sitios web',
    'landing page',
    'saaS',
    'freelance',
    'chile',
  ],
  authors: [{ name: 'Nicolás Machuca', url: '/' }],
  creator: 'Nicolás Machuca',
  publisher: 'Nicolás Machuca',
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: '/',
    siteName: 'Nicolás Machuca — Full‑Stack',
    title: 'Nicolás Machuca | Desarrollador Full‑Stack',
    description:
      'Desarrollador Full‑Stack especializado en Next.js, Node.js y SQL. Disponibilidad remota. Construyo productos web de alto rendimiento.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio de Nicolás Machuca — Desarrollador Full‑Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicolás Machuca | Desarrollador Full‑Stack',
    description:
      'Next.js + Node.js + SQL | Desarrollo web de alto rendimiento para startups y pymes.',
    creator: '@tu_usuario', // reemplázalo si tienes Twitter/X
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'GOOGLE_SITE_VERIFICATION_TOKEN', // reemplaza cuando verifiques Search Console
    yandex: '',
    other: {
      'bing-site-verification': 'BING_SITE_VERIFICATION_TOKEN',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'theme-color': '#0a0f1a',
  },
};

// Manejo de viewport recomendado por Next 13+
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script id="ldjson-person" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Nicolás Machuca',
            jobTitle: 'Desarrollador Full‑Stack',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
            image: '/og.jpg',
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance',
            },
            sameAs: [
              'https://www.linkedin.com/',
              'https://github.com/'
            ],
            knowsAbout: ['Next.js','Node.js','Express','React','Tailwind CSS','MySQL','SQL Server','API REST'],
          })}
        </Script>
        <Script id="ldjson-website" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Nicolás Machuca — Full‑Stack',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
            inLanguage: 'es-CL',
            potentialAction: {
              '@type': 'SearchAction',
              target: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/buscar?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
        <FloatingActionButtons tooltip={'Hablar con Manager IT'} position={{ bottom: 16, right: 16 }} />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
