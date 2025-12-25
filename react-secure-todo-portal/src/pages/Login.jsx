import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation Logic
    if (email === "admin@gmail.com" && password === "admin@123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/todos");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container card">
      <h2 style={{ marginBottom: "1rem" }}>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={{ marginTop: "1rem" }}>
          Login
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
