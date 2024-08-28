// src/components/ProductDetail.js
import React from 'react';

const ProductDetail = () => {
    return (
      <div className="mt-10 p-4 bg-white text-black rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">ST1 Turbo Charger</h2>
        <p className="text-xl mb-4">Price: $900</p>
        <p className="text-gray-700 mb-6">This high-performance turbo charger will give your JDM ride the boost it needs.</p>
        <button className="bg-sweetPink text-white px-4 py-2 rounded-lg ">Add to Cart</button>
      </div>
    );
  };

export default ProductDetail;