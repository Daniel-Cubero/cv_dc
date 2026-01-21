import React, { useState } from 'react';
import InfoCard from './InfoCard';
import { CV_DATA } from '../data/cvData';

const Proyectos = ({ onSelect }) => {
  const [subTab, setSubTab] = useState(Object.keys(CV_DATA.proyectos)[0]);
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="animate-in slide-in-from-bottom-8 duration-500">
      <div className="flex justify-center gap-2 mb-10 bg-[#1E293B]/50 p-1.5 rounded-2xl border border-blue-500/10">
        {Object.keys(CV_DATA.proyectos).map((t) => (
          <button key={t} onClick={() => {setSubTab(t); setExpandedId(null);}}
            className={`px-5 py-2 text-xs font-bold rounded-xl transition-all capitalize ${subTab === t ? 'bg-blue-600 text-white shadow-lg' : 'text-blue-300/50 hover:text-blue-200'}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {CV_DATA.proyectos[subTab].map((p) => (
          <div key={p.id}>
            <InfoCard 
              key={p.id}
              onClick={() => onSelect(p)}
              title={p.nombre} 
              subtitle={p.tech}
            >
              {expandedId === p.id && <p className="mt-4 text-blue-100 animate-in fade-in">{p.desc}</p>}
            </InfoCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;