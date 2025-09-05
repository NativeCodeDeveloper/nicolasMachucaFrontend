import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Dancing_Script } from "next/font/google";
import FloatingActionButtons from "@/componentes/FloatingActionButtons";
import Footer from "./Footer/page";
import Navbar from "@/componentes/Navbar";

// ==========================
// SEO Metadata (App Router)
// ==========================
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  applicationName: 'NEXIO',
  title: {
    default: 'NEXIO | Páginas web inteligentes',
    template: '%s | NEXIO',
  },
  description: 'Desarrollo de páginas web premium para negocios de alto nivel',
  keywords: [
    'página web',
    'landing page',
    'página de venta en línea',
    'desarrollo a medida',
    'desarrollo web',
    'programador web',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: '/',
    siteName: 'NEXIO',
    title: 'NEXIO | Páginas web inteligentes',
    description: 'Desarrollo de páginas web premium para negocios de alto nivel',
    images: [
      {
        url: '/og.jpg', // Reemplaza si tienes una imagen OG
        width: 1200,
        height: 630,
        alt: 'NEXIO – Desarrollo web premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXIO | Páginas web inteligentes',
    description: 'Desarrollo de páginas web premium para negocios de alto nivel',
    images: ['/og.jpg'],
  },
  alternates: {
    canonical: '/',
    languages: {
      // Ajusta estas rutas cuando tengas i18n definitivo
      'es': '/es',
      'en': '/en',
    },
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
