"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    const phoneNumber = "+573001234567" // Reemplazar con el número real
    const message = "¡Hola! Me interesa conocer más sobre ConexStudios para mi institución educativa."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group animate-bounce"
        style={{ animationDuration: "2s" }}
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />

        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          ¡Chatea con nosotros!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </button>

      {/* Ripple effect */}
      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
      <div
        className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-10"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  )
}
