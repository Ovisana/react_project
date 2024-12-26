import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Shop() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data.slice(0, 3)); // Fetch and limit to the first 3 products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to ProductDetails page with product ID
  };

  return (
    <section className="categories overflow-hidden">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="cat-item image-zoom-effect">
                <div className="image-holder">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image img-fluid"
                    onClick={() => handleProductClick(product.id)} // Handle click
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className="category-content">
                  <div className="product-button">
                    <button
                      onClick={() => handleProductClick(product.id)}
                      className="btn btn-common text-uppercase"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
