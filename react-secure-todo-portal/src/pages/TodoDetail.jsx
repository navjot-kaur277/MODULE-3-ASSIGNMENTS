import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TodoDetail = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [todoId]);

  if (!todo)
    return (
      <div className="container" style={{ color: "#333" }}>
        Loading...
      </div>
    );

  return (
    <div className="container card">
      <h3 style={{ color: "#888", marginBottom: "0.5rem" }}>
        Task ID: {todo.id}
      </h3>
      <h1 style={{ marginBottom: "1.5rem", textTransform: "capitalize" }}>
        {todo.title}
      </h1>

      <div style={{ marginBottom: "2rem" }}>
        Status:
        {/* We just DISPLAY the status here, as requested */}
        <span
          className={`status ${todo.completed ? "completed" : "pending"}`}
          style={{ marginLeft: "10px" }}
        >
          {todo.completed ? "Completed" : "Not Completed"}
        </span>
      </div>

      <button className="nav-btn" onClick={() => navigate("/todos")}>
        Back to List
      </button>
    </div>
  );
};

export default TodoDetail;
