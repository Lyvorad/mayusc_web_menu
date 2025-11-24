import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { useAppState } from './hooks/useAppState';
import { renderSection } from './utils/sectionRenderer';
import { saludoGET, saludoPOST } from './api';

export default function App() {
  const {
    nombre,
    setNombre,
    respuesta,
    setRespuesta,
    menuOpen,
    currentSection,
    toggleMenu,
    closeMenu,
    selectSection
  } = useAppState();

  const handleConsultar = async () => {
    const data = await saludoGET(nombre);
    setRespuesta(data.saludo);
  };

  const handleEnviar = async () => {
    const data = await saludoPOST(nombre);
    setRespuesta(data.saludo);
  };

  const sectionProps = {
    nombre,
    setNombre,
    respuesta,
    setRespuesta,
    onConsultar: handleConsultar,
    onEnviar: handleEnviar
  };

  return (
    <div className="app-container">
      <Header onMenuToggle={toggleMenu} />
      
      <Sidebar 
        isOpen={menuOpen}
        currentSection={currentSection}
        onSectionSelect={selectSection}
        onClose={closeMenu}
      />

      <main className="main-content">
        <div className="container">
          {renderSection(currentSection, sectionProps)}
        </div>
      </main>
    </div>
  );
}