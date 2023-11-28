import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const wordCount = inputText.split(/\s+/).filter(word => word !== '').length;

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
