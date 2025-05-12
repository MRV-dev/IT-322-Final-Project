import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Orders from './pages/orders/OrdersPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Redirect from / to /dashboard */}
        <Route path="/" element={<Navigate to="/orders" />} />

        {/* Main routes */}
        <Route path="/orders" element={<Orders />} />


        {/* 404 fallback route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
