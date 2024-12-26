import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useCart } from './CartContext'; // Import Cart Context
import { Link } from 'react-router-dom';

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };
  const { cartItems } = useCart(); // Access cart items from context

  // Function to calculate the total number of products in the cart
  const calculateCartCount = () => {
    return cartItems.length; // Count the number of items in the cart
  };

  const cartCount = calculateCartCount(); // Get the cart count

  return (
    <nav className="navbar navbar-expand-lg bg-light text-uppercase fs-6 p-3 border-bottom align-items-center">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center w-100">

          {/* Logo header */}
          <div className="col-auto">
            <Navbar.Brand href="/" className="text-dark">
            <img src="images/main-logo.png" alt="logo" />
            </Navbar.Brand>
          </div>

          <div className="col-auto">
      <div className={`offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 gap-1 gap-md-5 pe-3">
            {/* Home Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#" id="dropdownHome" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home
              </a>
              <ul className="dropdown-menu list-unstyled" aria-labelledby="dropdownHome">
                <li><a href="index.html" className="dropdown-item">Home Layout 1</a></li>
                <li><a href="index.html" className="dropdown-item">Home Layout 2</a></li>
                <li><a href="index.html" className="dropdown-item">Home Layout 3</a></li>
                <li><a href="index.html" className="dropdown-item">Home Layout 4</a></li>
              </ul>
            </li>
            {/* Shop Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownShop" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <ul className="dropdown-menu list-unstyled" aria-labelledby="dropdownShop">
                <li><a href="index.html" className="dropdown-item">Shop Sidebar</a></li>
                <li><a href="index.html" className="dropdown-item">Shop Three Column</a></li>
                <li><a href="index.html" className="dropdown-item">Shop Four Column</a></li>
                <li><a href="index.html" className="dropdown-item">Single Product</a></li>
              </ul>
            </li>
            {/* Blog Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownBlog" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Blog
              </a>
              <ul className="dropdown-menu list-unstyled" aria-labelledby="dropdownBlog">
                <li><a href="index.html" className="dropdown-item">Blog Classic</a></li>
                <li><a href="index.html" className="dropdown-item">Blog Grid with Sidebar</a></li>
                <li><a href="index.html" className="dropdown-item">Single Post</a></li>
              </ul>
            </li>
            {/* Pages Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownPages" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </a>
              <ul className="dropdown-menu list-unstyled" aria-labelledby="dropdownPages">
                <li><a href="index.html" className="dropdown-item">About</a></li>
                <li><a href="index.html" className="dropdown-item">Cart</a></li>
                <li><a href="index.html" className="dropdown-item">Checkout</a></li>
                <li><a href="index.html" className="dropdown-item">Contact</a></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      
    </div>


          <div className="col-3 col-lg-auto">
            <ul className="list-unstyled d-flex m-0">
              {/* Wishlist */}
              <li className="d-none d-lg-block">
                <a href="index.html" className="text-uppercase mx-3 text-decoration-none">
                  Wishlist <span className="wishlist-count">({wishlistCount})</span>
                </a>
              </li>

              {/* Cart */}
              <li className="d-none d-lg-block">
            <Link
              to="/checkout"
            >
              Cart <span className="cart-count">({cartCount})</span>
            </Link>
          </li>

              {/* Wishlist Icon (Mobile) */}
              <li className="d-lg-none">
                <a href="#" className="mx-2">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#heart"></use>
                  </svg>
                </a>
              </li>

              {/* Cart Icon (Mobile) */}
              <li className="d-lg-none">
                <a href="#" className="mx-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#cart"></use>
                  </svg>
                </a>
              </li>

              {/* Search Box */}
              <li className="search-box mx-2">
                <a href="#search" className="search-button">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#search"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;