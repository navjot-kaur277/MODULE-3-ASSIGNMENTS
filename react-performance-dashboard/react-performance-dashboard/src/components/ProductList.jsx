import React from "react";

const ProductList = ({ products, onProductSelect }) => {
  console.log("ProductList Component Rendered!");

  return (
    <div className="product-list-container">
      <h3 className="list-title">Available Modules</h3>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => onProductSelect(product)}
          >
            <div className="card-header">
              <span className="product-id">#{product.id}</span>
              <span className="product-price">${product.price}</span>
            </div>
            <p className="product-name">{product.name}</p>
            <button className="select-btn">Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
