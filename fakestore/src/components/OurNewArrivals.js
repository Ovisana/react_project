import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCart } from './CartContext'; // Import the Cart Context

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // Access addToCart function

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data); // Store products in state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="new-arrival" className="new-arrival product-carousel py-5 position-relative overflow-hidden">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
          <h4 className="text-uppercase text-dark">Our New Arrivals</h4>
          <a href="index.html" className="btn-link text-decoration-none">View All Products</a>
        </div>

        {/* Swiper Configuration */}
        <Swiper
          spaceBetween={20}  // space between slides
          slidesPerView={3}  // number of slides to show at once
          loop={true}  // loop the carousel
          pagination={{ clickable: true }}  // pagination (dots)
          breakpoints={{
            320: { slidesPerView: 1 },  // for small screens (mobile), show 1 slide
            768: { slidesPerView: 2 },  // for medium screens (tablets), show 2 slides
            1024: { slidesPerView: 3 }, // for large screens (desktops), show 3 slides
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder position-relative">
                  <a href="index.html">
                    <img
                      src={product.image}  // Use the product image from the API
                      alt={product.title}   // Set alt text from product title
                      className="product-image img-fluid"
                    />
                  </a>
                  <a href="index.html" className="btn-icon btn-wishlist">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref="#heart"></use>
                    </svg>
                  </a>
                  <div className="product-content">
                    <h5 className="element-title text-uppercase fs-5 mt-3">
                      <a href="index.html">{product.title}</a>
                    </h5>
                    <a href="#" className="text-decoration-none" data-after="Add to cart">
                      <span>${product.price}</span>  {/* Display the price */}
                    </a>
                    <button
                      onClick={() => addToCart(product)} // Add product to cart
                      className="btn btn-primary w-100 mt-2"  // Add your custom styles for the button here
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Pagination */}
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default ProductCarousel;
