import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container card">
      <h1 style={{ marginBottom: "1.5rem", fontSize: "2.5rem" }}>
        Welcome to Home Page
      </h1>
      <p style={{ color: "#ccc", marginBottom: "2rem" }}>
        Secure access to your tasks. Please log in to continue.
      </p>
      <button onClick={() => navigate("/login")}>Go to Login Page</button>
    </div>
  );
};

export default Home;
