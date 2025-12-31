import { useState, lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Performance Lab</h1>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "3rem", margin: "10px 0" }}>{count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increment Counter
        </button>
      </div>

      <Suspense fallback={<div className="loading-spinner"></div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};

export default ParentComponent;
