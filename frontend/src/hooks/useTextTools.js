import { useState } from 'react';
import { textAPI } from '../api/textAPI';

export function useTextTools() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTool, setActiveTool] = useState(null);

  const transformText = async (tool) => {
    if (!inputText.trim()) {
      alert('Please enter some text first');
      return;
    }

    setIsLoading(true);
    setActiveTool(tool);

    try {
      let result;
      
      switch (tool) {
        case 'uppercase':
          result = await textAPI.toUppercase(inputText);
          break;
        case 'lowercase':
          result = await textAPI.toLowercase(inputText);
          break;
        case 'correct':
          result = await textAPI.correctText(inputText);
          break;
        default:
          throw new Error('Unknown tool');
      }

      setOutputText(result);
    } catch (error) {
      console.error('Transformation error:', error);
      alert('Error processing text. Please try again.');
      setOutputText(inputText); // Fallback to original text
    } finally {
      setIsLoading(false);
    }
  };

  const clearText = () => {
    setInputText('');
    setOutputText('');
    setActiveTool(null);
  };

  return {
    inputText,
    setInputText,
    outputText,
    isLoading,
    activeTool,
    transformText,
    clearText
  };
}