import React from 'react';

export function Sidebar({ isOpen, currentSection, onSectionSelect, onClose }) {
  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'perfil', label: 'Perfil' },
    { id: 'configuracion', label: 'Configuración' },
    { id: 'ayuda', label: 'Ayuda' }
  ];

  const handleItemClick = (sectionId) => {
    onSectionSelect(sectionId);
    onClose();
  };

  return (
    <>
      {isOpen && <div className="menu-overlay" onClick={onClose}></div>}
      
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${currentSection === item.id ? 'active' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}