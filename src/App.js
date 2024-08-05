import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Profile from "./components/Profile";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { auth } from "./firebase";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(sessionStorage.getItem("isAuthenticated"))
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <Navigate to="/" />
              ) : (
                <Profile setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
          <Route
            path="/products"
            element={isAuthenticated ? <Product /> : <Navigate to="/profile" />}
          />
          <Route
            path="/products/:id"
            element={
              isAuthenticated ? <ProductDetails /> : <Navigate to="/profile" />
            }
          />
          <Route
            path="/cart"
            element={isAuthenticated ? <Cart /> : <Navigate to="/profile" />}
          />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;