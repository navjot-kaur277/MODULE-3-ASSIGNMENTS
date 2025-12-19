
import { useState } from 'react';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div className="app-container">
      <header>
        <h1>Task Master Pro</h1>
        <button 
          className={`toggle-btn ${!showTodos ? 'mount' : 'unmount'}`}
          onClick={() => setShowTodos(!showTodos)}
        >
          {showTodos ? 'Unmount Todos' : 'Mount Todos'}
        </button>
      </header>

      <main>
        {showTodos ? <TodoList /> : <div className="empty-state">Component Unmounted</div>}
      </main>
    </div>
  );
}

export default App;