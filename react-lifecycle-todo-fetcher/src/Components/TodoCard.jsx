import './TodoCard.css';

const TodoCard = ({ userId, title, completed }) => {
  return (
    <div className={`todo-card ${completed ? 'is-done' : ''}`}>
      <span className="user-badge">User: {userId}</span>
      <h3>{title}</h3>
      <div className="status-container">
        <span className={`status-dot ${completed ? 'complete' : 'pending'}`}></span>
        <p>{completed ? "Completed" : "In Progress"}</p>
      </div>
    </div>
  );
};

export default TodoCard;