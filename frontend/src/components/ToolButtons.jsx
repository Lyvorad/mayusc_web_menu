import React from 'react';

export function ToolButtons({ activeTool, onToolSelect, onClear, isLoading }) {
  const tools = [
    { id: 'uppercase', label: 'UPPERCASE' },
    { id: 'lowercase', label: 'lowercase' },
    { id: 'correct', label: 'AI Correction' }
  ];

  return (
    <div className="tool-buttons-container">
      <div className="tool-buttons">
        {tools.map(tool => (
          <button
            key={tool.id}
            className={`tool-button ${activeTool === tool.id ? 'active' : ''} ${
              isLoading ? 'loading' : ''
            }`}
            onClick={() => onToolSelect(tool.id)}
            disabled={isLoading}
          >
            {tool.label}
          </button>
        ))}
      </div>
      
      <button
        className="clear-button"
        onClick={onClear}
        disabled={isLoading}
      >
        Clear All
      </button>
    </div>
  );
}