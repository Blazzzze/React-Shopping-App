import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = ({ cartCount, setCartCount, cartItems, setCartItems }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
        const existingItem = cartItems.find(item => item.id === response.data.id);
        if (existingItem) {
          setProductCount(existingItem.count);
        }
      })
      .catch(error => console.error(error));
  }, [id, cartItems]);

  const handleAddToCart = () => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map(item =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
      setCartCount(cartCount + 1);
    }
    setProductCount(productCount + 1);
  };

  const handleSubtractFromCart = () => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      if (existingItem.count === 1) {
        const updatedCartItems = cartItems.filter(item => item.id !== product.id);
        setCartItems(updatedCartItems);
        setCartCount(cartCount - 1);
      } else {
        const updatedCartItems = cartItems.map(item =>
          item.id === product.id ? { ...item, count: item.count - 1 } : item
        );
        setCartItems(updatedCartItems);
      }
      setProductCount(productCount - 1);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <div className="flex flex-col items-center md:items-start md:w-1/3">
        <img src={product.image} alt={product.title} className="h-80 w-80 object-contain mb-4" />
        <div className="flex flex-row md:flex-col">
          <img src={product.image} alt={product.title} className="h-20 w-20 object-contain mb-2 mr-2 md:mr-0" />
          <img src={product.image} alt={product.title} className="h-20 w-20 object-contain mb-2 mr-2 md:mr-0" />
          <img src={product.image} alt={product.title} className="h-20 w-20 object-contain mb-2 mr-2 md:mr-0" />
        </div>
      </div>
      <div className="md:w-2/3 md:pl-8">
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-xl text-green-700 mb-2">${product.price}</p>
        <p className="mb-4">{product.description}</p>
        <p className="text-sm text-gray-600 mb-2">Category: {product.category}</p>
        <p className="text-sm text-gray-600 mb-4">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        <div className="flex items-center mb-4">
          <label className="mr-2">Quantity selected:</label>
          <div className="flex items-center">
            <button onClick={handleSubtractFromCart} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
            <span className="mx-2">{productCount}</span>
            <button onClick={handleAddToCart} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
