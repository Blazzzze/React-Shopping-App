// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Product = ({ cartCount, setCartCount, cartItems, setCartItems }) => {
//   const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then(response => {
//         const productsWithCount = response.data.map(product => {
//           const existingCartItem = cartItems.find(item => item.id === product.id);
//           return existingCartItem ? { ...product, count: existingCartItem.count } : { ...product, count: 0 };
//         });
//         setProducts(productsWithCount);
//       })
//       .catch(error => console.error(error));
//   }, [cartItems]);

//   const handleAddToCart = (id) => {
//     const updatedProducts = products.map(product => {
//       if (product.id === id) {
//         const newCount = product.count + 1;
//         const isInCart = cartItems.some(item => item.id === id);
//         const newCartItems = isInCart
//           ? cartItems.map(item => item.id === id ? { ...item, count: newCount } : item)
//           : [...cartItems, { ...product, count: newCount }];
        
//         if (!isInCart) {
//           setCartCount(cartCount + 1);
//         }

//         setCartItems(newCartItems);

//         return { ...product, count: newCount };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//   };

//   const handleSubtractFromCart = (id) => {
//     const updatedProducts = products.map(product => {
//       if (product.id === id && product.count > 0) {
//         const newCount = product.count - 1;
//         const newCartItems = cartItems
//           .map(item => item.id === id ? { ...item, count: newCount } : item)
//           .filter(item => item.count > 0);
        
//         if (cartItems.find(item => item.id === id)?.count === 1) {
//           setCartCount(cartCount - 1);
//         }

//         setCartItems(newCartItems);

//         return { ...product, count: newCount };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//   };

//   const handleProductClick = (id) => {
//     navigate(`/products/${id}`);
//   };

//   const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);

//   return (
//     <div className="p-4">
//       <div className="mb-4 flex justify-center">
//         <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="border p-2 rounded">
//           <option value="all">All</option>
//           <option value="electronics">Electronics</option>
//           <option value="jewelery">Jewelery</option>
//           <option value="men's clothing">Men's Clothing</option>
//           <option value="women's clothing">Women's Clothing</option>
//         </select>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {filteredProducts.map(product => (
//           <div key={product.id} className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transform transition-transform" onClick={() => handleProductClick(product.id)}>
//             <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
//             <h3 className="font-bold text-lg truncate">{product.title}</h3>
//             <p className="text-gray-700">${product.price}</p>
//             <p className="text-sm mt-2 line-clamp-3">{product.description}</p>

//             <div className="flex items-center mt-4">
//               <button onClick={(e) => { e.stopPropagation(); handleSubtractFromCart(product.id); }} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
//               <span className="mx-2">{product.count}</span>
//               <button onClick={(e) => { e.stopPropagation(); handleAddToCart(product.id); }} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { ClipLoader } from 'react-spinners';

// const Product = ({ cartCount, setCartCount, cartItems, setCartItems }) => {
//   const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setLoading(true);
//     axios.get('https://fakestoreapi.com/products')
//       .then(response => {
//         const productsWithCount = response.data.map(product => {
//           const existingCartItem = cartItems.find(item => item.id === product.id);
//           return existingCartItem ? { ...product, count: existingCartItem.count } : { ...product, count: 0 };
//         });
//         setProducts(productsWithCount);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, [cartItems]);

//   const handleAddToCart = (id) => {
//     const updatedProducts = products.map(product => {
//       if (product.id === id) {
//         const newCount = product.count + 1;
//         const isInCart = cartItems.some(item => item.id === id);
//         const newCartItems = isInCart
//           ? cartItems.map(item => item.id === id ? { ...item, count: newCount } : item)
//           : [...cartItems, { ...product, count: newCount }];
        
//         if (!isInCart) {
//           setCartCount(cartCount + 1);
//         }

//         setCartItems(newCartItems);

//         return { ...product, count: newCount };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//   };

//   const handleSubtractFromCart = (id) => {
//     const updatedProducts = products.map(product => {
//       if (product.id === id && product.count > 0) {
//         const newCount = product.count - 1;
//         const newCartItems = cartItems
//           .map(item => item.id === id ? { ...item, count: newCount } : item)
//           .filter(item => item.count > 0);
        
//         if (cartItems.find(item => item.id === id)?.count === 1) {
//           setCartCount(cartCount - 1);
//         }

//         setCartItems(newCartItems);

//         return { ...product, count: newCount };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//   };

//   const handleProductClick = (id) => {
//     navigate(`/products/${id}`);
//   };

//   const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);
//   const indexOfLastProduct = currentPage * itemsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <button key={i} onClick={() => setCurrentPage(i)} className={`mx-1 px-3 py-1 ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
//           {i}
//         </button>
//       );
//     }
//     return pageNumbers;
//   };

//   return (
//     <div className="p-4">
//       <div className="mb-4 flex justify-center">
//         <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="border p-2 rounded">
//           <option value="all">All</option>
//           <option value="electronics">Electronics</option>
//           <option value="jewelery">Jewelery</option>
//           <option value="men's clothing">Men's Clothing</option>
//           <option value="women's clothing">Women's Clothing</option>
//         </select>
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <ClipLoader size={50} color={"#123abc"} loading={loading} />
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {currentProducts.map(product => (
//               <div key={product.id} className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transform transition-transform" onClick={() => handleProductClick(product.id)}>
//                 <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
//                 <h3 className="font-bold text-lg truncate">{product.title}</h3>
//                 <p className="text-gray-700">${product.price}</p>
//                 <p className="text-sm mt-2 line-clamp-3">{product.description}</p>
//                 <div className="flex items-center mt-4">
//                   <button onClick={(e) => { e.stopPropagation(); handleSubtractFromCart(product.id); }} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
//                   <span className="mx-2">{product.count}</span>
//                   <button onClick={(e) => { e.stopPropagation(); handleAddToCart(product.id); }} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center mt-4">
//             {renderPageNumbers()}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// // export default Product;
// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { ClipLoader } from 'react-spinners';
// import { motion } from 'framer-motion';
// import Modal from './Modal';
// import { CartContext } from '../context/CartContext';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10);
//   const [loading, setLoading] = useState(false);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const navigate = useNavigate();
//   const { handleAddToCart, handleSubtractFromCart, cartItems } = useContext(CartContext);

//   useEffect(() => {
//     setLoading(true);
//     axios.get('https://fakestoreapi.com/products')
//       .then(response => {
//         const productsWithCount = response.data.map(product => {
//           const existingCartItem = cartItems.find(item => item.id === product.id);
//           return existingCartItem ? { ...product, count: existingCartItem.count } : { ...product, count: 0 };
//         });
//         setProducts(productsWithCount);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, [cartItems]);

//   const handleProductClick = (id) => {
//     navigate(`/products/${id}`);
//   };

//   const handleQuickLook = (product) => {
//     setSelectedProduct(product);
//     setIsModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalVisible(false);
//     setSelectedProduct(null);
//   };

//   const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);

//   const indexOfLastProduct = currentPage * itemsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <button key={i} onClick={() => setCurrentPage(i)} className={`mx-1 px-3 py-1 ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
//           {i}
//         </button>
//       );
//     }
//     return pageNumbers;
//   };

//   const productAnimation = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <div className="p-4">
//       <div className="mb-4 flex justify-center">
//         <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="border p-2 rounded">
//           <option value="all">All</option>
//           <option value="electronics">Electronics</option>
//           <option value="jewelery">Jewelery</option>
//           <option value="men's clothing">Men's Clothing</option>
//           <option value="women's clothing">Women's Clothing</option>
//         </select>
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center h-64">
//           <ClipLoader size={50} color={"#123abc"} loading={loading} />
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {currentProducts.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transform transition-transform"
//                 onClick={() => handleProductClick(product.id)}
//                 initial="hidden"
//                 animate="visible"
//                 transition={{ delay: index * 0.1 }}
//                 variants={productAnimation}
//               >
//                 <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
//                 <h3 className="font-bold text-lg truncate">{product.title}</h3>
//                 <p className="text-gray-700">${product.price}</p>
//                 <div className="flex justify-between items-center mt-4">
//                   <div className="flex items-center">
//                     <button onClick={(e) => { e.stopPropagation(); handleSubtractFromCart(product.id); }} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
//                     <span className="mx-2">{product.count}</span>
//                     <button onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
//                   </div>
//                   <button onClick={(e) => { e.stopPropagation(); handleQuickLook(product); }} className="bg-blue-500 text-white px-4 py-2 rounded">Quick Look</button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//           <div className="flex justify-center mt-4">
//             {renderPageNumbers()}
//           </div>
//         </>
//       )}

//       {selectedProduct && (
//         <Modal
//           isVisible={isModalVisible}
//           onClose={handleCloseModal}
//           product={selectedProduct}
//           handleAddToCart={handleAddToCart}
//           handleSubtractFromCart={handleSubtractFromCart}
//           productCount={selectedProduct.count}
//           selectedProduct={selectedProduct}
//           setSelectedProduct={setSelectedProduct}
        
//         />
//       )}
//     </div>
//   );
// }

// export default Product;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import Modal from './Modal';
import { CartContext } from '../context/CartContext';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const { handleAddToCart, handleSubtractFromCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const productsWithCount = response.data.map(product => {
          const existingCartItem = cartItems.find(item => item.id === product.id);
          return existingCartItem ? { ...product, count: existingCartItem.count } : { ...product, count: 0 };
        });
        setProducts(productsWithCount);
        setLoading(false);
      })
      .catch(error => {
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

  const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => setCurrentPage(i)} className={`mx-1 px-3 py-1 ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const productAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-center">
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="border p-2 rounded">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transform transition-transform"
                onClick={() => handleProductClick(product.id)}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                variants={productAnimation}
              >
                <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
                <h3 className="font-bold text-lg truncate">{product.title}</h3>
                <p className="text-gray-700">${product.price}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <button onClick={(e) => { e.stopPropagation(); handleSubtractFromCart(product.id); }} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
                    <span className="mx-2">{product.count}</span>
                    <button onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); handleQuickLook(product); }} className="bg-blue-500 text-white px-4 py-2 rounded">Quick Look</button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {renderPageNumbers()}
          </div>
        </>
      )}

      {selectedProduct && (
        <Modal
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          product={selectedProduct}
          handleAddToCart={handleAddToCart}
          handleSubtractFromCart={handleSubtractFromCart}
          productCount={selectedProduct.count}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        
        />
      )}
    </div>
  );
}

export default Product;
