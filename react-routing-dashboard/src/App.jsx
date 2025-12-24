import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Todos from "./pages/Todos";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <div className="app-main">
      <Navbar />
      <div className="content">
        <Routes>
          {/* Default redirect to /home if user types just slash */}
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/todos" element={<Todos />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
