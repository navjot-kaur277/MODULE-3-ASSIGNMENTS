import React, { useState } from "react";
import { TodoContext } from "../context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "../styles.css"; // Import the styles

const Todos = () => {
  // 1. Store State
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Context API" },
    { id: 2, title: "Build a creative UI" },
  ]);

  // 2. Define Actions
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(), // Simple unique ID
      title: title,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 3. Wrap children with Provider
  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      <div className="app-container">
        <div className="glass-card">
          <h1 className="header-title">🚀 Task Master</h1>
          <p className="subtitle">Managed via Global Context API</p>

          {/* Structure as per screenshot */}
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default Todos;
