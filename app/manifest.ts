import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ConexStudios - Plataforma Educativa Integral",
    short_name: "ConexStudios",
    description:
      "Plataforma educativa integral para la gestión de colegios, universidades e institutos. Gestión de estudiantes, aulas virtuales y comunicación avanzada.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#144378",
    orientation: "portrait-primary",
    scope: "/",
    lang: "es",
    categories: ["education", "productivity", "business"],
    screenshots: [
      {
        src: "/screenshots/desktop-dashboard.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Dashboard principal de ConexStudios",
      },
      {
        src: "/screenshots/mobile-dashboard.png",
        sizes: "750x1334",
        type: "image/png",
        form_factor: "narrow",
        label: "Vista móvil del dashboard",
      },
    ],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Iniciar Sesión",
        short_name: "Login",
        description: "Acceder a tu cuenta de ConexStudios",
        url: "/login",
        icons: [{ src: "/icons/login-96x96.png", sizes: "96x96" }],
      },
      {
        name: "Demo Gratuita",
        short_name: "Demo",
        description: "Solicitar una demostración gratuita",
        url: "/demo",
        icons: [{ src: "/icons/demo-96x96.png", sizes: "96x96" }],
      },
      {
        name: "Soporte",
        short_name: "Ayuda",
        description: "Centro de ayuda y soporte técnico",
        url: "/ayuda",
        icons: [{ src: "/icons/help-96x96.png", sizes: "96x96" }],
      },
    ],
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=com.conexstudios.app",
        id: "com.conexstudios.app",
      },
      {
        platform: "itunes",
        url: "https://apps.apple.com/app/conexstudios/id123456789",
      },
    ],
    prefer_related_applications: false,
  }
}
