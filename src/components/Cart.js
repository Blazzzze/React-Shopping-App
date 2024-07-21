import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, handleRemoveItem } = useContext(CartContext);

  console.log(cartItems);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="flex items-end justify-center px-4 pb-6 sm:items-center sm:pb-10">
      <div className="pointer-events-auto ">
        <div className="flex h-full flex-col bg-white shadow-xl max-w-[600px] mt-6">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <h2
                className="text-lg font-medium text-gray-900"
                id="slide-over-title"
              >
                Shopping cart
              </h2>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => navigate(-1)}
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartItems.length < 1 && <p>No products in the cart!</p>}
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.title}</h3>
                            <p className="ml-4">${item.price.toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2	">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty {item.count}</p>
                          <div className="flex">
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            {cartItems.length > 0 && (
              <div className="mt-6">
                <Link
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Checkout
                </Link>
              </div>
            )}
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                {cartItems.length > 0 && "or"}
                <br />
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500 mt-3"
                  onClick={() => navigate("/products")}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
