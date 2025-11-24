import React from 'react';

export function Header({ onMenuToggle }) {
  return (
    <header className="header">
      <button className="menu-toggle" onClick={onMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="header-title">Mi Aplicación</h1>
    </header>
  );
}