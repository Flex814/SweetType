// src/routes/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';
import Cart from '../components/Cart';
import AdminDashboard from '../components/AdminDashboard';

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;