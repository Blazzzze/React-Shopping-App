import React, { createContext, useState } from 'react';

// Create a Context
const CartContext = createContext();

// Create a Provider Component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, count: item.count + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
      setCartCount(cartCount + 1);
    }
  };

  const handleSubtractFromCart = (id) => {
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem.count === 1) {
      setCartItems(cartItems.filter(item => item.id !== id));
      setCartCount(cartCount - 1);
    } else {
      setCartItems(cartItems.map(item => item.id === id ? { ...item, count: item.count - 1 } : item));
    }
  };

  const handleRemoveItem = (id) => {
    const itemToRemove = cartItems.find(item => item.id === id);
    setCartItems(cartItems.filter(item => item.id !== id));
    setCartCount(cartCount - itemToRemove.count);
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, handleAddToCart, handleSubtractFromCart, handleRemoveItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
