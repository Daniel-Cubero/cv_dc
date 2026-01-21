import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'formacion', label: 'Formación', icon: '🎓' },
    { id: 'experiencia', label: 'Experiencia', icon: '💼' },
    { id: 'proyectos', label: 'Proyectos', icon: '🚀' }
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-[#1E293B]/90 backdrop-blur-xl border border-white/10 p-3 rounded-3xl shadow-2xl z-50 w-max">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(activeTab === item.id ? null : item.id)}
          className={`px-6 py-3 rounded-2xl flex flex-col items-center transition-all duration-300 
            ${activeTab === item.id 
              ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-110' 
              : 'hover:bg-white/5 text-blue-300/40'}`}
        >
          <span className="text-xl mb-1">{item.icon}</span>
          <span className={`text-[10px] font-black uppercase tracking-widest ${activeTab === item.id ? 'text-white' : 'inherit'}`}>
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navbar;