// src/components/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
      <div className="mt-10 p-4 bg-white text-black rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
        <p className="text-xl mb-4">Your cart is empty.</p>
        <button className="bg-sweetPink text-white px-4 py-2 rounded-lg"><Link to="/">Continue Shopping</Link></button>
      </div>
    );
  };
  
  export default Cart;