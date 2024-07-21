import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { auth } from "../firebase";
import logo from "../Deadpool3-1.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);
  const isAuthenticated = JSON.parse(sessionStorage.getItem("isAuthenticated"));

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      auth
        .signOut()
        .then(() => {
          sessionStorage.removeItem("isAuthenticated");
          navigate("/");
        })
        .catch((error) => {
          console.error("Sign Out Error", error);
        });
    }
  };

  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <ul className="flex space-x-6 text-white">
        <li>
          <Link to="/" className="hover:font-semibold uppercase">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:font-semibold uppercase">
            About
          </Link>
        </li>
        {!isAuthenticated && (
          <li>
            <Link to="/profile" className="hover:font-semibold uppercase">
              {" "}
              Profile
            </Link>
          </li>
        )}
        <li>
          <Link to="/products" className="hover:font-semibold uppercase">
            Products
          </Link>
        </li>
      </ul>
      <div className="flex items-center text-white">
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <FaShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 rounded-full px-2 py-1 text-xs ">
              {cartCount}
            </span>
          )}
        </div>
        {sessionStorage.getItem("isAuthenticated") && (
          <button
            onClick={handleLogout}
            className="bg-red-600 rounded-full text-white p-2 rounded ml-4 cursor-pointer"
          >
            <LuLogOut size={20} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
