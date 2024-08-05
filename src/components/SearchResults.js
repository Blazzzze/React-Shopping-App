import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery();
  const searchQuery = query.get("q");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);
      axios
        .get(`https://fakestoreapi.com/products?search=${searchQuery}`)
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [searchQuery]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{searchQuery}"</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
              <h3 className="font-bold text-lg truncate">{product.title}</h3>
              <p className="text-gray-700">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
