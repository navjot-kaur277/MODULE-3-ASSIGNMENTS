import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        // Requirement: Display only first 10 todos
        setTodos(data.slice(0, 10));
      })
      .catch((err) => console.error("Error fetching todos:", err));
  }, []);

  return (
    <div className="page-container">
      <h1>Task Dashboard 📝</h1>
      <div className="todos-grid">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`todo-card ${todo.completed ? "completed" : "pending"}`}
          >
            <div className="status-badge">
              {todo.completed ? "Completed" : "Pending"}
            </div>
            <h3>{todo.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todos;
