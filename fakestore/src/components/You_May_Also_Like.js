import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useCart } from './CartContext'; // Import CartContext

function You_May_Also_Like() {
  const { addToCart } = useCart(); // Access the addToCart function

  const products = [
    {
      id: 1,
      image: 'images/product-item-5.jpg',
      title: 'Dark florish onepiece',
      price: 95.00,
      link: 'index.html',
    },
    {
      id: 2,
      image: 'images/product-item-6.jpg',
      title: 'Baggy Shirt',
      price: 55.00,
      link: 'index.html',
    },
    {
      id: 3,
      image: 'images/product-item-7.jpg',
      title: 'Cotton off-white shirt',
      price: 65.00,
      link: 'index.html',
    },
    {
      id: 4,
      image: 'images/product-item-8.jpg',
      title: 'Handmade crop sweater',
      price: 50.00,
      link: 'index.html',
    },
    {
      id: 5,
      image: 'images/product-item-1.jpg',
      title: 'Handmade crop sweater',
      price: 70.00,
      link: 'index.html',
    },
  ];

  return (
    <section
      id="related-products"
      className="related-products product-carousel py-5 position-relative overflow-hidden"
    >
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
          <h4 className="text-uppercase text-dark">You May Also Like</h4>
          <a href="index.html" className="btn-link text-decoration-none">
            View All Products
          </a>
        </div>

        {/* Swiper configuration */}
        <Swiper
          spaceBetween={20} // space between slides
          slidesPerView={3} // show 3 slides at once
          loop={true} // loop the carousel
          pagination={{ clickable: true }} // pagination dots
          breakpoints={{
            320: { slidesPerView: 1 }, // for small screens, show 1 slide
            768: { slidesPerView: 2 }, // for medium screens, show 2 slides
            1024: { slidesPerView: 3 }, // for large screens, show 3 slides
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
                  <a href={product.link}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image img-fluid "
                    />
                  </a>
                  <div className="product-content">
                    <h5 className="text-uppercase fs-5 mt-3">
                      <a
                        href={product.link}
                        style={{ textDecoration: 'none' }}
                      >
                        {product.title}
                      </a>
                    </h5>
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => addToCart(product)} // Add product to cart
                    className="btn btn-primary mt-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default You_May_Also_Like;
