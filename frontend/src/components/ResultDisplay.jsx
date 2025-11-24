import React from 'react';

export function ResultDisplay({ result, isLoading }) {
  const handleCopy = async () => {
    if (result) {
      try {
        await navigator.clipboard.writeText(result);
        alert('Text copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="result-container">
        <label className="input-label">Processing...</label>
        <div className="result-loading">
          <div className="loading-spinner"></div>
          <p>Transforming your text...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="result-container">
        <label className="input-label">Output</label>
        <div className="result-placeholder">
          <p>Your transformed text will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="result-container">
      <div className="result-header">
        <label className="input-label">Output</label>
        <button className="copy-button" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="result-output">
        <pre>{result}</pre>
      </div>
    </div>
  );
}