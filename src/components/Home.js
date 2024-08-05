import React, { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import axios from "axios";
import ProductCard from "./ProductCard"; 
import { testimonials } from "../data/testimonials"; 

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=4") 
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-page">
      <div className="carousel-section h-96 rounded-none mb-8">
        <Carousel>
          <div className="flex flex-col items-center product-item">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/image1.png"}
              alt="Product 1"
              className="h-40 w-full object-contain mb-4"
            />
            <h3 className="font-bold text-lg">Product 1</h3>
            <p className="text-gray-700">$109.95</p>
          </div>
          <div className="flex flex-col items-center product-item">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/image2.png"}
              alt="Product 2"
              className="h-40 w-full object-contain mb-4"
            />
            <h3 className="font-bold text-lg">Product 2</h3>
            <p className="text-gray-700">$22.30</p>
          </div>
          <div className="flex flex-col items-center product-item">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/image3.png"}
              alt="Product 3"
              className="h-40 w-full object-contain mb-4"
            />
            <h3 className="font-bold text-lg">Product 3</h3>
            <p className="text-gray-700">$55.99</p>
          </div>
          <div className="flex flex-col items-center product-item">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/image4.png"}
              alt="Product 4"
              className="h-40 w-full object-contain mb-4"
            />
            <h3 className="font-bold text-lg">Product 4</h3>
            <p className="text-gray-700">$15.99</p>
          </div>
        </Carousel>
      </div>

      {/* Featured Products Section */}
      <section className="featured-products my-8">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            ))
          )}
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section className="promo-banners my-8">
        <div className="promo-banner bg-yellow-500 text-white text-center p-8 rounded mb-4">
          <h2 className="text-2xl font-bold">Summer Sale!</h2>
          <p className="text-lg">Up to 50% off on selected items</p>
        </div>
        <div className="promo-banner bg-blue-500 text-white text-center p-8 rounded">
          <h2 className="text-2xl font-bold">New Arrivals</h2>
          <p className="text-lg">Check out our latest collection</p>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="customer-testimonials my-8">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
        <div className="testimonials grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial p-4 bg-gray-100 rounded shadow">
              <p className="text-gray-700 mb-2">"{testimonial.message}"</p>
              <h3 className="text-gray-900 font-bold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
