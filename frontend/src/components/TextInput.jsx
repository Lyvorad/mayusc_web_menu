import React from 'react';

export function TextInput({ value, onChange, placeholder }) {
  return (
    <div className="text-input-container">
      <label htmlFor="text-input" className="input-label">Input Text</label>
      <textarea
        id="text-input"
        className="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={6}
      />
    </div>
  );
}