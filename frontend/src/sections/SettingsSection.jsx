import React from 'react';

export function SettingsSection() {
  return (
    <div>
      <h1>Configuración</h1>
      <p>Ajusta las configuraciones de la aplicación</p>
      <div className="section-content">
        <div className="setting">
          <label>
            <input type="checkbox" /> Notificaciones por email
          </label>
        </div>
        <div className="setting">
          <label>
            <input type="checkbox" /> Modo oscuro
          </label>
        </div>
        <div className="setting">
          <label>
            <input type="checkbox" /> Idioma español
          </label>
        </div>
      </div>
    </div>
  );
}