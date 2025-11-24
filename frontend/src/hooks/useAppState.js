import { useState } from 'react';

export function useAppState() {
  const [nombre, setNombre] = useState('Luis');
  const [respuesta, setRespuesta] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('inicio');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const selectSection = (section) => {
    setCurrentSection(section);
  };

  return {
    nombre,
    setNombre,
    respuesta,
    setRespuesta,
    menuOpen,
    currentSection,
    toggleMenu,
    closeMenu,
    selectSection
  };
}