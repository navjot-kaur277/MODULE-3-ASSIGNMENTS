import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  // Consume context
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-group">
      <input
        type="text"
        placeholder="What's your next mission?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        ADD
      </button>
    </form>
  );
};

export default AddTodo;
