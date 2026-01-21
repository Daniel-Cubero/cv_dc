import React from 'react';

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Fondo oscuro con desenfoque */}
      <div 
        className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Contenido del Modal */}
      <div className="relative bg-[#1E293B] border border-blue-500/30 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{data.title || data.nombre}</h2>
              <p className="text-cyan-400 font-mono text-sm">{data.tech || data.periodo}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-blue-300/40 hover:text-white transition-colors text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-2">Resumen</h4>
              <p className="text-blue-100/90 leading-relaxed italic">
                {data.desc || data.logros}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-2">Detalles del Proyecto</h4>
              <p className="text-blue-100/70 leading-relaxed">
                {data.longDesc || "Aquí puedes añadir una descripción más extensa sobre los retos técnicos, tu rol específico y los resultados obtenidos en este proyecto o puesto laboral."}
              </p>
            </div>

            {data.tech && (
              <div className="flex flex-wrap gap-2 pt-4">
                {data.tech.split(',').map((t) => (
                  <span key={t} className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-lg text-[10px] font-bold text-blue-300 uppercase tracking-tighter">
                    {t.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;