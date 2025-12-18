import React, { useState } from 'react';
import './App.css';

import ComponentA from './Component/componentA';
import ComponentB from './Component/componentB';

function App() {
  // Requirement: status must be managed using useState
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div className="container">
      <div className="glass-panel">
        <h1>Status Toggle</h1>
        
        <div className="display-area">
          {/* Requirement: Use ternary operator ( ? : ) for conditional rendering */}
          {status ? <ComponentA /> : <ComponentB />}
        </div>

        {/* The button that triggers the state change */}
        <button 
          className={`toggle-btn ${status ? 'active' : ''}`} 
          onClick={toggleStatus}
        >
          {status ? 'Show Component B' : 'Show Component A'}
        </button>
      </div>
    </div>
  );
}

export default App;