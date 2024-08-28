// src/components/AdminDashboard.js
import React from 'react';

const AdminDashboard = () => {
    return (
      <div className="mt-10 p-4 bg-white text-black rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
        <p className="text-xl mb-4">Manage your products, view orders, and more.</p>
        <button className="bg-sweetPink text-white px-4 py-2 rounded-lg ">Manage Products</button>
      </div>
    );
  };
  
  export default AdminDashboard;