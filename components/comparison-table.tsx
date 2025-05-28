"use client"

import { CheckCircle, X, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ComparisonTable() {
  const features = [
    {
      category: "Gestión Académica",
      items: [
        "Gestión completa de estudiantes",
        "Control de asistencia automático",
        "Calificaciones en tiempo real",
        "Reportes académicos avanzados",
        "Gestión de horarios inteligente",
      ],
    },
    {
      category: "Comunicación",
      items: [
        "Chat integrado multiplataforma",
        "Notificaciones push personalizadas",
        "Comunicación con padres",
        "Mensajería masiva",
        "Videollamadas integradas",
      ],
    },
    {
      category: "Tecnología",
      items: [
        "Interfaz moderna e intuitiva",
        "App móvil nativa",
        "Sincronización en tiempo real",
        "API abierta para integraciones",
        "Backup automático en la nube",
      ],
    },
    {
      category: "Soporte",
      items: [
        "Soporte 24/7 en español",
        "Implementación gratuita",
        "Capacitación incluida",
        "Actualizaciones automáticas",
        "Garantía de uptime 99.9%",
      ],
    },
  ]

  const platforms = [
    {
      name: "ConexStudios",
      isOurs: true,
      scores: {
        "Gestión completa de estudiantes": true,
        "Control de asistencia automático": true,
        "Calificaciones en tiempo real": true,
        "Reportes académicos avanzados": true,
        "Gestión de horarios inteligente": true,
        "Chat integrado multiplataforma": true,
        "Notificaciones push personalizadas": true,
        "Comunicación con padres": true,
        "Mensajería masiva": true,
        "Videollamadas integradas": true,
        "Interfaz moderna e intuitiva": true,
        "App móvil nativa": true,
        "Sincronización en tiempo real": true,
        "API abierta para integraciones": true,
        "Backup automático en la nube": true,
        "Soporte 24/7 en español": true,
        "Implementación gratuita": true,
        "Capacitación incluida": true,
        "Actualizaciones automáticas": true,
        "Garantía de uptime 99.9%": true,
      },
    },
    {
      name: "Akdemia",
      isOurs: false,
      scores: {
        "Gestión completa de estudiantes": true,
        "Control de asistencia automático": false,
        "Calificaciones en tiempo real": true,
        "Reportes académicos avanzados": false,
        "Gestión de horarios inteligente": true,
        "Chat integrado multiplataforma": false,
        "Notificaciones push personalizadas": true,
        "Comunicación con padres": true,
        "Mensajería masiva": false,
        "Videollamadas integradas": false,
        "Interfaz moderna e intuitiva": false,
        "App móvil nativa": true,
        "Sincronización en tiempo real": false,
        "API abierta para integraciones": false,
        "Backup automático en la nube": true,
        "Soporte 24/7 en español": false,
        "Implementación gratuita": false,
        "Capacitación incluida": false,
        "Actualizaciones automáticas": true,
        "Garantía de uptime 99.9%": false,
      },
    },
    {
      name: "AsisteEscolar",
      isOurs: false,
      scores: {
        "Gestión completa de estudiantes": true,
        "Control de asistencia automático": true,
        "Calificaciones en tiempo real": false,
        "Reportes académicos avanzados": false,
        "Gestión de horarios inteligente": false,
        "Chat integrado multiplataforma": false,
        "Notificaciones push personalizadas": false,
        "Comunicación con padres": true,
        "Mensajería masiva": false,
        "Videollamadas integradas": false,
        "Interfaz moderna e intuitiva": false,
        "App móvil nativa": false,
        "Sincronización en tiempo real": false,
        "API abierta para integraciones": false,
        "Backup automático en la nube": false,
        "Soporte 24/7 en español": false,
        "Implementación gratuita": false,
        "Capacitación incluida": false,
        "Actualizaciones automáticas": false,
        "Garantía de uptime 99.9%": false,
      },
    },
    {
      name: "SAP Escolar",
      isOurs: false,
      scores: {
        "Gestión completa de estudiantes": true,
        "Control de asistencia automático": true,
        "Calificaciones en tiempo real": true,
        "Reportes académicos avanzados": true,
        "Gestión de horarios inteligente": true,
        "Chat integrado multiplataforma": false,
        "Notificaciones push personalizadas": false,
        "Comunicación con padres": false,
        "Mensajería masiva": false,
        "Videollamadas integradas": false,
        "Interfaz moderna e intuitiva": false,
        "App móvil nativa": false,
        "Sincronización en tiempo real": true,
        "API abierta para integraciones": true,
        "Backup automático en la nube": true,
        "Soporte 24/7 en español": false,
        "Implementación gratuita": false,
        "Capacitación incluida": false,
        "Actualizaciones automáticas": true,
        "Garantía de uptime 99.9%": true,
      },
    },
    {
      name: "Moodle",
      isOurs: false,
      scores: {
        "Gestión completa de estudiantes": false,
        "Control de asistencia automático": false,
        "Calificaciones en tiempo real": true,
        "Reportes académicos avanzados": true,
        "Gestión de horarios inteligente": false,
        "Chat integrado multiplataforma": true,
        "Notificaciones push personalizadas": false,
        "Comunicación con padres": false,
        "Mensajería masiva": false,
        "Videollamadas integradas": false,
        "Interfaz moderna e intuitiva": false,
        "App móvil nativa": true,
        "Sincronización en tiempo real": false,
        "API abierta para integraciones": true,
        "Backup automático en la nube": false,
        "Soporte 24/7 en español": false,
        "Implementación gratuita": true,
        "Capacitación incluida": false,
        "Actualizaciones automáticas": false,
        "Garantía de uptime 99.9%": false,
      },
    },
    {
      name: "Google Classroom",
      isOurs: false,
      scores: {
        "Gestión completa de estudiantes": false,
        "Control de asistencia automático": false,
        "Calificaciones en tiempo real": true,
        "Reportes académicos avanzados": false,
        "Gestión de horarios inteligente": false,
        "Chat integrado multiplataforma": false,
        "Notificaciones push personalizadas": true,
        "Comunicación con padres": false,
        "Mensajería masiva": false,
        "Videollamadas integradas": true,
        "Interfaz moderna e intuitiva": true,
        "App móvil nativa": true,
        "Sincronización en tiempo real": true,
        "API abierta para integraciones": true,
        "Backup automático en la nube": true,
        "Soporte 24/7 en español": false,
        "Implementación gratuita": true,
        "Capacitación incluida": false,
        "Actualizaciones automáticas": true,
        "Garantía de uptime 99.9%": true,
      },
    },
  ]

  const getScore = (platform: (typeof platforms)[0]) => {
    const totalFeatures = Object.keys(platform.scores).length
    const positiveFeatures = Object.values(platform.scores).filter(Boolean).length
    return Math.round((positiveFeatures / totalFeatures) * 100)
  }

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
        {platforms.map((platform, index) => (
          <Card
            key={platform.name}
            className={`text-center hover:scale-105 transition-all duration-300 ${
              platform.isOurs ? "border-2 border-[#144378] bg-[#144378]/5" : "border-gray-200"
            }`}
          >
            <CardContent className="pt-6">
              {platform.isOurs && (
                <Badge className="mb-2 bg-[#144378] text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Líder
                </Badge>
              )}
              <h3 className={`font-semibold mb-2 ${platform.isOurs ? "text-[#144378]" : "text-gray-700"}`}>
                {platform.name}
              </h3>
              <div className={`text-3xl font-bold ${platform.isOurs ? "text-[#144378]" : "text-gray-600"}`}>
                {getScore(platform)}%
              </div>
              <p className="text-sm text-gray-500">Funcionalidades</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Comparison */}
      <div className="overflow-x-auto">
        <div className="min-w-full">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/3">Funcionalidades</th>
                    {platforms.map((platform) => (
                      <th
                        key={platform.name}
                        className={`px-4 py-4 text-center text-sm font-semibold w-1/6 ${
                          platform.isOurs ? "text-[#144378] bg-[#144378]/5" : "text-gray-700"
                        }`}
                      >
                        {platform.name}
                        {platform.isOurs && <Badge className="ml-2 bg-[#144378] text-white text-xs">Nosotros</Badge>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {features.map((category, categoryIndex) => (
                    <>
                      <tr key={`category-${categoryIndex}`} className="bg-gray-100">
                        <td
                          colSpan={platforms.length + 1}
                          className="px-6 py-3 text-sm font-semibold text-gray-900 bg-gray-100"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((feature, featureIndex) => (
                        <tr
                          key={`${categoryIndex}-${featureIndex}`}
                          className="hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="px-6 py-4 text-sm text-gray-900">{feature}</td>
                          {platforms.map((platform) => (
                            <td key={platform.name} className="px-4 py-4 text-center">
                              {platform.scores[feature] ? (
                                <CheckCircle
                                  className={`w-5 h-5 mx-auto ${
                                    platform.isOurs ? "text-[#144378]" : "text-green-500"
                                  } hover:scale-110 transition-transform duration-200`}
                                />
                              ) : (
                                <X className="w-5 h-5 mx-auto text-red-400" />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-[#144378]/5 to-[#47483C]/5 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Convencido de que ConexStudios es la mejor opción?</h3>
        <p className="text-gray-600 mb-6">
          Únete a las instituciones que ya eligieron la plataforma más completa del mercado
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#144378] hover:bg-[#144378]/90 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
            Comenzar Prueba Gratuita
          </button>
          <button className="border-2 border-[#144378] text-[#144378] hover:bg-[#144378] hover:text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
            Solicitar Demo Personalizada
          </button>
        </div>
      </div>
    </div>
  )
}
