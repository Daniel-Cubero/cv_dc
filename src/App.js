import React, { useState } from 'react';
import { CV_DATA } from './data/cvData';
import Header from './components/Layout/Header';
import Navbar from './components/Layout/Navbar';
import Formacion from './components/Formacion';
import Proyectos from './components/Proyectos';
import Experiencia from './components/Experiencia';
import Modal from './components/Modal'

const App = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  return (
    <div className="min-h-screen bg-[#0F172A] text-blue-50 font-['Inter'] flex flex-col items-center px-6 pb-32">
      
      {!activeTab && (
        <div className="w-full flex justify-center animate-in fade-in zoom-in duration-1000">
        <Header personal={CV_DATA.personal} />
        </div>
      )}
      
      {activeTab &&(
        <main className="max-w-2xl w-full pt-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
          {/* Botón opcional para volver atrás/cerrar pestaña y ver el Header de nuevo */}
          <button 
            onClick={() => setActiveTab(null)}
            className="mb-8 text-blue-400/50 hover:text-blue-400 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
          >
            ← Volver al inicio
          </button>

          {activeTab === 'formacion' && <Formacion onSelect={setSelectedItem} />}
          {activeTab === 'experiencia' && <Experiencia onSelect={setSelectedItem} />}
          {activeTab === 'proyectos' && <Proyectos onSelect={setSelectedItem} />}
        </main>
      )}


      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <Modal 
        isOpen={!!selectedItem} 
        onClose={closeModal} 
        data={selectedItem} 
      />
    </div>
  );
};

export default App;