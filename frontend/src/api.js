const BASE = import.meta.env.VITE_API_URL || 'https://mayusc-service.onrender.com'

export async function saludoGET(nombre = 'Luis'){
  const res = await fetch(`${BASE}/api/saludo?nombre=${encodeURIComponent(nombre)}`)
  return await res.json()
}

export async function saludoPOST(nombre = 'Luis'){
  const res = await fetch(`${BASE}/api/saludo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre })
  })
  return await res.json()
}
