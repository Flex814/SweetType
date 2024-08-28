// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold mb-4 text-sweetPink">Welcome to Sweet Type!</h2>
        <p className="text-xl mb-8">Your one-stop shop for all things JDM!</p>
        <button className="bg-sweetPink px-6 py-3 rounded-lg shadow-lg hover:bg-white transition duration-300"><Link className='text-white' to="/products">Shop now</Link></button>
      </div>
    );
  };

export default Home;