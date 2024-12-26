import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaStar, FaMinus, FaPlus } from 'react-icons/fa';
import { useCart } from './CartContext'; // Import the CartContext

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from route parameters
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const { addToCart } = useCart(); // Access the addToCart function

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]); // Re-fetch product when ID changes

  const handleQuantityChange = (type) => {
    if (type === 'increment') setQuantity((prev) => prev + 1);
    if (type === 'decrement' && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    const productData = {
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    };
    addToCart(productData); // Add product to cart
    alert(`${product.title} added to cart!`);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
            {[product.image, product.image, product.image].map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Slide ${index}`} className="img-fluid" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p>
            <FaStar className="text-warning" /> {product.rating?.rate || '4.5'}{' '}
            ({product.rating?.count || '100'} reviews)
          </p>
          <h2>${product.price}</h2>
          <div>
            <h4>Select Size:</h4>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="form-select"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </div>
          <div>
            <h4>Select Color:</h4>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="form-select"
            >
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
            </select>
          </div>
          <div className="mt-3">
            <button
              onClick={() => handleQuantityChange('decrement')}
              className="btn btn-light"
              disabled={quantity <= 1}
            >
              <FaMinus />
            </button>
            <span className="mx-3">{quantity}</span>
            <button
              onClick={() => handleQuantityChange('increment')}
              className="btn btn-light"
            >
              <FaPlus />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="btn btn-dark mt-3 px-4 py-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
