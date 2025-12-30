import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";
import { generateProducts } from "./data/data";
import "./App.css";


const initialProducts = generateProducts(1000);

function App() {
  const [products] = useState(initialProducts);
  const [count, setCount] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const totalPrice = useMemo(() => {
    console.log("Expensive Calculation: Total Price computed");
    return products.reduce((acc, product) => acc + product.price, 0);
  }, [products]);


  const handleProductSelect = useCallback((product) => {
    console.log("Product Selected:", product.name);
    setSelectedItem(product);
  }, []); 

  return (
    <div className="app-container">
      <div className="dashboard-wrapper">
        {/* Header Section */}
        <header className="dashboard-header">
          <h1>⚡ React Performance Lab</h1>
          <div className="status-badge">Optimization: Active</div>
        </header>

        {/* Control Panel */}
        <div className="control-panel">
          <div className="card stats-card">
            <h2>Total Inventory Value</h2>
            <div className="price-display">${totalPrice.toLocaleString()}</div>
            <p className="subtext">Calculated via useMemo</p>
          </div>

          <div className="card counter-card">
            <h2>System Counter</h2>
            <div className="counter-display">{count}</div>
            <button
              className="action-btn"
              onClick={() => setCount((prev) => prev + 1)}
            >
              Increment Counter
            </button>
            <p className="subtext">Updates state without freezing UI</p>
          </div>
        </div>

        {/* Selected Item Feedback */}
        {selectedItem && (
          <div className="notification-bar">
            Currently Selected: <strong>{selectedItem.name}</strong>
          </div>
        )}

        {/* Product List */}
        <ProductList
          products={products}
          onProductSelect={handleProductSelect}
        />
      </div>
    </div>
  );
}

export default App;
