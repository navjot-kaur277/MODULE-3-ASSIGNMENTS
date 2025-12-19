import { useState, useEffect } from 'react';
import TodoCard from './TodoCard';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch logic
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        // Requirement: Get first 15 todos
        setTodos(data.slice(0, 15));
      });

    // Requirement: Cleanup function
    return () => {
      alert("cleanup worked");
    };
  }, []); // Empty dependency array means this runs on mount

  return (
    <div className="todo-grid">
      {todos.map(todo => (
        <TodoCard 
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;