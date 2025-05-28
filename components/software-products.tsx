"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Settings,
  UserCheck,
  Headphones,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Globe,
  Layers,
  Sparkles,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function SoftwareProducts() {
  const [activeProduct, setActiveProduct] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const products = [
    {
      name: "ConexStudios",
      subtitle: "Plataforma Educativa Principal",
      description:
        "El corazón del ecosistema educativo. Gestión integral de estudiantes, profesores y procesos académicos.",
      icon: GraduationCap,
      color: "#144378",
      gradient: "from-[#144378] to-[#47483C]",
      features: [
        "Gestión de estudiantes y profesores",
        "Aulas virtuales interactivas",
        "Evaluaciones adaptativas",
        "Comunicación integrada",
        "Reportes académicos",
        "Control de asistencia",
      ],
      stats: { users: "50K+", institutions: "500+", satisfaction: "98%" },
      isMain: true,
    },
    {
      name: "ConexAdmin",
      subtitle: "Administración Institucional",
      description: "Herramientas avanzadas para la gestión administrativa y operativa de instituciones educativas.",
      icon: Settings,
      color: "#47483C",
      gradient: "from-[#47483C] to-[#144378]",
      features: [
        "Gestión financiera integrada",
        "Control de inventarios",
        "Administración de sedes",
        "Gestión documental",
        "Procesos automatizados",
        "Auditoría y compliance",
      ],
      stats: { processes: "200+", efficiency: "85%", savings: "40%" },
      isMain: false,
    },
    {
      name: "ConexRH",
      subtitle: "Recursos Humanos",
      description: "Solución completa para la gestión del talento humano en instituciones educativas.",
      icon: UserCheck,
      color: "#144378",
      gradient: "from-[#144378] to-[#47483C]",
      features: [
        "Gestión de nómina educativa",
        "Evaluación de desempeño",
        "Capacitación y desarrollo",
        "Reclutamiento especializado",
        "Control de horarios",
        "Bienestar laboral",
      ],
      stats: { employees: "15K+", retention: "92%", satisfaction: "94%" },
      isMain: false,
    },
    {
      name: "ConexServicios",
      subtitle: "Servicios Estudiantiles",
      description: "Plataforma para la gestión de servicios complementarios y bienestar estudiantil.",
      icon: Headphones,
      color: "#47483C",
      gradient: "from-[#47483C] to-[#144378]",
      features: [
        "Servicios de cafetería",
        "Transporte escolar",
        "Biblioteca digital",
        "Actividades extracurriculares",
        "Servicios médicos",
        "Orientación psicológica",
      ],
      stats: { services: "50+", students: "30K+", satisfaction: "96%" },
      isMain: false,
    },
    {
      name: "ConexBI",
      subtitle: "Business Intelligence",
      description: "Análisis avanzado y visualización de datos para la toma de decisiones estratégicas.",
      icon: BarChart3,
      color: "#144378",
      gradient: "from-[#144378] to-[#47483C]",
      features: [
        "Dashboards interactivos",
        "Análisis predictivo",
        "Reportes personalizados",
        "KPIs educativos",
        "Inteligencia artificial",
        "Alertas automáticas",
      ],
      stats: { reports: "100+", accuracy: "99%", insights: "500+" },
      isMain: false,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animar productos secuencialmente
          products.forEach((_, index) => {
            setTimeout(() => {
              setActiveProduct(index)
            }, index * 600)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#144378] rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 bg-[#47483C] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#144378] rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#47483C] to-[#144378] rounded-full flex items-center justify-center mr-4">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Ecosistema{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47483C] to-[#144378]">
                  ConexStudios
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Una suite completa de productos de software diseñados para cubrir todas las necesidades de tu institución
              educativa. Integrados, potentes y fáciles de usar.
            </p>
            <Badge className="bg-[#144378]/10 text-[#144378] hover:bg-[#144378]/10 hover:scale-105 transition-all duration-300">
              <Globe className="w-4 h-4 mr-2" />5 Productos Integrados • 1 Ecosistema Completo
            </Badge>
          </div>
        </AnimatedSection>

        {/* Main Product Showcase */}
        <div className="mb-20">
          <AnimatedSection delay={0.2}>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Producto Principal</h3>
              <p className="text-gray-600">El núcleo de toda la experiencia educativa</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-[#144378]/20 bg-gradient-to-br from-white to-[#144378]/5 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#144378] to-[#47483C] rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <CardTitle className="text-3xl font-bold text-[#144378] mr-3">ConexStudios</CardTitle>
                    <Badge className="bg-gradient-to-r from-[#144378] to-[#47483C] text-white">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Principal
                    </Badge>
                  </div>
                  <CardDescription className="text-lg text-gray-600">Plataforma Educativa Integral</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 mb-8 text-lg">
                    El corazón del ecosistema educativo. Gestión integral de estudiantes, profesores y procesos
                    académicos en una sola plataforma poderosa e intuitiva.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-4 bg-[#144378]/5 rounded-xl hover:bg-[#144378]/10 transition-colors duration-300">
                      <div className="text-3xl font-bold text-[#144378] mb-2">50K+</div>
                      <div className="text-sm text-gray-600">Estudiantes Activos</div>
                    </div>
                    <div className="text-center p-4 bg-[#47483C]/5 rounded-xl hover:bg-[#47483C]/10 transition-colors duration-300">
                      <div className="text-3xl font-bold text-[#47483C] mb-2">500+</div>
                      <div className="text-sm text-gray-600">Instituciones</div>
                    </div>
                    <div className="text-center p-4 bg-[#144378]/5 rounded-xl hover:bg-[#144378]/10 transition-colors duration-300">
                      <div className="text-3xl font-bold text-[#144378] mb-2">98%</div>
                      <div className="text-sm text-gray-600">Satisfacción</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {products[0].features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#144378]/5 transition-colors duration-300"
                      >
                        <CheckCircle className="w-5 h-5 text-[#144378] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>

        {/* Supporting Products Grid */}
        <div>
          <AnimatedSection delay={0.4}>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Productos Complementarios</h3>
              <p className="text-gray-600">Soluciones especializadas que se integran perfectamente</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(1).map((product, index) => (
              <AnimatedSection key={product.name} delay={0.1 * (index + 1)}>
                <Card
                  className={`h-full border-2 transition-all duration-500 hover:scale-105 hover:shadow-xl group cursor-pointer ${
                    activeProduct >= index + 1
                      ? `border-[${product.color}]/30 bg-gradient-to-br from-white to-[${product.color}]/5`
                      : "border-gray-200 bg-white"
                  }`}
                  onMouseEnter={() => setActiveProduct(index + 1)}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${
                        activeProduct >= index + 1 ? `bg-gradient-to-r ${product.gradient}` : "bg-gray-100"
                      }`}
                    >
                      <product.icon
                        className={`w-8 h-8 transition-colors duration-300 ${
                          activeProduct >= index + 1 ? "text-white" : "text-gray-400"
                        }`}
                      />
                    </div>
                    <CardTitle
                      className={`text-xl mb-2 transition-colors duration-300 ${
                        activeProduct >= index + 1 ? `text-[${product.color}]` : "text-gray-700"
                      }`}
                    >
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-gray-500">{product.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{product.description}</p>

                    {/* Key Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`flex items-center text-xs transition-all duration-300 ${
                            activeProduct >= index + 1 ? "opacity-100 translate-x-0" : "opacity-70 translate-x-1"
                          }`}
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <div
                            className={`w-2 h-2 rounded-full mr-2 flex-shrink-0 transition-colors duration-300 ${
                              activeProduct >= index + 1 ? `bg-[${product.color}]` : "bg-gray-300"
                            }`}
                          ></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.entries(product.stats).map(([key, value], statIndex) => (
                        <div key={key} className="p-2">
                          <div
                            className={`text-lg font-bold transition-colors duration-300 ${
                              activeProduct >= index + 1 ? `text-[${product.color}]` : "text-gray-400"
                            }`}
                          >
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Integration Showcase */}
        <AnimatedSection delay={0.6}>
          <div className="mt-20 bg-gradient-to-r from-[#47483C] to-[#144378] rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Integración Total del Ecosistema</h3>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                Todos nuestros productos trabajan juntos de manera seamless, compartiendo datos y procesos para crear
                una experiencia educativa unificada y poderosa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: "🔄",
                  title: "Sincronización Automática",
                  description: "Los datos fluyen automáticamente entre todos los productos",
                },
                {
                  icon: "🎯",
                  title: "Vista Unificada",
                  description: "Un solo dashboard para controlar todo el ecosistema",
                },
                {
                  icon: "⚡",
                  title: "Implementación Rápida",
                  description: "Activa nuevos productos con un solo clic",
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-white/80 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-[#144378] hover:bg-gray-100 text-lg px-8 py-3 hover:scale-105 transition-all duration-300 mr-4"
              >
                Explorar Todos los Productos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#144378] text-lg px-8 py-3 hover:scale-105 transition-all duration-300"
              >
                Solicitar Demo Completa
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Product Comparison */}
        <AnimatedSection delay={0.7}>
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">¿Qué Producto Necesitas?</h3>
              <p className="text-gray-600">Encuentra la solución perfecta para tu institución</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  type: "Institución Pequeña",
                  products: ["ConexStudios"],
                  description: "Perfecto para colegios con menos de 500 estudiantes",
                  color: "#144378",
                },
                {
                  type: "Institución Mediana",
                  products: ["ConexStudios", "ConexAdmin", "ConexRH"],
                  description: "Ideal para instituciones de 500-2000 estudiantes",
                  color: "#47483C",
                },
                {
                  type: "Institución Grande",
                  products: ["ConexStudios", "ConexAdmin", "ConexRH", "ConexServicios", "ConexBI"],
                  description: "Solución completa para universidades y grandes instituciones",
                  color: "#144378",
                },
              ].map((option, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-[#144378]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-gray-900">{option.type}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {option.products.map((product, productIndex) => (
                        <div
                          key={productIndex}
                          className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        >
                          <CheckCircle className="w-5 h-5 text-[#144378]" />
                          <span className="font-medium text-gray-700">{product}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full mt-6 hover:scale-105 transition-all duration-300"
                      style={{ backgroundColor: option.color }}
                    >
                      Más Información
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
