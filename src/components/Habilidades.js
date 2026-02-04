import React, { useState } from 'react';
import { CV_DATA } from '../data/cvDataDani';

const Habilidades = () => {
  const categorias = Object.keys(CV_DATA.habilidades);
  const [activeCat, setActiveCat] = useState(categorias[0]);

  return (
    <div className="animate-in slide-in-from-bottom-8 duration-500">
      <h2 className="text-2xl font-bold text-center text-white mb-8">Skills & Competencias</h2>
      
      {/* Selector de categorías */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              activeCat === cat 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-[#1E293B] text-blue-300/40 hover:text-blue-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Habilidades */}
      <div key={activeCat} className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in zoom-in-95 duration-500">
        {CV_DATA.habilidades[activeCat].map((skill, index) => (
          <div 
            key={index} 
            className="bg-[#1E293B]/50 border border-blue-500/10 p-4 rounded-2xl flex justify-between items-center"
          >
            <span className="text-blue-100 font-bold">{skill.nombre}</span>
            <span className="text-[10px] bg-blue-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20 uppercase font-black">
              {skill.nivel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;