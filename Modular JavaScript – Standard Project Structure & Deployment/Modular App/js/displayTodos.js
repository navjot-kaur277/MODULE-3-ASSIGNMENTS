// js/displayTodos.js

/**
 * Dynamically displays a list of todos on the page.
 * @param {Array<Object>} data - The array of todo objects.
 */
const displayTodos = (data) => {
    const todosContainer = document.getElementById('todos-container');
    if (!todosContainer) {
        console.error('Todos container not found.');
        return;
    }

    // 1. Create the HTML string for all todos
    const todosHtml = data.map(todo => `
        <div class="todo-item ${todo.completed ? 'completed' : ''}">
            <h3>${todo.title}</h3>
            <p>User ID: ${todo.userId}</p>
            <p>Status: ${todo.completed ? 'Completed' : 'Pending'}</p>
        </div>
    `).join('');

    // 2. Insert the HTML into the container
    todosContainer.innerHTML = todosHtml;
};

export default displayTodos;