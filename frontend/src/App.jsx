import { useState } from 'react'
import { saludoGET, saludoPOST } from './api'

export default function App() {
  const [nombre, setNombre] = useState('Luis')
  const [respuesta, setRespuesta] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('inicio')

  const consultar = async () => {
    const data = await saludoGET(nombre)
    setRespuesta(data.saludo)
  }

  const enviar = async () => {
    const data = await saludoPOST(nombre)
    setRespuesta(data.saludo)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const selectSection = (section) => {
    setCurrentSection(section)
    setMenuOpen(false) // Cierra el menú al seleccionar
  }

  const renderSection = () => {
    switch(currentSection) {
      case 'inicio':
        return (
          <div>
            <h1>Mi Web Dinámica</h1>
            <p>Prueba la API desde el frontend</p>
            <input value={nombre} onChange={e => setNombre(e.target.value)} />
            <div className="buttons">
              <button onClick={consultar}>GET saludo</button>
              <button onClick={enviar}>POST saludo</button>
            </div>
            {respuesta && <div className="respuesta">{respuesta}</div>}
          </div>
        )
      case 'perfil':
        return (
          <div>
            <h1>Perfil de Usuario</h1>
            <p>Gestiona tu perfil de usuario</p>
            <div className="section-content">
              <p>Nombre actual: {nombre}</p>
              <input 
                value={nombre} 
                onChange={e => setNombre(e.target.value)}
                placeholder="Cambiar nombre"
              />
            </div>
          </div>
        )
      case 'configuracion':
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
            </div>
          </div>
        )
      case 'ayuda':
        return (
          <div>
            <h1>Ayuda</h1>
            <p>Centro de ayuda y soporte</p>
            <div className="section-content">
              <h3>Contacto</h3>
              <p>Email: soporte@miapp.com</p>
              <p>Teléfono: +1 234 567 890</p>
            </div>
          </div>
        )
      default:
        return (
          <div>
            <h1>Mi Web Dinámica</h1>
            <p>Prueba la API desde el frontend</p>
          </div>
        )
    }
  }

  return (
    <div className="app-container">
      {/* Header con botón de menú hamburguesa */}
      <header className="header">
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="header-title">Mi Aplicación</h1>
      </header>

      {/* Menú lateral */}
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${currentSection === 'inicio' ? 'active' : ''}`}
            onClick={() => selectSection('inicio')}
          >
            Inicio
          </button>
          <button 
            className={`nav-item ${currentSection === 'perfil' ? 'active' : ''}`}
            onClick={() => selectSection('perfil')}
          >
            Perfil
          </button>
          <button 
            className={`nav-item ${currentSection === 'configuracion' ? 'active' : ''}`}
            onClick={() => selectSection('configuracion')}
          >
            Configuración
          </button>
          <button 
            className={`nav-item ${currentSection === 'ayuda' ? 'active' : ''}`}
            onClick={() => selectSection('ayuda')}
          >
            Ayuda
          </button>
        </nav>
      </aside>

      {/* Overlay para cerrar menú al hacer clic fuera */}
      {menuOpen && (
        <div className="menu-overlay" onClick={toggleMenu}></div>
      )}

      {/* Contenido principal */}
      <main className="main-content">
        <div className="container">
          {renderSection()}
        </div>
      </main>
    </div>
  )
}