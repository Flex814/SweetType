// src/components/ProductList.js
import React from 'react';

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      <div className="bg-white text-black p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">ST1 Turbo Charger</h3>
        <p className="text-gray-700 mb-4">$900</p>
        <button className="bg-sweetPink text-white px-4 py-2 rounded-lg ">View Details</button>
      </div>
      {/* Add more product cards here */}
    </div>
  );
};

export default ProductList;