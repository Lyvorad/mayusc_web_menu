const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const textAPI = {
  async toUppercase(text) {
    const response = await fetch(`${API_BASE}/api/uppercase`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    
    if (!response.ok) throw new Error('Uppercase conversion failed');
    const data = await response.json();
    return data.result;
  },

  async toLowercase(text) {
    const response = await fetch(`${API_BASE}/api/lowercase`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    
    if (!response.ok) throw new Error('Lowercase conversion failed');
    const data = await response.json();
    return data.result;
  },

  async correctText(text) {
    const response = await fetch(`${API_BASE}/api/correct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    
    if (!response.ok) throw new Error('Text correction failed');
    const data = await response.json();
    return data.result;
  },
};