import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <div className="container">
      <h1 className="main-title">Task Dashboard</h1>
      <div className="todo-grid">
        {todos.map((todo) => (
          <Link to={`/todo/${todo.id}`} key={todo.id} className="todo-card">
            <div className="card-content">
              <h3>{todo.title}</h3>
              <span
                className={`status-pill ${todo.completed ? "done" : "pending"}`}
              >
                {todo.completed ? "Completed" : "In Progress"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
