import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  // Static products array
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", description: "High-performance laptop", avgRating: 4.5, totalRatings: 10 },
    { id: 2, name: "Phone", description: "Latest smartphone", avgRating: 4.2, totalRatings: 15 }
  ]);

  // Handle rating submission
  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              avgRating:
                ((product.avgRating * product.totalRatings) + newRating) /
                (product.totalRatings + 1),
              totalRatings: product.totalRatings + 1
            }
          : product
      )
    );
  };

  return (
    <div>
      <h1>Product Ratings</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRatingSubmit={handleRatingSubmit} />
      ))}
    </div>
  );
};

export default App;
