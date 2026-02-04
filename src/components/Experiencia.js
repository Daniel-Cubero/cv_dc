import React from 'react';
import InfoCard from './InfoCard';
import { CV_DATA } from '../data/cvDataDani';

const Experiencia = ( { onSelect }) => {
  const trabajos = CV_DATA.experiencia;

  return (
    <div className="animate-in slide-in-from-bottom-8 duration-500 space-y-6">
      <h2 className="text-2xl font-bold text-center text-white mb-8">Trayectoria Profesional</h2>
      <div className="space-y-4">
      {trabajos.map((job, i) => (
        <InfoCard 
          key={i} 
          title={job.cargo} 
          subtitle={job.empresa} 
          footer={job.periodo}
          onClick={() => onSelect({
            nombre: job.cargo,
            tech: job.empresa,
            // Usamos los nombres exactos que tu Modal espera
            desc: job.logros || "Sin logros especificados", 
            long_desc: job.detalle || job.long_desc || "No hay detalles adicionales." 
          })}
        >
          {/* Mostrar un pequeño adelanto en la card si hay logros */}
          {job.logros && (
            <p className="mt-4 text-sm text-blue-100/70 border-t border-blue-500/10 pt-4 line-clamp-2">
              {job.logros}
            </p>
          )}
        </InfoCard>
      ))}
      </div>
    </div>
  );
};

export default Experiencia;