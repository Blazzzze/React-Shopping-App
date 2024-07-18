import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isVisible, onClose, product, handleAddToCart, productCount, handleSubtractFromCart,selectedProduct,setSelectedProduct }) => {
  const handleAdd=(e)=>{ 
    e.stopPropagation(); 
    handleAddToCart(product);
    setSelectedProduct(selectedProduct=> ({
      ...selectedProduct,
      productCount:selectedProduct.productCount+1,
    }))
  }
  const handleSub=(e)=>{
    e.stopPropagation(); 
    handleSubtractFromCart(product.id);
    setSelectedProduct({
      ...selectedProduct,
      productCount:selectedProduct.productCount-1,
    })
  }
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <motion.div
        className="bg-white p-8 rounded shadow-md relative"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <p className="text-xl text-green-700 mb-4">${product.price}</p>
        <div className="flex items-center mt-4">
          <button onClick={(e) => handleSub(e)} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
          <span className="mx-2">{productCount}</span>
          <button onClick={(e) =>handleAdd(e)} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
        </div>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
