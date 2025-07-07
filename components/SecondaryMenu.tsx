'use client';
import React from "react";
import Link from "next/link";

export default function SecondaryMenu() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-2xl mx-auto px-4 flex justify-center md:justify-between items-center py-2">
        <div className="flex space-x-6 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-700 hover:text-[#144378] transition-colors">Inicio</Link>
          <Link href="/blog" className="text-gray-700 hover:text-[#144378] transition-colors">Blog</Link>
          <Link href="/nosotros" className="text-gray-700 hover:text-[#144378] transition-colors">Nosotros</Link>
          <Link href="/noticias" className="text-gray-700 hover:text-[#144378] transition-colors">Noticias</Link>
          <Link href="/contacto" className="text-[#144378] font-semibold underline underline-offset-4">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
