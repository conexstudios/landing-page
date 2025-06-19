import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

// Palabras clave principales para SEO
const keywords = [
  // Principales
  "plataforma educativa",
  "software educativo",
  "gestión escolar",
  "sistema académico",
  "ConexStudios",

  // Funcionalidades
  "gestión de estudiantes",
  "aulas virtuales",
  "evaluaciones adaptativas",
  "comunicación escolar",
  "reportes académicos",
  "control de asistencia",

  // Tipos de instituciones
  "software para colegios",
  "plataforma universitaria",
  "sistema para institutos",
  "gestión educativa integral",

  // Tecnología
  "inteligencia artificial educativa",
  "analytics educativo",
  "automatización escolar",
  "digitalización educativa",

  // Ubicación y mercado
  "software educativo Colombia",
  "plataforma escolar Latinoamérica",
  "sistema académico español",
  "gestión educativa online",

  // Beneficios
  "mejora rendimiento académico",
  "eficiencia administrativa",
  "comunicación padres profesores",
  "seguimiento estudiantil",

  // Productos específicos
  "ConexAdmin",
  "ConexRH",
  "ConexServicios",
  "ConexBI",
  "business intelligence educativo",
]

export const metadata: Metadata = {
  // Metadatos básicos optimizados
  title: {
    default: "ConexStudios - Plataforma Educativa Integral | Software de Gestión Escolar",
    template: "%s | ConexStudios - Líder en Software Educativo",
  },
  description:
    "Optimiza tu institución con el sistema de gestión escolar de ConexStudios: académico, administrativo y en la nube. Fácil, seguro y 100 % adaptado a ti. ",

  // Palabras clave estratégicas
  keywords: keywords.join(", "),

  // Información del autor y empresa
  authors: [{ name: "ConexStudios", url: "https://conexstudios.com" }],
  creator: "ConexStudios",
  publisher: "ConexStudios",

  // Configuración de robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph para redes sociales
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["es_CO", "es_MX", "es_AR", "es_CL"],
    url: "https://conexstudios.com",
    siteName: "ConexStudios",
    title: "ConexStudios - Plataforma Educativa Integral | Transformando la Educación",
    description:
      "Revoluciona tu institución educativa con ConexStudios. Gestión integral de estudiantes, profesores y procesos académicos. Solicita tu demo gratuita.", // +50K estudiantes activos, 500+ instituciones
    images: [
      {
        url: "https://conexstudios.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ConexStudios - Plataforma Educativa Integral",
        type: "image/jpeg",
      },
      {
        url: "https://conexstudios.com/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "ConexStudios Logo",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@ConexStudios",
    creator: "@ConexStudios",
    title: "ConexStudios - Plataforma Educativa Integral",
    description:
      "Transforma tu institución educativa con la plataforma más completa del mercado. Gestión integral, aulas virtuales y comunicación avanzada.",
    images: ["https://conexstudios.com/twitter-image.jpg"],
  },

  // Metadatos adicionales para SEO
  category: "Education Technology",
  classification: "Educational Software Platform",

  // Información de contacto y ubicación
  other: {
    "contact:phone_number": "+584144225188",
    "contact:email": "info@conexstudios.com",
    "contact:country_name": "Venezuela",
    "contact:region": "Latinoamérica",
    "business:contact_data:street_address": "Calle 123 #45-67",
    "business:contact_data:locality": "Carabobo",
    "business:contact_data:region": "Valencia",
    "business:contact_data:postal_code": "110111",
    "business:contact_data:country_name": "Venezuela",
    "geo:position": "4.7110;-74.0721",
    "geo:region": "CO-DC",
    "geo:placename": "Bogotá, Colombia",
    ICBM: "4.7110, -74.0721",
  },

  // Verificaciones y validaciones
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
    other: {
      "msvalidate.01": "bing-verification-code",
      "facebook-domain-verification": "facebook-verification-code",
    },
  },

  // Configuración de aplicación
  applicationName: "ConexStudios",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#144378" },
    { media: "(prefers-color-scheme: dark)", color: "#47483C" },
  ],

  // Configuración de viewport y formato
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Metadatos para apps móviles
  appleWebApp: {
    capable: true,
    title: "ConexStudios",
    statusBarStyle: "default",
  },

  // Información de la aplicación
  appLinks: {
    web: {
      url: "https://conexstudios.com",
      should_fallback: true,
    },
  },

  // Configuración de archivos
  archives: ["https://conexstudios.com/blog"],
  assets: ["https://conexstudios.com/assets"],

  // Información de copyright
  generator: "Next.js",

  // Metadatos para motores de búsqueda específicos
  alternates: {
    canonical: "https://conexstudios.com",
    languages: {
      "es-ES": "https://conexstudios.com/es",
      "es-CO": "https://conexstudios.com/co",
      "es-MX": "https://conexstudios.com/mx",
      "es-AR": "https://conexstudios.com/ar",
      "en-US": "https://conexstudios.com/en",
    },
    media: {
      "only screen and (max-width: 600px)": "https://m.conexstudios.com",
    },
    types: {
      "application/rss+xml": "https://conexstudios.com/rss.xml",
    },
  },

  // Información de manifest
  manifest: "https://conexstudios.com/manifest.json",

  // Configuración de íconos
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-touch-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-touch-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-touch-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#144378",
      },
    ],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#144378" },
    { media: "(prefers-color-scheme: dark)", color: "#47483C" },
  ],
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Datos estructurados JSON-LD */}
        <StructuredData />

        {/* Metadatos adicionales para SEO */}
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="subject" content="Educational Technology, School Management Software" />
        <meta name="copyright" content="© 2024 ConexStudios. Todos los derechos reservados." />

        {/* Dublin Core Metadata */}
        <meta name="DC.Title" content="ConexStudios - Plataforma Educativa Integral" />
        <meta name="DC.Creator" content="ConexStudios" />
        <meta name="DC.Subject" content="Software Educativo, Gestión Escolar, Plataforma Académica" />
        <meta name="DC.Description" content="Plataforma integral para la gestión educativa moderna" />
        <meta name="DC.Publisher" content="ConexStudios" />
        <meta name="DC.Contributor" content="ConexStudios Team" />
        <meta name="DC.Date" content="2024" />
        <meta name="DC.Type" content="Software" />
        <meta name="DC.Format" content="text/html" />
        <meta name="DC.Identifier" content="https://conexstudios.com" />
        <meta name="DC.Source" content="https://conexstudios.com" />
        <meta name="DC.Language" content="es" />
        <meta name="DC.Coverage" content="Latinoamérica" />
        <meta name="DC.Rights" content="© 2024 ConexStudios" />

        {/* Metadatos específicos para educación */}
        <meta name="educational-level" content="K-12, Higher Education, Technical Education" />
        <meta name="educational-audience" content="Students, Teachers, Administrators, Parents" />
        <meta name="educational-type" content="Management Software" />

        {/* Información de la empresa para Knowledge Graph */}
        <meta name="company:name" content="ConexStudios" />
        <meta name="company:industry" content="Educational Technology" />
        <meta name="company:founded" content="2020" />
        <meta name="company:employees" content="50-100" />
        <meta name="company:revenue" content="$1M-$10M" />
        <meta name="company:headquarters" content="Bogotá, Colombia" />
        <meta name="company:website" content="https://conexstudios.com" />
        <meta name="company:email" content="info@conexstudios.com" />
        <meta name="company:phone" content="+57-300-123-4567" />

        {/* Preconnect para optimización de rendimiento */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//platform.twitter.com" />

        {/* Preload de recursos críticos */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Configuración de seguridad */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

        {/* Configuración de cache */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />

        {/* Información de contacto estructurada */}
        <meta name="contact" content="info@conexstudios.com" />
        <meta name="reply-to" content="info@conexstudios.com" />
        <meta name="owner" content="ConexStudios" />
        <meta name="url" content="https://conexstudios.com" />
        <meta name="identifier-URL" content="https://conexstudios.com" />

        {/* Configuración de Rich Snippets */}
        <meta name="thumbnail" content="https://conexstudios.com/thumbnail.jpg" />
        <meta name="medium" content="mult" />
        <meta name="syndication-source" content="https://conexstudios.com" />
        <meta name="original-source" content="https://conexstudios.com" />

        {/* Configuración para motores de búsqueda específicos */}
        <meta name="alexaVerifyID" content="alexa-verification-code" />
        <meta name="norton-safeweb-site-verification" content="norton-verification-code" />
        <meta name="wot-verification" content="wot-verification-code" />

        {/* Configuración de aplicación web progresiva */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ConexStudios" />
        <meta name="application-name" content="ConexStudios" />
        <meta name="msapplication-TileColor" content="#144378" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#144378" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
