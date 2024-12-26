import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useCart } from "./CartContext"; // Import Cart Context
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BestSellingItems = () => {
  const { addToCart } = useCart(); // Access addToCart function

  const products = [
    {
      image: "images/product-item-4.jpg",
      title: "Dark florish onepiece",
      price: "$95.00",
    },
    {
      image: "images/product-item-3.jpg",
      title: "Baggy Shirt",
      price: "$55.00",
    },
    {
      image: "images/product-item-5.jpg",
      title: "Cotton off-white shirt",
      price: "$65.00",
    },
    {
      image: "images/product-item-6.jpg",
      title: "Handmade crop sweater",
      price: "$50.00",
    },
    {
      image: "images/product-item-9.jpg",
      title: "Dark florish onepiece",
      price: "$70.00",
    },
    {
      image: "images/product-item-10.jpg",
      title: "Cotton off-white shirt",
      price: "$70.00",
    },
  ];

  return (
    <section id="best-sellers" className="best-sellers product-carousel py-5 position-relative overflow-hidden">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
          <h4 className="text-uppercase text-dark">Best Selling Items</h4>
          <a href="index.html" className="btn-link text-decoration-none">View All Products</a>
        </div>

        <Swiper
          className="product-swiper open-up"
          data-aos="zoom-out"
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
                  <a href="index.html">
                    <img src={product.image} alt={product.title} className="product-image img-fluid" />
                  </a>
                  <a href="index.html" className="btn-icon btn-wishlist">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use xlinkHref="#heart"></use>
                    </svg>
                  </a>
                  <div className="product-content">
                    <h5 className="text-uppercase fs-5 mt-3">
                      <a href="index.html" style={{ textDecoration: 'none' }}>{product.title} </a>
                    </h5>
                    <a href="index.html" className="text-decoration-none" data-after="Add to cart">
                      <span>{product.price}</span>
                    </a>
                    {/* Add to Cart button */}
                    <button
                      onClick={() => addToCart(product)} // Add product to cart
                      className="btn btn-primary mt-2"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="icon-arrow icon-arrow-left">
          <svg width="50" height="50" viewBox="0 0 24 24">
            <use xlinkHref="#arrow-left"></use>
          </svg>
        </div>
        <div className="icon-arrow icon-arrow-right">
          <svg width="50" height="50" viewBox="0 0 24 24">
            <use xlinkHref="#arrow-right"></use>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default BestSellingItems;
