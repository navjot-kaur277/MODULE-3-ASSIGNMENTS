// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  // Requirement: useState to store a boolean or color value
  const [isBlue, setIsBlue] = useState(false);

  const handleToggle = () => {
    setIsBlue(prevState => !prevState);
  };

  return (
    <div className="app-container">
      <h1>UI State Lab</h1>

      {/* Requirement: Conditional ClassName styling */}
      <div className={`display-box ${isBlue ? 'state-blue' : 'state-red'}`}>
        <p>{isBlue ? 'BLUE ACTIVE' : 'RED ACTIVE'}</p>
      </div>

      <button className="toggle-button" onClick={handleToggle}>
        Switch Theme
      </button>

      <footer style={{ marginTop: '20px', color: '#64748b', fontSize: '0.8rem' }}>
        Current State: {isBlue ? 'Boolean(true)' : 'Boolean(false)'}
      </footer>
    </div>
  );
}

export default App;