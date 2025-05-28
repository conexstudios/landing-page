"use client"

export function StructuredData() {
  // Datos estructurados de la organización principal
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://conexstudios.com/#organization",
    name: "ConexStudios",
    alternateName: ["Conex Studios", "ConexStudios Platform"],
    url: "https://conexstudios.com",
    logo: {
      "@type": "ImageObject",
      url: "https://conexstudios.com/logo.png",
      width: 512,
      height: 512,
    },
    image: "https://conexstudios.com/og-image.jpg",
    description:
      "ConexStudios es la plataforma educativa más completa para colegios, universidades e institutos. Gestión integral de estudiantes, profesores y procesos académicos.",
    foundingDate: "2020",
    founders: [
      {
        "@type": "Person",
        name: "Equipo ConexStudios",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 100,
    },
    industry: "Educational Technology",
    naics: "541511",
    isicV4: "6201",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 123 #45-67",
      addressLocality: "Bogotá",
      addressRegion: "Cundinamarca",
      postalCode: "110111",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 4.711,
      longitude: -74.0721,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+57-300-123-4567",
        contactType: "customer service",
        email: "info@conexstudios.com",
        availableLanguage: ["Spanish", "English"],
        areaServed: ["CO", "MX", "AR", "CL", "PE", "EC"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+57-300-123-4567",
        contactType: "sales",
        email: "ventas@conexstudios.com",
        availableLanguage: ["Spanish"],
      },
      {
        "@type": "ContactPoint",
        email: "soporte@conexstudios.com",
        contactType: "technical support",
        availableLanguage: ["Spanish"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/ConexStudios",
      "https://www.twitter.com/ConexStudios",
      "https://www.linkedin.com/company/conexstudios",
      "https://www.instagram.com/conexstudios",
      "https://www.youtube.com/c/ConexStudios",
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 4.711,
        longitude: -74.0721,
      },
      geoRadius: "5000000",
    },
    serviceArea: [
      {
        "@type": "Country",
        name: "Colombia",
      },
      {
        "@type": "Country",
        name: "Mexico",
      },
      {
        "@type": "Country",
        name: "Argentina",
      },
      {
        "@type": "Country",
        name: "Chile",
      },
    ],
    knowsAbout: [
      "Educational Technology",
      "School Management Software",
      "Student Information Systems",
      "Learning Management Systems",
      "Educational Analytics",
      "Virtual Classrooms",
      "Academic Assessment",
      "Educational Communication",
    ],
    award: ["Best Educational Platform 2023", "Innovation in Education Award 2024"],
  }

  // Datos estructurados del software principal
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://conexstudios.com/#software",
    name: "ConexStudios Platform",
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "School Management System",
    operatingSystem: "Web Browser, iOS, Android",
    url: "https://conexstudios.com",
    downloadUrl: "https://app.conexstudios.com",
    screenshot: "https://conexstudios.com/screenshots/dashboard.png",
    softwareVersion: "3.0",
    datePublished: "2020-01-01",
    dateModified: "2024-01-01",
    author: {
      "@id": "https://conexstudios.com/#organization",
    },
    publisher: {
      "@id": "https://conexstudios.com/#organization",
    },
    description:
      "Plataforma integral para la gestión educativa que incluye gestión de estudiantes, aulas virtuales, evaluaciones adaptativas, comunicación integrada y analytics avanzados.",
    featureList: [
      "Gestión de estudiantes y profesores",
      "Aulas virtuales interactivas",
      "Evaluaciones adaptativas",
      "Comunicación integrada",
      "Reportes y analytics",
      "Control de asistencia",
      "Gestión de calificaciones",
      "Biblioteca digital",
      "Calendario académico",
      "Notificaciones push",
    ],
    requirements: "Navegador web moderno, conexión a internet",
    memoryRequirements: "2GB RAM mínimo",
    storageRequirements: "Basado en la nube",
    processorRequirements: "Cualquier procesador moderno",
    softwareHelp: "https://conexstudios.com/ayuda",
    installUrl: "https://app.conexstudios.com/registro",
    permissions: "Acceso a cámara y micrófono para videollamadas",
    countriesSupported: ["CO", "MX", "AR", "CL", "PE", "EC"],
    inLanguage: ["es", "en"],
    isAccessibleForFree: false,
    offers: [
      {
        "@type": "Offer",
        name: "Plan Básico",
        price: "29",
        priceCurrency: "USD",
        billingIncrement: "P1M",
        description: "Perfecto para colegios pequeños hasta 200 estudiantes",
      },
      {
        "@type": "Offer",
        name: "Plan Profesional",
        price: "79",
        priceCurrency: "USD",
        billingIncrement: "P1M",
        description: "Ideal para instituciones medianas hasta 1,000 estudiantes",
      },
      {
        "@type": "Offer",
        name: "Plan Enterprise",
        price: "0",
        priceCurrency: "USD",
        description: "Precio personalizado para universidades y grandes instituciones",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "María González",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "ConexStudios transformó completamente nuestra gestión académica. La comunicación con los padres mejoró un 90% y los profesores están más organizados.",
      },
    ],
  }

  // Datos estructurados del sitio web
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://conexstudios.com/#website",
    url: "https://conexstudios.com",
    name: "ConexStudios",
    description: "Plataforma educativa integral para la gestión de colegios, universidades e institutos",
    publisher: {
      "@id": "https://conexstudios.com/#organization",
    },
    inLanguage: "es",
    copyrightYear: 2024,
    copyrightHolder: {
      "@id": "https://conexstudios.com/#organization",
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://conexstudios.com/buscar?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    ],
    mainEntity: {
      "@id": "https://conexstudios.com/#software",
    },
  }

  // Datos estructurados de la página web
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://conexstudios.com/#webpage",
    url: "https://conexstudios.com",
    name: "ConexStudios - Plataforma Educativa Integral",
    description:
      "Transforma tu institución educativa con ConexStudios. Gestión integral de estudiantes, profesores y procesos académicos",
    isPartOf: {
      "@id": "https://conexstudios.com/#website",
    },
    about: {
      "@id": "https://conexstudios.com/#software",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://conexstudios.com/hero-image.jpg",
      width: 1200,
      height: 630,
    },
    datePublished: "2020-01-01",
    dateModified: "2024-01-01",
    author: {
      "@id": "https://conexstudios.com/#organization",
    },
    publisher: {
      "@id": "https://conexstudios.com/#organization",
    },
    inLanguage: "es",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://conexstudios.com",
        },
      ],
    },
    mainEntity: [
      {
        "@id": "https://conexstudios.com/#software",
      },
      {
        "@id": "https://conexstudios.com/#organization",
      },
    ],
  }

  // Datos estructurados de productos específicos
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://conexstudios.com/#product",
    name: "ConexStudios Ecosystem",
    description:
      "Suite completa de productos de software educativo incluyendo ConexStudios, ConexAdmin, ConexRH, ConexServicios y ConexBI",
    brand: {
      "@id": "https://conexstudios.com/#organization",
    },
    manufacturer: {
      "@id": "https://conexstudios.com/#organization",
    },
    category: "Educational Software",
    audience: {
      "@type": "Audience",
      audienceType: "Educational Institutions",
      geographicArea: "Latin America",
    },
    hasVariant: [
      {
        "@type": "Product",
        name: "ConexStudios",
        description: "Plataforma educativa principal",
      },
      {
        "@type": "Product",
        name: "ConexAdmin",
        description: "Administración institucional",
      },
      {
        "@type": "Product",
        name: "ConexRH",
        description: "Recursos humanos educativos",
      },
      {
        "@type": "Product",
        name: "ConexServicios",
        description: "Servicios estudiantiles",
      },
      {
        "@type": "Product",
        name: "ConexBI",
        description: "Business Intelligence educativo",
      },
    ],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "29",
      highPrice: "500",
      priceCurrency: "USD",
      offerCount: "3",
      availability: "https://schema.org/InStock",
    },
  }

  // Datos estructurados de servicios
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://conexstudios.com/#service",
    name: "Servicios de Implementación ConexStudios",
    description: "Servicios completos de implementación, capacitación y soporte para plataformas educativas",
    provider: {
      "@id": "https://conexstudios.com/#organization",
    },
    serviceType: "Educational Technology Implementation",
    areaServed: [
      {
        "@type": "Country",
        name: "Colombia",
      },
      {
        "@type": "Country",
        name: "Mexico",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios ConexStudios",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Implementación Gratuita",
            description: "Configuración completa de la plataforma",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Capacitación Incluida",
            description: "Entrenamiento para profesores y administradores",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Soporte 24/7",
            description: "Asistencia técnica continua",
          },
        },
      ],
    },
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://conexstudios.com/#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es ConexStudios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ConexStudios es una plataforma educativa integral que revoluciona la gestión de instituciones educativas mediante herramientas avanzadas para estudiantes, profesores y administradores.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta ConexStudios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ConexStudios ofrece planes desde $29 USD mensuales para instituciones pequeñas, $79 USD para medianas, y precios personalizados para universidades y grandes instituciones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Incluye prueba gratuita?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, ofrecemos una prueba gratuita de 30 días sin necesidad de tarjeta de crédito, con acceso completo a todas las funcionalidades.",
        },
      },
      {
        "@type": "Question",
        name: "¿En qué países está disponible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ConexStudios está disponible en toda Latinoamérica, con presencia principal en Colombia, México, Argentina, Chile, Perú y Ecuador.",
        },
      },
    ],
  }

  return (
    <>
      {/* Schema.org Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Schema.org Software Application */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />

      {/* Schema.org Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {/* Schema.org WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {/* Schema.org Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      {/* Schema.org Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  )
}
