import React, { useEffect, useState } from 'react';

const FetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Fake Store Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchProducts;
