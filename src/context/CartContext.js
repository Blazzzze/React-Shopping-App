import React, { createContext, useState } from "react";

// Create a Context
const CartContext = createContext();

// Create a Provider Component
const CartProvider = ({ children }) => {
  console.log(JSON.parse(sessionStorage.getItem("cartItems")));
  const [cartItems, setCartItems] = useState(
    JSON.parse(sessionStorage.getItem("cartItems")) || []
  );
  const [cartCount, setCartCount] = useState(
    JSON.parse(sessionStorage.getItem("cartCount")) || 0
  );

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      );
      setCartItems(updatedCartItems);
      sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...product, count: 1 }];
      setCartItems(updatedCartItems);
      setCartCount(cartCount + 1);
      sessionStorage.setItem("cartCount", JSON.stringify(cartCount + 1));
      sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const handleSubtractFromCart = (id) => {
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem.count === 1) {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
      sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setCartCount(cartCount - 1);
      sessionStorage.setItem("cartCount", JSON.stringify(cartCount - 1));
    } else {
      const updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      );
      setCartItems(JSON.stringify(updatedCartItems));
    }
  };

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartCount(cartCount - 1);
    sessionStorage.setItem("cartCount", JSON.stringify(cartCount - 1));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        handleAddToCart,
        handleSubtractFromCart,
        handleRemoveItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
