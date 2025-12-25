import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10))); // Get first 10
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="card" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <h2>Your Dashboard</h2>
        <button
          className="nav-btn"
          onClick={handleLogout}
          style={{ marginTop: 0 }}
        >
          Logout
        </button>
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="list-item"
            onClick={() => navigate(`/todos/${todo.id}`)}
          >
            <span>{todo.title}</span>
            <span
              className={`status ${todo.completed ? "completed" : "pending"}`}
            >
              {todo.completed ? "Done" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
