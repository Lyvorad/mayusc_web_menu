import { useState } from 'react'
import { saludoGET, saludoPOST } from './api'

export default function App(){
  const [nombre, setNombre] = useState('Luis')
  const [respuesta, setRespuesta] = useState(null)

  const consultar = async () => {
    const data = await saludoGET(nombre)
    setRespuesta(data.saludo)
  }

  const enviar = async () => {
    const data = await saludoPOST(nombre)
    setRespuesta(data.saludo)
  }

  return (
    <div className="container">
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
}
