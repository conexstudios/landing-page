"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setCargando(true);
    if (!form.nombre || !form.email || !form.mensaje) {
      setError("Por favor completa todos los campos.");
      setCargando(false);
      return;
    }
    setTimeout(() => {
      setEnviado(true);
      setCargando(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      {enviado ? (
        <div className="text-green-600 font-semibold text-center">
          ¡Gracias por contactarnos! Pronto nos pondremos en contacto contigo.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#144378] focus:ring-[#144378]"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#144378] focus:ring-[#144378]"
              placeholder="tucorreo@email.com"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              value={form.mensaje}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#144378] focus:ring-[#144378]"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={cargando}
            className="w-full bg-[#144378] text-white font-semibold py-2 px-4 rounded hover:bg-[#144378]/90 transition-all disabled:opacity-60"
          >
            {cargando ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      )}
    </div>
  );
}
