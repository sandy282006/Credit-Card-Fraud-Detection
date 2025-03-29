import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;