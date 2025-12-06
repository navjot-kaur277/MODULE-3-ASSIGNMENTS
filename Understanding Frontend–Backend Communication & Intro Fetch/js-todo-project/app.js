const STORAGE_KEY = 'todos';
const container = document.getElementById('todo-container');
const emptyMessage = document.getElementById('empty-message');

// Sample English tasks
const sampleTodos = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Finish homework", completed: false },
  { id: 3, title: "Call mom", completed: true },
  { id: 4, title: "Clean the room", completed: false },
  { id: 5, title: "Read a book", completed: true },
  { id: 6, title: "Pay bills", completed: false },
  { id: 7, title: "Walk the dog", completed: false },
  { id: 8, title: "Reply to emails", completed: false },
  { id: 9, title: "Workout for 30 mins", completed: true },
  { id: 10, title: "Plan weekend trip", completed: false }
];

// Store sample todos if not already stored
function initializeTodos() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleTodos));
  }
  renderTodos();
}

// Get todos from localStorage
function getStoredTodos() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Render todos
function renderTodos() {
  container.innerHTML = '';
  const todos = getStoredTodos();

  if (todos.length === 0) {
    emptyMessage.style.display = 'block';
    return;
  } else {
    emptyMessage.style.display = 'none';
  }

  todos.forEach(todo => {
    const div = document.createElement('div');
    div.className = 'todo';

    const title = document.createElement('span');
    title.textContent = todo.title;
    if (todo.completed) title.classList.add('completed');

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = todo.completed ? 'Mark Incomplete' : 'Mark Complete';
    toggleBtn.onclick = () => toggleStatus(todo.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deleteTodo(todo.id);

    div.appendChild(title);
    div.appendChild(toggleBtn);
    div.appendChild(deleteBtn);
    container.appendChild(div);
  });
}

// Delete todo
function deleteTodo(id) {
  let todos = getStoredTodos();
  todos = todos.filter(todo => todo.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  renderTodos();
}

// Toggle status
function toggleStatus(id) {
  const todos = getStoredTodos();
  const updated = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  renderTodos();
}

// Initialize
initializeTodos();
