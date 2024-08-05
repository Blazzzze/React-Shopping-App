import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, image, price }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
      onClick={() => navigate(`/products/${id}`)}
    >
      <img src={image} alt={title} className="h-40 w-full object-contain mb-4" />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-700">${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;