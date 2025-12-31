import React from "react";

const HeavyComponent = React.memo(() => {
  console.log("HeavyComponent Rendered!");

  return (
    <div className="heavy-card">
      <h3>Optimized Heavy UI</h3>
      <p>Status: Memoized & Lazy Loaded</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "5px",
          marginTop: "10px",
        }}
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            style={{
              height: "10px",
              background: "#10b981",
              borderRadius: "2px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
});

export default HeavyComponent;
