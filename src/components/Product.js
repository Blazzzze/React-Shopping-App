import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { CartContext } from "../context/CartContext";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const { handleAddToCart, handleSubtractFromCart, cartItems } =
    useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const productsWithCount = response.data.map((product) => {
          const existingCartItem = cartItems.find(
            (item) => item.id === product.id
          );
          return existingCartItem
            ? { ...product, count: existingCartItem.count }
            : { ...product, count: 0 };
        });
        setProducts(productsWithCount);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [cartItems]);

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleQuickLook = (product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedProduct(null);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`mx-1 px-3 py-1 ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const productAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-4">
      <div className="mt-2 mb-6 flex flex-row ">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded border-2 p-2 border-black cursor-pointer"
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer hover:scale-105 transform transition-transform"
                onClick={() => handleProductClick(product.id)}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                variants={productAnimation}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-contain mb-4"
                />
                <h3 className="font-bold text-lg truncate">{product.title}</h3>
                <p className="text-gray-700">${product.price}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuickLook(product);
                    }}
                    className="bg-white border border-gray-700 hover:bg-black hover:text-white text-black px-4 py-2 rounded w-full"
                  >
                    Quick Look
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-4">{renderPageNumbers()}</div>
        </>
      )}

      {selectedProduct && (
        <Modal
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          product={selectedProduct}
          handleAddToCart={handleAddToCart}
          handleSubtractFromCart={handleSubtractFromCart}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
};

export default Product;
