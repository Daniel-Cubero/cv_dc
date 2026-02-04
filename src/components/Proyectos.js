import React, { useState } from 'react';
import InfoCard from './InfoCard';
import { CV_DATA } from '../data/cvDataDani';

const Proyectos = ({ onSelect }) => {
  const categories = Object.keys(CV_DATA.proyectos);
  const [subTab, setSubTab] = useState(categories[0]);

  return (
    <div className="animate-in slide-in-from-bottom-8 duration-500">
      {/* Selector de Categorías */}
      <div className="flex justify-center gap-2 mb-10 bg-[#1E293B]/50 p-1.5 rounded-2xl border border-blue-500/10">
        {categories.map((t) => (
          <button 
            key={t} 
            onClick={() => setSubTab(t)}
            className={`px-5 py-2 text-xs font-bold rounded-xl transition-all capitalize ${
              subTab === t 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-blue-300/50 hover:text-blue-200'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* LA SOLUCIÓN: Añadimos una 'key' al contenedor de la lista. 
          Al cambiar 'subTab', React destruirá este div y todo su contenido, 
          evitando que se concatenen o se mantengan proyectos anteriores.
      */}
      <div key={subTab} className="space-y-4 animate-in fade-in duration-500">
        {CV_DATA.proyectos[subTab].map((p, index) => (
          <div key={`${subTab}-${p.id || index}`}> 
            <InfoCard 
              onClick={() => onSelect(p)}
              title={p.nombre} 
              subtitle={p.tech}
            >
              {p.desc && <p className="mt-2 text-sm text-blue-200/70">{p.desc}</p>}
            </InfoCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;