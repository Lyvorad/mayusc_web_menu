import { useState } from 'react'
import { saludoGET, saludoPOST } from './api'

export default function App() {
  const [nombre, setNombre] = useState('Luis')
  const [respuesta, setRespuesta] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('inicio')

  const consultar = async () => {
    const data = await saludoGET(nombre)
    setRespuesta(data.saludo)
  }

  const enviar = async () => {
    const data = await saludoPOST(nombre)
    setRespuesta(data.saludo)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
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
            <p>Esta es la sección de perfil</p>
            <div className="profile-info">
              <p>Nombre: {nombre}</p>
              <p>Sección actual: Perfil</p>
            </div>
          </div>
        )
      case 'configuracion':
        return (
          <div>
            <h1>Configuración</h1>
            <p>Configura tus preferencias aquí</p>
            <div className="config-options">
              <label>
                <input type="checkbox" /> Notificaciones
              </label>
              <label>
                <input type="checkbox" /> Modo oscuro
              </label>
            </div>
          </div>
        )
      case 'ayuda':
        return (
          <div>
            <h1>Ayuda y Soporte</h1>
            <p>¿Necesitas ayuda? Contáctanos.</p>
            <div className="help-content">
              <p>Email: soporte@ejemplo.com</p>
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
      {/* Header con botón de menú */}
      <header className="header">
        <button className="menu-button" onClick={toggleSidebar}>
          ☰
        </button>
        <h1 className="header-title">Mi Aplicación</h1>
      </header>

      <div className="main-content">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <nav className="sidebar-nav">
            <button 
              className={`nav-item ${currentSection === 'inicio' ? 'active' : ''}`}
              onClick={() => {
                setCurrentSection('inicio')
                setSidebarOpen(false)
              }}
            >
              Inicio
            </button>
            <button 
              className={`nav-item ${currentSection === 'perfil' ? 'active' : ''}`}
              onClick={() => {
                setCurrentSection('perfil')
                setSidebarOpen(false)
              }}
            >
              Perfil
            </button>
            <button 
              className={`nav-item ${currentSection === 'configuracion' ? 'active' : ''}`}
              onClick={() => {
                setCurrentSection('configuracion')
                setSidebarOpen(false)
              }}
            >
              Configuración
            </button>
            <button 
              className={`nav-item ${currentSection === 'ayuda' ? 'active' : ''}`}
              onClick={() => {
                setCurrentSection('ayuda')
                setSidebarOpen(false)
              }}
            >
              Ayuda
            </button>
          </nav>
        </aside>

        {/* Overlay para cerrar sidebar en móvil */}
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={toggleSidebar}></div>
        )}

        {/* Contenido principal */}
        <main className="content">
          {renderSection()}
        </main>
      </div>
    </div>
  )
}