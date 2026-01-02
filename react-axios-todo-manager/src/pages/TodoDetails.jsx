import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTodoById } from "../api/todoService";

const TodoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getTodoById(id).then(setTodo);
  }, [id]);

  if (!todo) return <div className="loader">Loading Details...</div>;

  return (
    <div className="details-view">
      <button className="back-button" onClick={() => navigate("/")}>
        Back to List
      </button>
      <div className="detail-card">
        <span className="id-tag">Task #{todo.id}</span>
        <h2>{todo.title}</h2>
        <p className="status-text">
          Current Status:{" "}
          <strong>{todo.completed ? "Finished" : "Pending"}</strong>
        </p>
      </div>
    </div>
  );
};

export default TodoDetails;
