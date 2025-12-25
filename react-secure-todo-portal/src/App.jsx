import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/todos"
        element={
          <ProtectedRoute>
            <TodoList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/todos/:todoId"
        element={
          <ProtectedRoute>
            <TodoDetail />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
