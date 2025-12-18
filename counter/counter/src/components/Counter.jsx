import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect to check for divisibility by 3
  useEffect(() => {
    // Check if count is not zero and divisible by 3
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }
  }, [count]); // Fires whenever the count changes

  // Logic for dynamic color styling
  const getThemeColor = () => {
    if (count > 0) return '#10b981'; // Green for positive
    if (count < 0) return '#f43f5e'; // Red for negative
    return '#6366f1'; // Indigo for zero
  };

  return (
    <div className="counter-card">
      <div className="counter-header">
        <span 
          className="status-dot" 
          style={{ backgroundColor: getThemeColor(), boxShadow: `0 0 10px ${getThemeColor()}` }}
        ></span>
        <p>Smart Counter</p>
      </div>
      
      <h1 
        className="counter-display" 
        style={{ 
          color: getThemeColor(),
          textShadow: `0 0 20px ${getThemeColor()}44`
        }}
      >
        {count}
      </h1>

      <div className="button-group">
        <button className="btn-control btn-decrement" onClick={() => setCount(count - 1)}>
          −
        </button>
        
        <button className="btn-control btn-reset" onClick={() => setCount(0)}>
          Reset
        </button>

        <button className="btn-control btn-increment" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;