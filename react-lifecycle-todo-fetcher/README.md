# React Lifecycle Todo Fetcher

A professional React application demonstrating the use of Hooks, API integration, and component lifecycle management through mounting and unmounting logic.

## 🚀 Features

- **Lifecycle Management**: Demonstrates `useEffect` cleanup functionality.
- **Data Fetching**: Integrates with [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to fetch live data.
- **Conditional Rendering**: Implements a toggle mechanism to mount/unmount the Todo list.
- **Responsive UI**: A modern, "Task Master Pro" themed dashboard with advanced CSS effects (Glassmorphism, conditional status badges, and hover animations).

## 🛠️ Project Requirements Met

- [x] Initial fetch of the first 15 todos using `useEffect`.
- [x] State management via `useState`.
- [x] Reusable `<TodoCard />` component accepting `userId`, `title`, and `completed` props.
- [x] Unmount button to trigger component removal.
- [x] Cleanup function implementation with a browser alert.

## 📂 Folder Structure

```text
src/
├── components/
│   ├── TodoCard.jsx      # Presentational component for tasks
│   ├── TodoList.jsx      # Logic-heavy component (fetch/map/cleanup)
│   └── TodoCard.css      # Component-specific styles
├── App.jsx               # Root component & unmount logic
├── App.css               # Global layout and theme
└── main.jsx              # Entry point