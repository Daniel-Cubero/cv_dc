import React from 'react';

const Header = ({ personal }) => {
  return (
    <header className="max-w-2xl w-full pt-20 pb-12 text-center animate-in fade-in zoom-in duration-700">
      {/* Avatar / Inicial */}
      <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-8 shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center border-4 border-[#1E293B]">
        <span className="text-4xl font-bold text-white">
          {personal.nombre.charAt(0)}
        </span>
      </div>

      {/* Nombre y Título */}
      <h1 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-400 mb-2">
        {personal.nombre}
      </h1>
      <p className="text-cyan-400 font-medium tracking-[0.2em] uppercase text-sm mb-6">
        {personal.puesto}
      </p>

      {/* Resumen Profesional */}
      <p className="text-blue-200/70 leading-relaxed max-w-lg mx-auto text-lg italic px-4">
        "{personal.resumen}"
      </p>
      
      {/* Datos de Contacto */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-blue-300/60 font-medium">
        <span className="flex items-center gap-1">📍 {personal.ubicacion}</span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-1">✉️ {personal.contacto}</span>
      </div>
    </header>
  );
};

export default Header;