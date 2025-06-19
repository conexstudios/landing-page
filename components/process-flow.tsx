"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, Calendar, FileText, Building, BookOpen, ArrowDown, Sparkles } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const processSteps = [
    {
      icon: Calendar,
      title: "Planifica y Controla",
      description: "Todos los procesos académicos, desde inscripciones hasta actos de grado.",
      details: ["Gestión de matrículas", "Programación académica", "Control de asistencia", "Seguimiento de progreso"],
      color: "#144378",
      delay: 0.2,
    },
    {
      icon: FileText,
      title: "Emite reportes académicos",
      description: "Desde las etapas inicial, primaria y educación media.",
      details: [
        "Boletines personalizados",
        "Reportes de rendimiento",
        "Análisis estadísticos",
        "Certificados digitales",
      ],
      color: "#47483C",
      delay: 0.4,
    },
    {
      icon: Building,
      title: "Gestión académica y administrativa",
      description: "Por unidad de negocios, sede, localidad, facultad entre otros, de forma centralizada.",
      details: ["Administración multi-sede", "Control financiero", "Gestión de recursos", "Coordinación institucional"],
      color: "#144378",
      delay: 0.6,
    },
    {
      icon: BookOpen,
      title: "Emite libros fiscales",
      description: "De compras, ventas y los auxiliares de cuentas por cobrar y pagar.",
      details: ["Contabilidad integrada", "Facturación automática", "Control de cartera", "Reportes fiscales"],
      color: "#47483C",
      delay: 0.8,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animar los pasos secuencialmente
          processSteps.forEach((_, index) => {
            setTimeout(() => {
              setActiveStep(index)
            }, index * 800)
          })
        }
      },
      { threshold: 0.3 },
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
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#144378] rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-[#47483C] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#47483C] to-[#144378] rounded-full flex items-center justify-center mr-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                ¿Cómo funciona{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47483C] to-[#144378]">
                  nuestro sistema de gestión académica? 
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un flujo de trabajo inteligente que conecta todos los aspectos de tu institución educativa en un proceso
              continuo y eficiente.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Process Flow */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-16 bottom-16 w-1 bg-gradient-to-b from-[#144378] to-[#47483C] opacity-20"></div>

            {/* Animated Progress Line */}
            <div
              className="absolute left-8 top-16 w-1 bg-gradient-to-b from-[#144378] to-[#47483C] transition-all duration-2000 ease-out"
              style={{
                height: isVisible ? `${((activeStep + 1) / processSteps.length) * 100}%` : "0%",
                maxHeight: "calc(100% - 8rem)",
              }}
            ></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <AnimatedSection key={index} delay={step.delay}>
                  <div
                    className={`relative flex items-start space-x-6 transition-all duration-500 ${
                      activeStep >= index ? "opacity-100 translate-x-0" : "opacity-50 translate-x-4"
                    }`}
                  >
                    {/* Step Icon */}
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                        activeStep >= index
                          ? "bg-gradient-to-r from-[#47483C] to-[#144378] scale-110 shadow-lg"
                          : "bg-gray-200"
                      }`}
                      style={{ backgroundColor: activeStep >= index ? step.color : undefined }}
                    >
                      <step.icon
                        className={`w-8 h-8 transition-all duration-500 ${
                          activeStep >= index ? "text-white" : "text-gray-400"
                        }`}
                      />

                      {/* Pulse animation for active step */}
                      {activeStep === index && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#47483C] to-[#144378] animate-ping opacity-20"></div>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 min-w-0">
                      <div
                        className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 hover:shadow-xl ${
                          activeStep >= index
                            ? "border-l-4 border-[#144378] transform scale-105"
                            : "border-l-4 border-gray-200"
                        }`}
                      >
                        <h3
                          className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                            activeStep >= index ? "text-[#144378]" : "text-gray-600"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

                        {/* Step Details */}
                        <div className="grid grid-cols-2 gap-2">
                          {step.details.map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className={`flex items-center text-sm transition-all duration-300 ${
                                activeStep >= index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
                              }`}
                              style={{ transitionDelay: `${detailIndex * 100}ms` }}
                            >
                              <CheckCircle className="w-4 h-4 text-[#144378] mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Arrow connector */}
                    {index < processSteps.length - 1 && (
                      <div
                        className={`absolute left-8 top-20 transition-all duration-500 ${
                          activeStep > index ? "opacity-100 scale-100" : "opacity-0 scale-50"
                        }`}
                      >
                        <ArrowDown className="w-6 h-6 text-[#144378] animate-bounce" />
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Information Panel */}
          <AnimatedSection delay={0.3}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-[#47483C] to-[#144378] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">¿Qué es ConexStudios?</h3>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  ConexStudios es la opción perfecta para que lleves al siguiente nivel la gestión escolar de tu unidad
                  educativa.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Una plataforma confiable, fácil de usar y lo mejor de todo, aplicable a todos los niveles educativos.
                </p>

                {/* Key Benefits */}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: "🎯", title: "Gestión Integral", desc: "Todo en una sola plataforma" },
                    { icon: "📊", title: "Reportes Inteligentes", desc: "Datos en tiempo real" },
                    { icon: "🔒", title: "Seguridad Total", desc: "Protección de datos garantizada" },
                    { icon: "🚀", title: "Fácil Implementación", desc: "Configuración en minutos" },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-r from-[#144378]/5 to-[#47483C]/5 hover:from-[#144378]/10 hover:to-[#47483C]/10 transition-all duration-300"
                    >
                      <div className="text-2xl">{benefit.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                        <p className="text-gray-600 text-xs">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-[#47483C] to-[#144378] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Descubre el Proceso Completo
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Process Summary */}
        <AnimatedSection delay={0.5}>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-[#47483C] to-[#144378] rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Un Proceso Continuo de Excelencia Educativa</h3>
              <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
                Desde la planificación inicial hasta los reportes finales, ConexStudios automatiza y optimiza cada paso
                del proceso educativo, garantizando eficiencia y transparencia en toda tu institución.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { number: "01", title: "Planificación", desc: "Estratégica y detallada" },
                  { number: "02", title: "Ejecución", desc: "Automatizada y eficiente" },
                  { number: "03", title: "Seguimiento", desc: "En tiempo real" },
                  { number: "04", title: "Resultados", desc: "Medibles y confiables" },
                ].map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">{phase.number}</span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">{phase.title}</h4>
                    <p className="text-white/80 text-sm">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
