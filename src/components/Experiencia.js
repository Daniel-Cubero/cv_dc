import React from 'react';
import InfoCard from './InfoCard';
import { CV_DATA } from '../data/cvData';

const Experiencia = ( { onSelect }) => {
  // Nota: Asegúrate de añadir la clave "experiencia" en tu objeto CV_DATA en cvData.js
  const trabajos = CV_DATA.experiencia || [
    { cargo: "Senior Developer", empresa: "Tech Solutions", periodo: "2022 - Actualidad", logros: "Liderazgo de equipo frontend." },
    { cargo: "Junior Developer", empresa: "Startup Inc", periodo: "2020 - 2022", logros: "Desarrollo de MVPs rápidos." }
  ];

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
              nombre: job.cargo,      // El modal espera 'nombre' o 'title'
              tech: job.empresa,       // Usamos tech para mostrar la empresa
              desc: job.logros,        // El resumen corto
              longDesc: job.detalle    // La descripción larga si la tienes
            })}
          >
            <p className="mt-4 text-sm text-blue-100/70 border-t border-blue-500/10 pt-4">
              {job.logros}
            </p>
          </InfoCard>
        ))}
      </div>
    </div>
  );
};

export default Experiencia;