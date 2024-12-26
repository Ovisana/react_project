import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Cart provider to wrap the app and share cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]); // Add item to cart
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};
