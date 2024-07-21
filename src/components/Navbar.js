// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';
// import { auth } from '../firebase'; // Ensure the correct path to your firebase.js
// import logo from '../Deadpool3-1.png';

// const Navbar = ({ cartCount }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     if (window.confirm('Are you sure you want to logout?')) {
//       auth.signOut().then(() => {
//         sessionStorage.removeItem('isAuthenticated');
//         navigate('/');
//       }).catch(error => {
//         console.error('Sign Out Error', error);
//       });
//     }
//   };

//   return (
//     <nav className="bg-gray-800 p-4 flex justify-between items-center">
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-10" />
//       </div>
//       <ul className="flex space-x-4 text-white">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//         <li><Link to="/products">Products</Link></li>
//       </ul>
//       <div className="flex items-center text-white">
//         <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded mr-4">Logout</button>
//         <div className="relative">
//           <FaShoppingCart size={24} />
//           <span className="absolute -top-2 -right-2 bg-red-600 rounded-full px-2 py-1 text-xs">{cartCount}</span>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
// import { LuLogOut } from "react-icons/lu";
// import { auth } from "../firebase";
// import logo from "../Deadpool3-1.png";

// const Navbar = ({ cartCount }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     if (window.confirm("Are you sure you want to logout?")) {
//       auth
//         .signOut()
//         .then(() => {
//           sessionStorage.removeItem("isAuthenticated");
//           navigate("/");
//         })
//         .catch((error) => {
//           console.error("Sign Out Error", error);
//         });
//     }
//   };

//   return (
//     <nav className="bg-gray-800 p-4 flex justify-between items-center">
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-10" />
//       </div>
//       <ul className="flex space-x-4 text-white">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/profile">Profile</Link>
//         </li>
//         <li>
//           <Link to="/products">Products</Link>
//         </li>
//       </ul>
//       <div className="flex items-center text-white">
//         {sessionStorage.getItem("isAuthenticated") && (
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 text-white px-4 py-2 rounded mr-4"
//           >
//             <LuLogOut size={24} />
//           </button>
//         )}
//         <div className="relative">
//           <FaShoppingCart size={24} />
//           <span className="absolute -top-2 -right-2 bg-red-600 rounded-full px-2 py-1 text-xs">
//             {cartCount}
//           </span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';
// import { LuLogOut } from 'react-icons/lu';
// import { auth } from '../firebase';
// import logo from '../Deadpool3-1.png';
// import { useContext } from 'react';
// import { CartContext } from '../context/CartContext';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { cartCount } = useContext(CartContext);

//   const handleLogout = () => {
//     if (window.confirm('Are you sure you want to logout?')) {
//       auth.signOut().then(() => {
//         sessionStorage.removeItem('isAuthenticated');
//         navigate('/');
//       }).catch(error => {
//         console.error('Sign Out Error', error);
//       });
//     }
//   };

//   return (
//     <nav className="bg-gray-800 p-4 flex justify-between items-center">
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-10" />
//       </div>
//       <ul className="flex space-x-4 text-white">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//         <li><Link to="/products">Products</Link></li>
//       </ul>
//       <div className="flex items-center text-white">
//         <div className="relative" onClick={() => navigate('/cart')}>
//           <FaShoppingCart size={24} />
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 rounded-full px-2 py-1 text-xs">
//               {cartCount}
//             </span>
//           )}
//         </div>
//         {sessionStorage.getItem("isAuthenticated") && (
//           <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded ml-4">
//             <LuLogOut size={24} />
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';
import { auth } from '../firebase';
import logo from '../Deadpool3-1.png';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      auth.signOut().then(() => {
        sessionStorage.removeItem('isAuthenticated');
        navigate('/');
      }).catch(error => {
        console.error('Sign Out Error', error);
      });
    }
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <ul className="flex space-x-4 text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
      <div className="flex items-center text-white">
        <div className="relative" onClick={() => navigate('/cart')}>
          <FaShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 rounded-full px-2 py-1 text-xs">
              {cartCount}
            </span>
          )}
        </div>
        {sessionStorage.getItem("isAuthenticated") && (
          <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded ml-4">
            <LuLogOut size={24} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
