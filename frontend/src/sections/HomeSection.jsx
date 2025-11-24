import React from 'react';

export function HomeSection({ nombre, onNombreChange, respuesta, onConsultar, onEnviar }) {
  return (
    <div>
      <h1>Mi Web Dinámica</h1>
      <p>Prueba la API desde el frontend</p>
      <input 
        value={nombre} 
        onChange={(e) => onNombreChange(e.target.value)} 
        placeholder="Ingresa tu nombre"
      />
      <div className="buttons">
        <button onClick={onConsultar}>GET saludo</button>
        <button onClick={onEnviar}>POST saludo</button>
      </div>
      {respuesta && <div className="respuesta">{respuesta}</div>}
    </div>
  );
}