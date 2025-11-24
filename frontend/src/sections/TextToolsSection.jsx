import React, { useState } from 'react';
import { TextInput } from '../components/TextInput';
import { ToolButtons } from '../components/ToolButtons';
import { ResultDisplay } from '../components/ResultDisplay';
import { useTextTools } from '../hooks/useTextTools';

export function TextToolsSection() {
  const {
    inputText,
    setInputText,
    outputText,
    isLoading,
    activeTool,
    transformText,
    clearText
  } = useTextTools();

  return (
    <div className="text-tools-section">
      <h1>Text Tools</h1>
      <p>Transform and correct your text with powerful tools</p>
      
      <div className="text-tools-container">
        <TextInput
          value={inputText}
          onChange={setInputText}
          placeholder="Enter your text here..."
        />
        
        <ToolButtons
          activeTool={activeTool}
          onToolSelect={transformText}
          onClear={clearText}
          isLoading={isLoading}
        />
        
        <ResultDisplay
          result={outputText}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}