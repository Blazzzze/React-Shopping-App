// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Cart = ({ cartItems, setCartItems, cartCount, setCartCount }) => {
//   const navigate = useNavigate();

//   const handleRemoveItem = (id) => {
//     const removedItem = cartItems.find(item => item.id === id);
//     const updatedCartItems = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedCartItems);
//     setCartCount(cartCount - 1);
//   };

//   const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//       {cartItems.map(item => (
//         <div key={item.id} className="flex justify-between items-center mb-4">
//           <div>
//             <h3 className="font-bold">{item.title}</h3>
//             <p>${item.price} x {item.count}</p>
//           </div>
//           <button
//             onClick={() => handleRemoveItem(item.id)}
//             className="bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//       <div className="text-xl font-bold mb-4">
//         Total Amount: ${totalAmount.toFixed(2)}
//       </div>
//       <button
//         onClick={() => navigate('/products')}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Continue Shopping
//       </button>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, handleRemoveItem, cartCount } = useContext(CartContext);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-bold">{item.title}</h3>
            <p>${item.price} x {item.count}</p>
          </div>
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="text-xl font-bold mb-4">
        Total Amount: ${totalAmount.toFixed(2)}
      </div>
      <button
        onClick={() => navigate('/products')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default Cart;
