import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div className="todo-item">
      <span className="todo-text">{todo.title}</span>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        ✕
      </button>
    </div>
  );
};

export default TodoItem;
