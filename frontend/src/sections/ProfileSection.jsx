import React from 'react';

export function ProfileSection({ nombre, onNombreChange }) {
  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Gestiona tu perfil de usuario</p>
      <div className="section-content">
        <p>Nombre actual: {nombre}</p>
        <input 
          value={nombre} 
          onChange={(e) => onNombreChange(e.target.value)}
          placeholder="Cambiar nombre"
        />
      </div>
    </div>
  );
}