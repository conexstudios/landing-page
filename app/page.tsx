"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  BarChart3,
  Shield,
  CheckCircle,
  Star,
  Menu,
  X,
  GraduationCap,
  Calendar,
  MessageSquare,
  FileText,
  Award,
  Zap,
} from "lucide-react"
import { useState, useEffect } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { TypewriterText } from "@/components/typewriter-text"
import { FloatingElements } from "@/components/floating-elements"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WaveSection } from "@/components/wave-section"
import { ComparisonTable } from "@/components/comparison-table"
import { DemoFormModal } from "@/components/demo-form-modal"
import { ProcessFlow } from "@/components/process-flow"
import { SoftwareProducts } from "@/components/software-products"

export default function ConexStudiosLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [demoType, setDemoType] = useState<"demo" | "trial">("demo")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openDemoModal = (type: "demo" | "trial") => {
    setDemoType(type)
    setDemoModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <FloatingElements />

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <AnimatedSection delay={0.1}>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-[#47483C] to-[#144378] rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">ConexStudios</span>
              </div>
            </AnimatedSection>

            {/* Desktop Navigation */}
            <AnimatedSection delay={0.2}>
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-[#144378] transition-all duration-300 hover:scale-105"
                >
                  Características
                </a>
                <a
                  href="#process"
                  className="text-gray-600 hover:text-[#144378] transition-all duration-300 hover:scale-105"
                >
                  Proceso
                </a>
                <a
                  href="#products"
                  className="text-gray-600 hover:text-[#144378] transition-all duration-300 hover:scale-105"
                >
                  Productos
                </a>
                <a
                  href="#solutions"
                  className="text-gray-600 hover:text-[#144378] transition-all duration-300 hover:scale-105"
                >
                  Soluciones
                </a>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-[#144378] transition-all duration-300 hover:scale-105"
                >
                  Precios
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-[#144378] transition-all duration-300 hover:scale-105"
                >
                  Testimonios
                </a>
                <Button
                  variant="outline"
                  className="border-[#144378]/20 text-[#144378] hover:bg-[#144378]/5 hover:scale-105 transition-all duration-300"
                >
                  Iniciar Sesión
                </Button>
                <Button
                  className="bg-[#144378] hover:bg-[#144378]/90 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  onClick={() => openDemoModal("trial")}
                >
                  Prueba Gratuita
                </Button>
              </nav>
            </AnimatedSection>

            {/* Mobile menu button */}
            <button
              className="md:hidden hover:scale-110 transition-transform duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-[#144378] transition-colors duration-300">
                  Características
                </a>
                <a href="#process" className="text-gray-600 hover:text-[#144378] transition-colors duration-300">
                  Proceso
                </a>
                <a href="#products" className="text-gray-600 hover:text-[#144378] transition-colors duration-300">
                  Productos
                </a>
                <a href="#solutions" className="text-gray-600 hover:text-[#144378] transition-colors duration-300">
                  Soluciones
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-[#144378] transition-colors duration-300">
                  Precios
                </a>
                <a href="#testimonials" className="text-gray-600 hover:text-[#144378] transition-colors duration-300">
                  Testimonios
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button
                    variant="outline"
                    className="border-[#144378]/20 text-[#144378] hover:scale-105 transition-all duration-300"
                  >
                    Iniciar Sesión
                  </Button>
                  <Button
                    className="bg-[#144378] hover:bg-[#144378]/90 hover:scale-105 transition-all duration-300"
                    onClick={() => openDemoModal("trial")}
                  >
                    Prueba Gratuita
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <AnimatedSection delay={0.3}>
                <Badge className="mb-6 bg-[#144378]/10 text-[#144378] hover:bg-[#144378]/10 hover:scale-105 transition-all duration-300">
                  <Zap className="w-4 h-4 mr-2" />
                  Plataforma Educativa del Futuro
                </Badge>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  <TypewriterText text="Conecta tu institución con el" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47483C] to-[#144378] animate-pulse">
                    {" "}
                    futuro educativo
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl">
                  ConexStudios es la plataforma integral que revoluciona la gestión educativa. Conecta estudiantes,
                  profesores y administradores en un ecosistema digital innovador.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-[#144378] hover:bg-[#144378]/90 text-lg px-8 py-3 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                    onClick={() => openDemoModal("trial")}
                  >
                    Comenzar Prueba Gratuita
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#144378]/20 text-[#144378] hover:bg-[#144378]/5 text-lg px-8 py-3 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                    onClick={() => openDemoModal("demo")}
                  >
                    Ver Demo
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={1.0}>
                <p className="text-sm text-gray-500 mt-4">
                  ✨ Sin tarjeta de crédito • 30 días gratis • Configuración en 5 minutos
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.5}>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Estudiantes universitarios colaborando con tecnología moderna en campus"
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#144378]/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#144378]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">+50K Estudiantes</div>
                      <div className="text-sm text-gray-500">Conectados diariamente</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <WaveSection />

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#144378]">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-gray-600">Instituciones</div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#144378]">
                  <AnimatedCounter end={50} suffix="K+" />
                </div>
                <div className="text-gray-600">Estudiantes</div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#144378]">
                  <AnimatedCounter end={5} suffix="K+" />
                </div>
                <div className="text-gray-600">Profesores</div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-[#144378]">
                  <AnimatedCounter end={99.9} suffix="%" decimals={1} />
                </div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <WaveSection variant="reverse" />

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Todo lo que necesitas en una plataforma
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Herramientas poderosas diseñadas específicamente para instituciones educativas modernas
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Gestión de Estudiantes",
                description: "Sistema completo para administrar perfiles, inscripciones y seguimiento académico",
                color: "[#144378]",
                delay: 0.1,
              },
              {
                icon: BookOpen,
                title: "Aulas Virtuales",
                description: "Espacios digitales interactivos para clases en línea y recursos educativos",
                color: "[#47483C]",
                delay: 0.2,
              },
              {
                icon: BarChart3,
                title: "Analytics Avanzados",
                description: "Reportes detallados y métricas en tiempo real del rendimiento académico",
                color: "[#144378]",
                delay: 0.3,
              },
              {
                icon: Calendar,
                title: "Calendario Inteligente",
                description: "Programación automática de clases, exámenes y eventos institucionales",
                color: "[#47483C]",
                delay: 0.4,
              },
              {
                icon: MessageSquare,
                title: "Comunicación Integrada",
                description: "Chat, notificaciones y mensajería entre todos los miembros de la comunidad",
                color: "[#144378]",
                delay: 0.5,
              },
              {
                icon: Shield,
                title: "Seguridad Avanzada",
                description: "Protección de datos con encriptación y cumplimiento de normativas educativas",
                color: "[#47483C]",
                delay: 0.6,
              },
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={feature.delay}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-${feature.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                    </div>
                    <CardTitle className="group-hover:text-[#144378] transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <WaveSection />

      {/* Process Flow Section */}
      <section id="process">
        <ProcessFlow />
      </section>

      <WaveSection variant="reverse" />

      {/* Software Products Section */}
      <section id="products">
        <SoftwareProducts />
      </section>

      <WaveSection />

      {/* Educational Images Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transformando la educación en todo el país
              </h2>
              <p className="text-xl text-gray-600">Desde colegios rurales hasta universidades metropolitanas</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="relative group">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Aula moderna de colegio con estudiantes usando tablets y tecnología interactiva"
                  className="rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">Colegios Modernos</h3>
                    <p className="text-sm">Tecnología en cada aula</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative group">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Campus universitario con estudiantes caminando y usando dispositivos móviles"
                  className="rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">Universidades</h3>
                    <p className="text-sm">Campus conectados</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative group">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Laboratorio de instituto técnico con estudiantes trabajando en proyectos prácticos"
                  className="rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">Institutos Técnicos</h3>
                    <p className="text-sm">Formación especializada</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <WaveSection variant="reverse" />

      {/* Solutions Section */}
      <AnimatedSection>
        <section id="solutions" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Soluciones para cada tipo de institución
              </h2>
              <p className="text-xl text-gray-600">
                Adaptamos nuestra plataforma a las necesidades específicas de tu institución
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "Colegios",
                  description: "Gestión integral para educación primaria y secundaria",
                  color: "[#144378]",
                  features: [
                    "Control de asistencia",
                    "Comunicación con padres",
                    "Gestión de calificaciones",
                    "Biblioteca digital",
                  ],
                  delay: 0.1,
                },
                {
                  icon: Award,
                  title: "Universidades",
                  description: "Plataforma completa para educación superior",
                  color: "[#47483C]",
                  features: [
                    "Gestión de carreras",
                    "Campus virtual",
                    "Investigación colaborativa",
                    "Portal de empleabilidad",
                  ],
                  delay: 0.2,
                },
                {
                  icon: FileText,
                  title: "Institutos",
                  description: "Herramientas especializadas para formación técnica",
                  color: "[#144378]",
                  features: ["Talleres prácticos", "Certificaciones", "Bolsa de trabajo", "Seguimiento de egresados"],
                  delay: 0.3,
                },
              ].map((solution, index) => (
                <AnimatedSection key={index} delay={solution.delay}>
                  <Card
                    className={`border-2 border-${solution.color}/20 hover:border-${solution.color}/30 transition-all duration-500 hover:scale-105 hover:shadow-xl group`}
                  >
                    <CardHeader className="text-center">
                      <div
                        className={`w-16 h-16 bg-${solution.color}/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <solution.icon className={`w-8 h-8 text-${solution.color}`} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-[#144378] transition-colors duration-300">
                        {solution.title}
                      </CardTitle>
                      <CardDescription>{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {solution.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                            style={{ transitionDelay: `${featureIndex * 100}ms` }}
                          >
                            <CheckCircle className={`w-5 h-5 text-${solution.color} mr-3`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <WaveSection />

      {/* Student Development Section */}
      <section className="py-20 bg-gradient-to-br from-[#144378]/5 via-[#47483C]/5 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-[#144378]/10 text-[#144378] hover:bg-[#144378]/10 hover:scale-105 transition-all duration-300">
                <Award className="w-4 h-4 mr-2" />
                Desarrollo Integral del Estudiante
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Más que gestión,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47483C] to-[#144378]">
                  desarrollo real
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ConexStudios no solo administra datos, transforma vidas. Nuestras herramientas de diagnóstico y
                evaluación personalizada impulsan el crecimiento académico y personal de cada estudiante.
              </p>
            </div>
          </AnimatedSection>

          {/* Main Benefits Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#144378]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-[#144378]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Diagnóstico Personalizado</h3>
                    <p className="text-gray-600">
                      Identificamos fortalezas y áreas de mejora de cada estudiante mediante evaluaciones inteligentes
                      que se adaptan a su nivel y estilo de aprendizaje.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#47483C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#47483C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Evaluaciones Adaptativas</h3>
                    <p className="text-gray-600">
                      Pruebas que se ajustan automáticamente según las respuestas del estudiante, proporcionando una
                      medición precisa de sus competencias.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#144378]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-[#144378]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Retroalimentación Continua</h3>
                    <p className="text-gray-600">
                      Encuestas y evaluaciones constantes que permiten ajustar metodologías y personalizar la
                      experiencia educativa en tiempo real.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Estudiante realizando evaluación adaptativa en tablet con gráficos de progreso"
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">95% Precisión</div>
                      <div className="text-sm text-gray-500">En diagnósticos</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* CTA for Development Tools */}
          <AnimatedSection delay={0.5}>
            <div className="mt-16 bg-gradient-to-r from-[#47483C] to-[#144378] rounded-3xl p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Listo para potenciar el desarrollo de tus estudiantes?
              </h3>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Descubre cómo nuestras herramientas de diagnóstico y evaluación pueden transformar la experiencia
                educativa en tu institución.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#144378] hover:bg-gray-100 text-lg px-8 py-3 hover:scale-105 transition-all duration-300"
                  onClick={() => openDemoModal("demo")}
                >
                  Ver Demo de Herramientas
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#144378] text-lg px-8 py-3 hover:scale-105 transition-all duration-300"
                  onClick={() => openDemoModal("trial")}
                >
                  Solicitar Evaluación Gratuita
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveSection />

      {/* Testimonials */}
      <AnimatedSection>
        <section id="testimonials" className="py-20 bg-gradient-to-br from-[#144378]/5 to-[#47483C]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
              <p className="text-xl text-gray-600">Instituciones de todo el país confían en ConexStudios</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "ConexStudios transformó completamente nuestra gestión académica. La comunicación con los padres mejoró un 90% y los profesores están más organizados.",
                  author: "María González",
                  role: "Directora, Colegio San Patricio",
                  initials: "MG",
                  color: "[#144378]",
                  delay: 0.1,
                },
                {
                  text: "La plataforma es intuitiva y potente. Nuestros estudiantes se adaptaron rápidamente y ahora tenemos mejor seguimiento del rendimiento académico.",
                  author: "Carlos Rodríguez",
                  role: "Rector, Universidad Tecnológica",
                  initials: "CR",
                  color: "[#47483C]",
                  delay: 0.2,
                },
                {
                  text: "El soporte técnico es excepcional y la implementación fue muy sencilla. Recomiendo ConexStudios a cualquier institución educativa.",
                  author: "Ana López",
                  role: "Coordinadora, Instituto Técnico",
                  initials: "AL",
                  color: "[#144378]",
                  delay: 0.3,
                },
              ].map((testimonial, index) => (
                <AnimatedSection key={index} delay={testimonial.delay}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
                    <CardContent className="pt-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                            style={{ transitionDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-12 bg-${testimonial.color}/10 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <span className={`text-${testimonial.color} font-semibold`}>{testimonial.initials}</span>
                        </div>
                        <div>
                          <div className="font-semibold group-hover:text-[#144378] transition-colors duration-300">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <WaveSection />

      {/* Comparison Table Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir ConexStudios?</h2>
              <p className="text-xl text-gray-600">Comparamos con las principales plataformas educativas del mercado</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ComparisonTable />
          </AnimatedSection>
        </div>
      </section>

      <WaveSection variant="reverse" />

      {/* Pricing */}
      <AnimatedSection>
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Planes que se adaptan a tu institución
              </h2>
              <p className="text-xl text-gray-600">Comienza gratis y escala según tus necesidades</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Básico",
                  price: "$29",
                  description: "Perfecto para colegios pequeños",
                  features: ["Hasta 200 estudiantes", "Gestión básica", "Soporte por email", "Reportes básicos"],
                  popular: false,
                  delay: 0.1,
                },
                {
                  title: "Profesional",
                  price: "$79",
                  description: "Ideal para instituciones medianas",
                  features: [
                    "Hasta 1,000 estudiantes",
                    "Todas las funcionalidades",
                    "Soporte prioritario",
                    "Analytics avanzados",
                    "Integraciones",
                  ],
                  popular: true,
                  delay: 0.2,
                },
                {
                  title: "Enterprise",
                  price: "Personalizado",
                  description: "Para universidades y grandes instituciones",
                  features: [
                    "Estudiantes ilimitados",
                    "Personalización completa",
                    "Soporte 24/7",
                    "Implementación dedicada",
                    "SLA garantizado",
                  ],
                  popular: false,
                  delay: 0.3,
                },
              ].map((plan, index) => (
                <AnimatedSection key={index} delay={plan.delay}>
                  <Card
                    className={`border-2 ${plan.popular ? "border-[#144378] relative scale-105" : "border-gray-200"} hover:shadow-xl transition-all duration-500 hover:scale-110 group`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-[#144378] text-white animate-pulse">Más Popular</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl group-hover:text-[#144378] transition-colors duration-300">
                        {plan.title}
                      </CardTitle>
                      <div className="text-4xl font-bold text-gray-900 mt-4 group-hover:scale-110 transition-transform duration-300">
                        {plan.price}
                        {plan.price !== "Personalizado" && <span className="text-lg text-gray-500">/mes</span>}
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                            style={{ transitionDelay: `${featureIndex * 100}ms` }}
                          >
                            <CheckCircle className="w-5 h-5 text-[#144378] mr-3" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full hover:scale-105 transition-all duration-300 ${
                          plan.popular ? "bg-[#144378] hover:bg-[#144378]/90" : "hover:shadow-lg"
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                        onClick={() => openDemoModal(plan.title === "Enterprise" ? "demo" : "trial")}
                      >
                        {plan.title === "Enterprise" ? "Contactar Ventas" : "Comenzar Prueba"}
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <WaveSection />

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-[#47483C] to-[#144378] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-pulse">
              ¿Listo para transformar tu institución?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Únete a cientos de instituciones que ya están revolucionando la educación con ConexStudios
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#144378] hover:bg-gray-100 text-lg px-8 py-3 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                onClick={() => openDemoModal("trial")}
              >
                Comenzar Prueba Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#144378] text-lg px-8 py-3 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                onClick={() => openDemoModal("demo")}
              >
                Agendar Demo
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <WaveSection variant="reverse" />

      {/* Footer */}
      <AnimatedSection>
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#47483C] to-[#144378] rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">ConexStudios</span>
                </div>
                <p className="text-gray-400 mb-4">Conectando el futuro de la educación, una institución a la vez.</p>
                <div className="flex space-x-4">
                  {["f", "t", "in"].map((social, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#144378] transition-all duration-300 hover:scale-110 cursor-pointer"
                    >
                      <span className="text-xs">{social}</span>
                    </div>
                  ))}
                </div>
              </div>

              {[
                {
                  title: "Producto",
                  links: ["Características", "Proceso", "Productos", "Precios", "Integraciones", "API"],
                },
                {
                  title: "Empresa",
                  links: ["Acerca de", "Blog", "Carreras", "Contacto"],
                },
                {
                  title: "Soporte",
                  links: ["Centro de Ayuda", "Documentación", "Estado del Sistema", "Seguridad"],
                },
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-2 text-gray-400">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© 2024 ConexStudios. Todos los derechos reservados.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {["Privacidad", "Términos", "Cookies"].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </AnimatedSection>

      {/* Demo Form Modal */}
      <DemoFormModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} initialType={demoType} />

      <WhatsAppButton />
    </div>
  )
}
