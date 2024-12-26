import React, { useEffect } from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import CheckoutPage from "./components/CheckOut";
function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<ProductDetails />}/>
      <Route path="/checkout" element={<CheckoutPage />}/>
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
