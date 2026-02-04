import React, { useState } from 'react';
import InfoCard from './InfoCard';
import { CV_DATA } from '../data/cvDataDani';

const Formacion = () => {
  const [subTab, setSubTab] = useState('universitaria');
  const [cursoTab, setCursoTab] = useState('programacion');

  return (
    <div className="animate-in slide-in-from-bottom-8 duration-500">
      <h2 className="text-2xl font-bold text-center text-white mb-8">Formación</h2>
      
      <div className="flex justify-center gap-2 mb-6 bg-[#1E293B]/50 p-1.5 rounded-2xl border border-blue-500/10 max-w-sm mx-auto">
        {['universitaria', 'cursos'].map((t) => (
          <button 
            key={t} 
            onClick={() => setSubTab(t)}
            className={`flex-1 px-5 py-2 text-xs font-bold rounded-xl transition-all capitalize 
              ${subTab === t 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-blue-300/50 hover:text-blue-200'}`}
          >
            {t === 'universitaria' ? 'Universitaria' : 'Cursos y Otros'}
          </button>
        ))}
      </div>

      {subTab === 'cursos' && (
        <div className="flex justify-center flex-wrap gap-2 mb-10 animate-in fade-in zoom-in duration-300">
          {Object.keys(CV_DATA.formacion.cursos).map((cat) => (
            <button 
              key={cat} 
              onClick={() => setCursoTab(cat)}
              className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg border transition-all
                ${cursoTab === cat 
                  ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' 
                  : 'bg-transparent border-blue-500/10 text-blue-300/30 hover:border-blue-500/30'}`}
            >
              {cat.replace('management', 'Project Management')}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-4">
        {subTab === 'universitaria' ? (
          CV_DATA.formacion.universitaria.map((item, i) => (
            <InfoCard key={i} title={item.titulo} subtitle={item.centro} footer={item.año} />
          ))
        ) : (
          CV_DATA.formacion.cursos[cursoTab]?.sort((a, b) => Number(b.año) - Number(a.año)).map((item, i) => (
            <InfoCard key={i} title={item.titulo} subtitle={item.centro} footer={item.año} />
          ))
        )}
      </div>
    </div>
  );
};

export default Formacion;