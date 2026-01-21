import React from 'react';

const InfoCard = ({ title, subtitle, footer, children, onClick, active }) => {
  return (
    <div 
      onClick={onClick}
      className={`group w-full p-6 rounded-2xl border transition-all duration-300 text-center cursor-pointer
        ${active 
          ? 'bg-blue-600 border-transparent shadow-xl' 
          : 'bg-[#1E293B] border-blue-500/10 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]'}`}
    >
      <h3 className={`text-xl font-bold ${active ? 'text-white' : 'text-blue-100'}`}>{title}</h3>
      {subtitle && <p className={`text-sm mt-1 ${active ? 'text-blue-100/80' : 'text-cyan-400'}`}>{subtitle}</p>}
      {children}
      {footer && <p className={`text-xs mt-3 uppercase tracking-widest ${active ? 'text-blue-100/60' : 'text-blue-300/40'}`}>{footer}</p>}
    </div>
  );
};

export default InfoCard;